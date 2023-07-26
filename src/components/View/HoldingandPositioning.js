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
  } from '@chakra-ui/react';
  import { ChevronDownIcon } from '@chakra-ui/icons';
  import { Button } from '@mui/material';
import SaveAltIcon  from '@mui/icons-material/SaveAlt';
import AnalyticsIcon from '@mui/icons-material/Analytics';

export const HoldingandPositioning = () => {

    const [value, setValue] = React.useState("1");



    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <>
            <Navbar />
            <div className='holdingandpositioning'>
               <h1 style={{textAlign:"left"}}>Portfolio</h1>
               <div style={{margin:"auto", display:"flex",  flexDirection:"row-reverse"}}>
                     <Button   startIcon={<SaveAltIcon />}>Download</Button>
                                  {/* variant="outlined"   remove variant from button */}
                     <Button sx={{margin:"0px 15px 0px 0px", background: "linear-gradient(to left right, #5304C5, #82ffa1)"}}  startIcon={<AnalyticsIcon />}>Analytics</Button>
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
                                    <Tab label="Holding 03" value="1" />
                                    <Tab label="Position 02" value="2" />

                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <TableContainer w={"100%"}>
                                    <Table variant='striped' colorScheme='teal' w={"100%"}>
                                        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                                        <Thead h={"60px"}>
                                            <Tr backgroundColor={"rgb(229,250,245)"}>
                                                <Th>Serial No. <ChevronDownIcon color={"#26D7AB"} /></Th>
                                                <Th>Name <ChevronDownIcon color={"#26D7AB"} /></Th>
                                                <Th>Quantity <ChevronDownIcon color={"#26D7AB"} /></Th>
                                                <Th>Average <ChevronDownIcon color={"#26D7AB"} /></Th>
                                                <Th>Last Traded Price <ChevronDownIcon color={"#26D7AB"} /></Th>
                                                <Th isNumeric>Profit & Loss <ChevronDownIcon color={"#26D7AB"} /></Th>
                                                <Th>Change<ChevronDownIcon color={"#26D7AB"} /></Th>
                                            </Tr>
                                        </Thead>

                                        <Tbody>
                                            <Tr h={"60px"}>
                                                <Td>1.</Td>
                                                <Td>Infosys</Td>
                                                <Td>₹ 1,336.60</Td>
                                                <Td isNumeric>5.00 (0.38%)</Td>
                                                <Td isNumeric>50.00</Td>
                                                <Td isNumeric>+950.50</Td>
                                                <Td isNumeric>0.00%</Td>
                                            </Tr>
                                            <Tr h={"60px"} bgColor={"#26D7AB"}>
                                                 <Td>2.</Td>
                                                <Td>Bandhan Bank</Td>
                                                <Td>₹ 1,336.60</Td>
                                                <Td isNumeric>5.00 (0.38%)</Td>
                                                <Td isNumeric>40.00</Td>
                                                <Td isNumeric>+00.01</Td>
                                                <Td isNumeric>0.00%</Td>
                                            </Tr>
                                            <Tr h={"60px"}>
                                                <Td>3.</Td>
                                                <Td>Tata Steel</Td>
                                                <Td>₹ 1,336.60</Td>
                                                <Td isNumeric>5.00 (0.38%)</Td>
                                                <Td isNumeric>30.00</Td>
                                                <Td isNumeric>+00.01</Td>
                                                <Td isNumeric>0.00%</Td>
                                            </Tr>
                                            <Tr h={"60px"} bgColor={"#26D7AB"}>
                                                 <Td>4.</Td>
                                                <Td>Zomato</Td>
                                                <Td>₹ 1,336.60</Td>
                                                <Td isNumeric>5.00 (0.38%)</Td>
                                                <Td isNumeric>00.00</Td>
                                                <Td isNumeric>+00.01</Td>
                                                <Td isNumeric>0.00%</Td>
                                            </Tr>
                                            <Tr h={"60px"}>
                                                <Td>5.</Td>
                                                <Td>Panjab National Bank</Td>
                                                <Td>₹ 1,336.60</Td>
                                                <Td isNumeric>5.00 (0.38%)</Td>
                                                <Td isNumeric>00.00</Td>
                                                <Td isNumeric>+00.01</Td>
                                                <Td isNumeric>0.00%</Td>
                                                {/* <Td>Total</Td> */}
                                            </Tr>
                                            <Tr h={"60px"} bgColor={"#26D7AB"}>
                                               
                                                <Td>6.</Td>
                                                <Td>Tata Consultancy Service</Td>
                                                <Td>₹ 1,336.60</Td>
                                                <Td isNumeric>5.00 (0.38%)</Td>
                                                <Td isNumeric>50.00</Td>
                                                <Td isNumeric>+00.01</Td>
                                                <Td isNumeric>0.00%</Td>
                                                {/* <Td>+982.50</Td> */}
                                            </Tr>
                                            <Tr h={"60px"} bgColor={"rgb(229,250,245)"}>
                                                <Td> </Td>
                                                <Td></Td>
                                                <Td></Td>
                                                <Td></Td> 
                                                <Td >Total</Td>
                                                <Td isNumeric color={"gray"}>+982.50</Td>
                                                <Td isNumeric></Td>
                                                
                                            </Tr>
                                        </Tbody>

                                    </Table>
                                </TableContainer>

                            </TabPanel>
                            <TabPanel value="2">
                            <TableContainer w={"100%"}>
                                    <Table variant='striped' colorScheme='teal' w={"100%"}>
                                        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                                        <Thead h={"60px"}>
                                            <Tr backgroundColor={"rgb(229,250,245)"}>
                                                <Th>Serial No. <ChevronDownIcon color={"#26D7AB"} /></Th>
                                                <Th>Name <ChevronDownIcon color={"#26D7AB"} /></Th>
                                                <Th>Quantity <ChevronDownIcon color={"#26D7AB"} /></Th>
                                                <Th>Average <ChevronDownIcon color={"#26D7AB"} /></Th>
                                                <Th>Last Traded Price <ChevronDownIcon color={"#26D7AB"} /></Th>
                                                <Th isNumeric>Profit & Loss <ChevronDownIcon color={"#26D7AB"} /></Th>
                                                <Th>Change<ChevronDownIcon color={"#26D7AB"} /></Th>
                                            </Tr>
                                        </Thead>

                                        <Tbody>
                                            <Tr h={"60px"}>
                                                <Td>1.</Td>
                                                <Td>Infosys</Td>
                                                <Td>₹ 1,336.60</Td>
                                                <Td isNumeric>5.00 (0.38%)</Td>
                                                <Td isNumeric>50.00</Td>
                                                <Td isNumeric>+950.50</Td>
                                                <Td isNumeric>0.00%</Td>
                                            </Tr>
                                            <Tr h={"60px"} bgColor={"#26D7AB"}>
                                                 <Td>2.</Td>
                                                <Td>Bandhan Bank</Td>
                                                <Td>₹ 1,336.60</Td>
                                                <Td isNumeric>5.00 (0.38%)</Td>
                                                <Td isNumeric>40.00</Td>
                                                <Td isNumeric>+00.01</Td>
                                                <Td isNumeric>0.00%</Td>
                                            </Tr>
                                            <Tr h={"60px"}>
                                                <Td>3.</Td>
                                                <Td>Tata Steel</Td>
                                                <Td>₹ 1,336.60</Td>
                                                <Td isNumeric>5.00 (0.38%)</Td>
                                                <Td isNumeric>30.00</Td>
                                                <Td isNumeric>+00.01</Td>
                                                <Td isNumeric>0.00%</Td>
                                            </Tr>
                                            <Tr h={"60px"} bgColor={"#26D7AB"}>
                                                 <Td>4.</Td>
                                                <Td>Zomato</Td>
                                                <Td>₹ 1,336.60</Td>
                                                <Td isNumeric>5.00 (0.38%)</Td>
                                                <Td isNumeric>00.00</Td>
                                                <Td isNumeric>+00.01</Td>
                                                <Td isNumeric>0.00%</Td>
                                            </Tr>
                                            <Tr h={"60px"}>
                                                <Td>5.</Td>
                                                <Td>Panjab National Bank</Td>
                                                <Td>₹ 1,336.60</Td>
                                                <Td isNumeric>5.00 (0.38%)</Td>
                                                <Td isNumeric>00.00</Td>
                                                <Td isNumeric>+00.01</Td>
                                                <Td isNumeric>0.00%</Td>
                                            </Tr>
                                            <Tr h={"60px"} bgColor={"rgb(229,250,245)"}>
                                                <Td> </Td>
                                                <Td></Td>
                                                <Td></Td>
                                                <Td></Td> 
                                                <Td >Total</Td>
                                                <Td isNumeric color={"gray"}>+982.50</Td>
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
