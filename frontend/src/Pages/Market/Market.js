import React from 'react';

const Market = () => {
  return (
    <div className="market">

    
      
      <p className="market__balance">Balance: 5000</p>


      <div className="market__items">
        <div className="market__item">


          <div className="item__header">
            <p className="item__title">
              Color theme
            </p>

            <p className="item__cost">
              3000
            </p>

          </div>

          <div className="item__img__placeholder">this is a placeholder for an img</div>

          <div className="item__buttons">
            <button className="seemore">See more</button>
            <button className="buy">Buy</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Market;