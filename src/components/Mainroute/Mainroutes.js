import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signin from '../View/Signin'
import Signup from '../View/Signup'
import Subcriptions from '../View/Subcriptions'
import {Watchlist} from '../View/Watchlist'
import { TradingView } from '../View/TradingView'
import { Holdings } from '../View/Holdings'
import { DashboardHome } from '../View/DashboardHome';
import UserProfile from '../View/UserProfile'
import { ChakraProvider } from '@chakra-ui/react'
import { Positionings } from '../View/Positionings'
import { Funds } from '../View/Funds'
import Orders from '../View/Orders'






export const Mainroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/signup' element={<Signup/>} />
            <Route path="/signin" element={<Signin/>} />
            <Route path="/" element={<DashboardHome  />} />
            <Route path="/tradingview" element={<TradingView />} />
            <Route path="/profile" element={<UserProfile  />} />
            <Route path='/holdings'  element={<Holdings />} />
            <Route path='/positions'  element={<Positionings />} />
            <Route path='/funds'   element={<Funds />}  />
            <Route path='/order'  element={<Orders  />} />
        </Routes>
    </div>
  )
}
