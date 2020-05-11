import axios from 'axios';

const url = 'https://covid19.mathdro.id/api'; //---------------------------- variable to hold the url to the api.

export const fetchData = async () => {
    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url); //--------------------------- Fetching data and destructuring it immediately from the api declared earlier.
        return {confirmed, recovered, deaths, lastUpdate} //---------------------------------------------------------- returning the fetched data.
    } catch (error) {
        
    }
}