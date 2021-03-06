import {getCafe, getCafeByZipcode, getCafes, getCafeByFilters} from '../util/cafe_api_util';
import {getYelpCafeById, updateCafe, getFavorites} from '../util/cafe_api_util'
import { fetchFavorites} from '../actions/session_actions';



export const RECEIVE_CAFEBYZIPCODE = "RECEIVE_CAFEBYZIPCODE";
export const RECEIVE_CAFE = "RECEIVE_CAFE";
export const RECEIVE_CAFES = "RECEIVE_CAFES";
export const RECEIVE_CLEAR_CAFES = "RECEIVE_CLEAR_CAFES";
export const REROLL_CAFES = "REROLL_CAFES";
export const RECEIVE_YELP_CAFE = "RECEIVE_YELP_CAFE";
export const START_LOADING_FILTERED_CAFES = "START_LOADING_FILTERED_CAFES";
export const START_LOADING_SINGLE_CAFE = "START_LOADING_SINGLE_CAFE";
export const RECEIVE_CURR_CAFE = "RECEIVE_CURR_CAFE";
export const STOP_LOADER = "STOP_LOADER";
export const RECEIVE_CAFE_HOUR_CHOICES = "RECEIVE_CAFE_HOUR_CHOICES";

export const receiveCafeHourChoices = cafes => ({

    type: RECEIVE_CAFE_HOUR_CHOICES,
    cafes
})


export const receiveCurrCafe = cafe => ({
    type: RECEIVE_CURR_CAFE,
    cafe
})

export const rerollCafes = cafes => ({
    type: REROLL_CAFES,
    cafes,

})

export const recommendLoader = () => ({
    type: STOP_LOADER,

})

export const clearCafes = () => ({
    type: RECEIVE_CLEAR_CAFES,
    
})

export const receiveCafe = cafe => ({
    type: RECEIVE_CAFE,
    cafe,
});

export const receiveCafes = cafes => ({
    type: RECEIVE_CAFES,
    cafes,
});

export const receiveYelpCafe = cafe => ({
    type: RECEIVE_YELP_CAFE,
    cafe
});


export const startLoadingFilteredCafes = () => ({
    type: START_LOADING_FILTERED_CAFES,
});

export const startLoadingSingleCafe = () => ({
    type: START_LOADING_SINGLE_CAFE,

});

// unused
export const fetchCafes = () => dispatch => (
  getCafes()
    .then(cafes => {
        console.log(cafes)
        dispatch(receiveCafes(cafes.data))
    })
    .catch(err => console.log(err))
);


export const fetchRecommended = (id) => dispatch => (
    getFavorites(id)
        .then(fave => {
            debugger
            let cafeArr = fave.data.favorites

            dispatch(rerollCafes(cafeArr))
            dispatch(recommendLoader())
        })
        .catch(err => console.log(err))
)


export const fetchCafeByZipcode = zipcode => dispatch => (
  getCafeByZipcode(zipcode)
    .then(cafes => dispatch(receiveCafes(cafes.data)))
    .catch(err => console.log(err))
);

export const fetchCafe = id => dispatch => (
    getCafe(id)
        .then(cafe => dispatch(receiveCafe(cafe)))
        .catch(err => console.log(err)) 
);


export const fetchCafeByFilters = filters => (dispatch, getState) => {
    dispatch(startLoadingFilteredCafes());


    const hourFilter = parseInt(getState().entities.filters.hours_opened_left)

    return getCafeByFilters(filters).then(cafes => {
        if (Object.keys(cafes.data).length === 0){
            dispatch(receiveCafes(cafes.data))
            dispatch(receiveCafeHourChoices(cafes.data))
        } else{
            dispatch(receiveCafes(cafes.data["default"]));
            dispatch(receiveCafeHourChoices(cafes.data));
        }
       
        return cafes;
    })

};


export const fetchYelpCafeById = (id) => dispatch => {
    dispatch(startLoadingFilteredCafes());
   
    updateCafe(id, {updateType: "randomlyRolled"}).then(
        
    )

    return getYelpCafeById(id).then(cafe => {
        dispatch(receiveYelpCafe(cafe.data));
        return cafe.data;
    })

};

export const fetchCurrCafe = (id) => dispatch => {
    getCafe(id)
        .then(cafe => {
            dispatch(receiveCurrCafe(cafe))
            return cafe;
        })
        .catch(err => console.log(err)) 


}

export const fetchFavoriteCafeById = (id) => dispatch => {
    return getYelpCafeById(id).then(cafe => {
        dispatch(receiveYelpCafe(cafe.data));
        return cafe.data;
    })

};


