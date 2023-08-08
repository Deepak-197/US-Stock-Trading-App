import React, {useState} from 'react';
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
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'




export const BuyModel = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [isFormOpen, setIsFormOpen] = useState(false)



    const openForm = () => {
        setIsFormOpen(true);
    };

    const closeForm = () => {
        setIsFormOpen(false);
    };

    return (
        
        <>
        <ChakraProvider>
            <Button onClick={onOpen} colorScheme={"#4201CD"} color={"white"}>BUY</Button>

            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay  />
                <ModalContent w={"700px"} mt={200}>
                    <ModalHeader>Buy NINFY.<span>x1 Qty</span></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                      <Text>NINFY: $20</Text>
                      <hr />
                        <Tabs>
                            <TabList >
                                <Tab color='linear(to-l, #FF0080, #7928CA)'>Regular</Tab>
                                <Tab>AMO</Tab>
                                <Tab>Iceberg</Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    <div className='buy-intraday'>
                                        <div><input type='radio' /><span>Intraday</span></div>
                                        <div><input type='radio' /><span>Delivery</span></div>
                                    </div>
                                    <div className='buyformlabel'>

                                        <FormControl>
                                            <FormLabel fontSize={"14px"}  fontWeight={400}>Quantity</FormLabel>
                                            <Input type='text' />
                                        </FormControl>
                                        <FormControl ml={3}>
                                            <FormLabel fontSize={"14px"}  fontWeight={400}>Price</FormLabel>
                                            <Input type='text' />
                                        </FormControl>
                                        <FormControl ml={3}>
                                            <FormLabel fontSize={"14px"}  fontWeight={400}>Trigger Price</FormLabel>
                                            <Input type='text' />
                                        </FormControl>

                                    </div>
                                    <div className='buymarketlimit'>
                                        <div className='buy-intraday'>
                                            <div><input type='radio' /><span>SL</span></div>

                                            <div><input type='radio' /><span>SI-M</span></div>
                                        </div>
                                        <div className='buy-intraday'>
                                            <div><input type='radio' /><span>Market</span></div>

                                            <div><input type='radio' /><span>Limit</span></div>
                                        </div>
                                        
                                    </div>
                                    <div className='buymoreoption'>
                                            <div>
                                        {
                                            (!isFormOpen) ?
                                                (<Button onClick={openForm} color={"#3500D4"}>More Options <ChevronDownIcon /></Button>) : (<Button color={"#3500D4"} onClick={closeForm}>Hide Options <ChevronUpIcon /></Button>)
                                        }
                                            </div>
                                        {
                                            isFormOpen && (
                                                <div>
                                                    <hr />
                                                    <div className='buymoreoption-inner'>
                                                        <div>
                                                            <div><input type='radio' /><span>Day</span></div>
                                                            <div><input type='radio' /><span>Immediate</span></div>
                                                            <div><input type='radio' /><span>Minutes</span></div>
                                                        </div>
                                                        <div>
                                                                 <FormLabel textAlign={"center"}>Disclosed qty</FormLabel>
                                                                 <div>
                                                                    <FormControl ml={4}>
                                                                        <Select placeholder=''>
                                                                            <option value='option1'>1 minute</option>
                                                                            <option value='option2'>2 minute</option>
                                                                            <option value='option3'>3 minute</option>
                                                                        </Select>
                                                                    </FormControl>
                                                                    <FormControl ml={2}>
                                                                        <Input type='text' />
                                                                    </FormControl>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }

                                    </div>
                                    
                                </TabPanel>
                                <TabPanel>
                                    <p>AMO!</p>
                                </TabPanel>
                                <TabPanel>
                                    <p>Iceberg!</p>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </ModalBody>

                    <ModalFooter>
                        <div className='margincharge'>
                        <label>Margin</label><span>N/A</span>
                        <label>Charges</label><span>N/A</span>
                        </div>
                        <Button colorScheme='blue'   mr={3}>
                            BUY
                        </Button>
                        <Button onClick={onClose} >Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </ChakraProvider>
        </>
        
    )
}
