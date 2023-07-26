import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signin from '../View/Signin'
import Signup from '../View/Signup'
import Subcriptions from '../View/Subcriptions'
import {Watchlist} from '../View/Watchlist'
import { TradingView } from '../View/TradingView'
import { HoldingandPositioning } from '../View/HoldingandPositioning'





export const Mainroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/signup' element={<Signup/>} />
            <Route path="/signin" element={<Signin/>} />
            <Route path="/" element={<Subcriptions/>} />
            <Route path='/watchlist' element={<Watchlist />} />
            <Route path='/dashboard' element={<TradingView />} />
            <Route path='/holding' element={<HoldingandPositioning />} />
        </Routes>
    </div>
  )
}
