import NavBar from '../navbar/navbar'
import React from 'react'
import './favorites.css'
import { Link } from 'react-router-dom'

    class Favorites extends React.Component {

        constructor(props) {
            super(props);
            this.state = {

            }

            this.props.handleUnfavorite = this.handleUnfavorite.bind(this)
            this.props.handleFavorite = this.handleUnfavorite.bind(this)
      
        }

        componentDidMount(){
          
            this.props.fetchFavorites(this.props.user.id);


        }

        handleFavorite(userId, cafe) {
            // data that is needed to update backend
            const favoriteData = new Object();
            favoriteData.type = "favorite";
            favoriteData.cafe = cafe;
            // this function updates cafe backend with +1 or -1 favorites
            this.props.updateFavorites(userId, favoriteData);
        }

        handleUnfavorite(userId,cafe){

            const favoriteData = new Object();
            favoriteData.type = "unfavorite";
            favoriteData.cafe = cafe;

            this.props.updateFavorites(userId, favoriteData);
            
        }

        
    

        render() {
        
            if (!this.props.favorites) return null;
            let favorites = this.props.favorites;

         

            return (
                <div className="favorites-page">  
                    <NavBar 
                        status={true}
                    />
                    <div className="favorites-div">
                        <div className="back-profile-div">
                            {/* <img className="modal-arrow" src="https://studypal-dev.s3-us-west-1.amazonaws.com/arrow.png"/> */}
                            <Link className="back-profile-header" to="/user">Back to Profile</Link>
                        </div>
                        <div className="favorites-and-pick">
                            <div className="favorites-header">Favorites</div>
                            <button className="pick-random">Pick a Random Favorite Cafe</button>
                        </div>
                        <ul className="cafe-list">
                            {favorites.map(cafe => {
                                return (
                                    <div className="cafe-box">
                                        <div className="cafe-text-info">
                                            <div className="modal-cafe-name">
                                                {cafe.name}
                                            </div>
                                            <div className="modal-cafe-address">
                                                {cafe.location_display_address_0}
                                            </div>
                                            <div className="favorite-remove">Remove</div>
                                        </div>
                                        <img className="fav-cafe-img" src={cafe.image_url}/>
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            )
        }

    }

export default Favorites