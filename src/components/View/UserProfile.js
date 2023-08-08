// import { Switch } from '@chakra-ui/react';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import profile from "../../assets/profile.jpeg"

import React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { Switch } from '@mui/material';


const UserProfile = () => {
  return (
    <>
      <div className='userprofile'>
        <div className='pps'>
        <div><h3>Profile</h3></div>
        <div><p>Password & Security</p></div>
      </div>
      <hr/>
      <div className='profile-section'>
        <div className='profile-button'>
            <Avatar sx={{ width: 90, height: 90 }} src={profile} />
            <Button sx={{fontSize:"12px", color:"#4001CE", marginTop:"5px" }} variant="text">Change Photo</Button>
        </div> 
        <div className='profile-username'>
          <p>Sunil Verma</p>
        </div>
      </div>
      <hr />
      <div className='accounts-settings'>
          <div className='accounts-bankac'>
               <div className='account'>
                  <div className='account-common-div'>
                    <p>Account</p>
                    <p>Manage</p>
                  </div>
                  <hr />
                  <div className='account-segment'>
                    <div className='account-key'>
                      <p>Support Code</p>
                      <p>E-mail</p>
                      <p>PAN</p>
                      <p>Phone</p>
                      <p>Demat (BO)</p>
                      <p>Segments</p>
                      <p>Demat authorisation</p>
                    </div>
                    <div className='account-value'>
                      <p>View</p>
                      <p>sunilverma@gmail.com</p>
                      <p>*123C</p>
                      <p>*1234</p>
                      <p>120000000111111</p>
                      <p>NFO, MF, CDS, MCX, BSE, NSE</p>
                      <p>POA</p>
                    </div>
                  </div>
               </div>
               <div className='bank-account'></div>
          </div>
          <div className='accounts-bankac'>
               <div className='account'>
                  <div className='account-common-div'>
                    <p>Bank Accounts</p>
                    <p>Manage</p>
                  </div>
                  <hr />
                  <div className='account-segment'>
                    <div className='account-key'>
                      <p>*1234 ICICI BANK</p>
                      {/* <p>E-mail</p>
                      <p>PAN</p>
                      <p>Phone</p>
                      <p>Demat (BO)</p>
                      <p>Segments</p>
                      <p>Demat authorisation</p> */}
                    </div>
                    <div className='account-value'>
                      {/* <p>View</p>
                      <p>sunilverma@gmail.com</p>
                      <p>*123C</p>
                      <p>*1234</p>
                      <p>120000000111111</p>
                      <p>NFO, MF, CDS, MCX, BSE, NSE</p>
                      <p>POA</p> */}
                    </div>
                  </div>
               </div>
               <div className='bank-account'></div>
          </div>
      </div>

      <div className='accounts-settings'>
          <div className='accounts-bankac'>
               <div className='account'>
                  <div className='account-common-div'>
                    <p>Settings</p>
                    <p>Manage</p>
                  </div>
                  <hr />
                  <div className='account-segment'>
                    <div className='account-key'>
                      <p>Chart</p>
                      <p>Theme</p>
                      <p>Instant order updates</p>
                      <p>Sticky order window</p>
                      {/* <p>Demat (BO)</p>
                      <p>Segments</p>
                      <p>Demat authorisation</p> */}
                    </div>
                    <div className='account-value'>
                      <div className='profile-check-box'><div><input type='radio' /> <label>ChartIQ</label></div><div><input type='radio' /> <label>TradingView</label></div></div>
                      <div className='profile-check-box'><div><input type='radio' /> <label>Default</label></div><div><input type='radio' /> <label>Dark</label></div></div>
                      
                      {/* <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                      </div>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                      </div> */}
                      <div class="form-check form-switch profile-check-switch"><input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" /></div>
                      <div class="form-check form-switch profile-check-switch"><input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" /></div>
                    </div>
                  </div>
               </div>
               <div className='bank-account'></div>
          </div>
          <div className='accounts-bankac'>
               <div className='account'>
                  <div className='account-common-div'>
                    <p>Sessions</p>
                    <p>Clear all</p>
                  </div>
                  <hr />
                  <div className='account-segment'>
                    <div className='account-key'>
                      <p>. web</p>
                      {/* <p>E-mail</p>
                      <p>PAN</p>
                      <p>Phone</p>
                      <p>Demat (BO)</p>
                      <p>Segments</p>
                      <p>Demat authorisation</p> */}
                    </div>
                    <div className='account-value'>
                      {/* <p>View</p>
                      <p>sunilverma@gmail.com</p>
                      <p>*123C</p>
                      <p>*1234</p>
                      <p>120000000111111</p>
                      <p>NFO, MF, CDS, MCX, BSE, NSE</p>
                      <p>POA</p> */}
                    </div>
                  </div>
               </div>
               <div className='bank-account'></div>
          </div>
      </div>


      </div>
    </>
  )
}

export default UserProfile;
