import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Button, FormControl, FormLabel, Input, Select, useDisclosure, ChakraProvider, Text, Divider } from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';
import dashlogo from "../../assets/dash-page-logo.svg"


export const WithdrawFundsModel = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    // const year = 2023;
    // const month = 6; // Note: Months are zero-based (0 = January, 1 = February, ..., 11 = December)
    // const date = 24;
    // const hour = 12;
    // const minutes = 30;
    // const seconds = 45;

    const myDate = new Date();
    const year = myDate.getFullYear();
    const month = myDate.getMonth() + 1;
    const date = myDate.getDate();
    const hour = myDate.getHours();
    const minutes = myDate.getMinutes();
    const seconds = myDate.getSeconds();
    console.log(`${year}-${month}-${date}, ${hour}:${minutes}:${seconds}`)

    return (
        <>
            <ChakraProvider>
                <Button onClick={onOpen} colorScheme='blue' fontWeight={400}>Withdraw</Button>

                <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} >
                    <ModalOverlay />
                    <ModalContent w={"800px"} mt={150}>
                        <ModalHeader>Funds</ModalHeader>
                        <Divider />
                        <ModalCloseButton />
                        <ModalBody pb={6} >
                            <div className='fundequitycommodity'>

                                {/* 1st div */}
                                <div className='fund-card-div'>
                                    <div className='fundlogo-name-flex-first'>
                                        <div className='logo-circle'>
                                            <img src={dashlogo} />
                                        </div>
                                        <div className='logo-name'>
                                            <p>Equity</p>
                                        </div>
                                    </div>
                                    <div className='fundmargin-opening'>


                                        <div>
                                            <div className='fundsdivchild'>
                                                <p>₹1,38,412.40</p>
                                                <p>Closing balance</p>
                                            </div>
                                            <div className='fundsdivchild'>
                                                <p>₹0.0</p>
                                                <p>Unsettled credits (-)</p>
                                            </div>
                                            <div className='fundsdivchild'>
                                                <p>₹0.0</p>
                                                <p>Payin (+)</p>
                                            </div>
                                            <div className='fundsdivchild'>
                                                <p>₹0.0</p>
                                                <p>Collateral utilized (+)</p>
                                            </div>
                                            <div className='fundsdivchild'>
                                                <p>₹1,38,412.40</p>
                                                <p>Withdrawable balance</p>
                                            </div>
                                        </div>
                                        <hr className='funddivider' />
                                        <div>

                                            <p>Last updated: {`${year}-${month}-${date}, ${hour}:${minutes}:${seconds}`}</p>

                                            <p>Next quarterly settlement between 2022-11-12 to 2022-11-19 Leam more.</p>
                                             
                                            <div className='fundwithdraw'>
                                               <FormControl mr={10}>
                                                   <Input placeholder='Amount to withdraw'  />
                                               </FormControl>
                                               <Button onClick={onClose} color={"white"} width={180}
                                                 bgGradient='linear(to-l, #FF0080, #7928CA)'
                                               >Continue</Button>
                                            </div>
                                        
                                        </div>
                                        

                                    </div>

                                </div>
                            </div>
                        </ModalBody>

                        <ModalFooter>
                            {/* <Button colorScheme='blue' mr={3}>
                                Save
                            </Button>
                            <Button onClick={onClose}>Cancel</Button> */}
                        </ModalFooter>
                    </ModalContent>
                </Modal>

            </ChakraProvider>
        </>
    )
}
