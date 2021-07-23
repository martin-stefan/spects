import React from 'react'; 

const StatsBar = () => {
  return (
    <div className="stats">

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
          <div className="trap"></div>
        </div>

      </div>

    </div>
  );
}

export default StatsBar;