import React from 'react';
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Navbar from './Navbar';
import { Input, InputGroup,  Stack, InputLeftElement, 
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
  import { Button, Divider } from '@mui/material';
import SaveAltIcon  from '@mui/icons-material/SaveAlt';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import { positionTable } from "./Constant";


export const Positionings = () => {

    const [value, setValue] = React.useState("1");



    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <>
           
            <div className='holdings'>
               <div style={{ width:"100%", display:"flex",   justifyContent:"space-between"}}>
                   <div style={{display:"flex"}}>
                     <h3 style={{textAlign:"left", color:"#03314B", fontWeight:"500"}}>Positions (4)</h3>
                     
                   </div>
                    <div style={{ display:"flex",  flexDirection:"row-reverse"}}>
                     <Button   startIcon={<SaveAltIcon />}>Download</Button>
                                  {/* variant="outlined"   remove variant from button */}
                     <Button sx={{margin:"0px 15px 0px 0px", background: "linear-gradient(to left right, #5304C5, #82ffa1)"}}  startIcon={<AnalyticsIcon />}>Analytics</Button>
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
                                <TabList
                                    onChange={handleChange}
                                >
                                    <Tab label="Positions 04" value="1" />
                                    {/* <Tab label="Position 02" value="2" /> */}

                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <TableContainer w={"100%"}>
                                    <Table variant='simple' colorScheme='teal' w={"100%"}>
                                        
                                        <Thead h={"40px"} color={"#8198A5"}>
                                            <Tr color={"#8198A5"} >
                                                <Th></Th>
                                                <Th textAlign={"left"} color={"#8198A5"}>Product<ChevronDownIcon  /></Th>
                                                <Th textAlign={"left"} color={"#8198A5"}>Instrument<ChevronDownIcon  /></Th>
                                                <Th color={"#8198A5"}>Qty. <ChevronDownIcon color={"#8198A5"} /></Th>
                                                <Th color={"#8198A5"}>Avg. cost <ChevronDownIcon color={"#8198A5"} /></Th>
                                                <Th color={"#8198A5"}>LTP <ChevronDownIcon color={"#8198A5"} /></Th>
                                                <Th color={"#8198A5"}>P&L<ChevronDownIcon color={"#8198A5"} /></Th>
                                                <Th  color={"#8198A5"}>Day chg<ChevronDownIcon color={"#8198A5"} /></Th>
                                            </Tr>
                                        </Thead>
                                          
                                        <Tbody>
                                          {
                                           positionTable.map((item, index) => {
                                                return (
                                                    <>
                                                    <Tr h={"40px"} border={"1px solid #FFF"}>
                                                        <Td> <input type='checkbox'  /> </Td>
                                                        <Td textAlign={"left"} fontSize={"12px"} color={item.product ==="NRML"? "#4201CD" : "#DF863D"}>{item.product}</Td>
                                                        <Td color={"#000"} textAlign={"left"} fontSize={"12px"}>{item.title}</Td>
                                                        <Td color={"#000"} fontSize={"14px"}>{item.quantity}</Td>
                                                        <Td color={"#27AE60"} fontSize={"14px"}>{item.ave_quan}</Td>
                                                        <Td color={"#27AE60"} fontSize={"14px"} isNumeric>{item.ltp}</Td>
                                                        <Td color={"#27AE60"} fontSize={"14px"} isNumeric>+{item.pl}%</Td>
                                                        <Td color={"#EB5757"} fontSize={"14px"} isNumeric>-{item.day_chg}%</Td>
                                                    </Tr>
                                                    </>
                                                )
                                            })
                                          }
                                           
                                         
                                            <Tr h={"60px"} bgColor={"rgba(236, 236, 236, 0.80)"}>
                                                <Td> </Td>
                                                <Td></Td>
                                                <Td></Td>
                                                <Td></Td> 
                                                <Td isNumeric></Td>
                                                <Td color={"black"}>Total</Td>
                                                <Td isNumeric color={"#EB5757"}>-337.73</Td>
                                                <Td isNumeric></Td>
                                                
                                                
                                            </Tr> 
                                        </Tbody>

                                    </Table>
                                </TableContainer>

                            </TabPanel>
                            

                        </TabContext>
                    </Box>
                </div>
                
            </div>

            <div className='holdings'>
               <div style={{ width:"100%", display:"flex",   justifyContent:"space-between"}}>
                   <div style={{display:"flex"}}>
                     <h3 style={{textAlign:"left", color:"#03314B", fontWeight:"500"}}>Day’s history (7)</h3>
                     
                   </div>
                    <div style={{ display:"flex",  flexDirection:"row-reverse"}}>
                     <Button   startIcon={<SaveAltIcon />}>Download</Button>
                                  {/* variant="outlined"   remove variant from button */}
                     {/* <Button sx={{margin:"0px 15px 0px 0px", background: "linear-gradient(to left right, #5304C5, #82ffa1)"}}  startIcon={<AnalyticsIcon />}>Analytics</Button> */}
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
                                <TabList
                                    onChange={handleChange}
                                >
                                    <Tab label="Day’s history 07" value="1" />
                                    {/* <Tab label="Position 02" value="2" /> */}

                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <TableContainer w={"100%"}>
                                    <Table variant='simple' colorScheme='teal' w={"100%"}>
                                        
                                        <Thead h={"40px"} color={"#8198A5"}>
                                            <Tr color={"#8198A5"} >
                                                {/* <Th></Th> */}
                                                <Th textAlign={"left"}>Product<ChevronDownIcon  /></Th>
                                                <Th color={"#8198A5"} textAlign={"left"}>Instrument<ChevronDownIcon  /></Th>
                                                <Th color={"#8198A5"}>Qty. <ChevronDownIcon color={"#8198A5"} /></Th>
                                                <Th color={"#8198A5"}>Avg. cost <ChevronDownIcon color={"#8198A5"} /></Th>
                                                <Th color={"#8198A5"}>LTP <ChevronDownIcon color={"#8198A5"} /></Th>
                                                <Th color={"#8198A5"}>P&L<ChevronDownIcon color={"#8198A5"} /></Th>
                                                <Th  color={"#8198A5"}>Day chg<ChevronDownIcon color={"#8198A5"} /></Th>
                                            </Tr>
                                        </Thead>
                                          
                                        <Tbody>
                                          {
                                           positionTable.map((item, index) => {
                                                return (
                                                    <>
                                                    <Tr h={"40px"} border={"1px solid #FFF"}>
                                                        {/* <Td> <input type='checkbox'  /> </Td> */}
                                                        <Td textAlign={"left"} fontSize={"12px"} color={item.product ==="NRML"? "#4201CD" : "#DF863D"}>{item.product}</Td>
                                                        <Td color={"#000"} textAlign={"left"} fontSize={"12px"}>{item.title}</Td>
                                                        <Td color={"#000"} fontSize={"14px"}>{item.quantity}</Td>
                                                        <Td color={"#27AE60"} fontSize={"14px"}>{item.ave_quan}</Td>
                                                        <Td color={"#27AE60"} fontSize={"14px"} isNumeric>{item.ltp}</Td>
                                                        <Td color={"#27AE60"} fontSize={"14px"} isNumeric>+{item.pl}%</Td>
                                                        <Td color={"#EB5757"} fontSize={"14px"} isNumeric>-{item.day_chg}%</Td>
                                                    </Tr>
                                                    </>
                                                )
                                            })
                                          }
                                           
                                         
                                            <Tr h={"60px"} bgColor={"rgba(236, 236, 236, 0.80)"}>
                                                <Td> </Td>
                                                <Td></Td>
                                                <Td></Td>
                                                <Td></Td> 
                                                <Td color={"black"}>Total</Td>
                                                <Td isNumeric color={"#EB5757"}>-337.73</Td>
                                                <Td isNumeric></Td>
                                                <Td isNumeric></Td>
                                                
                                                
                                            </Tr> 
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
