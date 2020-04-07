import NavBar from '../navbar/navbar'
import React from 'react'
import './favorites.css'
import { Link } from 'react-router-dom'

    class Favorites extends React.Component {

        constructor(props) {
            super(props);
            this.state = {

            }
             this.data = [
                {
                    "id": "vJaF4HdnmSVF_V0BjeKjtg",
                    "alias": "blue-bottle-coffee-san-francisco-10",
                    "name": "Blue Bottle Coffee",
                    "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/Mrk3g0YcMN25gakI3PaLiQ/o.jpg",
                    "url": "https://www.yelp.com/biz/blue-bottle-coffee-san-francisco-10?adjust_creative=7szgsruXO1Hyi8ghtcTjRg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=7szgsruXO1Hyi8ghtcTjRg",
                    "review_count": 1517,
                    "categories_0_alias": "coffee",
                    "coordinates_latitude": 37.79604481,
                    "coordinates_longitude": -122.39381,
                    "price": "$",
                    "location_city": "San Francisco",
                    "location_zip_code": 94111,
                    "location_country": "US",
                    "location_state": "CA",
                    "location_display_address_0": "1 Ferry Building",
                    "wifi": "",
                    "credit_card": "",
                    "noise_level": "",
                    "rolled_amount": 0,
                    "selected_amount": 0
                },
                {
                    "id": "Av-PbVkajf1XrgqIS8POSQ",
                    "alias": "stella-pastry-and-cafe-san-francisco",
                    "name": "Stella Pastry & Cafe",
                    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/vEpKKec_SjFXWU6TOEp66Q/o.jpg",
                    "url": "https://www.yelp.com/biz/stella-pastry-and-cafe-san-francisco?adjust_creative=7szgsruXO1Hyi8ghtcTjRg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=7szgsruXO1Hyi8ghtcTjRg",
                    "review_count": 1312,
                    "categories_0_alias": "bakeries",
                    "coordinates_latitude": 37.79918,
                    "coordinates_longitude": -122.40828,
                    "price": "$",
                    "location_city": "San Francisco",
                    "location_zip_code": 94133,
                    "location_country": "US",
                    "location_state": "CA",
                    "location_display_address_0": "446 Columbus Ave",
                    "wifi": "",
                    "credit_card": "",
                    "noise_level": "",
                    "rolled_amount": 0,
                    "selected_amount": 0
                },
                {
                    "id": "yn5gA62ekL-TzKBBI_rq-A",
                    "alias": "boba-guys-san-francisco-6",
                    "name": "Boba Guys",
                    "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/tY1HyU-Rzz0usQ7vqQ8kVQ/o.jpg",
                    "url": "https://www.yelp.com/biz/boba-guys-san-francisco-6?adjust_creative=7szgsruXO1Hyi8ghtcTjRg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=7szgsruXO1Hyi8ghtcTjRg",
                    "review_count": 1986,
                    "categories_0_alias": "coffee",
                    "coordinates_latitude": 37.7899434,
                    "coordinates_longitude": -122.4073063,
                    "price": "$",
                    "location_city": "San Francisco",
                    "location_zip_code": 94108,
                    "location_country": "US",
                    "location_state": "CA",
                    "location_display_address_0": "429 Stockton St",
                    "wifi": "",
                    "credit_card": "",
                    "noise_level": "",
                    "rolled_amount": 0,
                    "selected_amount": 0
                },
                {
                    "id": "vVN_oVe6jvr4PCmXg_m9CA",
                    "alias": "hollywood-cafe-san-francisco",
                    "name": "Hollywood Cafe",
                    "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/vgogPlQi_PvbzgJJLn-K3A/o.jpg",
                    "url": "https://www.yelp.com/biz/hollywood-cafe-san-francisco?adjust_creative=7szgsruXO1Hyi8ghtcTjRg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=7szgsruXO1Hyi8ghtcTjRg",
                    "review_count": 2096,
                    "categories_0_alias": "breakfast_brunch",
                    "coordinates_latitude": 37.8065799,
                    "coordinates_longitude": -122.41584,
                    "price": "$$",
                    "location_city": "San Francisco",
                    "location_zip_code": 94133,
                    "location_country": "US",
                    "location_state": "CA",
                    "location_display_address_0": "530 north Point St",
                    "wifi": "",
                    "credit_card": "",
                    "noise_level": "",
                    "rolled_amount": 0,
                    "selected_amount": 0
                },
                {
                    "id": "qkHlhvv6DrCkvY54ogcPiA",
                    "alias": "xox-truffles-san-francisco",
                    "name": "XOX Truffles",
                    "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/YC1OatOZvEIKFkml_VfWgQ/o.jpg",
                    "url": "https://www.yelp.com/biz/xox-truffles-san-francisco?adjust_creative=7szgsruXO1Hyi8ghtcTjRg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=7szgsruXO1Hyi8ghtcTjRg",
                    "review_count": 630,
                    "categories_0_alias": "chocolate",
                    "coordinates_latitude": 37.80175,
                    "coordinates_longitude": -122.41206,
                    "price": "$",
                    "location_city": "San Francisco",
                    "location_zip_code": 94133,
                    "location_country": "US",
                    "location_state": "CA",
                    "location_display_address_0": "754 Columbus Ave",
                    "wifi": "",
                    "credit_card": "",
                    "noise_level": "",
                    "rolled_amount": 0,
                    "selected_amount": 0
                },
                {
                    "id": "uzqUJiCHUqV2c3PnvSsqeQ",
                    "alias": "caffe-greco-san-francisco",
                    "name": "Caffe Greco",
                    "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/s16rPkn94x6xCeJcYzipoQ/o.jpg",
                    "url": "https://www.yelp.com/biz/caffe-greco-san-francisco?adjust_creative=7szgsruXO1Hyi8ghtcTjRg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=7szgsruXO1Hyi8ghtcTjRg",
                    "review_count": 1019,
                    "categories_0_alias": "coffee",
                    "coordinates_latitude": 37.798918,
                    "coordinates_longitude": -122.4084483,
                    "price": "$",
                    "location_city": "San Francisco",
                    "location_zip_code": 94133,
                    "location_country": "US",
                    "location_state": "CA",
                    "location_display_address_0": "423 Columbus Ave",
                    "wifi": "yes",
                    "credit_card": "no",
                    "noise_level": "average",
                    "rolled_amount": 0,
                    "selected_amount": 0
                },
                {
                    "id": "U9HWtltvf_U2y1wYSOwFUA",
                    "alias": "fresh-brew-coffee-san-francisco",
                    "name": "Fresh Brew Coffee",
                    "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/SlLWGAvf2uyQ94KFUh4k_Q/o.jpg",
                    "url": "https://www.yelp.com/biz/fresh-brew-coffee-san-francisco?adjust_creative=7szgsruXO1Hyi8ghtcTjRg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=7szgsruXO1Hyi8ghtcTjRg",
                    "review_count": 576,
                    "categories_0_alias": "coffee",
                    "coordinates_latitude": 37.79001,
                    "coordinates_longitude": -122.41177,
                    "price": "$",
                    "location_city": "San Francisco",
                    "location_zip_code": 94108,
                    "location_country": "US",
                    "location_state": "CA",
                    "location_display_address_0": "882 Bush St",
                    "wifi": "",
                    "credit_card": "",
                    "noise_level": "",
                    "rolled_amount": 0,
                    "selected_amount": 0
                }
            ]
        }

        render() {
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
                            {this.data.map(cafe => {
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