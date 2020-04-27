import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {

    try {
        const {data} = await axios.get(url);   //------------------------------- Destructuring the data.  
        
        const modifiedData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate
        }//--------------------------------------------------------------------- Above, we're getting only the objects items we need from the destructured data.

        return modifiedData;
    } catch (error) {
        
    }

}