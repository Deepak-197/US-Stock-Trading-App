import React from 'react';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { MenuButton, MenuGroup, Menu, MenuItem, MenuList, MenuDivider, ChakraProvider } from '@chakra-ui/react';

export const ThreeDotsMenu = () => {


  return (
    <ChakraProvider>
    <Menu>
            <MenuButton>
                <MoreHorizOutlinedIcon w={25} h={25} mt={1} color='gray' />
            </MenuButton>
            <MenuList mt={8}>
                <MenuGroup>
                    <MenuItem  fontSize={"sm"} color={"gray"} icon={<PushPinOutlinedIcon />} command='1 2'> Pin</MenuItem>
                    <MenuItem  fontSize={"sm"} color={"gray"} icon={<DeleteForeverOutlinedIcon />}>Delete</MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup>                                               {/* <Avatar w={5} h={5} mr={2}/> */}
                    <MenuItem  fontSize={"sm"} color={"gray"} icon={<AnalyticsOutlinedIcon />} as={"a"} target='_blank' href='https://www.tradingview.com/chart/sEqgs87Y/?symbol=NASDAQ%3AAAPL&utm_source=localhost&utm_medium=widget&utm_campaign=chart-logo&utm_term=NASDAQ%3AAAPL' command=">">Chart</MenuItem>
                    <MenuItem  fontSize={"sm"} color={"gray"} icon={<RocketLaunchOutlinedIcon />}>Create GTT/GTC</MenuItem>
                    <MenuItem  fontSize={"sm"} color={"gray"} icon={<WarningAmberOutlinedIcon />}>Create Alert</MenuItem>
                </MenuGroup>
            </MenuList>
            </Menu>
     </ChakraProvider>
  )
}
