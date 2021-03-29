import { mock, store } from './test_util';
import * as cafeUtil from './cafe_api_util';

let cafe = {
    id: "zeO401-Y-2BLiIv9bl0UkA",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/-U_YB8TqrEHFCKU-F5pppQ/o.jpg",
    location_city: "San Francisco",
    location_country: "US",
    location_display_address_0: "687 Geary St",
    location_state: "CA",
    location_zip_code: 94102,
    name: "Scullery",
    noise_level: ""
}

describe('this tests 2 util functions in cafe_api_util', () => {
    beforeEach(() => {
        store.clearActions();
    });
    
    it('it returns cafe data from getCafe', () => {
        let id = "zeO401-Y-2BLiIv9bl0UkA";
        mock.onGet(`/api/cafes/${id}`).reply(200, { response: {
            id: "zeO401-Y-2BLiIv9bl0UkA",
            image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/-U_YB8TqrEHFCKU-F5pppQ/o.jpg",
            location_city: "San Francisco",
            location_country: "US",
            location_display_address_0: "687 Geary St",
            location_state: "CA",
            location_zip_code: 94102,
            name: "Scullery",
            noise_level: ""
        }});

        return cafeUtil.getCafe(id)
            .then(res => {
                expect(res.data.response).toEqual(cafe);
            }) 
            .catch(err => {
                throw new Error (err)
            })
    });

    it('returns cafe data from getYelpCafeById', () => {
        let id = "HyDEE8EzIqdyHFABngAjnQ";
        let data = {
            name: "Tart To Tart",
            phone: "+14155047068"
        };

        mock.onGet(`/api/cafes/yelp_id/${id}`).reply(200, {response: data})

        return (
            cafeUtil.getYelpCafeById(id)
                .then(cafe => {
                    expect(cafe.data.response).toEqual(data)
                })
                .catch(err => {
                    throw new Error(err)
                })
        )
    });

    // to test store actions, do
    // return store.dispatch(loadActions.receiveQuestion())
    // then(() => {
    //             let expectedActions = [
    //                 {
    //                     load: {
    //                            "question": "A group of tigers are referred to as:",
    //                             "incorrect": ["Chowder", "Pride", "Destruction"],
    //                             "correct": "Ambush"
    //                         },
    //                         type: 'RECEIVE_LOAD', 
    //                 }
    //             ]
    //             expect(store.getActions()).toEqual(expectedActions)
    //         })
})

