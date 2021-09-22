import React, { useState, useEffect, useRef } from 'react';
import StatsBar from '../../Components/StatsBar/StatsBar';

import {Bar, Pie, Doughnut} from 'react-chartjs-2';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { ReactComponent as Close } from '../../svg/close.svg';

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

const tasks = [
  {
    id: '0',
    name: 'Do homework'
  },
  {
    id: '1',
    name: 'do test'
  },
  {
    id: '2',
    name: 'do project'
  },
  {
    id: '3',
    name: 'do quiz'
  }
]

const Dashboard = () => {

  const [creating, setCreating] = useState(false);

  const handleClickCreate = () => {
    setCreating(!creating);
  }

  const handleSubmit = () => {
    setCreating(false);
  }

  const createItem = () => {

    if (creating) {
      return (
        <div className="create__menu" ref={createRef}>

          <div className="create__menu--content">
            <div className="create__menu--header">
              <h3 className="create__header--item">Create a new task</h3>
            </div>

            <Close className="close__btn" onClick={ handleClickCreate }/>

            <form onSubmit={handleSubmit}>
              <label htmlFor="">
                Title: <input type="text" />
              </label>
              <input type="submit" className="create__menu--btn" value="Create"/>
            </form>

          </div>

        </div>
      );
    } else {
      return '';
    }
  }

  const createRef = useRef(null)
  const createBtnRef = useRef(null)


  const handleOutsideClick = event => {
    if (createBtnRef.current && !createBtnRef.current.contains(event.target) && createRef.current && !createRef.current.contains(event.target)) {
      handleClickCreate();
    }
  }

  document.addEventListener("click", handleOutsideClick)


  return (
    <div className="dash">

      {/* <div className="dash__item">
        <h1 className="dash__item--title">Calendar Style</h1>
      </div> */}

      <div className="dash__item">
        <h1 className="dash__item--title">List Style</h1>


        <DragDropContext>
          <Droppable droppableId="dash__list">

            {provided => (
            
              <ul className="dash__list" {...provided.droppableProps} ref={provided.innerRef}>

              {tasks.map(({id, name}, index) => {
                return (
                <Draggable key={id} draggableId={id} index={index}>

                  {provided => (
                    <li className="dash__list--item" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>

                      <div className="list__main">
                        <input type="checkbox" name="completed" id="" className="list__check"/>
                        <p className="list__name">{name}</p>
                      </div>

                      <div className="list__options">
                        <button className="hamburg btn">Drag</button>
                        <button className="edit btn">Edit</button>
                        <button className="delete btn">Delete</button>
                      </div>
                    </li>
                  )}

                </Draggable>
                )})}
              </ul>
            )}
          </Droppable> 
        </DragDropContext>

        <div className="create" onClick={handleClickCreate} ref={createBtnRef}>
          <p className="create__button">Create a new item</p>
        </div>
      </div>

      {createItem()}

      {/* <div className="dash__item">
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
      </div> */}
      <StatsBar/>
    </div>
  );
}

export default Dashboard;