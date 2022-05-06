import React, { useState } from 'react';
import { useEffect } from 'react';
import Slider from 'react-touch-drag-slider';

import './newCard.css';
const cardComp = () => {
  const [pepole, setPepole] = useState([]);
  useEffect(() => {
    fetch('https://myapp8860.herokuapp.com/card')
      .then(
        (response) => response.json()
        // console.log(response)
      )
      .then((data) => setPepole(data))
      .catch((error) => console.log(err));
  }, []);
  
  return (
    <div className="cards">
      <Slider
        activeIndex={0}
        threshHold={100}
        transition={0.4}
        scaleOnDrag={true}
      >
        {pepole.map((val, index) => {
          return (
            <div className="childs" key={index}>
              <img src={val.url} key={val.index} />

              <p key={index}>{val.name}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default cardComp;
