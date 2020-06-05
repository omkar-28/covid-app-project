import axios from 'axios';

const urlApi = 'https://covid19.mathdro.id/api'

export const fetchApi = async (country) => {
    
    let url = urlApi;
    if(country && country !== "global") {
        url = `${url}/countries/${country}`;
    }
    
    try {
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(url);

        return { confirmed, recovered, deaths, lastUpdate }
        
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${urlApi}/daily`);
        
        return data.map(({ confirmed, deaths, reportDate }) => ({
            confirmed: confirmed.total, deaths: deaths.total, reportDate: reportDate
        }));
        
    } catch (error) {
        console.log(error)
    }
}

export const fetchCountries = async () => {
    try {
        const { data: {countries}} = await axios.get(`${urlApi}/countries`)

        return countries.map( (country) => country.name)
    } catch (error) {
        console.log(error)
    }
}
