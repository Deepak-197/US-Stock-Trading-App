import React from 'react';
import dashlogo from "../../assets/dash-page-logo.svg";
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Marketview } from './MarketView';
import PositionChart from './PositionChart';


export const DashboardHome = () => {
  return (
    <>
      <div className='dashboard-main'>
        <div className='profile-name'>
          <h1>
            Hii, <br />
            Sunil Verma
          </h1>
        </div>
        <div className='equitycommodity'>

          {/* 1st div */}
          <div className='card-div'>
            <div className='logo-name-flex-first'>
              <div className='logo-circle'>
                <img src={dashlogo} />
              </div>
              <div className='logo-name'>
                <p>Equity</p>
              </div>
            </div>
            <div className='margin-opening'>
              <div>
                <h1>6.93L</h1>
                <p>Margin available</p>
              </div>
              <hr className='divider' />
              <div>
                <p>Margins used : <span>0L</span></p>
                <p>Opening balance : <span>0</span></p>
              </div>
            </div>
            <div className='view-statement'>
              View statement <ChevronDownIcon />
            </div>
          </div>

          {/* 2nd div */}

          <div className='card-div'>
            <div className='logo-name-flex'>
              <div className='logo-circle'>
                <img src={dashlogo} />
              </div>
              <div className='logo-name'>
                <p>Commodity</p>
              </div>
            </div>
            <div className='margin-opening'>
              <div>
                <h1>6.93L</h1>
                <p>Margin available</p>
              </div>
              <hr className='divider' />
              <div>
                <p>Margins used : <span>0L</span></p>
                <p>Opening balance : <span>0</span></p>
              </div>
            </div>
            <div className='view-statement'>
              View statement <ChevronDownIcon />
            </div>
          </div>

        </div>

        <hr />
          
        <div className='Holding'>
          <div className='logo-name-flex-tried'>
            <div className='logo-circle'>
              <img src={dashlogo} />
            </div>
            <div className='logo-name'>
              <p>Holding(2)</p>
            </div>
          </div>
          <div className='margin-opening-third'>
            <div>
              <h1>2.24k</h1>
              <p className='holding-p'>+16.90%</p>
            </div>
            <hr className='divider' />
            <div>
              <p>Current value : <span>15.46k</span></p>
              <p>Investment : <span>13.23k</span></p>
            </div>
          </div>
          <p className='pricel'>P&L</p>
          <div className='bar-chart'>
              <div></div>
              <div></div>
              <div></div>
          </div>
          <div className='radio-selection'>
            <div><input type='radio' /> <label>Current Value</label></div>
            <div><input type='radio' /> <label>Investment</label></div>
            <div><input type='radio' /> <label>P&L</label></div>
          </div>
        </div>

        <hr />

        <div className='equitycommodity'>

          {/* 1st div */}
          <div className='card-div'>
            <div className='logo-name-flex-fourth'>
              <div className='logo-circle'>
                <img src={dashlogo} />
              </div>
              <div className='logo-name'>
                <p>Market Overview</p>
              </div>
            </div>
            <div className='marketview-chart'>
              
              <Marketview />
            </div>
            
          </div>

          {/* 2nd div */}

          <div className='card-div'>
            <div className='logo-name-flex'>
              <div className='logo-circle'>
                <img src={dashlogo} />
              </div>
              <div className='logo-name'>
                <p>Positions</p>
              </div>
            </div>
            <div className='marketview-chart'>
                <PositionChart />
            </div>
          </div>

        </div>

      </div>
    </>
  )
}
