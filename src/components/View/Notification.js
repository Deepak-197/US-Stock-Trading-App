import React from 'react';
import { MenuButton, MenuGroup, Menu, MenuItem, MenuList, MenuDivider } from '@chakra-ui/react';
import { AiOutlineBell } from 'react-icons/ai';

const Notification = () => {
  return (
    <>
      <Menu >
        <MenuButton colorScheme='pink' mt={2} >
            <AiOutlineBell  size={22}  />
        </MenuButton>
        <MenuList mt={8}>
            <MenuGroup textAlign={"left"} color={"#03314B"} fontWeight={400} title='Notification'>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup textAlign={"left"} color={"#03314B"} fontWeight={400} title='Alert Triggered'>
               <MenuItem  fontSize={"13px"} color={"gray"} command='Now'>{"DHFL > 116.11 triggered at 12:19:26- 14 May 2023" }</MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup textAlign={"left"} color={"#03314B"} fontWeight={400} title='Sentinel-Alert Triggered'>
               <MenuItem fontSize={"13px"} color={"gray"} command='2m'>{"ICICI>116.11 triggered at 12:19:26- 14 May 2023" }</MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup textAlign={"left"} color={"#03314B"} fontWeight={400} title='Alert Triggered'>
               <MenuItem fontSize={"13px"} color={"gray"} command='3m'>{"Nifty>116.11 triggered at 12:19:26- 14 May 2023" }</MenuItem>
            </MenuGroup>
            
            
        </MenuList>
    </Menu>
    </>
  )
}

export default Notification;
