import React from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    // MenuItemOption,
    MenuGroup,
    // MenuOptionGroup,
    MenuDivider,
    Button,
    Avatar, Icon,
} from '@chakra-ui/react'
import profile from "../../assets/profile.jpeg";

import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SupportAgentSharpIcon from '@mui/icons-material/SupportAgentSharp';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';


const PopoverProfile = () => {


    return (
            <Menu>
            <MenuButton  colorScheme='pink'>
                <Avatar w={25} h={25} mt={1.5} src={profile} />
            </MenuButton>
            <MenuList mt={8}>
                
                <MenuItem  fontSize={"sm"} color={"gray"}>Sunil Kumar <br /> sunilkumar@gmail.com</MenuItem>
                <MenuDivider />
                <MenuItem  fontSize={"sm"} color={"gray"} as='a' href='/profile' icon={<PersonOutlineOutlinedIcon />}>My Profile/ setting</MenuItem>
                                                               {/* <Avatar w={5} h={5} mr={2}/> */}
                <MenuDivider />
                
                <MenuItem  fontSize={"sm"} color={"gray"} icon={<SupportAgentSharpIcon />}>Support</MenuItem>
                <MenuItem  fontSize={"sm"} color={"gray"} icon={<PersonAddAlt1OutlinedIcon />}>Invite Friends</MenuItem>

                <MenuDivider />

                <MenuItem  fontSize={"sm"} color={"gray"} icon={<ExploreOutlinedIcon />}>Tour Kite</MenuItem>
                <MenuItem  fontSize={"sm"} color={"gray"} icon={<KeyboardCommandKeyIcon />}>Keyboard Shortcuts</MenuItem>
                <MenuItem  fontSize={"sm"} color={"gray"} icon={<InfoOutlinedIcon />}> Manual</MenuItem>
                <MenuItem  fontSize={"sm"} color={"gray"} as='a' href="/signup" icon={<LogoutIcon />}>  Logout</MenuItem>
                
            </MenuList>
            </Menu>
    );
}

export default PopoverProfile;
