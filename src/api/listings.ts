import apiClient from "./client";

const endpoint = '/listings'

const getListings = () => apiClient.get(endpoint);

const addListing = (listing) => {
    const data = new FormData()
    data.append('title', listing.title);
    data.append('price', listing.price);
    data.append("categoryId", listing.category.value)
    data.append("description", listing.description)

    listing.images.forEach((image, index) =>
        data.append('images', {
            name: 'image' + index,
            type: 'image/jpeg',
            uri: image
        })
    );

    if (listing.location)
        data.append('location', JSON.stringify(listing.location))

    // console.log(data)
    return apiClient.post(endpoint, data)
        .catch(error => {
            console.log("Error adding listing:", error)
            throw error
        })
}

export default {
    getListings,
    addListing
}