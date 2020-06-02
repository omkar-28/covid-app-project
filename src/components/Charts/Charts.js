import React, { useState, useEffect } from 'react';
import { fetchDailyData } from "../../api";
import { Line } from "react-chartjs-2";
import styles from "./Charts.module.css";

const Charts = () => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() =>{
        const fetchDailyApi = async () => {
            const dailyDatas = await fetchDailyData();
            setDailyData(dailyDatas)
            console.log(dailyDatas)
        }
        
        fetchDailyApi();
    }, []);

        const lineChart = (
            dailyData.length !== 0
            ?(<Line data={{
                labels: dailyData.map(({ reportDate }) => reportDate),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    borderColor: "#3333ff",
                    fill: true,
                }, {
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: "red",
                    backgroundColor: 'rgba(255,0,0,0.6)',
                    fill: true,
                }],
            }}
            />): null
        );

    return(
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Charts;