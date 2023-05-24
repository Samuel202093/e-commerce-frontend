import React, { useState} from 'react'
import BarChart from './BarChart'
import PieChart from './PieChart'
import { userData } from '../datas/api'
import { Pie } from 'react-chartjs-2'

const Chart = () => {
    const [Data, setData] = useState({
        labels: userData.map((x)=> x.year),
        datasets: [{
            label: "Sales",
            data: userData.map((x)=> x.sales),
            backgroundColor:[
                '#F59520', 
                '#D6DBDF',
                '#1479F4',
                '#2BC46C',
                '#FFC107 '
            ],
            borderColor: '#0000',
            borderWidth: 2
        }]
    })
    const [Datum, setDatum] = useState({
        labels: userData.map((x)=> x.year),
        datasets: [{
            label: "Expenses",
            data: userData.map((x)=> x.expenses),
            backgroundColor:[
                '#F59520', 
                '#D6DBDF',
                '#1479F4',
                '#2BC46C',
                '#FFC107 '
            ],
            borderColor: '#0000',
            borderWidth: 2
        }]
    })
  return (
    <div className='chart-container'>
        <div className='chart-wrapper-bar'>
            <BarChart chartData={Data}/>
            <h5>Barchart Representation of Sales from 2018 - 2022</h5>
        </div>
        <div className='chart-wrapper-pie'>
            <PieChart chartData={Datum}/>
            <h5>Piechart Representation of Expenses from <br /> 2018 - 2022</h5>

        </div>
    </div>
  )
}

export default Chart