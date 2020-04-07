import NavBar from '../navbar/navbar'
import React from 'react'
import './favorites.css'
import { Link } from 'react-router-dom'

    class Favorites extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
            }

            this.handleUnfavorite = this.handleUnfavorite.bind(this)
            this.handleFavorite = this.handleFavorite.bind(this)
        }

        componentDidMount(){
          
            this.props.fetchFavorites(this.props.user.id);
            debugger
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
            // this.state.switch ? this.state.switch = false : this.state.switch = true
        }

        render() {
            if (!this.props.favorites) return null;
            let favorites;
            if (Array.isArray(this.props.favorites)) {
                favorites = this.props.favorites;
            } else {
                favorites = this.props.favorites.data
            }

            return (
                <div className="favorites-page">  
                    <NavBar 
                        status={true}
                    />
                    <div className="favorites-div">
                        <div className="back-profile-div">
                            <Link className="back-profile-header" to="/user">
                                <div className="back-arrow">&larr;</div> 
                                Back to Profile
                            </Link>
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
                                                {cafe.location.address1}
                                            </div>
                                            <div onClick={() => this.handleUnfavorite(this.props.user.id, cafe)} className="favorite-remove">Remove</div>
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