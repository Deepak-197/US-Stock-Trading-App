import React from 'react';
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Navbar from './Navbar';
import {
  Input, InputGroup, Stack, InputLeftElement,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  ChakraProvider,
} from '@chakra-ui/react';
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons';
import { Button, Divider, Tabs, alertClasses } from '@mui/material';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import { alertTable, auctionTable, basketTable, executedOrders, gttTable, ipoTable, openOrders } from "./Constant";


const Orders = () => {

  const [value, setValue] = React.useState("1");



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>

      <div className='holdings'>



        <div
          style={{
            margin: "auto",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                {/* <TabList  */}
                  
                
                 <Tabs value={value}
                   onChange={handleChange}
                    textColor="secondary"
                     indicatorColor="secondary"
                     aria-label="secondary tabs example"
                 >
                  <Tab indicatorColor="secondary" className='tablist-design' label="Orders" value="1" />
                  <Tab className='tablist-design' label="gtc" value="2" />
                  <Tab className='tablist-design' label="Baskets" value="3" />
                  <Tab className='tablist-design' label="Alerts" value="4" />
                  <Tab className='tablist-design' label="IPO" value="5" />
                  <Tab className='tablist-design' label="Auctions" value="6" />
                  </Tabs>
            {/* </TabList> */}
              </Box>
              <TabPanel value="1">
                <TableContainer w={"100%"}  mt={30}>
                  <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex" }}>
                      <h3 style={{ textAlign: "left", color: "#03314B", fontWeight: "500" }}>Open orders ({openOrders.length})</h3>

                    </div>
                    <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                      <Button startIcon={<SaveAltIcon />}>Download</Button>
                      {/* variant="outlined"   remove variant from button */}
                       {/* <Button sx={{ margin: "0px 15px 0px 0px", background: "linear-gradient(to left right, #5304C5, #82ffa1)" }} startIcon={<AnalyticsIcon />}>Analytics</Button> */}
                      <ChakraProvider>
                        <InputGroup w={"180px"} mr={5} >
                          <InputLeftElement pointerEvents='none'>
                            <SearchIcon color='gray.300' />
                          </InputLeftElement>
                          <Input type='text' placeholder='Search' />
                        </InputGroup>
                      </ChakraProvider>
                    </div>


                  </div>
                  <Table variant='simple' colorScheme='teal' w={"100%"} mt={20}>

                    <Thead h={"40px"} color={"#8198A5"}>
                      <Tr color={"#8198A5"} >
                        <Th></Th>
                        <Th textAlign={"left"} color={"#8198A5"}>Time<ChevronDownIcon /></Th>
                        <Th textAlign={"left"} color={"#8198A5"}>Type<ChevronDownIcon /></Th>
                        <Th textAlign={"left"} color={"#8198A5"}>Instrument<ChevronDownIcon /></Th>
                        <Th textAlign={"left"} color={"#8198A5"}>Product<ChevronDownIcon /></Th>
                        <Th color={"#8198A5"}>Qty. <ChevronDownIcon color={"#8198A5"} /></Th>
                        <Th color={"#8198A5"}>LTP <ChevronDownIcon color={"#8198A5"} /></Th>
                        <Th color={"#8198A5"}>Price <ChevronDownIcon color={"#8198A5"} /></Th>
                        <Th color={"#8198A5"}>Status<ChevronDownIcon color={"#8198A5"} /></Th>
                      </Tr>
                    </Thead>

                    <Tbody>
                      {
                        openOrders.map((item, index) => {
                          return (
                            <>
                              <Tr h={"40px"} border={"1px solid #FFF"}>
                                <Td> <input type='checkbox' /> </Td>
                                <Td color={"#8198A5"} textAlign={"left"} fontSize={"12px"}>13:19:12</Td>
                                <Td textAlign={"left"} fontSize={"12px"} color={item.type === "BUY" ? "#4201CD" : "#DF863D"}>{item.type}</Td>
                                <Td color={"#000"} textAlign={"left"} fontSize={"12px"}>{item.title}</Td>
                                <Td textAlign={"left"} fontSize={"12px"} color={"#000"}>{item.product}</Td>
                                <Td textAlign={"center"} color={"#000"} fontSize={"13px"}>{item.quantity}</Td>
                                <Td textAlign={"center"} color={"#000"} fontSize={"13px"}>{item.ave_quan}</Td>
                                <Td textAlign={"center"} color={"#000"} fontSize={"13px"} isNumeric>{item.ltp}</Td>
                                <Td textAlign={"center"} color={"#8198A5"} backgroundColor={"gray.600"} fontSize={"13px"} isNumeric>{item.Status}</Td>
                                
                              </Tr>
                            </>
                          )
                        })
                      }

                    </Tbody>

                  </Table>
                </TableContainer>
                <TableContainer w={"100%"} mt={80}>
                  <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex" }}>
                      <h3 style={{ textAlign: "left", color: "#03314B", fontWeight: "500" }}>Executed Orders (5)</h3>

                    </div>
                    <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                      <Button startIcon={<SaveAltIcon />}>Download</Button>
                      {/* variant="outlined"   remove variant from button */}
                      <Button sx={{margin:"0px 15px 0px 0px", background: "linear-gradient(to left right, #5304C5, #82ffa1)"}}  >View history</Button>
                      <ChakraProvider>
                        <InputGroup w={"180px"} mr={5} >
                          <InputLeftElement pointerEvents='none'>
                            <SearchIcon color='gray.300' />
                          </InputLeftElement>
                          <Input type='text' placeholder='Search' />
                        </InputGroup>
                      </ChakraProvider>
                    </div>


                  </div>
                  <Table variant='simple' colorScheme='teal' w={"100%"} mt={20}>
                    <Thead h={"40px"} color={"#8198A5"}>
                      <Tr color={"#8198A5"} >
                      <Th></Th>
                        <Th textAlign={"left"} color={"#8198A5"}>Time<ChevronDownIcon /></Th>
                        <Th textAlign={"left"} color={"#8198A5"}>Type<ChevronDownIcon /></Th>
                        <Th textAlign={"left"} color={"#8198A5"}>Instrument<ChevronDownIcon /></Th>
                        <Th textAlign={"left"} color={"#8198A5"}>Product<ChevronDownIcon /></Th>
                        <Th color={"#8198A5"}>Qty. <ChevronDownIcon color={"#8198A5"} /></Th>
                        <Th color={"#8198A5"}>LTP <ChevronDownIcon color={"#8198A5"} /></Th>
                        <Th color={"#8198A5"}>Price <ChevronDownIcon color={"#8198A5"} /></Th>
                        <Th color={"#8198A5"}>Status<ChevronDownIcon color={"#8198A5"} /></Th>
                      </Tr>
                    </Thead>

                    <Tbody>
                      {
                        executedOrders.map((item, index) => {
                          return (
                            <>
                              <Tr h={"40px"} border={"1px solid #FFF"}>
                                <Td> <input type='checkbox' /> </Td>
                                <Td fontWeight={500} color={"#8198A5"} textAlign={"left"} fontSize={"12px"}>13:19:12</Td>
                                <Td textAlign={"left"} fontSize={"12px"} color={item.type === "BUY" ? "#4201CD" : "#DF863D"}>{item.type}</Td>
                                <Td color={"#000"} textAlign={"left"} fontSize={"12px"}>{item.title}</Td>
                                <Td textAlign={"left"} fontSize={"12px"} color={"#000"}>{item.product}</Td>
                                <Td textAlign={"center"} color={"#000"} fontSize={"13px"}>{item.quantity}</Td>
                                <Td textAlign={"center"} color={"#000"} fontSize={"13px"}>{item.ave_quan}</Td>
                                <Td textAlign={"center"} color={"#000"} fontSize={"13px"} isNumeric>{item.ltp}</Td>
                                <Td fontWeight={500} textAlign={"center"} color={item.Status === "REJECTED" ? "#DF5170" : item.Status === "COMPLETE" ? "#4CAF50" : "#000"} backgroundColor={"gray.600"} fontSize={"13px"} isNumeric>{item.Status}</Td>
                              </Tr>
                            </>
                          )
                        })
                      }

                    </Tbody>

                  </Table>
                </TableContainer>

              </TabPanel>

              <TabPanel value="2">
              <TableContainer w={"100%"}  mt={30}>
                  <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex" }}>
                      <h3 style={{ textAlign: "left", color: "#03314B", fontWeight: "500" }}>GTC ({gttTable.length})</h3>

                    </div>
                    <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                      <Button startIcon={<SaveAltIcon />}>Download</Button>
                      {/* variant="outlined"   remove variant from button */}
                       {/* <Button sx={{ margin: "0px 15px 0px 0px", background: "linear-gradient(to left right, #5304C5, #82ffa1)" }} startIcon={<AnalyticsIcon />}>Analytics</Button> */}
                      <ChakraProvider>
                        <InputGroup w={"180px"} mr={5} >
                          <InputLeftElement pointerEvents='none'>
                            <SearchIcon color='gray.300' />
                          </InputLeftElement>
                          <Input type='text' placeholder='Search' />
                        </InputGroup>
                      </ChakraProvider>
                     <Button sx={{ borderRadius:"30px", marginRight:"20px", width:"100px", height:"30px", marginTop:"5px"}}>New GTC</Button>
                    </div>


                  </div>
                  <Table variant='simple' colorScheme='teal' w={"100%"} mt={20}>

                    <Thead h={"40px"} color={"#8198A5"}>
                      <Tr color={"#8198A5"} >
                        {/* <Th></Th> */}
                        <Th textAlign={"left"} color={"#8198A5"}>Created on<ChevronDownIcon /></Th>
                        <Th textAlign={"left"} color={"#8198A5"}>Instrument<ChevronDownIcon /></Th>
                        <Th textAlign={"left"} color={"#8198A5"}>Type<ChevronDownIcon /></Th>
                        <Th textAlign={"left"} color={"#8198A5"}>Trigger<ChevronDownIcon /></Th>
                        <Th color={"#8198A5"}>LTP <ChevronDownIcon color={"#8198A5"} /></Th>
                        <Th color={"#8198A5"}>Qty. <ChevronDownIcon color={"#8198A5"} /></Th>
                        {/* <Th color={"#8198A5"}>Price <ChevronDownIcon color={"#8198A5"} /></Th> */}
                        <Th color={"#8198A5"}>Status<ChevronDownIcon color={"#8198A5"} /></Th>
                      </Tr>
                    </Thead>

                    <Tbody>
                      {
                        gttTable.map((item, index) => {
                          return (
                            <>
                              <Tr h={"40px"} border={"1px solid #FFF"}>
                                {/* <Td> <input type='checkbox' /> </Td> */}
                                <Td color={"#8198A5"} textAlign={"left"} fontSize={"12px"}>2023-05-09</Td>
                                <Td color={"#000"} textAlign={"left"} fontSize={"12px"}>{item.title}</Td>
                                <Td textAlign={"left"} fontSize={"12px"} color={item.type === "BUY" ? "#4201CD" : "#DF863D"}>{item.type}</Td>
                                <Td textAlign={"left"} fontSize={"12px"} color={"#000"}>{item.product}</Td>
                                <Td textAlign={"center"} color={"#000"} fontSize={"13px"} isNumeric>{item.ltp}</Td>
                                <Td textAlign={"center"} color={"#000"} fontSize={"13px"}>{item.quantity}</Td>
                                {/* <Td textAlign={"center"} color={"#000"} fontSize={"14px"}>{item.ave_quan}</Td> */}
                                <Td fontWeight={500} textAlign={"center"} color={item.Status === "ACTIVE" ? "#27AE60" : "#EB5757"} backgroundColor={"gray.600"} fontSize={"13px"}>{item.Status}</Td>
                                
                              </Tr>
                            </>
                          )
                        })
                      }

                    </Tbody>

                  </Table>
                </TableContainer>
              </TabPanel>

              <TabPanel value="3">
              <TableContainer w={"100%"}  mt={30}>
                  <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex" }}>
                      <h3 style={{ textAlign: "left", color: "#03314B", fontWeight: "500" }}>Baskets ({basketTable.length})</h3>

                    </div>
                    <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                      {/* <Button startIcon={<SaveAltIcon />}>Download</Button> */}
                      {/* variant="outlined"   remove variant from button */}
                       {/* <Button sx={{ margin: "0px 15px 0px 0px", background: "linear-gradient(to left right, #5304C5, #82ffa1)" }} startIcon={<AnalyticsIcon />}>Analytics</Button> */}
                      <ChakraProvider>
                        <InputGroup w={"180px"} mr={5} >
                          <InputLeftElement pointerEvents='none'>
                            <SearchIcon color='gray.300' />
                          </InputLeftElement>
                          <Input type='text' placeholder='Search' />
                        </InputGroup>
                      </ChakraProvider>
                     <Button sx={{ borderRadius:"30px", marginRight:"25px", width:"150px", height:"30px", marginTop:"5px"}}>New Baskets</Button>
                    </div>


                  </div>
                  <Table variant='simple' colorScheme='teal' w={"70%"} mt={20}>

                    <Thead h={"40px"} color={"#8198A5"}>
                      <Tr color={"#8198A5"} >
                        {/* <Th></Th> */}
                        <Th  textAlign={"left"} color={"#8198A5"}>Name<ChevronDownIcon /></Th>
                        <Th   color={"#8198A5"}>Items <ChevronDownIcon color={"#8198A5"} /></Th>
                        <Th  textAlign={"right"} color={"#8198A5"}>Created on<ChevronDownIcon /></Th>
                        
                      </Tr>
                    </Thead>

                    <Tbody>
                      {
                        basketTable.map((item, index) => {
                          return (
                            <>
                              <Tr h={"40px"} border={"1px solid #FFF"}>
                                {/* <Td> <input type='checkbox' /> </Td> */}
                                <Td color={"#000"} textAlign={"left"} fontSize={"12px"}>{item.title}</Td>
                                <Td textAlign={"center"} color={"#000"} fontSize={"13px"}>{item.quantity}</Td>
                                <Td color={"#8198A5"} textAlign={"right"} fontSize={"12px"}>2023-05-09</Td>
                                
                              </Tr>
                            </>
                          )
                        })
                      }

                    </Tbody>

                  </Table>
                </TableContainer>
              </TabPanel>

              <TabPanel value="4">
              <TableContainer w={"100%"}  mt={30}>
                  <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex" }}>
                      <h3 style={{ textAlign: "left", color: "#03314B", fontWeight: "500" }}>Alerts ({alertTable.length})</h3>

                    </div>
                    <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                      {/* <Button startIcon={<SaveAltIcon />}>Download</Button> */}
                      {/* variant="outlined"   remove variant from button */}
                       {/* <Button sx={{ margin: "0px 15px 0px 0px", background: "linear-gradient(to left right, #5304C5, #82ffa1)" }} startIcon={<AnalyticsIcon />}>Analytics</Button> */}
                      <ChakraProvider>
                        <InputGroup w={"180px"} mr={5} >
                          <InputLeftElement pointerEvents='none'>
                            <SearchIcon color='gray.300' />
                          </InputLeftElement>
                          <Input type='text' placeholder='Search' />
                        </InputGroup>
                      </ChakraProvider>
                     <Button sx={{ borderRadius:"30px", marginRight:"20px", width:"100px", height:"30px", marginTop:"5px"}}>New Alert</Button>
                    </div>


                  </div>
                  <Table variant='simple' colorScheme='teal' w={"90%"} mt={20}>

                  <Thead h={"40px"} color={"#8198A5"}>
                      <Tr color={"#8198A5"} >
                        {/* <Th></Th> */}
                        <Th  textAlign={"left"} color={"#8198A5"}>Name<ChevronDownIcon /></Th>
                        <Th  textAlign={"left"} color={"#8198A5"}>Status<ChevronDownIcon /></Th>
                        <Th   color={"#8198A5"}>Items <ChevronDownIcon color={"#8198A5"} /></Th>
                        <Th  textAlign={"right"} color={"#8198A5"}>Created on<ChevronDownIcon /></Th>
                        
                      </Tr>
                    </Thead>

                    <Tbody>
                      {
                        alertTable.map((item, index) => {
                          return (
                            <>
                              <Tr h={"60px"} border={"1px solid #FFF"}>
                                {/* <Td> <input type='checkbox' /> </Td> */}
                                <Td color={"#3500D4"} textAlign={"left"} fontWeight={400} fontSize={"12px"}>{item.title} <br /> <span className='grayproduct'>{item.product}</span></Td>
                                <Td fontWeight={500} color={item.Status === "ENABLED" ?  "#27AE60" : "#FF5722"} textAlign={"left"} fontSize={"12px"}>{item.Status}</Td>
                                <Td textAlign={"center"} color={"#000"} fontSize={"13px"}>{item.quantity}</Td>
                                <Td color={"#8198A5"} textAlign={"right"} fontSize={"12px"}>2023-05-09</Td>
                                
                              </Tr>
                            </>
                          )
                        })
                      }

                    </Tbody>

                  </Table>
                </TableContainer>
              </TabPanel>

              <TabPanel value="5">
              <TableContainer w={"100%"}  mt={30}>
                  <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex" }}>
                      <h3 style={{ textAlign: "left", color: "#03314B", fontWeight: "500" }}>IPO ({ipoTable.length})</h3>

                    </div>
                    <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                      {/* <Button startIcon={<SaveAltIcon />}>Download</Button> */}
                      {/* variant="outlined"   remove variant from button */}
                       {/* <Button sx={{ margin: "0px 15px 0px 0px", background: "linear-gradient(to left right, #5304C5, #82ffa1)" }} startIcon={<AnalyticsIcon />}>Analytics</Button> */}
                      <ChakraProvider>
                        <InputGroup w={"180px"} mr={5} >
                          <InputLeftElement pointerEvents='none'>
                            <SearchIcon color='gray.300' />
                          </InputLeftElement>
                          <Input type='text' placeholder='Search' />
                        </InputGroup>
                      </ChakraProvider>
                     {/* <Button sx={{ borderRadius:"30px", marginRight:"20px", width:"100px", height:"30px", marginTop:"5px"}}>New Alert</Button> */}
                    </div>


                  </div>
                  <Table variant='simple' colorScheme='teal' w={"90%"} mt={20}>

                  <Thead h={"40px"} color={"#8198A5"}>
                      <Tr color={"#8198A5"} >
                        {/* <Th></Th> */}
                        <Th  textAlign={"left"} color={"#8198A5"}>Instrument<ChevronDownIcon /></Th>
                        <Th   color={"#8198A5"} textAlign={"left"}>Date <ChevronDownIcon color={"#8198A5"} /></Th>
                        <Th   color={"#8198A5"} >Price range<ChevronDownIcon /></Th>
                        <Th   color={"#8198A5"} >Min. amount<ChevronDownIcon /></Th>
                        <Th   color={"white"}>Status</Th>
                        
                      </Tr>
                    </Thead>

                    <Tbody>
                      {
                        ipoTable.map((item, index) => {
                          return (
                            <>
                              <Tr h={"60px"} border={"1px solid #FFF"}>
                                {/* <Td> <input type='checkbox' /> </Td> */}
                                <Td color={"#3500D4"} textAlign={"left"} fontWeight={400} fontSize={"12px"}>{item.title} <br /> <span className='grayproduct'>{item.product}</span></Td>
                                <Td textAlign={"left"} color={"#000"} fontSize={"13px"}>{item.date}</Td>
                                <Td color={"#8198A5"}  fontSize={"12px"} >{item.pl}</Td>
                                <Td color={"#000"}  fontWeight={400} fontSize={"12px"}>{item.ave_quan} <br /> <span className='grayproduct'>{item.ltp}</span></Td>
                                <Td fontWeight={500} color={item.Status === "APPLY" ?  "#3500D4" : "#03314B"} fontSize={"12px"} >{item.Status}</Td>
                                
                              </Tr>
                            </>
                          )
                        })
                      }

                    </Tbody>

                  </Table>
                </TableContainer>
              </TabPanel>

              <TabPanel value="6">
              <TableContainer w={"100%"}  mt={30}>
                  <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex" }}>
                      <h3 style={{ textAlign: "left", color: "#03314B", fontWeight: "500" }}>Auctions ({auctionTable.length})</h3>

                    </div>
                    <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                      {/* <Button startIcon={<SaveAltIcon />}>Download</Button> */}
                      {/* variant="outlined"   remove variant from button */}
                       {/* <Button sx={{ margin: "0px 15px 0px 0px", background: "linear-gradient(to left right, #5304C5, #82ffa1)" }} startIcon={<AnalyticsIcon />}>Analytics</Button> */}
                      <ChakraProvider>
                        <InputGroup w={"180px"} mr={5} >
                          <InputLeftElement pointerEvents='none'>
                            <SearchIcon color='gray.300' />
                          </InputLeftElement>
                          <Input type='text' placeholder='Search' />
                        </InputGroup>
                      </ChakraProvider>
                     {/* <Button sx={{ borderRadius:"30px", marginRight:"20px", width:"100px", height:"30px", marginTop:"5px"}}>New GTC</Button> */}
                    </div>


                  </div>
                  <Table variant='simple' colorScheme='teal' w={"100%"} mt={20}>

                    <Thead h={"40px"} color={"#8198A5"}>
                      <Tr color={"#8198A5"} >
                        <Th textAlign={"left"} color={"#8198A5"}>Instrument<ChevronDownIcon /></Th>
                        
                        <Th textAlign={"right"} color={"#8198A5"}>Eligibile qty. <ChevronDownIcon color={"#8198A5"} /></Th>
                        <Th textAlign={"right"} color={"#8198A5"}>Last price<ChevronDownIcon /></Th>
                        <Th textAlign={"right"} color={"#8198A5"}>Holding price<ChevronDownIcon /></Th>
                        <Th textAlign={"right"} color={"#8198A5"}>Holding P&L <ChevronDownIcon color={"#8198A5"} /></Th>
                        <Th textAlign={"right"} color={"#8198A5"}>Auction no.<ChevronDownIcon color={"#8198A5"} /></Th>
                      </Tr>
                    </Thead>

                    <Tbody>
                      {
                        auctionTable.map((item, index) => {
                          return (
                            <>
                              <Tr h={"40px"} border={"1px solid #FFF"}>
                                
                                <Td color={"#000"} textAlign={"left"} fontSize={"12px"}>{item.title}</Td>
                               
                                <Td textAlign={"right"} color={"#000"} fontSize={"13px"}>{item.quantity}</Td>
                                <Td textAlign={"right"} fontSize={"12px"} color={"#000"}>{item.ave_quan}</Td>
                                <Td textAlign={"right"} fontSize={"12px"} color={"#000"}>{item.ltp}</Td>
                                <Td textAlign={"right"} color={item.pl > 0 ? "#27AE60" : "#FF5722"} fontSize={"13px"} isNumeric>{item.pl}</Td>
                                <Td textAlign={"right"} color={"#000"} backgroundColor={"gray.600"} fontSize={"13px"}>{item.auction}</Td>
                                
                              </Tr>
                            </>
                          )
                        })
                      }

                    </Tbody>

                  </Table>
                </TableContainer>
              </TabPanel>
            </TabContext>
          </Box>
        </div>

      </div>

      
    </>
  )
}

export default Orders;