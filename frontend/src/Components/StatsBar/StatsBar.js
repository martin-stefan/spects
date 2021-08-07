import React, { useState } from 'react';

const StatsBar = () => {

  const [viewStat, switchStat] = useState(false);


  const handleClickStats = () => {
    switchStat(!viewStat);
  }

  return (
    <div className={viewStat ? "stats show": "stats hide"}>

      <div className="stats__heading">
        <p className="stats__balance">
          5000
        </p>
        <h4 className="stats__header">
          Stats
        </h4>
        <button className="stats__edit">
          Edit
        </button>
      </div>

      <div className="stats__list">
        
        <div className="stats__item">
          <p className="stat__name">Physics:</p>
          <p className="stat__num">12/15</p>
          <p className="stat__edit">-</p>

        </div>

        <div className="stats__item">
          <p className="stat__name">English:</p>
          <p className="stat__num">1/5</p>
          <p className="stat__edit">-</p>
          
        </div>

        <div className="stats__item">
          <p className="stat__name">Science:</p>
          <p className="stat__num">2/2</p>
          <p className="stat__edit">-</p>

        </div>

        <div className="stats__item">
        <p className="stat__name">Add More:</p>
          <p className="stat__edit">+</p>
        </div>

        <div className="stats__item" id="total">
          <p className="stat__name">Total:</p>
          <p className="stat__num">15/22</p>

        </div>


        <div className="close">
          <button className="trap" onClick={() => handleClickStats()}>
            <p className="trap__svg">o</p>
          </button>
        </div>

      </div>

    </div>
  );
}

export default StatsBar;