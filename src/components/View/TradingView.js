import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import Navbar from './Navbar';

export const TradingView = () => {


  return (
    <>
    <Navbar />
    <div style={{width:"70%", margin:"100px auto", height:"700px"}}>
      <h1 style={{textAlign:"left"}}>Trading View</h1>
       <div style={{height:"100%"}}>
        <TradingViewWidget
            symbol="NASDAQ:AAPL"
            theme={Themes.LIGHT}
            locale="fr"
            autosize
        />
        </div>
    </div>
    </>
  )
}
