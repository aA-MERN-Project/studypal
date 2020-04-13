import {distance} from "./distance_util"

export const selectRandomCafe = (cafe_array) => {    return cafe_array[Math.floor(Math.random() * cafe_array.length)];

};


export const calculateDistance = (cafes, filters = {}) => {
    

    let addedDistance = cafes.map(cafe => {
        cafe.distance_away = distance(
            filters.my_lat,
            filters.my_lng,
            cafe.coordinates_latitude,
            cafe.coordinates_longitude,
        );
        return cafe;
    })

    return addedDistance

}


export const applyExtraFilters = (cafes, filters) => {
    return cafes.filter(cafe => cafe.distance_away < filters.miles_away);
}