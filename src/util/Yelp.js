const apiKey = 'xmLD4WrXNOGuLj6tETjQublgcRiRaWOo_RI0lxnuaA2U4WnVGDYbE2nQae-YTrqzupq556wo14EzzGE2bHIIaTZQfEWyO5L09zkvUvnH0UQHI_Lpph2W4i8KvpPSW3Yx';

const Yelp = {
    search: function (term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then( response => {
           return response.json();
        }).then( jsonResponse => {
            if (jsonResponse.businesses) {
                console.log(jsonResponse.businesses); 
                return jsonResponse.businesses.map( business => ({
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                }));
            }
        });
    }
};

export default Yelp;