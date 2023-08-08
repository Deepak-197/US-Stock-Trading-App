import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {
  Input, InputGroup, InputLeftElement, Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  
} from '@chakra-ui/react';
import { ChevronDownIcon, SearchIcon, SettingsIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { favoriteTable, marketdepth, stockTable } from './Constant';
import Framelogo from "../../assets/Frame.svg"
import Growup from "../../assets/growup.svg"
import MenuIcon from "../../assets/menu.svg"
import SettingMenu from './SettingMenu';
import { ThreeDotsMenu } from './ThreeDotsMenu';
import { BuyModel } from './BuyModel';
import { SellModel } from './SellModel';
import Statusbid from './Statusbid';
import { useNavigate } from 'react-router-dom';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';




export const CompanyList = () => {
   
  const [isDivOpen, setDivOpen] = useState(false);
  const navigate = useNavigate()
  const [currentlist, setCurrentlist] = useState(stockTable)
  const [myList, setMylist] = useState(stockTable)
  const [favoriteList, setfavoriteList] = useState(favoriteTable)

  const handleViewChange = (view) => {
    setCurrentlist(view)
  }

  const handleButtonClick = () => {
    setCurrentlist(myList)
    setDivOpen(!isDivOpen);
    navigate("/tradingview")
  };

  const handleTradingView = () => {
    
    navigate("/tradingview")
  }

  const positiveClass = 'positive';
  const negativeClass = 'negative';


  return (
    <>
      <div className='company-list-main'>
        <div className='company-list'>
          <div className='nifty-sensex'>
            <p>NIFTY 50</p>
            <p>229861.05</p>
            <p>0.25%</p>
            <p>SENSEX</p>
            <p>-0.06%</p>
          </div>

          <Box
            className='search-box'
          >

            <InputGroup >
              <InputLeftElement >
                <SearchIcon color='#9c9c9c' mt={"5px"} ml={"10px"} />
              </InputLeftElement>
              <Input type='text' size='lg' placeholder='Search' width={"90%"}
                focusBorderColor='none' border={"none"} ml={30} color={"#9c9c9c"}
                focasBorder="none"
              />
            </InputGroup>

          </Box>
          <Box className='options-grid'>
            <Button onClick={() => handleViewChange(myList)} className='option-grid-child' variant="outlined">
              My list
            </Button>
            <Button onClick={() => handleViewChange(favoriteList)} className='option-grid-child' variant="outlined">
              Favorites
            </Button>
            <Button className='option-grid-child' variant="outlined">
              Must watch
            </Button>
            <Button className='option-grid-child' variant="outlined">
              Low Priority
            </Button>
            <Button className='option-grid-child' variant="outlined">
              {/* <SettingsIcon fontSize={15} /> */}
              <SettingMenu />
            </Button>

          </Box>
          <Box className='table-data-list'>

            <TableContainer w={"100%"} mt={"20px"}>
              <Table variant='striped' colorScheme='teal' w={"100%"}>
                {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}

                {/* <Thead h={"40px"}>
                                            <Tr>
                                                <Th></Th>
                                                <Th></Th>
                                                <Th></Th>
                                                <Th></Th>
                                                
                                            </Tr>
                                        </Thead> */}

                <Tbody w={"100%"} mt={'20px'}>
                {currentlist === myList && (
                 <>
                  {stockTable.map((e) => {
                    return (
                      <Box key={e.stock} w={"100%"} >
                        <Tr w={"100%"} className='tabledata'>
                          <Td className='stock-data-logo' ><img src={e.image} /></Td>
                          <Td className={`stock-data-text ${(Number(e.stock) >= 0) ? positiveClass : negativeClass}`} >{e.title}</Td>
                          <Td className="stock-data-stock"> {e.stock}% {e.stock >= 0 ? <ChevronUpIcon color='green' /> : <ChevronDownIcon color='red' />}</Td>
                          <Td className={`stock-data-stock ${(Number(e.stock) >= 0) ? positiveClass : negativeClass}`}>{e.price}</Td>

                        </Tr>
                        <hr />
                      </Box>
                    )
                  })}
                  </>
                )}
                {currentlist === favoriteList && (
                 <>
                  {favoriteTable.map((e) => {
                    return (
                      <Box key={e.stock} w={"100%"} >
                        <Tr w={"100%"} className='tabledata'>
                          <Td className='stock-data-logo' ><img src={e.image} /></Td>
                          <Td className={`stock-data-text ${(Number(e.stock) >= 0) ? positiveClass : negativeClass}`} >{e.title}</Td>
                          <Td className="stock-data-stock"> {e.stock}% {e.stock >= 0 ? <ChevronUpIcon color='green' /> : <ChevronDownIcon color='red' />}</Td>
                          <Td className={`stock-data-stock ${(Number(e.stock) >= 0) ? positiveClass : negativeClass}`}>{e.price}</Td>

                        </Tr>
                        <hr />
                      </Box>
                    )
                  })}
                  </>
                )}
                </Tbody>


              </Table>
            </TableContainer>
          </Box>

                <div className='marketdepth-div'>{isDivOpen && <div className='marketdepth'> 
                  <hr />
                  <div className='marketdepthchart'>
                    <div>
                      <TableContainer>
                        <Table w={"100%"}>
                          <Thead >
                             <Tr className='marketdepthtable'>
                                <Th className='marketdepthtable'>BID</Th>
                                <Th className='marketdepthtable'>ORDERS</Th>
                                <Th className='marketdepthtable'>QTY.</Th>
                              </Tr>
                          </Thead>
                          <Tbody>
                          {marketdepth.map((item) => (
                            <>
                              <Tr className='marketdepthbody'>
                                <Td className='marketdepthbody'>{item.bid}</Td>
                                <Td className='marketdepthbody'>{item.order}</Td>
                                <Td className='marketdepthbody'>{item.qty}</Td>
                              </Tr>
                              
                            </>
                          ))}
                          <Tr>
                                <Td className='marketdepthbody'>Total</Td>
                                <Td className='marketdepthbody'></Td>
                                <Td className='marketdepthbody'>0</Td>
                              </Tr>

                              <Tr className='marketdepthtabdown' >
                                 <Td className='marketdepthtabdown'>Open</Td>
                                 <Td className='marketdepthtabdown'>N/A</Td>
                              </Tr>
                              <Tr className='marketdepthtabdown' mt={"20px"}>
                                 <Td className='marketdepthtabdown'>Low</Td>
                                 <Td className='marketdepthtabdown'>N/A</Td>
                              </Tr>
                              <Tr className='marketdepthtabdown' mt={"20px"}>
                                 <Td className='marketdepthtabdown'>Volume</Td>
                                 <Td className='marketdepthtabdown'>N/A</Td>
                              </Tr>
                              <Tr className='marketdepthtabdown' mt={"20px"}>
                                 <Td className='marketdepthtabdown'>LTQ</Td>
                                 <Td className='marketdepthtabdown'>N/A</Td>
                              </Tr>
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </div>
                    <hr className='tbodydivider' />
                    <div>
                      <TableContainer>
                        <Table w={"100%"}>
                          <Thead >
                             <Tr className='marketdepthtable'>
                                <Th className='marketdepthtable'>BID</Th>
                                <Th className='marketdepthtable'>ORDERS</Th>
                                <Th className='marketdepthtable'>QTY.</Th>
                              </Tr>
                          </Thead>
                          <Tbody>
                          {marketdepth.map((item) => (
                            <>
                              <Tr className='marketdepthbodyred'>
                                <Td className='marketdepthbodyred'>{item.bid}</Td>
                                <Td className='marketdepthbodyred'>{item.order}</Td>
                                <Td className='marketdepthbodyred'>{item.qty}</Td>
                              </Tr>
                              
                            </>
                          ))}
                          <Tr>
                                <Td className='marketdepthbodyred'>Total</Td>
                                <Td className='marketdepthbodyred'></Td>
                                <Td className='marketdepthbodyred'>0</Td>
                              </Tr>

                            
                              <Tr className='marketdepthtabdown' >
                                 <Td className='marketdepthtabdown'>High</Td>
                                 <Td></Td>
                                 <Td className='marketdepthtabdown'>N/A</Td>
                              </Tr>
                              <Tr className='marketdepthtabdown' mt={"20px"}>
                                 <Td className='marketdepthtabdown'>Prev. Close</Td>
                                 <Td></Td>
                                 <Td className='marketdepthtabdown'>N/A</Td>
                              </Tr>
                              <Tr className='marketdepthtabdown' mt={"20px"}>
                                 <Td className='marketdepthtabdown'>Avg.price</Td>
                                 <Td></Td>
                                 <Td className='marketdepthtabdown'>N/A</Td>
                              </Tr>
                              <Tr className='marketdepthtabdown' mt={"20px"}>
                                 <Td className='marketdepthtabdown'>0.LTQ</Td>
                                 <Td></Td>
                                 <Td className='marketdepthtabdown'>2023-05-10</Td>
                              </Tr>
                            
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </div>
                  </div>
                 </div>}</div>
          <Box className='botton-buttons'>
             <Button variant="contained" sx={{backgroundColor:"#3500D4"}}><BuyModel /></Button>
             <Button variant="contained" sx={{backgroundColor:"#F61C7A"}}><SellModel /></Button>
             <Button variant="outlined"  sx={{border:"1px solid rgb(212, 212, 212)"}} onClick={handleButtonClick}><img width={20} src={Framelogo} /> </Button>
             <Button variant="outlined" sx={{border:"1px solid rgb(212, 212, 212)"}}  onClick={handleTradingView}><LegendToggleIcon sx={{color:'gray'}} /></Button>
             <Button variant="outlined">
             {/* <img width={40} src={MenuIcon} style={{mixBlendMode:"darken"}} /> */}
               <ThreeDotsMenu />
             </Button>
          </Box>

        </div>

      </div>
    </>
  )
}
