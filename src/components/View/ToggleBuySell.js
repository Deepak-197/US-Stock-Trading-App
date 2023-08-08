// import React, { useState } from 'react';
// import AlternateDiv from './Alternative';
// import DefaultDiv from './DefaultDiv';
// // import './App.css';


// function ToggleBuySell({header}) {
//   const [isSwitchOn, setIsSwitchOn] = useState(false);

//   const toggleSwitch = () => {
//     setIsSwitchOn((prev) => !prev);
//   };

//   return (
//     <div className="toggleBuySell">
//       <div className="switch-container">
//         <label className="switch">
//           <input type="checkbox" checked={isSwitchOn} onChange={toggleSwitch} />
//           <span className="slider round"></span>
//         </label>
//       {isSwitchOn ? <AlternateDiv value={header} /> : <DefaultDiv value={header} />}
//       </div>
//     </div>
//   );
// }

// export default ToggleBuySell;


import React, { useState } from 'react';
// import './App.css';
import DefaultDiv from './DefaultDiv';
import AlternateDiv from './Alternative';
// import AlternateDiv from './AlternateDiv';

function ToggleBuySell({header}) {
  const [activeButton, setActiveButton] = useState('default');

  const handleClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="App">
      <div className="button-container">
        <button
          className={`option-button ${activeButton === 'default' ? 'active-default' : ''}`}
          onClick={() => handleClick('default')}
        >
          BUY
        </button>
        <button
          className={`option-button ${activeButton === 'alternate' ? 'active-alternate' : ''}`}
          onClick={() => handleClick('alternate')}
        >
          SELL
        </button>
      </div>
      {activeButton === 'default' ? <DefaultDiv value={header} /> : <AlternateDiv value={header} />}
    </div>
  );
}

export default ToggleBuySell;
