import { Button, ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import dashlogo from "../../assets/dash-page-logo.svg"
import { AddFundsModel } from './AddFundsModel';
import { WithdrawFundsModel } from './WithdrawFundsModel';

export const Funds = () => {
    return (
        <>
            <ChakraProvider>
                <div className='funds'>
                    <div className='buttonwithaddwithdra'>
                        <div>
                            <Button colorScheme='blue' fontWeight={400}><WithdrawFundsModel /></Button>
                        </div>
                        <div>
                            <Button colorScheme='green' fontWeight={400}><AddFundsModel /></Button>
                        </div>

                        <p>Instant,zero-cost fund transfers with UPI</p>
                    </div>

                    <div style={{marginTop:"80px"}} className='equitycommodity'>

                        {/* 1st div */}
                        <div className='card-div'>
                            <div className='logo-name-flex-first'>
                                <div className='logo-circle'>
                                    <img src={dashlogo} />
                                </div>
                                <div className='logo-name'>
                                    <p>Equity</p>
                                </div>
                            </div>
                            <hr />
                            <div className='fundsdiv'>
                                <div className='fundsdivchild'>
                                    <p>1,00,000.00</p>
                                    <p>Available margin</p>
                                </div>
                                <div className='fundsdivchild'>
                                    <p>0.00</p>
                                    <p>Used margin</p>
                                </div>
                                <div className='fundsdivchild'>
                                    <p>1,00,000.00</p>
                                    <p>Available cash</p>
                                </div>
                                <hr />
                                <div className='fundsdivchild'>
                                    <p>1,00,000.00</p>
                                    <p>Opening balance</p>
                                </div>
                                <div className='fundsdivchild'>
                                    <p>0.00</p>
                                    <p>Delivery margin</p>
                                </div>
                                <div className='fundsdivchild'>
                                    <p>0.00</p>
                                    <p>Option premium</p>
                                </div>
                                <div className='fundsdivchild'>
                                    <p>0.00</p>
                                    <p>Payout</p>
                                </div>
                                <hr />
                                
                                     <div className='fundsdivchild'>
                                        <p>0.00</p>
                                        <p>Collateral (Liquid funds)</p>
                                    </div>
                                    <div className='fundsdivchild'>
                                        <p>0.00</p>
                                        <p>Collateral (Equity)</p>
                                    </div>
                                    <div className='fundsdivchild'>
                                        <p>0.00</p>
                                        <p>Total collateral</p>
                                    
                                </div>
                            </div>
                            

                        </div>

                        {/* 2nd div */}

                        <div className='card-div'>
                            <div className='logo-name-flex'>
                                <div className='logo-circle'>
                                    <img src={dashlogo} />
                                </div>
                                <div className='logo-name'>
                                    <p>Commodity</p>
                                </div>
                            </div>
                            <hr />
                            <div className='fundsdiv'>
                                <div className='fundsdivchild'>
                                    <p>1,00,000.00</p>
                                    <p>Available margin</p>
                                </div>
                                <div className='fundsdivchild'>
                                    <p>0.00</p>
                                    <p>Used margin</p>
                                </div>
                                <div className='fundsdivchild'>
                                    <p>1,00,000.00</p>
                                    <p>Available cash</p>
                                </div>
                                <hr />
                                <div className='fundsdivchild'>
                                    <p>1,00,000.00</p>
                                    <p>Opening balance</p>
                                </div>
                                <div className='fundsdivchild'>
                                    <p>0.00</p>
                                    <p>Delivery margin</p>
                                </div>
                                <div className='fundsdivchild'>
                                    <p>0.00</p>
                                    <p>Option premium</p>
                                </div>
                                <div className='fundsdivchild'>
                                    <p>0.00</p>
                                    <p>Payout</p>
                                </div>
                                <hr />
                                
                                     <div className='fundsdivchild'>
                                        <p>0.00</p>
                                        {/* <p>Collateral (Liquid funds)</p> */}
                                    </div>
                                    <div className='fundsdivchild'>
                                        <p>0.00</p>
                                        {/* <p>Collateral (Equity)</p> */}
                                    </div>
                                    <div className='fundsdivchild'>
                                        <p>0.00</p>
                                        {/* <p>Total collateral</p> */}
                                    
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </ChakraProvider>
        </>
    )
}
