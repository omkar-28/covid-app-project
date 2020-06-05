import React, { useState, useEffect } from 'react';
import {fetchCountries} from "../../api";
import styles from "./CountryPicker.module.css";
import { NativeSelect, FormControl } from '@material-ui/core';

const CountryPicker = ({handleChangeCountry}) => {

    const [fetchedCountry, setFecthedCountry] = useState([])

    useEffect( () => {
        const fetchedCountries = async () => {
            setFecthedCountry(await fetchCountries());
        }

        fetchedCountries();
    },[setFecthedCountry]);

    return(
        <div className={styles.container}>
            <h2>Country Picker</h2>

            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue="" onChange={(e) => handleChangeCountry(e.target.value)}>
                    <option value="global">Global</option>
                    {
                        fetchedCountry.map( (country, i) => <option key={i} value={country}>{country}</option>)
                    }
                </NativeSelect>
            </FormControl>
            
        </div>
    )
}

export default CountryPicker;