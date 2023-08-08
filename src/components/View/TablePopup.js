import { Menu, MenuButton, MenuList,  MenuItem, ChakraProvider} from '@chakra-ui/react';

import React from 'react'
import { BuyModel } from './BuyModel';
import { SellModel } from './SellModel';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export const TablePopup = () => {
  return (
    <>
    <ChakraProvider>
     <Menu>
       <MenuButton><MoreHorizIcon /></MenuButton>
       <MenuList>
        <MenuItem><BuyModel /></MenuItem>
        <MenuItem><SellModel /></MenuItem>
       </MenuList>
     </Menu>
     </ChakraProvider>
    </>
  )
}
