import React, { useState } from 'react';
// import './App.css';
import DefaultDiv from './DefaultDiv';
import AlternateDiv from './Alternative';
// import AlternateDiv from './AlternateDiv';

function ToggleSellBuy({header}) {
  const [activeButton, setActiveButton] = useState('alternate');

  const handleClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="App">
      <div className="button-container">
      <button
          className={`option-button ${activeButton === 'alternate' ? 'active-alternate' : ''}`}
          onClick={() => handleClick('alternate')}
        >
          SELL
        </button>
        <button
          className={`option-button ${activeButton === 'default' ? 'active-default' : ''}`}
          onClick={() => handleClick('default')}
        >
          BUY
        </button>
      </div>
      {activeButton === 'default' ? <DefaultDiv value={header} /> : <AlternateDiv value={header} />}
    </div>
  );
}

export default ToggleSellBuy;