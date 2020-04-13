const distance = (lat1, lon1, lat2, lon2, unit) => {
    if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
    }
    else {
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == "K") { dist = dist * 1.609344 }
        if (unit == "N") { dist = dist * 0.8684 }
        return (+(Math.round(dist + "e+2") + "e-2"));
    }
}


const calculateDistance = (cafes, my_lat, my_lng) => {

    let addedDistance = cafes.map(cafe => {
        cafe.distance_away = distance(
            my_lat,
            my_lng,
            cafe.coordinates_latitude,
            cafe.coordinates_longitude,
        );
        return cafe;
    })
    return addedDistance

}

module.exports.calculateDistance = calculateDistance;