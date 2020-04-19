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


export const applyTimeFilter = (cafes, filters) => {


    let hoursLeft = cafes.map(cafe => {
        let hours = cafe.hours[0].open;
        let today = new Date();
        let n = today.getDay();
        let currTime = today.getHours(); // retrives 0-23

       
        let todaysHours = hours[n];
        let endTime;
        if (todaysHours) {return cafe

        } else{
            let endTime = parseInt(todaysHours.end);
        }
  



        return cafe.timeOpenLeft = (endTime * 0.60) - ((currTime * 60) + today.getMinutes());

    })


    const hoursLeftFilter = (parseInt(filters.hours_opened_left) * 60)  // convert to military time!


    let cafesOpen = hoursLeft.filter(cafe => {
        return cafe.timeOpenLeft > hoursLeftFilter;

    })


    return cafesOpen;


}