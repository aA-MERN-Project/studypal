import React from 'react';
import { distance } from '../../util/distance_util'
import ShowMap from "../map/show_map";
import "../../stylesheets/map.scss";
import "./cafe.scss"
import LoadingPage from './loader';
import NavBar from "../navbar/navbar_container";
import Modal from "../modal/modal_container";
import {updateCafe} from "../../util/cafe_api_util"
import {selectRandomCafe} from "../../util/filters_util"



class Cafe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studyPalCafe: this.props.randomCafe, 
            cafeFromYelpApi: "", 
            leftOverCafes: [],
        }

        this.handleClick = this.handleClick.bind(this);
        this.reRoll = this.reRoll.bind(this);
        this.calculateDistance = this.calculateDistance.bind(this);
        this.calculateTime = this.calculateTime.bind(this);
        this.applyExtraFilters = this.applyExtraFilters.bind(this);
        this.addSelected = this.addSelected.bind(this);
    }




    selectRandomCafe(cafe_array) {
        // Lets filter cafes before we select a random cafe
        return cafe_array[Math.floor(Math.random() * cafe_array.length)];

    }


    formatTime(fourDigitTime) {
        let hours24 = parseInt(fourDigitTime.substring(0, 2));
        let hours = ((hours24 + 11) % 12) + 1;
        let amPm = hours24 > 11 ? "pm" : "am";
        let minutes = fourDigitTime.substring(2);
        return hours + ":" + minutes + amPm;
    }

    calculateTime(hours) {
        let dateApi = new Date();
        let day = dateApi.getDay();
        if (!hours) return null
        if (!hours[0].open[day]) {
            return "Unavailable Time For This Day"
        } else {
            return this.formatTime(hours[0].open[day].end);
        }
    }

    calculateDistance(cafes) {
        //Return array with cafes distance
        let addedDistance = cafes.map(cafe => {
            cafe.distance_away = distance(
                this.props.filters.my_lat,
                this.props.filters.my_lng,
                cafe.coordinates_latitude,
                cafe.coordinates_longitude,
            );
            return cafe;
        })

        return addedDistance

    }

    applyExtraFilters(cafes) {
        return cafes.filter(cafe => cafe.distance_away < this.props.filters.miles_away);
    }


    reRoll() {

        // Removes current YelpCafe from array
        let leftOverCafes = this.props.cafes.filter(cafe => {
            return cafe.id !== this.props.yelpCafe.id;
        });
        
        // Puts into Redux cycle again
        let randomCafe = selectRandomCafe(leftOverCafes)

        if (randomCafe){
          this.setState({ studyPalCafe: randomCafe })
          this.props
            .fetchYelpCafeById(randomCafe.id)
            .catch(err => this.props.history.push(`/errors`))
          this.props.rerollCafes(leftOverCafes);
        } else {
          this.props.history.push(`/retry`)
        }
       
    }

    handleClick(e) {
        e.preventDefault();
        this.reRoll();
    }

    componentDidMount(){
        if (Object.keys(this.props.filters).length === 0){
            this.props.history.push(`/`);
        }

        if (this.state.studyPalCafe){
          this.props.fetchYelpCafeById(this.state.studyPalCafe.id)
        }
    }

    componentDidUpdate(prevProps, prevState) {
       

      }

    componentWillUnmount(){
      this.props.clearCafes();
      this.setState({studyPalCafe: null})
      // debugger

    }

    addSelected(id) {
      updateCafe(id, { updateType: "selected" }).then(
        () => console.log("Selected +1")
      )
    }


    render() {
        debugger;

       
        const { loading } = this.props;
        if (loading) { return <LoadingPage />; }

        if (this.props.cafes.length === 0) this.props.history.push(`/retry`)

        // If no curr yelpcafe exist, request from API
        if (Object.keys(this.props.yelpCafe).length === 0) {
          let randomCafe = selectRandomCafe(this.props.cafes);
          if (randomCafe){
              // debugger
              let randomCafe = selectRandomCafe(this.props.cafes);
              this.setState({studyPalCafe: randomCafe})
              this.props
                .fetchYelpCafeById(randomCafe.id)
                .catch(err => this.props.history.push(`/errors`));
            }
          }




        if (Object.keys(this.props.yelpCafe).length === 0) return null

        if (!this.props.randomCafe) return null;


        let display_address = this.props.yelpCafe.location.display_address;
        let time = this.calculateTime(this.props.yelpCafe.hours);
        let lat = this.props.yelpCafe.coordinates.latitude;
        let lng = this.props.yelpCafe.coordinates.longitude;
        let distance = this.props.randomCafe.distance_away;
        let noiseLevel = this.props.randomCafe.noise_level;

        let modalData = {yelpData: this.props.yelpCafe, 
          distance, 
          noiseLevel, 
          user: this.props.user,
          studyPalCafe: this.state.studyPalCafe,
          filters: this.props.filters}

        

        return (
          <div className="page">
            <NavBar />
            <div className="all">
              <div className="left-right">
                <div className="cafe">
                  <div className="profile">
                    <div className="title">
                      <div className="name">{this.props.yelpCafe.name}</div>
                      <a
                        className="yelp"
                        onClick={() => {
                          this.props.openModal("cafe", modalData)
                          this.props.fetchCurrCafe(this.props.yelpCafe.id)
                          this.props.fetchFavorites(this.props.user.id)
                        }}
                      >
                        <div id="yelp-text">View</div>
                      </a>
                    </div>

                    <div className="time">Open until {time} Today</div>

                    <div className="address">
                      {display_address[0]}, {display_address[1]}
                    </div>

                    <div className="shelter">
                      ** Shelter in Place May Affect Hours **
                    </div>
                  </div>

                  <img
                    className="photo"
                    src={this.props.yelpCafe.image_url}
                  ></img>
                </div>

                <div className="map">
                  <ShowMap
                    key={lat}
                    lat={lat}
                    lng={lng}
                    my_lat={this.props.filters.my_lat}
                    my_lng={this.props.filters.my_lng}
                    yelp_link={this.props.yelpCafe.url}
                  />
                </div>
              </div>

              <span className="new-cafe">
                I'm not sold. &nbsp;
                <span onClick={this.handleClick}>Show me another cafe!</span>
              </span>
            </div>

            <Modal />
          </div>
        );


    }
}

export default Cafe;