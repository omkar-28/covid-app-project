import React from 'react';
import PropTypes from "prop-types";
import styles from "./CountryPicker.module.css";

const CountryPicker = (props) => {
    CountryPicker.defaultProps = {
        title: "country picker"
    }
    CountryPicker.propTypes = {
        title: PropTypes.string.isRequired
    }
    return(
        <div className={styles.container}>
            <h2>{props.title}</h2>
        </div>
    )
}

export default CountryPicker;