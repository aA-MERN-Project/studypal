export const distance = (lat1, lon1, lat2, lon2, unit)  => {
    if ((lat1 === lat2) && (lon1 === lon2)) {
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
        if (unit === "K") { dist = dist * 1.609344 }
        if (unit === "N") { dist = dist * 0.8684 }
        return dist;
    }
}

export const applyExtraFilters = (cafe_array) => {

      // Matches filters coming in from data to match filter params
      let loudMap = { "loud": false, "average": true, "quiet": true };
      let creditMap = { "yes": true, "no": false, "": false };
      let wifiMap = { "yes": true, "no": false, "": false };

      let emptyFilter = cafes => cafes.filter(cafe => cafe.wifi !== '');
      let wifiFilter = cafes => cafes.filter(cafe => wifiMap[cafe.wifi] === this.props.filters.free_wifi);
      let creditFilter = cafes => cafes.filter(cafe => creditMap[cafe.credit_card] === this.props.filters.credit_card);
      let loudFilter = cafes => cafes.filter(cafe => loudMap[cafe.noise_level] === this.props.filters.noise_level);

    
      // Apply all filters, looks ugly right now will change later
      return emptyFilter(wifiFilter(creditFilter(loudFilter(cafe_array))))
      
  }

