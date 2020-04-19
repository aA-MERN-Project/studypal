import React from 'react';
import './favorites.scss';

class FavItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studyPalCafe: false
        }

        this.handleUnfavorite = this.handleUnfavorite.bind(this)
        this.handleFavorite = this.handleFavorite.bind(this)
        this.modalData = {
            yelpData: {},
            distance: {},
            noiseLevel: {},
            studyPalCafe: {},
            filters: {},
            user: this.props.user
        }
        this.cafeClick = this.cafeClick.bind(this);
        this.cafeRoll = this.cafeRoll.bind(this);
        this.shortenName = this.shortenName.bind(this);
    }

    shortenName(name) {
        if (name.length > 34) {
            return name.slice(0, 34) + "..."
        } else {
            return name
        }
    }

    handleFavorite(userId, cafe) {
        const favoriteData = new Object();
        favoriteData.type = "favorite";
        favoriteData.cafe = cafe;
        this.props.updateFavorites(userId, favoriteData);
    }

    handleUnfavorite(userId, cafe) {

        const favoriteData = new Object();
        favoriteData.type = "unfavorite";
        favoriteData.cafe = cafe;
        this.props.updateFavorites(userId, favoriteData);
    }

    cafeClick(cafe) {

        this.props
            .fetchFavoriteCafeById(cafe.id)
            .then(() => this.props.fetchCurrCafe(cafe.id))
            .then(() =>
                this.props.openModal("favoriteModal", this.modalData)
            );
    }

    cafeRoll() {

        this.props
            .rerollCafes(this.props.favorites)
        this.props.getFilters({ miles_away: "fakeData" })
        this.props.history.push("/cafe")
    }

   


    render(){
        let cafe = this.props.cafe;

        return (
        <div id="cafe-box" key={cafe.id}>
            <div className="cafe-text-info-outer">
                <div className="cafe-text-info">
                    <div
                        className="modal-cafe-name"
                        onClick={() => {
                            this.cafeClick(cafe);
                        }}
                    >
                        {this.shortenName(cafe.name)}
                    </div>
                    <div
                        className="modal-cafe-address"
                        onClick={() => {
                            this.cafeClick(cafe);
                        }}
                    >
                        {cafe.location_display_address_0}
                    </div>
                </div>
                <div
                    onClick={() =>
                        this.handleUnfavorite(
                            this.props.user.id,
                            cafe
                        )
                    }
                    className="favorite-remove">
                    Remove
                </div>
            </div>
            
            {cafe.image_url ? (
                <img
                    className="fav-cafe-img"
                    onClick={() => {
                        this.cafeClick(cafe);
                    }}
                    src={cafe.image_url}
                />
            ) : (
                    <img
                        className="fav-cafe-img"
                        src="https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/sparephoto.png"
                    ></img>
                )}
        </div>
        )

        

    }

}

export default FavItem;