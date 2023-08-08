import { SettingsIcon } from '@chakra-ui/icons'
import { ChakraProvider } from '@chakra-ui/react'
import { Button, MenuButton, MenuGroup, Menu, MenuItem, MenuList, MenuDivider } from '@chakra-ui/react';

import React from 'react'

const SettingMenu = () => {
  return (
    <>
    <ChakraProvider>
    {/* <div></div> */}
    <Menu >
        <MenuButton colorScheme='pink' >
            <SettingsIcon  fontSize={15} />
        </MenuButton>
        <MenuList w={300} mt={2} className='setting-menulist'>
            <MenuGroup className='setting-sorting-btn'  fontWeight={500} fontSize={"13px"} textAlign={"left"} color={"#03314B"} title='Sort by'>
              <Button className='seti-btn' color={"#03314b"} fontWeight={400}>A-Z</Button>
              <Button className='seti-btn' color={"#03314b"} fontWeight={400}>%</Button>
              <Button className='seti-btn' color={"#03314b"} fontWeight={400}>LTP</Button>
              <Button className='seti-btn' color={"#03314b"} fontWeight={400}>EXH</Button>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup fontWeight={500} fontSize={"13px"} textAlign={"left"} color={"#03314B"} title='Change'>
               <MenuItem className='setting-checkbox' fontSize={"sm"} color={"#03314B"}><input type='radio' /> <label>Close price</label></MenuItem>
               <MenuItem className='setting-checkbox' fontSize={"sm"} color={"#03314B"}><input type='radio' /> <label>Open price</label></MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup fontWeight={500} fontSize={"13px"} textAlign={"left"} color={"#03314B"} title='Change Format'>
               <MenuItem className='setting-checkbox' fontSize={"sm"} color={"#03314B"}><input type='radio' /> <label>Percentage</label></MenuItem>
               <MenuItem className='setting-checkbox' fontSize={"sm"} color={"#03314B"}><input type='radio' /> <label>Absolute</label></MenuItem>
               <MenuItem className='setting-checkbox' fontSize={"sm"} color={"#03314B"}><input type='radio' /> <label>Absolute & Percentage</label></MenuItem>
            </MenuGroup>
            <MenuDivider />
            
               <MenuItem className='setting-checkbox' fontSize={"sm"} color={"#03314B"}>
                     <input type='checkbox'  /><label>Show Direction</label>
               </MenuItem>
               <MenuItem className='setting-checkbox' fontSize={"sm"} color={"#03314B"}>
                    <input type='checkbox'  /><label>Show Change</label>
               </MenuItem>
               <MenuItem className='setting-checkbox' fontSize={"sm"} color={"#03314B"}>
                    
                    <input type='checkbox'  /><label>Show Holdings</label>
               </MenuItem>
            
            
            
        </MenuList>
    </Menu>
    
    </ChakraProvider>
    </>
  )
}

export default SettingMenu;


// import { BsThreeDots } from "react-icons/bs";
