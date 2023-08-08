import { Tabs, TabList, TabPanels, Tab, TabPanel, Button, FormControl, FormLabel, Input, Select, useDisclosure, ChakraProvider, Text } from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';
import React from 'react';
import logo from "../../assets/addfundlogo.svg"

export const AddFundsModel = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  

  return (
    <>
   
    <ChakraProvider>
      <Button onClick={onOpen} colorScheme='green' fontWeight={400}>Add funds</Button>
      {/* <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button> */}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader marginLeft={40}><img src={logo} width={120} /></ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} mt={5}>
          <h3>Sunil Verma</h3>
          <hr />
            <FormControl mt={5}>
              <FormLabel fontWeight={400} color={"#03314B"}>Amount</FormLabel>
              <Input ref={initialRef}  />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel fontWeight={400} color={"#03314B"}>Segment</FormLabel>
              <Input  />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel fontWeight={400} color={"#03314B"}>Account</FormLabel>
              <Input  />
              <FormLabel fontWeight={300} fontSize={"12px"}>Add another bank account from. Change</FormLabel>
            </FormControl>

            <FormControl mt={4} >
              <FormLabel fontWeight={400} color={"#03314B"}>Virtual Payment address (UPI ID)</FormLabel>
              <Input  />
            </FormControl>

            <FormControl mt={4} >
              <FormLabel fontWeight={400} color={"#03314B"}>Payment Mode</FormLabel>
              <div className='buy-intraday'>
                <div className='selectpaymentmode'><input type='radio' /><span>UPI</span></div>

                <div className='selectpaymentmode'><input type='radio' /><span>Net banking</span></div>
               </div>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme='blue' mr={3}>
              Save
            </Button> */}
            <Button onClick={onClose} w={"100%"} margin={"auto"}
                bgGradient='linear(to-l, #FF0080, #7928CA)'
            >continue</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </ChakraProvider>
    </>
  )
}
