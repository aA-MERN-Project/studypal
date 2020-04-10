import {getCafe, getCafeByZipcode, getCafes, getCafeByFilters} from '../util/cafe_api_util';
import {getYelpCafeById, updateCafe} from '../util/cafe_api_util'


export const RECEIVE_CAFEBYZIPCODE = "RECEIVE_CAFEBYZIPCODE";
export const RECEIVE_CAFE = "RECEIVE_CAFE";
export const RECEIVE_CAFES = "RECEIVE_CAFES";
export const RECEIVE_CLEAR_CAFES = "RECEIVE_CLEAR_CAFES";
export const REROLL_CAFES = "REROLL_CAFES";
export const RECEIVE_YELP_CAFE = "RECEIVE_YELP_CAFE";
export const START_LOADING_FILTERED_CAFES = "START_LOADING_FILTERED_CAFES";
export const START_LOADING_SINGLE_CAFE = "START_LOADING_SINGLE_CAFE";
export const RECEIVE_CURR_CAFE = "RECEIVE_CURR_CAFE"


export const receiveCurrCafe = cafe => ({
    type: RECEIVE_CURR_CAFE,
    cafe
})

export const rerollCafes = cafes => ({
    type: REROLL_CAFES,
    cafes,

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

// Loading Actions

export const startLoadingFilteredCafes = () => ({
    type: START_LOADING_FILTERED_CAFES,
});

export const startLoadingSingleCafe = () => ({
    type: START_LOADING_SINGLE_CAFE,

});

// API actions

export const fetchCafes = () => dispatch => (
  getCafes()
    .then(cafes => dispatch(receiveCafes(cafes)))
    .catch(err => console.log(err))
);


export const fetchCafeByZipcode = zipcode => dispatch => (
  getCafeByZipcode(zipcode)
    .then(cafes => dispatch(receiveCafes(cafes)))
    .catch(err => console.log(err))
);

export const fetchCafe = id => dispatch => (
    getCafe(id)
        .then(cafe => dispatch(receiveCafe(cafe)))
        .catch(err => console.log(err)) 
);


export const fetchCafeByFilters = filters => dispatch => {
    dispatch(startLoadingFilteredCafes());

    return getCafeByFilters(filters).then(cafes => {
        dispatch(receiveCafes(cafes));
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


