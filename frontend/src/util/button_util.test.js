
describe('button util test', () => {

    it ('returns whether cafe id is in existingIds array', () => {
        let cafeId = "HyDEE8EzIqdyHFABngAjnQ";
        let existingIds =  [
            "HyDEE8EzIqdyHFABngAjnQ",
            "2oRvvIAnDjxCN01uhTUsGg", 
            "ffbOEMy_gw8AVmxS0m9zJg"
        ];
        expect(existingIds.includes(cafeId)).toEqual(true)
    })
})
