import NavBarContainer from '../navbar/navbar_container';
import React from 'react';
import './favorites.scss';
import { Link } from 'react-router-dom';
import Modal from '../modal/modal_container';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import FavItem from './favorite_item_container';
import LoadingPage from '../cafe/loader';

    class Favorites extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                studyPalCafe: false
            }

            // let distance = this.props.YelpCafe.distance_away;
            // let noiseLevel = this.props.YelpCafe.noise_level;
            this.modalData = {
                // yelpData: this.props.yelpCafe,
                // distance,
                // noiseLevel,
                // user: this.props.user,
                // studyPalCafe: this.state.studyPalCafe,
                // filters: this.props.filters
                yelpData: {},
                distance: {},
                noiseLevel: {},
                studyPalCafe: {},
                filters: {},
                user: this.props.user
            }
            this.cafeRoll = this.cafeRoll.bind(this);
        }

        componentDidMount(){
            this.props.fetchFavorites(this.props.user.id);
        }

   

        cafeRoll(){
            
            this.props
              .rerollCafes(this.props.favorites)
            this.props.getFilters({miles_away:"fakeData"})
            this.props.history.push("/cafe")
            

        }

    

        render() {
            if (!this.props.favorites) return null;
            let favorites = this.props.favorites;

            let favoriteList = favorites.map((cafe, index) => <FavItem key={cafe.id} cafe={cafe}/>)


            return (
                <div className="favorites-page">  
                    <Modal/>
                    <NavBarContainer />
                    <div className="favorites-div">
                        <div className="back-profile-div">
                            <Link className="back-profile-header" to="/user">
                                <div className="back-arrow">&larr;</div> 
                                Back to Profile
                            </Link>
                        </div>
                        <div className="favorites-and-pick">
                            <div className="favorites-header">Favorites</div>
                            <button className="pick-random" onClick={() => this.cafeRoll()}>Roll A Favorite Cafe</button>
                        </div>
                        <div className="cafe-list">
                          <ReactCSSTransitionGroup className="cafe-list"
                            transitionName="fade"
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={300}>
                              {favoriteList}
                          </ReactCSSTransitionGroup>
                        </div>
                    </div>
                </div>
            )
        }

    }

export default Favorites