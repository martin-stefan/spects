import React, { useState, useEffect} from 'react';

const Market = () => {

  const [viewed, setView] = useState(false);


  function handleClickPop() {
    setView(!viewed);
  }

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

          <img className="item__img__placeholder" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.rxwallpaper.site%2Fwp-content%2Fuploads%2Ffuture-city-wallpapers-wallpaper-cave-1-800x800.jpg&f=1&nofb=1"/>

          <div className="item__buttons">
            <button className="seemore">See more</button>
            <button className="buy">Buy</button>
          </div>
        </div>

        <div className="market__item">


          <div className="item__header">
            <p className="item__title">
              Color theme
            </p>

            <p className="item__cost">
              3000
            </p>

          </div>

          <img className="item__img__placeholder" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.rxwallpaper.site%2Fwp-content%2Fuploads%2Ffuture-city-wallpapers-wallpaper-cave-1-800x800.jpg&f=1&nofb=1"/>

          <div className="item__buttons">
            <button className="seemore" onClick={() => handleClickPop()}>See more</button>
            <button className="buy">Buy</button>
          </div>
        </div>

      </div>


      <div className={viewed ? "item__pop": "hidden"}>

        <div className="pop__content">
          <div className="pop__header">
            <h3 className="pop__title">Item Item</h3>
            <p className="pop__price">500</p>
            <p className="pop__exit">Close</p>
          </div>


          <div className="pop__img">
            here are images of what it will look like
          </div>

          <button className="pop__buy">Buy now</button>
        </div>
      </div>

    </div>
  );
}

export default Market;