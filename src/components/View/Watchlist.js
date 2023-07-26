import React from 'react';
import { EditIcon, AddIcon, SearchIcon, CloseIcon, ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'
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
} from '@chakra-ui/react'
import Navbar from './Navbar';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom';



export const Watchlist = () => {
  return (
    <>
    <Navbar />
    <div className='watchlist'>
      <div className='watchlistmain'>
    <h1 style={{textAlign:"left"}}>All Watchlist</h1>
    <div style={{width:"25%", display:"flex", justifyContent:"space-between"}}>
      <div style={{textAlign:"left", height:"40px", borderRadius:"30px", backgroundColor:"rgb(229,250,245)", width:"70%", display:"flex", justifyContent:"center", textAlign:"center", alignItems:"center"}}>
          <b style={{textAlign:"center", color:"#26D7AB"}}>Deepak's Watchlist  <EditIcon /></b> 
      </div>
      <div style={{textAlign:"left", height:"40px", borderRadius:"30px", border:"1px solid gray", width:"13%", display:"flex", justifyContent:"center", textAlign:"center", alignItems:"center"}}><b><AddIcon /></b></div>
    </div>

    <div style={{borderRadius:"10px 10px 0px 0px", border:"1px solid gray", width:"60%", height:"60px", marginTop:"80px", padding:"5px"}}>
      
      <Stack spacing={4} mt={8}>
        <InputGroup >
          <InputLeftElement >
            <SearchIcon color='gray.300' mt={"5px"} ml={"10px"} />
          </InputLeftElement>
          <Input type='text'  size='lg' placeholder='Search & add' width={"100%"} 
               focusBorderColor='none' border={"none"} ml={30}
          />
        </InputGroup>
        </Stack>

      </div>
      <div style={{display:"flex", flexDirection:"row"}}>
      <div style={{border:"1px solid #ccccc", width:"60%", height:"auto",}}>
      <TableContainer w={"100%"}>
            <Table variant='striped' colorScheme='teal' w={"100%"}>
              {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
              <Thead  h={"60px"}>
                <Tr backgroundColor={"rgb(229,250,245)"}>
                  <Th>Company <ChevronDownIcon color={"#26D7AB"} /></Th>
                  <Th>Market Price <ChevronDownIcon color={"#26D7AB"} /></Th>
                  <Th isNumeric>Day Change(%) <ChevronDownIcon color={"#26D7AB"} /></Th>
                </Tr>
              </Thead>
              
              <Tbody>
                <Tr h={"60px"}>
                  <Td>Infosys</Td>
                  <Td>₹ 1,336.60</Td>
                  <Td isNumeric>5.00 (0.38%)</Td>
                </Tr>
                <Tr h={"60px"} bgColor={"#26D7AB"}>
                  <Td>Bandhan Bank</Td>
                  <Td>₹ 1,336.60</Td>
                  <Td isNumeric>5.00 (0.38%)</Td>
                </Tr>
                <Tr h={"60px"}>
                  <Td>Tata Steel</Td>
                  <Td>₹ 1,336.60</Td>
                  <Td isNumeric>5.00 (0.38%)</Td>
                </Tr>
                <Tr h={"60px"} bgColor={"#26D7AB"}>
                  <Td>Zomato</Td>
                  <Td>₹ 1,336.60</Td>
                  <Td isNumeric>5.00 (0.38%)</Td>
                </Tr>
                <Tr h={"60px"}>
                  <Td>Panjab National Bank</Td>
                  <Td>₹ 1,336.60</Td>
                  <Td isNumeric>5.00 (0.38%)</Td>
                </Tr>
                <Tr h={"60px"}  bgColor={"#26D7AB"}>
                  <Td>Tata Consultancy Service</Td>
                  <Td>₹ 1,336.60</Td>
                  <Td isNumeric>5.00 (0.38%)</Td>
                </Tr>
              </Tbody>
              
            </Table>
          </TableContainer>
       </div>
        <div style={{width:'30%', border:"1px solid gray", marginLeft:"50px"}}>
            <div style={{display:"flex", padding:"10px", justifyContent:"space-between"}}>
              <div>
                  <b>Infosys</b>
                  <p style={{fontSize:"8px"}}>₹ 1,336.60 (0.38%) <span style={{color:"#26D7AB"}}>Depth</span></p>
              </div>
              <div>
                <CloseIcon h={10} />
              </div>
            </div>
            <hr style={{marginTop:"-8px"}} />
            <div style={{display:"flex", padding:"10px", justifyContent:"space-between"}}>
            <div style={{width:"30%", display:"flex", justifyContent:"space-between"}}>
                  <b className='onhoverunderline'>BUY</b>
                  <b className='onhoverunderline'>SELL</b>
              </div>
              <div>
                <HamburgerIcon h={15} />
              </div>
            </div>
            <hr style={{marginTop:"-6px"}} />

            <div style={{display:"flex", padding:"10px", justifyContent:"space-between"}}>
            <div style={{width:"70%", display:"flex", justifyContent:"space-between"}}>
                  <p className='onhoverunderlineba'>Delivery</p>
                  <p className='onhoverunderlineba'>Intraday</p>
              </div>
              
            </div>
            <div style={{display:"flex", padding:"10px", justifyContent:"space-between"}}>
               <div>
                 <span style={{fontSize:"20px"}}>Qty <b>NSE <ChevronDownIcon color={"#26D7AB"} /></b></span>
               </div>
               <div style={{width:"42%", height:"40px",  backgroundColor:"rgb(229,250,245)"}}></div>
            </div>
            <div style={{display:"flex", padding:"10px", justifyContent:"space-between"}}>
               <div>
                 <span style={{fontSize:"20px"}}>Price <b>Market <ChevronDownIcon color={"#26D7AB"} /></b></span>
               </div>
               <div style={{width:"42%", height:"40px",  backgroundColor:"rgb(248,249,250)", textAlign:"center"}}><p style={{textAlign:"center"}}>At Market</p></div>
            </div>

            <div style={{marginTop:"100px", fontSize:"13px"}}><p>Order will be executed at best price in market</p><hr style={{marginTop:"-5px"}} /></div>
        
            <div style={{display:"flex", padding:"10px", justifyContent:"space-between"}}>
              <p>Balance: ₹0</p>
              <p className='requiredBal'>Required: ₹0</p>
            </div>
            <div style={{width:"100%", padding:"5px"}}>
               <Link to={"/"}><Button 
                border={"none"}
                height={"50px"}
                   width={"100%"}
                   bgColor={"#26D7AB"}
                   to="/"
                   fontWeight={"bold"}
                   textDecoration={"none"}
                   color={"black"}
                > BUY </Button></Link>
            </div>
        </div>
       </div>
       </div>
    </div>
    </>
  )
}
