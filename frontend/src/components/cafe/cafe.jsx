import React from 'react';
import { distance } from '../../util/distance_util'
import ShowMap from "../map/show_map";
import "../../stylesheets/map.scss";
import "./cafe.scss"
import LoadingPage from './loader';
import NavBar from "../navbar/navbar_container";
import Modal from "../modal/modal_container";
import SessionModal from "../modal/session_modal";
import {updateCafe} from "../../util/cafe_api_util"
import {selectRandomCafe} from "../../util/filters_util"
import FavTransition from '../favorite_button/fav_transition';
import { cafeIncludes } from "../../util/button_util";
import FavButton from '../favorite_button/fav_button';

import {useState} from 'react';

class Cafe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studyPalCafe: this.props.randomCafe, 
            cafeFromYelpApi: "", 
            leftOverCafes: [],
            setClick: false,
            isFavoriteClicked: false
        }



        this.handleClick = this.handleClick.bind(this);
        this.reRoll = this.reRoll.bind(this);
        this.calculateDistance = this.calculateDistance.bind(this);
        this.calculateTime = this.calculateTime.bind(this);
        this.applyExtraFilters = this.applyExtraFilters.bind(this);
        this.addSelected = this.addSelected.bind(this);
        this.shortenName = this.shortenName.bind(this);
        this.viewStatus = this.viewStatus.bind(this);
        this.setClick = this.setClick.bind(this);
        this.turnOnFavTransition = this.turnOnFavTransition.bind(this);
        this.recommendUsersCafes = this.recommendUsersCafes.bind(this);
    }


    turnOnFavTransition(){
      // debugger;
      this.setState({isFavoriteClicked:true});
    }


    setClick(boolean){
      // debugger;
      this.setState({setClick:boolean, isFavoriteClicked:true});
      
    }

    recommendUsersCafes(){
      this.props.loadAgain();
      this.props.openModal('recommendModal', null)


    }

    shortenName(name) {
      if (name.length > 28) {
        return name.slice(0, 24)+ "..."
      } else {
        return name
      }
    }


    selectRandomCafe(cafe_array) {
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
            return "Unavailable Time For This Day";
        } else {
            return this.formatTime(hours[0].open[day].end);
        }
    }

    calculateDistance(cafes) {
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

        let leftOverCafes = this.props.cafes.filter(cafe => {
            return cafe.id !== this.props.yelpCafe.id;
        });
        
        let randomCafe = selectRandomCafe(leftOverCafes)

        if (randomCafe){
          this.setState({ studyPalCafe: randomCafe })
          this.props
            .fetchYelpCafeById(randomCafe.id)
            .catch(err => this.props.history.push(`/errors`))
            .then(() => this.props.fetchCurrCafe(this.props.yelpCafe.id))
            .then(() => this.props.fetchFavorites(this.props.user.id))
          
          this.props.rerollCafes(leftOverCafes);
        } else {
          this.props.history.push(`/retry`)
        }
       
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({isFavoriteClicked:false})
        this.reRoll();
    }

    componentDidMount(){
        if (Object.keys(this.props.filters).length === 0){
            this.props.history.push(`/`);
        }

        if (this.state.studyPalCafe){
          this.props.fetchYelpCafeById(this.state.studyPalCafe.id)
        }

        if (this.props.user){
          this.props.fetchFavorites(this.props.user.id);
          
        }

       

    }

    componentDidUpdate(prevProps, prevState) {
      if(prevProps.yelpCafe!==this.props.yelpCafe){
        this.props.fetchCurrCafe(this.props.yelpCafe.id);
      }  

      }

    componentWillUnmount(){
      this.props.clearCafes();
      this.setState({studyPalCafe: null})

    }

    addSelected(id) {
      updateCafe(id, { updateType: "selected" }).then(
        
      )
    }

    viewStatus(modalData) {
      if (this.props.loggedIn) {

        return (
          <a
            className="yelp"
            onClick={() => {   
              this.props.fetchFavorites(this.props.user.id)
                .then(() => this.addSelected(this.props.yelpCafe.id))
                .then(() => this.props.fetchCurrCafe(this.props.yelpCafe.id))
                .then(() => this.props.openModal("cafeModal", modalData))
            }}
          >
            <div id="yelp-text">View</div>
          </a>
        );
      } else {

        return (
          <a
            className="yelp"
            onClick={() => {
              this.props.openModal("cafeModal", modalData);
              this.props.fetchCurrCafe(this.props.yelpCafe.id);
            }}
          >
            <div id="yelp-text">View</div>
          </a>
        );
      }
    }

    render() {
        const { loading } = this.props;
        if (loading) { return <LoadingPage />; }
        // if (this.props.cafes.length === 0) this.props.history.push(`/retry`)

        if (this.props.cafes.length === 0) this.recommendUsersCafes();



        if (Object.keys(this.props.yelpCafe).length === 0) {
          let randomCafe = selectRandomCafe(this.props.cafes);
          if (randomCafe){
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
        let lat = this.props.yelpCafe.coordinates.latitude;
        let lng = this.props.yelpCafe.coordinates.longitude;
        let distance = this.props.randomCafe.distance_away;
        let noiseLevel = this.props.randomCafe.noise_level;
        let hours = this.props.yelpCafe.hours;

        let modalData = {yelpData: this.props.yelpCafe, 
          distance, 
          noiseLevel, 
          user: this.props.user,
          studyPalCafe: this.state.studyPalCafe,
          filters: this.props.filters}

        const time = this.calculateTime(hours);
        const isOpen = <div className="time">Open until {time} Today</div>;
        const isClosed = (
        
            <div className="time">Currently Closed</div>
        
        );
        let openRightNow = false;
        if (this.props.yelpCafe.hours) openRightNow = hours[0].is_open_now;



        
        const noPhoto = (
          <div className="cafePhotoContainer">
            <img
              className="photo"
              src="https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/sparephoto.png"
            ></img>
          </div>
          
        );

         const yelpPhoto = (
           <div className="cafePhotoContainer">
              <img className="photo" src={this.props.yelpCafe.image_url}></img>

           </div>
          //  <img className="photo" src={this.props.yelpCafe.image_url}></img>
         );

         let isFavorited;
         if (this.props.favorites && this.props.yelpCafe) isFavorited = cafeIncludes(this.props.yelpCafe, this.props.favorites); 
         
        if(this.props.yelpCafe){
          return (
            <div className="page">
              <NavBar />
              <div className="all">
                <div className="left-right">
                  <div className="cafe">
                    <div className="profile">
                      <div className="title">
                        <div className="name">
                          {this.shortenName(this.props.yelpCafe.name)}
                          <FavButton yelpCafe={this.props.yelpCafe} setClick={this.setClick}></FavButton>
                          
                        </div>
                        {this.viewStatus(modalData)}
                      </div>
                      {openRightNow ? isOpen : isClosed}
                      
                      <div className="address">
                        {display_address[0]}, {display_address[1]}
                        <span><div className="yelp" id="pickAnother" onClick={this.handleClick}>Try another!</div></span>
                      </div>
  
                      <div className="shelter">
                        ** Shelter in Place May Affect Hours **
                      </div>
  
                    </div>
                    <div id="favoritedCafePage">
                      <FavTransition isFavorite={isFavorited} isClicked={this.state.isFavoriteClicked} history={this.props.history} closeModal={this.props.closeModal}/>  
                    </div>
                    {this.props.yelpCafe.image_url ? yelpPhoto : noPhoto}
                  </div>
  
                  <div className="map">
                    <ShowMap
                      address={this.props.yelpCafe.location}
                      key={lat}
                      lat={lat}
                      lng={lng}
                      my_lat={this.props.filters.my_lat}
                      my_lng={this.props.filters.my_lng}
                      yelp_link={this.props.yelpCafe.url}
                    />
                  </div>
                 
                </div>
  
                {/* <span className="new-cafe">
                  I'm not sold. &nbsp;
                  <span onClick={this.handleClick}>Show me another cafe!</span>
                </span> */}
              </div>
              
              <SessionModal/>
              <Modal />
             
            </div>
          );
        }
        // return (
        //   <div className="page">
        //     <NavBar />
        //     <div className="all">
        //       <div className="left-right">
        //         <div className="cafe">
        //           <div className="profile">
        //             <div className="title">
        //               <div className="name">
        //                 {this.shortenName(this.props.yelpCafe.name)}
        //                 <FavButton yelpCafe={this.props.yelpCafe} setClick={this.setClick}></FavButton>
                        
        //               </div>
        //               {this.viewStatus(modalData)}
        //             </div>
        //             {openRightNow ? isOpen : isClosed}
                    
        //             <div className="address">
        //               {display_address[0]}, {display_address[1]}
        //               <span><button className="yelp" id="pickAnother" onClick={this.handleClick}>Try another!</button></span>
        //             </div>

        //             <div className="shelter">
        //               ** Shelter in Place May Affect Hours **
        //             </div>
        //             {/* <div className="address">
        //               {display_address[0]}, {display_address[1]}
        //             </div>

        //             <div className="shelter">
        //               ** Shelter in Place May Affect Hours **
        //             </div> */}
                  
        //           </div>
                  
        //           {this.props.yelpCafe.image_url ? yelpPhoto : noPhoto}
        //         </div>

        //         <div className="map">
        //           <ShowMap
        //             address={this.props.yelpCafe.location}
        //             key={lat}
        //             lat={lat}
        //             lng={lng}
        //             my_lat={this.props.filters.my_lat}
        //             my_lng={this.props.filters.my_lng}
        //             yelp_link={this.props.yelpCafe.url}
        //           />
        //         </div>
        //         {/* <FavTransition isFavorite={isFavorited} isClicked={isClicked} history={props.history} closeModal={props.closeModal}/> */}
        //         <FavTransition isFavorite={isFavorited} isClicked={this.state.isFavoriteClicked} history={this.props.history} closeModal={this.props.closeModal}/>

        //       </div>

        //       {/* <span className="new-cafe">
        //         I'm not sold. &nbsp;
        //         <span onClick={this.handleClick}>Show me another cafe!</span>
        //       </span> */}
        //     </div>
            
        //     <SessionModal/>
        //     <Modal />
           
        //   </div>
        // );


    }
}

export default Cafe;