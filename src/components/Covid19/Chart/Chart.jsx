import React, {useState, useEffect}  from 'react'; //--------------------- useState and useEffect  are funtions needed when using hooks.
import {fetchDailyData} from '../../../api';
import {Line, Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';

/* Functional based component. */
const Chart = () => {

    const[dailyData, setDailyData] = useState([]); //--------------------- initializes the state dailyData and assign it an empty object and setDaily data to change it.

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    });

    const lineChart = (

        dailyData.length ?

        (<Line
            data={{
                labels: dailyData.map(({date}) => date), //------------------ Getting the dates from the daily data and assigning them to the labels of the chart.
                datasets: [
                            {
                                data: dailyData.map(({confirmed}) => confirmed),
                                label: "Infected",
                                borderColor: '#3333ff',
                                fill: true
                            },
                            {
                                data: dailyData.map(({deaths}) => deaths),
                                label: 'Deaths',
                                borderColor: 'red',
                                backgroundColor: 'rgba(255, 0, 0, 0.5)', 
                                fill: true
                            }
                        ]
            }}
        />) : null
    )

    return(
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Chart;