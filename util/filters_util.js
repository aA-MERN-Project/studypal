const applyAllFilters = (cafes, filters) => {

    const location_zip_code = filters.location_zip_code;
    const wifi = filters.wifi;
    const credit_card = filters.credit_card;
    const noise_level = filters.noise_level;


    return cafes.filter(
        cafe => {
        if (location_zip_code) {
            return cafe.location_zip_code === location_zip_code
        } 

        if (!location_zip_code){
            return true
        }
    })
    .filter(
        cafe => {
            if (wifi === "yes"){
                return cafe.wifi === "yes"
            } else {
                return true;
            }
           
        })
        .filter(
            cafe => {
                if (credit_card === "yes") {
                    return cafe.credit_card === "yes"
                } else {
                    return true;
                }

        })
        .filter(
            cafe => {
                if (noise_level === "quiet" || noise_level === "average") {
                    return cafe.noise_level === "average" || cafe.noise_level === "quiet"
                } else {
                    return true;
                }
        })
        .filter(
            cafe => cafe.distance_away < filters.miles_away
        )






}

module.exports.applyAllFilters = applyAllFilters;