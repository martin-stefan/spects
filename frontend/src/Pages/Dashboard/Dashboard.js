import React, { useState, useEffect } from 'react';
import StatsBar from '../../Components/StatsBar/StatsBar';

import {Bar, Pie, Doughnut} from 'react-chartjs-2';

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

const PieState = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: [65, 59, 80, 81, 56]
    }
  ]
}


const Dashboard = () => {
  return (
    <div className="dash">

      <div className="dash__item">
        <h1 className="dash__item--title">Calendar Style</h1>
      </div>

      <div className="dash__item">
        <h1 className="dash__item--title">List Style</h1>

        <ul className="dash__list">
          <li className="dash__list--item">

            <div className="list__main">
              <input type="checkbox" name="completed" id="" className="list__check"/>
              <p className="list__name">Item1</p>
            </div>

            <div className="list__options">
              <button className="hamburg btn">Drag</button>
              <button className="edit btn">Edit</button>
              <button className="delete btn">Delete</button>

            </div>

          </li>
          <li className="dash__list--item">

            <div className="list__main">
              <input type="checkbox" name="completed" id="" className="list__check"/>
              <p className="list__name">Item2</p>
            </div>

            <div className="list__options">
              <button className="hamburg btn">Drag</button>
              <button className="edit btn">Edit</button>
              <button className="delete btn">Delete</button>
            </div>
          </li>
          <li className="dash__list--item">

            <div className="list__main">
              <input type="checkbox" name="completed" id="" className="list__check"/>
              <p className="list__name">Item3</p> 
            </div>

            <div className="list__options">
              <button className="hamburg btn">Drag</button>
              <button className="edit btn">Edit</button>
              <button className="delete btn">Delete</button>
            </div>

          </li>
          <li className="dash__list--item">

            <div className="list__main">
              <input type="checkbox" name="completed" id="" className="list__check"/>
              <p className="list__name">Item4</p>
            </div>

            <div className="list__options">
              <button className="hamburg btn">Drag</button>
              <button className="edit btn">Edit</button>
              <button className="delete btn">Delete</button>
            </div>

          </li>
          <li className="dash__list--item">

            <div className="list__main">
              <input type="checkbox" name="completed" id="" className="list__check"/>
              <p className="list__name">Item5</p>
            </div>

            <div className="list__options">
              <button className="hamburg btn">Drag</button>
              <button className="edit btn">Edit</button> 
              <button className="delete btn">Delete</button>
            </div>

          </li>
        </ul>
      </div>

      <div className="dash__item">
      <h1 className="dash__item--title">Bar Graph</h1>
        <Bar
            data={state}
            options={{
              title:{
                display:true,
                text:'Average Rainfall per month',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />

      </div>

      <div className="dash__item">
      <h1 className="dash__item--title">Pie Chart</h1>
        <Pie
            data={PieState}
            options={{
              title:{
                display:true,
                text:'Average Rainfall per month',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
      </div>

      <div className="dash__item">
      <h1 className="dash__item--title">Doughnut Chart</h1>

        <Doughnut
            data={PieState}
            options={{
              title:{
                display:true,
                text:'Average Rainfall per month',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
      </div>
      <StatsBar/>
    </div>
  );
}

export default Dashboard;