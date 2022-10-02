import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'


// console.log(process.env.REACT_APP_RAPID_API_KEY)

const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    console.log(`URL:  ${BASE_URL}/${url}`)
    const response = await axios.get(`${BASE_URL}/${url}`, options)

    return response.data
}