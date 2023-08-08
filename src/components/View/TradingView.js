import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';


export const TradingView = () => {


  return (
    <>
    
    <div style={{width:"100%", margin:"auto", height:"850px", padding:"0px 5px 0px 0px"}}>
      
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
