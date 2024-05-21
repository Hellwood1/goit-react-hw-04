import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers = {
    Authorization: "Client-ID jTHS3Vv6z-bXZfWLysjf1qTlFUOnpGH82vdOJRHowy0",
};

export default async function getPhotosByQuery (searchQuery, page) {
    const response = await axios.get("search/photos", {
        params: {
            query: searchQuery,
            per_page: 6,
            page,
        },
    });

    return response.data.results;
}