export const cafeIncludes = (cafe, array) => {

    const existingIds = array.map( cafe => cafe.id);
    if (existingIds.includes(cafe.id)){
        return true;
    } else {
        return false;
    }


}