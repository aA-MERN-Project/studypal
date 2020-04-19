const applyAllFilters = (cafes, filters) => {

    const location_zip_code = filters.location_zip_code;
    const wifi = filters.wifi;
    const credit_card = filters.credit_card;
    const noise_level = filters.noise_level;


    let firstFilter = cafes.filter(
        cafe => {
        if (location_zip_code) {
            return cafe.location_zip_code === location_zip_code
        } 

        if (!location_zip_code){
            return cafe
        }
    })
    .filter(
        cafe => {
            if (wifi === "yes"){
                return cafe.wifi === "yes"
            } else {
                return cafe;
            }
           
        })
        .filter(
            cafe => {
                if (credit_card === "yes") {
                    return cafe.credit_card === "yes"
                } else {
                    return cafe;
                }

        })
        .filter(
            cafe => {
                if (noise_level === "quiet" || noise_level === "average") {
                    return cafe.noise_level === "average" || cafe.noise_level === "quiet"
                } else {
                    return cafe;
                }
        })
        .filter(
            cafe => {
                if (filters.miles_away) {
                    return cafe.distance_away < filters.miles_away
                } else {
                    return cafe;
                }
            })



    let secondFilter = cafes.filter(
        cafe => {
            if (location_zip_code) {
                return cafe.location_zip_code === location_zip_code
            }

            if (!location_zip_code) {
                return cafe
            }
        })
        .filter(
            cafe => {
                if (wifi === "yes") {
                    return cafe.wifi === "yes"
                } else {
                    return cafe;
                }

            })
        .filter(
            cafe => {
                if (credit_card === "yes") {
                    return cafe.credit_card === "yes"
                } else {
                    return cafe;
                }

            })
        .filter(
            cafe => {
                if (noise_level === "quiet" || noise_level === "average") {
                    return cafe.noise_level === "average" || cafe.noise_level === "quiet"
                } else {
                    return cafe;
                }
            })
        .filter(
            cafe => {
                if (filters.miles_away){
                    return cafe.distance_away < filters.miles_away
                } else {
                    return cafe;
                }
            })



    if (firstFilter.length === 0){
        return secondFilter;
    } else {
        return firstFilter;
    }



}


const applyTimeFilter = (cafes, filters) => {


    const hoursLeftFilter = (parseInt(filters.hours_opened_left) * 60)  // convert to military time!
    let cafesOpen = cafes.filter(cafe => {

        if (filters.hours_opened_left === 0) return true;

        if (cafe.hours) {

            if (cafe.hours[0]) {
                let hours = cafe.hours[0].open;
                let today = new Date();
                let n = today.getDay();

                let currTime = today.getHours(); // retrives 0-23
                let todaysHours = hours[n];

                if (!todaysHours) return false;

                let endTime = parseInt(todaysHours.end);
                let timeOpenLeft = (endTime * 0.60) - ((currTime * 60) + today.getMinutes());

                
                return ((0 < timeOpenLeft) && (timeOpenLeft > hoursLeftFilter));


            }

        } else {
            return false;
        }

    })


    return cafesOpen;


}


module.exports.applyTimeFilter = applyTimeFilter;
module.exports.applyAllFilters = applyAllFilters;