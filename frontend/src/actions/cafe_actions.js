import {getCafe, getCafeByZipcode, getCafes, getCafeByFilters} from '../util/cafe_api_util';

export const RECEIVE_CAFEBYZIPCODE = "RECEIVE_CAFEBYZIPCODE";
export const RECEIVE_CAFE = "RECEIVE_CAFE";
export const RECEIVE_CAFES = "RECEIVE_CAFES";
export const RECEIVE_CLEAR_CAFES = "RECEIVE_CLEAR_CAFES";
export const REROLL_CAFES = "REROLL_CAFES";


// export const receiveCafeByZipcode = cafes => ({
//     type: RECEIVE_CAFEBYZIPCODE,
//     cafes,
// });

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

export const fetchCafeByFilters = filters => dispatch => (
    getCafeByFilters(filters)
        .then(cafes => dispatch(receiveCafes(cafes)))
        .catch(err => console.log(err))
);


export const fetchCafe = id => dispatch => (
    getCafe(id)
        .then(cafe => dispatch(receiveCafe(cafe)))
        .catch(err => console.log(err)) 
);




