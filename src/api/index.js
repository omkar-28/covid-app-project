import axios from 'axios';

const urlApi = 'https://covid19.mathdro.id/api'

export const fetchApi = async () => {
    try {
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(urlApi);

        return { confirmed, recovered, deaths, lastUpdate }
        
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${urlApi}/daily`);
        console.log(data)
        
        return data.map(({ confirmed, deaths, reportDate }) => ({
            confirmed: confirmed.total, deaths: deaths.total, reportDate: reportDate
        }));

        // const modifiedData = data.map((dailyData) => ({
        //     confirmed: dailyData.confirmed.total, 
        //     deaths: dailyData.deaths.total, 
        //     date: dailyData.reportDate
        // }));

        // return modifiedData
        
    } catch (error) {
        console.log(error)
    }
}
