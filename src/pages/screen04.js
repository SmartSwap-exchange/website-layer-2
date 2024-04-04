import React, { PureComponent, lazy, Suspense, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import HeaderWC from '../component/header';
import PopupContainer from '../component/PopupContainer';
import Sidebar from '../component/Sidebar';

import icon1 from '../assets/images/icon1.png'
import icon2 from '../assets/images/icon2.png'
import icon3 from '../assets/images/icon3.png'
import icon4 from '../assets/images/icon4.png'
import Shield from '../assets/images/shield.png'
import Automat from '../assets/images/automat.png'
import tab1 from '../assets/images/tab1.png'
import tab2 from '../assets/images/tab22.png'
import tab3 from '../assets/images/tab33.png'
import Metrics from '../assets/images/Metrics.png'
import nftIcon from '../assets/images/nftIcon.png'


const Screen03 = (props: any) => {
    const [ToggleState, setToggleState] = useState(1);
    const toggleTab = (index: number) => {
        setToggleState(index);
    };
    const getActiveClass = (index: number, className: any) =>
        ToggleState === index ? className : '';
    
    const [isSelectTokenVisible, setSelectTokenVisible] = useState(false);
    const toggleSelectToken = () => {
        setSelectTokenVisible(!isSelectTokenVisible);
    };

    const [isOpen, setIsOpen] = useState(true);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Sidebar />
            
            <PageContainer>
                <DropdownTitle onClick={toggleDropdown}>
                    <i className="fas fa-info-circle" /> How it works <span className={`fas ${isOpen ? 'fa-caret-up' : 'fa-caret-down'}`}/>
                </DropdownTitle>
                {isOpen && (
                <DropContent>
                    <div className='DcSec'>
                        <b>1</b>
                        <div>
                            <h4>One-click deposit into your self-custody vault</h4>
                            <p>Easily deposit one or more tokens into your self-custody vault with just a single click. This process is not only straightforward but also secure, as it is protected by your own wallet's private key.</p>
                        </div>
                    </div>
                    <div className='DcSec'>
                        <b>2</b>
                        <div>
                            <h4>Evaluate opportunities based on different tokens</h4>
                            <p>Different tokens offer varying expedite fees due to their usage rates. Depositing tokens into high-paying, high-yield vaults across various blockchains can maximize your earnings. Select tokens strategically for the best ROI from expedite fees.</p>
                        </div>
                    </div>
                    <div className='DcSec'>
                        <b>3</b>
                        <div>
                            <h4>Passive income stream distribution</h4>
                            <p>Enjoy the convenience of not having to take any action to claim your rewards. The smart contract is designed to automatically push rewards directly to your vault, ensuring that you consistently receive your earnings without the need to manually claim them.</p>
                        </div>
                    </div>
                </DropContent>
                )}

                <TopMenu>
                    <a onClick={() => toggleTab(1)} className={getActiveClass(1, 'active')}><img src={tab1}/>Self custody vaults</a>
                    <a onClick={() => toggleTab(2)} className={getActiveClass(2, 'active')}><img src={tab2}/>Unlimited passive airdrops <span className='badge'>23</span></a>
                    <a onClick={() => toggleTab(3)} className={getActiveClass(3, 'active')}><img src={tab3}/>VIP access</a>
                </TopMenu>
                {getActiveClass(1,
                    <>
                        <TableTop>
                            <div className='searchRight'>
                                <input type='search' className='searchVlt' placeholder='Search a vault' value='' />
                                <Checkbox>
                                    <input type='checkbox' id='vaults' className=''/>
                                    <label htmlFor='vaults'>Display my vaults</label>
                                </Checkbox>
                            </div>
                            <Btn className='inactive'>CONNECT WALLET</Btn>
                            {/* =********= Btn V2 =********= */}
                            {/* <Btn>CREATE NEW VAULT</Btn> */}
                        </TableTop>
                        <TableContainer>
                            <VerticalSlider>
                                <div className='VsHead'>Chain</div>
                                <span><img src={icon1}/></span>
                                <span><img src={icon2}/></span>
                                <span><img src={icon3}/></span>
                                <span><img src={icon4}/></span>
                                <span><img src={icon1}/></span>
                                <span><img src={icon2}/></span>
                                <span><img src={icon3}/></span>
                                <span><img src={icon4}/></span>
                            </VerticalSlider>
                            <TableScroll>
                                <table>
                                    <tr>
                                        <th className='w-10'>Token <Shorting><a><i className="fas fa-caret-up"></i></a><a><i className="fas fa-caret-down"></i></a></Shorting></th>
                                        <th className='w-10'>TVL <i className="fas fa-question-circle"></i> <Shorting><a><i className="fas fa-caret-up"></i></a><a><i className="fas fa-caret-down"></i></a></Shorting></th>
                                        <th className='w-10'>Avg usage  <i className="fas fa-question-circle"></i> <Shorting><a><i className="fas fa-caret-up"></i></a><a><i className="fas fa-caret-down"></i></a></Shorting></th>
                                        <th className='w-10'>Expedite rewards <i className="fas fa-question-circle"></i></th>
                                        <th className='w-10'>Your vault value <i className="fas fa-question-circle"></i> <Shorting><a><i className="fas fa-caret-up"></i></a><a><i className="fas fa-caret-down"></i></a></Shorting></th>
                                        <th className='w-10 hcol'>Your ROI <i className="fas fa-question-circle"></i></th>
                                        <th className='w-10 hcol'>Your rewards <i className="fas fa-question-circle"></i></th>
                                        <th className='w-10'>Your Balance <i className="fas fa-question-circle"></i> <Shorting><a><i className="fas fa-caret-up"></i></a><a><i className="fas fa-caret-down"></i></a></Shorting></th>
                                        <th className='w-10 text-center'>Deposit</th>
                                    </tr>
                                    <tr className='hRow'>
                                        <td>
                                            <Token><img src={icon1}/> SMART</Token>
                                        </td>
                                        <td>23,563,653</td>
                                        <td>53.52%</td>
                                        <td className='color-green'>87.53%</td>
                                        <td>0</td>
                                        <td colSpan={2}>
                                            <BtnLg>
                                                <b>Deposit $100 for 100 Days</b>
                                                <i>to Claim Your <span>547.50%</span> APY <strong className="fas fa-question-circle"></strong></i>
                                            </BtnLg>
                                        </td>
                                        <td>0</td>
                                        <td><a className='btn01 white'>CONNECT WALLET</a></td>
                                    </tr>
                                    <tr className='hRow'>
                                        <td>
                                            <Token><img src={icon2}/> SMART</Token>
                                        </td>
                                        <td>1,000,000</td>
                                        <td>53.52%</td>
                                        <td className='color-green'>87.53%</td>
                                        <td className=''>1,000,000</td>
                                        <td colSpan={2}>
                                            <BtnLg>
                                                <b>Deposit $100 for 100 Days</b>
                                                <i>to Claim Your <span>547.50%</span> APY <strong className="fas fa-question-circle"></strong></i>
                                            </BtnLg>
                                        </td>
                                        <td className='color-blue hasBtn'>1,000,000,000 <a className='claim color-white'>CONNECT WALLET</a><a className='arrow-dwn'><i className="fas fa-arrow-down"></i></a></td>
                                        <td><a onClick={toggleSelectToken} className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                    <tr className='hRow'>
                                        <td>
                                            <Token><img src={icon2}/> SMART</Token>
                                        </td>
                                        <td>1,000,000</td>
                                        <td>53.52%</td>
                                        <td className='color-green'>87.53%</td>
                                        <td className=''>1,000,000</td>
                                        <td colSpan={2}>
                                            <BtnLg>
                                                <b>Deposit $100 for 100 Days</b>
                                                <i>to Claim Your <span>547.50%</span> APY <strong className="fas fa-question-circle"></strong></i>
                                            </BtnLg>
                                        </td>
                                        <td className='color-blue hasBtn'>1,000,000,000 <a className='claim color-red'>WITHDRAWN </a><a className='arrow-dwn'><i className="fas fa-arrow-down"></i></a></td>
                                        <td><a onClick={toggleSelectToken} className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Token><img src={icon2}/> SMART</Token>
                                        </td>
                                        <td>1,000,000</td>
                                        <td>53.52%</td>
                                        <td className='color-green'>87.53%</td>
                                        <td className=''>1,000,000</td>
                                        <td className='hcol'>25.52%</td>
                                        <td className='hcol color-green'>+1,000,000</td>
                                        <td className='color-blue hasBtn'>1,000,000,000 <a className='claim color-red'>WITHDRAWN </a><a className='arrow-dwn'><i className="fas fa-arrow-down"></i></a></td>
                                        <td><a onClick={toggleSelectToken} className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Token><img src={icon2}/> SMART</Token>
                                        </td>
                                        <td>1,000,000</td>
                                        <td>53.52%</td>
                                        <td className='color-green'>87.53%</td>
                                        <td className=''>1,000,000</td>
                                        <td className='hcol'>25.52%</td>
                                        <td className='hcol color-green'>+1,000,000 </td>
                                        <td className='color-blue hasBtn'>1,000,000,000 <a className='claim color-white'>CONNECT WALLET</a><a className='arrow-dwn'><i className="fas fa-arrow-down"></i></a></td>
                                        <td><a onClick={toggleSelectToken} className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Token><img src={icon2}/> SMART</Token>
                                        </td>
                                        <td>1,000,000</td>
                                        <td>53.52%</td>
                                        <td className='color-green'>87.53%</td>
                                        <td className=''>1,000,000</td>
                                        <td className='hcol'>25.52%</td>
                                        <td className='hcol color-green'>+1,000,000 </td>
                                        <td className='color-blue hasBtn'>1,000,000,000 <a className='claim color-white'>CONNECT WALLET</a><a className='arrow-dwn'><i className="fas fa-arrow-down"></i></a></td>
                                        <td><a onClick={toggleSelectToken} className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Token><img src={icon2}/> SMART</Token>
                                        </td>
                                        <td>1,000,000</td>
                                        <td>53.52%</td>
                                        <td className='color-green'>87.53%</td>
                                        <td className=''>1,000,000</td>
                                        <td className='hcol'>25.52%</td>
                                        <td className='hcol color-green'>+1,000,000 </td>
                                        <td className='color-blue hasBtn'>1,000,000,000 <a className='claim color-white'>CONNECT WALLET</a><a className='arrow-dwn'><i className="fas fa-arrow-down"></i></a></td>
                                        <td><a onClick={toggleSelectToken} className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Token><img src={icon2}/> SMART</Token>
                                        </td>
                                        <td>1,000,000</td>
                                        <td>53.52%</td>
                                        <td className='color-green'>87.53%</td>
                                        <td className=''>1,000,000</td>
                                        <td className='hcol'>25.52%</td>
                                        <td className='hcol color-green'>+1,000,000 </td>
                                        <td className='color-blue hasBtn'>1,000,000,000 <a className='claim color-white'>CONNECT WALLET</a><a className='arrow-dwn'><i className="fas fa-arrow-down"></i></a></td>
                                        <td><a onClick={toggleSelectToken} className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={5} valign='top' className='nobo'>
                                            <a className='becameV'>
                                                <p><img src={Shield}/> Become your own validator </p>
                                            </a>
                                        </td>
                                        <td className='nobo'><span>Avg: <b>25.52%</b></span>
                                        </td>
                                        <td className='nobo'><span>Total: <b>10,000,000</b></span>
                                        </td>
                                        <td className='nobo'><span>Total: <b>1,000,000,000,000</b></span>
                                        </td>
                                        <td className='nobo'></td>
                                    </tr>
                                </table>
                            </TableScroll>
                        </TableContainer>
                    </>
                )}

                {getActiveClass(2,
                    <>
                    <TableTop>
                        <div className='searchRight'>
                            <input type='search' className='searchVlt' placeholder='Search an airdrop' value='' />
                        </div>
                        <Btn className='green-border btn-lg'>Project Airdrop Your Tokens for FREE</Btn>
                    </TableTop>
                    <TableContainer>
                        <VerticalSlider>
                            <div className='VsHead'>Chain</div>
                            <span><img src={icon1}/></span>
                            <span><img src={icon2}/></span>
                            <span><img src={icon3}/></span>
                            <span><img src={icon4}/></span>
                            <span><img src={icon1}/></span>
                            <span><img src={icon2}/></span>
                            <span><img src={icon3}/></span>
                            <span><img src={icon4}/></span>
                        </VerticalSlider>
                        <TableScroll>
                            <table>
                                <thead>
                                <tr>
                                    <th className='w-10'>Token <Shorting><a><i className="fas fa-caret-up"></i></a><a><i className="fas fa-caret-down"></i></a></Shorting></th>
                                    <th className='w-10'>Airdrop 
    supply <i className="fas fa-question-circle"></i> <Shorting><a><i className="fas fa-caret-up"></i></a><a><i className="fas fa-caret-down"></i></a></Shorting></th>
                                    <th className='w-10'>Token 
    value  <i className="fas fa-question-circle"></i> <Shorting><a><i className="fas fa-caret-up"></i></a><a><i className="fas fa-caret-down"></i></a></Shorting></th>
                                    <th className='w-10'>Metrics</th>
                                    <th className='w-10'>Drop
    progress <i className="fas fa-question-circle"></i> <Shorting><a><i className="fas fa-caret-up"></i></a><a><i className="fas fa-caret-down"></i></a></Shorting></th>
                                    <th className='w-10'>Airdrop 
    ending  <i className="fas fa-question-circle"></i> <Shorting><a><i className="fas fa-caret-up"></i></a><a><i className="fas fa-caret-down"></i></a></Shorting></th>
                                    <th className='w-10'>Share power <i className="fas fa-question-circle"></i> <Shorting><a><i className="fas fa-caret-up"></i></a><a><i className="fas fa-caret-down"></i></a></Shorting></th>
                                    <th className='w-10'>Your 
                                    rewards <i className="fas fa-question-circle"></i></th>
                                    <th className='w-10'>Increase your share <i className="fas fa-question-circle"></i> </th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Token><img src={icon1}/> SMART</Token>
                                        </td>
                                        <td>100,000,000</td>
                                        <td>$1</td>
                                        <td><Token className='color-blue'><img src={Metrics}/> View detail</Token></td>
                                        <td>
                                            <Progress><b style={{width: '20%'}} /></Progress>
                                            <ProgTxt>23,526,523 / 100,000,000</ProgTxt>
                                        </td>
                                        <td>
                                            <Counter>
                                                <b>3</b><b>6</b><b>4</b><i>:</i>
                                                <b>1</b><b>2</b><i>:</i>
                                                <b>4</b><b>3</b><i>:</i>
                                                <b>2</b><b>5</b>
                                            </Counter>
                                        </td>
                                        <td id="toolID1">100,000</td>
                                        <td className='color-blue hasBtn'>1,000,000,000 <a className='claim color-green'>CLAIM TO YOUR VAULT</a><a className='arrow-dwn'><i className="fas fa-arrow-down"></i></a></td>
                                        <td><a className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Token><img src={icon1}/> SMART</Token>
                                        </td>
                                        <td>100,000,000</td>
                                        <td>$1</td>
                                        <td><Token className='color-blue'><img src={Metrics}/> View detail</Token></td>
                                        <td>
                                            <Progress><b style={{width: '20%'}} /></Progress>
                                            <ProgTxt>23,526,523 / 100,000,000</ProgTxt>
                                        </td>
                                        <td>
                                            <Counter>
                                                <b>3</b><b>6</b><b>4</b><i>:</i>
                                                <b>1</b><b>2</b><i>:</i>
                                                <b>4</b><b>3</b><i>:</i>
                                                <b>2</b><b>5</b>
                                            </Counter>
                                        </td>
                                        <td id="toolID1">100,000</td>
                                        <td className='color-blue hasBtn'>1,000,000,000 <a className='claim color-green'>CLAIM TO YOUR VAULT</a><a className='arrow-dwn'><i className="fas fa-arrow-down"></i></a></td>
                                        <td><a className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Token><img src={icon1}/> SMART</Token>
                                        </td>
                                        <td>100,000,000</td>
                                        <td>$1</td>
                                        <td><Token className='color-blue'><img src={Metrics}/> View detail</Token></td>
                                        <td>
                                            <Progress><b style={{width: '20%'}} /></Progress>
                                            <ProgTxt>23,526,523 / 100,000,000</ProgTxt>
                                        </td>
                                        <td>
                                            <Counter>
                                                <b>3</b><b>6</b><b>4</b><i>:</i>
                                                <b>1</b><b>2</b><i>:</i>
                                                <b>4</b><b>3</b><i>:</i>
                                                <b>2</b><b>5</b>
                                            </Counter>
                                        </td>
                                        <td id="toolID1">100,000</td>
                                        <td className='color-blue hasBtn'>1,000,000,000 <a className='claim color-green'>CLAIM TO YOUR VAULT</a><a className='arrow-dwn'><i className="fas fa-arrow-down"></i></a></td>
                                        <td><a className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Token><img src={icon1}/> SMART</Token>
                                        </td>
                                        <td>100,000,000</td>
                                        <td>$1</td>
                                        <td><Token className='color-blue'><img src={Metrics}/> View detail</Token></td>
                                        <td>
                                            <Progress><b style={{width: '20%'}} /></Progress>
                                            <ProgTxt>23,526,523 / 100,000,000</ProgTxt>
                                        </td>
                                        <td>
                                            <Counter>
                                                <b>3</b><b>6</b><b>4</b><i>:</i>
                                                <b>1</b><b>2</b><i>:</i>
                                                <b>4</b><b>3</b><i>:</i>
                                                <b>2</b><b>5</b>
                                            </Counter>
                                        </td>
                                        <td id="toolID1">100,000</td>
                                        <td className='color-blue hasBtn'>1,000,000,000 <a className='claim color-green'>CLAIM TO YOUR VAULT</a><a className='arrow-dwn'><i className="fas fa-arrow-down"></i></a></td>
                                        <td><a className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Token><img src={icon1}/> SMART</Token>
                                        </td>
                                        <td>100,000,000</td>
                                        <td>$1</td>
                                        <td><Token className='color-blue'><img src={Metrics}/> View detail</Token></td>
                                        <td>
                                            <Progress><b style={{width: '20%'}} /></Progress>
                                            <ProgTxt>23,526,523 / 100,000,000</ProgTxt>
                                        </td>
                                        <td>
                                            <Counter>
                                                <b>3</b><b>6</b><b>4</b><i>:</i>
                                                <b>1</b><b>2</b><i>:</i>
                                                <b>4</b><b>3</b><i>:</i>
                                                <b>2</b><b>5</b>
                                            </Counter>
                                        </td>
                                        <td id="toolID1">100,000</td>
                                        <td className='color-blue hasBtn'>1,000,000,000 <a className='claim color-green'>CLAIM TO YOUR VAULT</a><a className='arrow-dwn'><i className="fas fa-arrow-down"></i></a></td>
                                        <td><a className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Token><img src={icon1}/> SMART</Token>
                                        </td>
                                        <td>100,000,000</td>
                                        <td>$1</td>
                                        <td><Token className='color-blue'><img src={Metrics}/> View detail</Token></td>
                                        <td>
                                            <Progress><b style={{width: '20%'}} /></Progress>
                                            <ProgTxt>23,526,523 / 100,000,000</ProgTxt>
                                        </td>
                                        <td>
                                            <Counter>
                                                <b>3</b><b>6</b><b>4</b><i>:</i>
                                                <b>1</b><b>2</b><i>:</i>
                                                <b>4</b><b>3</b><i>:</i>
                                                <b>2</b><b>5</b>
                                            </Counter>
                                        </td>
                                        <td id="toolID1">100,000</td>
                                        <td className='color-blue hasBtn'>1,000,000,000 <a className='claim color-green'>CLAIM TO YOUR VAULT</a><a className='arrow-dwn'><i className="fas fa-arrow-down"></i></a></td>
                                        <td><a className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Token><img src={icon1}/> SMART</Token>
                                        </td>
                                        <td>100,000,000</td>
                                        <td>$1</td>
                                        <td><Token className='color-blue'><img src={Metrics}/> View detail</Token></td>
                                        <td>
                                            <Progress><b style={{width: '20%'}} /></Progress>
                                            <ProgTxt>23,526,523 / 100,000,000</ProgTxt>
                                        </td>
                                        <td>
                                            <Counter>
                                                <b>3</b><b>6</b><b>4</b><i>:</i>
                                                <b>1</b><b>2</b><i>:</i>
                                                <b>4</b><b>3</b><i>:</i>
                                                <b>2</b><b>5</b>
                                            </Counter>
                                        </td>
                                        <td id="toolID1">100,000</td>
                                        <td className='color-blue hasBtn'>1,000,000,000 <a className='claim color-green'>CLAIM TO YOUR VAULT</a><a className='arrow-dwn'><i className="fas fa-arrow-down"></i></a></td>
                                        <td><a className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Token><img src={icon1}/> SMART</Token>
                                        </td>
                                        <td>100,000,000</td>
                                        <td>$1</td>
                                        <td><Token className='color-blue'><img src={Metrics}/> View detail</Token></td>
                                        <td>
                                            <Progress><b style={{width: '20%'}} /></Progress>
                                            <ProgTxt>23,526,523 / 100,000,000</ProgTxt>
                                        </td>
                                        <td>
                                            <Counter>
                                                <b>3</b><b>6</b><b>4</b><i>:</i>
                                                <b>1</b><b>2</b><i>:</i>
                                                <b>4</b><b>3</b><i>:</i>
                                                <b>2</b><b>5</b>
                                            </Counter>
                                        </td>
                                        <td id="toolID1">100,000</td>
                                        <td className='color-blue hasBtn'>1,000,000,000 <a className='claim color-green'>CLAIM TO YOUR VAULT</a><a className='arrow-dwn'><i className="fas fa-arrow-down"></i></a></td>
                                        <td><a className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={7} valign='top' className='nobo'>
                                        </td>
                                        <td className='nobo'>
                                            <a className='btn01 green'>CLAIM ALL</a>
                                        </td>
                                        <td className='nobo'></td>
                                    </tr>   
                                </tbody>               
                            </table>
                        </TableScroll>
                    </TableContainer>

                    <TableContainer>
                        <VerticalSlider>
                            <div className='VsHead'>Chain</div>
                            <span><img src={icon1}/></span>
                            <span><img src={icon2}/></span>
                            <span><img src={icon3}/></span>
                            <span><img src={icon4}/></span>
                            <span><img src={icon1}/></span>
                            <span><img src={icon2}/></span>
                            <span><img src={icon3}/></span>
                            <span><img src={icon4}/></span>
                        </VerticalSlider>
                        <TableScroll>
                            <table>
                                <thead>
                                <tr>
                                    <th className='w-10'>Collection <Shorting><a><i className="fas fa-caret-up"></i></a><a><i className="fas fa-caret-down"></i></a></Shorting></th>
                                    <th className='w-10'>NFT <i className="fas fa-question-circle"></i> <Shorting><a><i className="fas fa-caret-up"></i></a><a><i className="fas fa-caret-down"></i></a></Shorting></th>
                                    <th className='w-10'>NFT supply  <i className="fas fa-question-circle"></i> <Shorting><a><i className="fas fa-caret-up"></i></a><a><i className="fas fa-caret-down"></i></a></Shorting></th>
                                    <th className='w-10'>Floor price</th>
                                    <th className='w-10'>Metrics <i className="fas fa-question-circle"></i> <Shorting><a><i className="fas fa-caret-up"></i></a><a><i className="fas fa-caret-down"></i></a></Shorting></th>
                                    <th className='w-10'>Drop progress  <i className="fas fa-question-circle"></i> <Shorting><a><i className="fas fa-caret-up"></i></a><a><i className="fas fa-caret-down"></i></a></Shorting></th>
                                    <th className='w-10'>Due date <i className="fas fa-question-circle"></i> <Shorting><a><i className="fas fa-caret-up"></i></a><a><i className="fas fa-caret-down"></i></a></Shorting></th>
                                    <th className='w-10'>Eligable to claim <i className="fas fa-question-circle"></i></th>
                                    <th className='w-10'>Increase your share <i className="fas fa-question-circle"></i> </th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Token><img src={icon1}/> Bored Ape ...</Token>
                                        </td>
                                        <td><Token><img src={icon1}/> Bored Ape ...</Token></td>
                                        <td>10,000</td>
                                        <td>$1</td>
                                        <td><Token className='color-blue'><img src={nftIcon}/> View detail</Token></td>
                                        <td>
                                            <Progress><b style={{width: '20%'}} /></Progress>
                                            <ProgTxt>23,526,523 / 100,000,000</ProgTxt>
                                        </td>
                                        <td>
                                            <Counter>
                                                <b>3</b><b>6</b><b>4</b><i>:</i>
                                                <b>1</b><b>2</b><i>:</i>
                                                <b>4</b><b>3</b><i>:</i>
                                                <b>2</b><b>5</b>
                                            </Counter>
                                        </td>
                                        <td className='hasBtn'>1 <a className='claim color-green'>CLAIM TO YOUR VAULT</a></td>
                                        <td><a className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Token><img src={icon1}/> Ghost Project</Token>
                                        </td>
                                        <td><Token><img src={icon1}/> Ghost Project</Token></td>
                                        <td>10,000</td>
                                        <td>$1</td>
                                        <td><Token className='color-blue'><img src={nftIcon}/> View detail</Token></td>
                                        <td>
                                            <Progress><b style={{width: '20%'}} /></Progress>
                                            <ProgTxt>23,526,523 / 100,000,000</ProgTxt>
                                        </td>
                                        <td>
                                            <Counter>
                                                <b>3</b><b>6</b><b>4</b><i>:</i>
                                                <b>1</b><b>2</b><i>:</i>
                                                <b>4</b><b>3</b><i>:</i>
                                                <b>2</b><b>5</b>
                                            </Counter>
                                        </td>
                                        <td className='hasBtn'>1 <a className='claim color-green'>CLAIM TO YOUR VAULT</a></td>
                                        <td><a className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Token><img src={icon1}/> Bored Ape ...</Token>
                                        </td>
                                        <td><Token><img src={icon1}/> Bored Ape ...</Token></td>
                                        <td>10,000</td>
                                        <td>$1</td>
                                        <td><Token className='color-blue'><img src={nftIcon}/> View detail</Token></td>
                                        <td>
                                            <Progress><b style={{width: '20%'}} /></Progress>
                                            <ProgTxt>23,526,523 / 100,000,000</ProgTxt>
                                        </td>
                                        <td>
                                            <Counter>
                                                <b>3</b><b>6</b><b>4</b><i>:</i>
                                                <b>1</b><b>2</b><i>:</i>
                                                <b>4</b><b>3</b><i>:</i>
                                                <b>2</b><b>5</b>
                                            </Counter>
                                        </td>
                                        <td className='hasBtn'>1 <a className='claim color-green'>CLAIM TO YOUR VAULT</a></td>
                                        <td><a className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Token><img src={icon1}/> Ghost Project</Token>
                                        </td>
                                        <td><Token><img src={icon1}/> Ghost Project</Token></td>
                                        <td>10,000</td>
                                        <td>$1</td>
                                        <td><Token className='color-blue'><img src={nftIcon}/> View detail</Token></td>
                                        <td>
                                            <Progress><b style={{width: '20%'}} /></Progress>
                                            <ProgTxt>23,526,523 / 100,000,000</ProgTxt>
                                        </td>
                                        <td>
                                            <Counter>
                                                <b>3</b><b>6</b><b>4</b><i>:</i>
                                                <b>1</b><b>2</b><i>:</i>
                                                <b>4</b><b>3</b><i>:</i>
                                                <b>2</b><b>5</b>
                                            </Counter>
                                        </td>
                                        <td className='hasBtn'>1 <a className='claim color-green'>CLAIM TO YOUR VAULT</a></td>
                                        <td><a className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Token><img src={icon1}/> Bored Ape ...</Token>
                                        </td>
                                        <td><Token><img src={icon1}/> Bored Ape ...</Token></td>
                                        <td>10,000</td>
                                        <td>$1</td>
                                        <td><Token className='color-blue'><img src={nftIcon}/> View detail</Token></td>
                                        <td>
                                            <Progress><b style={{width: '20%'}} /></Progress>
                                            <ProgTxt>23,526,523 / 100,000,000</ProgTxt>
                                        </td>
                                        <td>
                                            <Counter>
                                                <b>3</b><b>6</b><b>4</b><i>:</i>
                                                <b>1</b><b>2</b><i>:</i>
                                                <b>4</b><b>3</b><i>:</i>
                                                <b>2</b><b>5</b>
                                            </Counter>
                                        </td>
                                        <td className='hasBtn'>1 <a className='claim color-green'>CLAIM TO YOUR VAULT</a></td>
                                        <td><a className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Token><img src={icon1}/> Ghost Project</Token>
                                        </td>
                                        <td><Token><img src={icon1}/> Ghost Project</Token></td>
                                        <td>10,000</td>
                                        <td>$1</td>
                                        <td><Token className='color-blue'><img src={nftIcon}/> View detail</Token></td>
                                        <td>
                                            <Progress><b style={{width: '20%'}} /></Progress>
                                            <ProgTxt>23,526,523 / 100,000,000</ProgTxt>
                                        </td>
                                        <td>
                                            <Counter>
                                                <b>3</b><b>6</b><b>4</b><i>:</i>
                                                <b>1</b><b>2</b><i>:</i>
                                                <b>4</b><b>3</b><i>:</i>
                                                <b>2</b><b>5</b>
                                            </Counter>
                                        </td>
                                        <td className='hasBtn'>1 <a className='claim color-green'>CLAIM TO YOUR VAULT</a></td>
                                        <td><a className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Token><img src={icon1}/> Bored Ape ...</Token>
                                        </td>
                                        <td><Token><img src={icon1}/> Bored Ape ...</Token></td>
                                        <td>10,000</td>
                                        <td>$1</td>
                                        <td><Token className='color-blue'><img src={nftIcon}/> View detail</Token></td>
                                        <td>
                                            <Progress><b style={{width: '20%'}} /></Progress>
                                            <ProgTxt>23,526,523 / 100,000,000</ProgTxt>
                                        </td>
                                        <td>
                                            <Counter>
                                                <b>3</b><b>6</b><b>4</b><i>:</i>
                                                <b>1</b><b>2</b><i>:</i>
                                                <b>4</b><b>3</b><i>:</i>
                                                <b>2</b><b>5</b>
                                            </Counter>
                                        </td>
                                        <td className='hasBtn'>1 <a className='claim color-green'>CLAIM TO YOUR VAULT</a></td>
                                        <td><a className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Token><img src={icon1}/> Ghost Project</Token>
                                        </td>
                                        <td><Token><img src={icon1}/> Ghost Project</Token></td>
                                        <td>10,000</td>
                                        <td>$1</td>
                                        <td><Token className='color-blue'><img src={nftIcon}/> View detail</Token></td>
                                        <td>
                                            <Progress><b style={{width: '20%'}} /></Progress>
                                            <ProgTxt>23,526,523 / 100,000,000</ProgTxt>
                                        </td>
                                        <td>
                                            <Counter>
                                                <b>3</b><b>6</b><b>4</b><i>:</i>
                                                <b>1</b><b>2</b><i>:</i>
                                                <b>4</b><b>3</b><i>:</i>
                                                <b>2</b><b>5</b>
                                            </Counter>
                                        </td>
                                        <td className='hasBtn'>1 <a className='claim color-green'>CLAIM TO YOUR VAULT</a></td>
                                        <td><a className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                </tbody>               
                            </table>
                        </TableScroll>
                    </TableContainer>
                    </>
                )}

                {getActiveClass(3,
                    <>
                    <TableTop>
                        <div className='searchRight'>
                            <input type='search' className='searchVlt' placeholder='Search an airdrop' value='' />
                        </div>
                        <div className='ttRight'>
                            <p><b>VIP access</b> <span>$SMART token balance:</span>  100,000</p>
                            <div className='ttLinks'>
                                <a className='color-green'>ADD</a>
                                <span>|</span>
                                <a className='color-red'>WITHDRAW</a>
                            </div>
                        </div>
                    </TableTop>
                    <TableContainer>
                        <VerticalSlider>
                            <div className='VsHead'>Chain</div>
                            <span><img src={icon1}/></span>
                            <span><img src={icon2}/></span>
                            <span><img src={icon3}/></span>
                            <span><img src={icon4}/></span>
                            <span><img src={icon1}/></span>
                            <span><img src={icon2}/></span>
                            <span><img src={icon3}/></span>
                            <span><img src={icon4}/></span>
                        </VerticalSlider>
                        <TableScroll>
                            <table>
                                <thead>
                                <tr>
                                    <th className='w-10'>Token <Shorting><a><i className="fas fa-caret-up"></i></a><a><i className="fas fa-caret-down"></i></a></Shorting></th>
                                    <th className='w-10'>Airdrop 
    supply <i className="fas fa-question-circle"></i> <Shorting><a><i className="fas fa-caret-up"></i></a><a><i className="fas fa-caret-down"></i></a></Shorting></th>
                                    <th className='w-10'>Token 
    value  <i className="fas fa-question-circle"></i> <Shorting><a><i className="fas fa-caret-up"></i></a><a><i className="fas fa-caret-down"></i></a></Shorting></th>
                                    <th className='w-10'>Metrics</th>
                                    <th className='w-10'>Drop
    progress <i className="fas fa-question-circle"></i> <Shorting><a><i className="fas fa-caret-up"></i></a><a><i className="fas fa-caret-down"></i></a></Shorting></th>
                                    <th className='w-10'>Airdrop 
    ending  <i className="fas fa-question-circle"></i> <Shorting><a><i className="fas fa-caret-up"></i></a><a><i className="fas fa-caret-down"></i></a></Shorting></th>
                                    <th className='w-10'>Share power <i className="fas fa-question-circle"></i> <Shorting><a><i className="fas fa-caret-up"></i></a><a><i className="fas fa-caret-down"></i></a></Shorting></th>
                                    <th className='w-10'>Your 
                                    rewards <i className="fas fa-question-circle"></i></th>
                                    <th className='w-10'>Increase your share <i className="fas fa-question-circle"></i> </th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Token><img src={icon1}/> SMART</Token>
                                        </td>
                                        <td>100,000,000</td>
                                        <td>$1</td>
                                        <td><Token className='color-blue'><img src={Metrics}/> View detail</Token></td>
                                        <td>
                                            <Progress><b style={{width: '20%'}} /></Progress>
                                            <ProgTxt>23,526,523 / 100,000,000</ProgTxt>
                                        </td>
                                        <td>
                                            <Counter>
                                                <b>3</b><b>6</b><b>4</b><i>:</i>
                                                <b>1</b><b>2</b><i>:</i>
                                                <b>4</b><b>3</b><i>:</i>
                                                <b>2</b><b>5</b>
                                            </Counter>
                                        </td>
                                        <td id="toolID1">100,000</td>
                                        <td className='color-blue hasBtn'>1,000,000,000 <a className='claim color-green'>CLAIM TO YOUR VAULT</a><a className='arrow-dwn'><i className="fas fa-arrow-down"></i></a></td>
                                        <td><a className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Token><img src={icon1}/> SMART</Token>
                                        </td>
                                        <td>100,000,000</td>
                                        <td>$1</td>
                                        <td><Token className='color-blue'><img src={Metrics}/> View detail</Token></td>
                                        <td>
                                            <Progress><b style={{width: '20%'}} /></Progress>
                                            <ProgTxt>23,526,523 / 100,000,000</ProgTxt>
                                        </td>
                                        <td>
                                            <Counter>
                                                <b>3</b><b>6</b><b>4</b><i>:</i>
                                                <b>1</b><b>2</b><i>:</i>
                                                <b>4</b><b>3</b><i>:</i>
                                                <b>2</b><b>5</b>
                                            </Counter>
                                        </td>
                                        <td id="toolID1">100,000</td>
                                        <td className='color-blue hasBtn'>1,000,000,000 <a className='claim color-green'>CLAIM TO YOUR VAULT</a><a className='arrow-dwn'><i className="fas fa-arrow-down"></i></a></td>
                                        <td><a className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Token><img src={icon1}/> SMART</Token>
                                        </td>
                                        <td>100,000,000</td>
                                        <td>$1</td>
                                        <td><Token className='color-blue'><img src={Metrics}/> View detail</Token></td>
                                        <td>
                                            <Progress><b style={{width: '20%'}} /></Progress>
                                            <ProgTxt>23,526,523 / 100,000,000</ProgTxt>
                                        </td>
                                        <td>
                                            <Counter>
                                                <b>3</b><b>6</b><b>4</b><i>:</i>
                                                <b>1</b><b>2</b><i>:</i>
                                                <b>4</b><b>3</b><i>:</i>
                                                <b>2</b><b>5</b>
                                            </Counter>
                                        </td>
                                        <td id="toolID1">100,000</td>
                                        <td className='color-blue hasBtn'>1,000,000,000 <a className='claim color-green'>CLAIM TO YOUR VAULT</a><a className='arrow-dwn'><i className="fas fa-arrow-down"></i></a></td>
                                        <td><a className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Token><img src={icon1}/> SMART</Token>
                                        </td>
                                        <td>100,000,000</td>
                                        <td>$1</td>
                                        <td><Token className='color-blue'><img src={Metrics}/> View detail</Token></td>
                                        <td>
                                            <Progress><b style={{width: '20%'}} /></Progress>
                                            <ProgTxt>23,526,523 / 100,000,000</ProgTxt>
                                        </td>
                                        <td>
                                            <Counter>
                                                <b>3</b><b>6</b><b>4</b><i>:</i>
                                                <b>1</b><b>2</b><i>:</i>
                                                <b>4</b><b>3</b><i>:</i>
                                                <b>2</b><b>5</b>
                                            </Counter>
                                        </td>
                                        <td id="toolID1">100,000</td>
                                        <td className='color-blue hasBtn'>1,000,000,000 <a className='claim color-green'>CLAIM TO YOUR VAULT</a><a className='arrow-dwn'><i className="fas fa-arrow-down"></i></a></td>
                                        <td><a className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Token><img src={icon1}/> SMART</Token>
                                        </td>
                                        <td>100,000,000</td>
                                        <td>$1</td>
                                        <td><Token className='color-blue'><img src={Metrics}/> View detail</Token></td>
                                        <td>
                                            <Progress><b style={{width: '20%'}} /></Progress>
                                            <ProgTxt>23,526,523 / 100,000,000</ProgTxt>
                                        </td>
                                        <td>
                                            <Counter>
                                                <b>3</b><b>6</b><b>4</b><i>:</i>
                                                <b>1</b><b>2</b><i>:</i>
                                                <b>4</b><b>3</b><i>:</i>
                                                <b>2</b><b>5</b>
                                            </Counter>
                                        </td>
                                        <td id="toolID1">100,000</td>
                                        <td className='color-blue hasBtn'>1,000,000,000 <a className='claim color-green'>CLAIM TO YOUR VAULT</a><a className='arrow-dwn'><i className="fas fa-arrow-down"></i></a></td>
                                        <td><a className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Token><img src={icon1}/> SMART</Token>
                                        </td>
                                        <td>100,000,000</td>
                                        <td>$1</td>
                                        <td><Token className='color-blue'><img src={Metrics}/> View detail</Token></td>
                                        <td>
                                            <Progress><b style={{width: '20%'}} /></Progress>
                                            <ProgTxt>23,526,523 / 100,000,000</ProgTxt>
                                        </td>
                                        <td>
                                            <Counter>
                                                <b>3</b><b>6</b><b>4</b><i>:</i>
                                                <b>1</b><b>2</b><i>:</i>
                                                <b>4</b><b>3</b><i>:</i>
                                                <b>2</b><b>5</b>
                                            </Counter>
                                        </td>
                                        <td id="toolID1">100,000</td>
                                        <td className='color-blue hasBtn'>1,000,000,000 <a className='claim color-green'>CLAIM TO YOUR VAULT</a><a className='arrow-dwn'><i className="fas fa-arrow-down"></i></a></td>
                                        <td><a className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Token><img src={icon1}/> SMART</Token>
                                        </td>
                                        <td>100,000,000</td>
                                        <td>$1</td>
                                        <td><Token className='color-blue'><img src={Metrics}/> View detail</Token></td>
                                        <td>
                                            <Progress><b style={{width: '20%'}} /></Progress>
                                            <ProgTxt>23,526,523 / 100,000,000</ProgTxt>
                                        </td>
                                        <td>
                                            <Counter>
                                                <b>3</b><b>6</b><b>4</b><i>:</i>
                                                <b>1</b><b>2</b><i>:</i>
                                                <b>4</b><b>3</b><i>:</i>
                                                <b>2</b><b>5</b>
                                            </Counter>
                                        </td>
                                        <td id="toolID1">100,000</td>
                                        <td className='color-blue hasBtn'>1,000,000,000 <a className='claim color-green'>CLAIM TO YOUR VAULT</a><a className='arrow-dwn'><i className="fas fa-arrow-down"></i></a></td>
                                        <td><a className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Token><img src={icon1}/> SMART</Token>
                                        </td>
                                        <td>100,000,000</td>
                                        <td>$1</td>
                                        <td><Token className='color-blue'><img src={Metrics}/> View detail</Token></td>
                                        <td>
                                            <Progress><b style={{width: '20%'}} /></Progress>
                                            <ProgTxt>23,526,523 / 100,000,000</ProgTxt>
                                        </td>
                                        <td>
                                            <Counter>
                                                <b>3</b><b>6</b><b>4</b><i>:</i>
                                                <b>1</b><b>2</b><i>:</i>
                                                <b>4</b><b>3</b><i>:</i>
                                                <b>2</b><b>5</b>
                                            </Counter>
                                        </td>
                                        <td id="toolID1">100,000</td>
                                        <td className='color-blue hasBtn'>1,000,000,000 <a className='claim color-green'>CLAIM TO YOUR VAULT</a><a className='arrow-dwn'><i className="fas fa-arrow-down"></i></a></td>
                                        <td><a className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={7} valign='top' className='nobo'>
                                        </td>
                                        <td className='nobo'>
                                            <a className='btn01 green'>CLAIM ALL</a>
                                        </td>
                                        <td className='nobo'></td>
                                    </tr>   
                                </tbody>               
                            </table>
                        </TableScroll>
                    </TableContainer>

                    <TableContainer>
                        <VerticalSlider>
                            <div className='VsHead'>Chain</div>
                            <span><img src={icon1}/></span>
                            <span><img src={icon2}/></span>
                            <span><img src={icon3}/></span>
                            <span><img src={icon4}/></span>
                            <span><img src={icon1}/></span>
                            <span><img src={icon2}/></span>
                            <span><img src={icon3}/></span>
                            <span><img src={icon4}/></span>
                        </VerticalSlider>
                        <TableScroll>
                            <table>
                                <thead>
                                <tr>
                                    <th className='w-10'>Collection <Shorting><a><i className="fas fa-caret-up"></i></a><a><i className="fas fa-caret-down"></i></a></Shorting></th>
                                    <th className='w-10'>NFT <i className="fas fa-question-circle"></i> <Shorting><a><i className="fas fa-caret-up"></i></a><a><i className="fas fa-caret-down"></i></a></Shorting></th>
                                    <th className='w-10'>NFT supply  <i className="fas fa-question-circle"></i> <Shorting><a><i className="fas fa-caret-up"></i></a><a><i className="fas fa-caret-down"></i></a></Shorting></th>
                                    <th className='w-10'>Floor price</th>
                                    <th className='w-10'>Metrics <i className="fas fa-question-circle"></i> <Shorting><a><i className="fas fa-caret-up"></i></a><a><i className="fas fa-caret-down"></i></a></Shorting></th>
                                    <th className='w-10'>Drop progress  <i className="fas fa-question-circle"></i> <Shorting><a><i className="fas fa-caret-up"></i></a><a><i className="fas fa-caret-down"></i></a></Shorting></th>
                                    <th className='w-10'>Due date <i className="fas fa-question-circle"></i> <Shorting><a><i className="fas fa-caret-up"></i></a><a><i className="fas fa-caret-down"></i></a></Shorting></th>
                                    <th className='w-10'>Eligable to claim <i className="fas fa-question-circle"></i></th>
                                    <th className='w-10'>Increase your share <i className="fas fa-question-circle"></i> </th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Token><img src={icon1}/> Bored Ape ...</Token>
                                        </td>
                                        <td><Token><img src={icon1}/> Bored Ape ...</Token></td>
                                        <td>10,000</td>
                                        <td>$1</td>
                                        <td><Token className='color-blue'><img src={nftIcon}/> View detail</Token></td>
                                        <td>
                                            <Progress><b style={{width: '20%'}} /></Progress>
                                            <ProgTxt>23,526,523 / 100,000,000</ProgTxt>
                                        </td>
                                        <td>
                                            <Counter>
                                                <b>3</b><b>6</b><b>4</b><i>:</i>
                                                <b>1</b><b>2</b><i>:</i>
                                                <b>4</b><b>3</b><i>:</i>
                                                <b>2</b><b>5</b>
                                            </Counter>
                                        </td>
                                        <td className='hasBtn'>1 <a className='claim color-green'>CLAIM TO YOUR VAULT</a></td>
                                        <td><a className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Token><img src={icon1}/> Ghost Project</Token>
                                        </td>
                                        <td><Token><img src={icon1}/> Ghost Project</Token></td>
                                        <td>10,000</td>
                                        <td>$1</td>
                                        <td><Token className='color-blue'><img src={nftIcon}/> View detail</Token></td>
                                        <td>
                                            <Progress><b style={{width: '20%'}} /></Progress>
                                            <ProgTxt>23,526,523 / 100,000,000</ProgTxt>
                                        </td>
                                        <td>
                                            <Counter>
                                                <b>3</b><b>6</b><b>4</b><i>:</i>
                                                <b>1</b><b>2</b><i>:</i>
                                                <b>4</b><b>3</b><i>:</i>
                                                <b>2</b><b>5</b>
                                            </Counter>
                                        </td>
                                        <td className='hasBtn'>1 <a className='claim color-green'>CLAIM TO YOUR VAULT</a></td>
                                        <td><a className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Token><img src={icon1}/> Bored Ape ...</Token>
                                        </td>
                                        <td><Token><img src={icon1}/> Bored Ape ...</Token></td>
                                        <td>10,000</td>
                                        <td>$1</td>
                                        <td><Token className='color-blue'><img src={nftIcon}/> View detail</Token></td>
                                        <td>
                                            <Progress><b style={{width: '20%'}} /></Progress>
                                            <ProgTxt>23,526,523 / 100,000,000</ProgTxt>
                                        </td>
                                        <td>
                                            <Counter>
                                                <b>3</b><b>6</b><b>4</b><i>:</i>
                                                <b>1</b><b>2</b><i>:</i>
                                                <b>4</b><b>3</b><i>:</i>
                                                <b>2</b><b>5</b>
                                            </Counter>
                                        </td>
                                        <td className='hasBtn'>1 <a className='claim color-green'>CLAIM TO YOUR VAULT</a></td>
                                        <td><a className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Token><img src={icon1}/> Ghost Project</Token>
                                        </td>
                                        <td><Token><img src={icon1}/> Ghost Project</Token></td>
                                        <td>10,000</td>
                                        <td>$1</td>
                                        <td><Token className='color-blue'><img src={nftIcon}/> View detail</Token></td>
                                        <td>
                                            <Progress><b style={{width: '20%'}} /></Progress>
                                            <ProgTxt>23,526,523 / 100,000,000</ProgTxt>
                                        </td>
                                        <td>
                                            <Counter>
                                                <b>3</b><b>6</b><b>4</b><i>:</i>
                                                <b>1</b><b>2</b><i>:</i>
                                                <b>4</b><b>3</b><i>:</i>
                                                <b>2</b><b>5</b>
                                            </Counter>
                                        </td>
                                        <td className='hasBtn'>1 <a className='claim color-green'>CLAIM TO YOUR VAULT</a></td>
                                        <td><a className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Token><img src={icon1}/> Bored Ape ...</Token>
                                        </td>
                                        <td><Token><img src={icon1}/> Bored Ape ...</Token></td>
                                        <td>10,000</td>
                                        <td>$1</td>
                                        <td><Token className='color-blue'><img src={nftIcon}/> View detail</Token></td>
                                        <td>
                                            <Progress><b style={{width: '20%'}} /></Progress>
                                            <ProgTxt>23,526,523 / 100,000,000</ProgTxt>
                                        </td>
                                        <td>
                                            <Counter>
                                                <b>3</b><b>6</b><b>4</b><i>:</i>
                                                <b>1</b><b>2</b><i>:</i>
                                                <b>4</b><b>3</b><i>:</i>
                                                <b>2</b><b>5</b>
                                            </Counter>
                                        </td>
                                        <td className='hasBtn'>1 <a className='claim color-green'>CLAIM TO YOUR VAULT</a></td>
                                        <td><a className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Token><img src={icon1}/> Ghost Project</Token>
                                        </td>
                                        <td><Token><img src={icon1}/> Ghost Project</Token></td>
                                        <td>10,000</td>
                                        <td>$1</td>
                                        <td><Token className='color-blue'><img src={nftIcon}/> View detail</Token></td>
                                        <td>
                                            <Progress><b style={{width: '20%'}} /></Progress>
                                            <ProgTxt>23,526,523 / 100,000,000</ProgTxt>
                                        </td>
                                        <td>
                                            <Counter>
                                                <b>3</b><b>6</b><b>4</b><i>:</i>
                                                <b>1</b><b>2</b><i>:</i>
                                                <b>4</b><b>3</b><i>:</i>
                                                <b>2</b><b>5</b>
                                            </Counter>
                                        </td>
                                        <td className='hasBtn'>1 <a className='claim color-green'>CLAIM TO YOUR VAULT</a></td>
                                        <td><a className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Token><img src={icon1}/> Bored Ape ...</Token>
                                        </td>
                                        <td><Token><img src={icon1}/> Bored Ape ...</Token></td>
                                        <td>10,000</td>
                                        <td>$1</td>
                                        <td><Token className='color-blue'><img src={nftIcon}/> View detail</Token></td>
                                        <td>
                                            <Progress><b style={{width: '20%'}} /></Progress>
                                            <ProgTxt>23,526,523 / 100,000,000</ProgTxt>
                                        </td>
                                        <td>
                                            <Counter>
                                                <b>3</b><b>6</b><b>4</b><i>:</i>
                                                <b>1</b><b>2</b><i>:</i>
                                                <b>4</b><b>3</b><i>:</i>
                                                <b>2</b><b>5</b>
                                            </Counter>
                                        </td>
                                        <td className='hasBtn'>1 <a className='claim color-green'>CLAIM TO YOUR VAULT</a></td>
                                        <td><a className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Token><img src={icon1}/> Ghost Project</Token>
                                        </td>
                                        <td><Token><img src={icon1}/> Ghost Project</Token></td>
                                        <td>10,000</td>
                                        <td>$1</td>
                                        <td><Token className='color-blue'><img src={nftIcon}/> View detail</Token></td>
                                        <td>
                                            <Progress><b style={{width: '20%'}} /></Progress>
                                            <ProgTxt>23,526,523 / 100,000,000</ProgTxt>
                                        </td>
                                        <td>
                                            <Counter>
                                                <b>3</b><b>6</b><b>4</b><i>:</i>
                                                <b>1</b><b>2</b><i>:</i>
                                                <b>4</b><b>3</b><i>:</i>
                                                <b>2</b><b>5</b>
                                            </Counter>
                                        </td>
                                        <td className='hasBtn'>1 <a className='claim color-green'>CLAIM TO YOUR VAULT</a></td>
                                        <td><a className='btn01'>DEPOSIT</a></td>
                                    </tr>
                                </tbody>               
                            </table>
                        </TableScroll>
                    </TableContainer>
                    </>
                )}
            </PageContainer>
            {isSelectTokenVisible && 
                <PopupContainer onClose={toggleSelectToken}/>
            }
            
        </>
    );
};

const DropdownTitle = styled.h2 `
    display: flex; width: 100%; font-size: 18px; font-weight: 700; padding: 36px 0px 38px; align-items: center;
    span {margin-left: auto; margin-right: 6px; transform: scaleY(-1);}
    .fa-info-circle {margin-right: 11px; }
`
const DropContent = styled.div `
    display: flex; gap: 50px; padding: 0 0 32px 0;
    h4 {font-size: 18px; font-weight: 700; color: #fff; margin: 0 0 20px 0; line-height: 1.3;}
    p {font-size: 14px; color: #a6a2b0; line-height: 1.8;}
    .DcSec {
        width: 33.33%; display: flex; align-items: flex-start;
        b {width: 40px; height: 40px; flex-shrink: 0; text-align: center; border: 2px solid #91dc27; border-radius: 40px; margin-right: 22px; display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: 700;}
    }
    @media (max-width: 991px){
        flex-flow: column; gap: 30px;
        .DcSec {
            width: 100%;
        }
    }
`
const PageContainer = styled.div `
    padding: 150px 62px 0;
    @media (max-width: 1400px){
        padding: 150px 30px 0;
    }
    @media (max-width: 1200px){
        padding: 150px 15px 0;
    }
    @media (max-width: 991px){
        padding: 220px 15px 0;
    }
`
const TopMenu = styled.div `
    padding: 48px 0px 0px; border-bottom: 3px solid #fff; display: flex;
    a {color: #fff; padding: 2px 0 30px; font-size: 21px; font-weight: bold; flex-grow: 1; text-align: center; position: relative; width: 100%; 
        /* &:last-child {border-right: 0 solid #000; box-shadow: 0 0 0 #3d3f49; } */
        img {margin-right: 20px; filter: brightness(100); transition: all 0.3s ease-in-out 0s; height: 26px; align-items: center;}
        .badge {background-color: #91dc27; font-size: 12px; width: 27px; height: 27px; position: relative; top: 0; border-radius: 100px; line-height: 27px; margin: -13px 0 0 10px; color: #0d0e13 !important; display: inline-block; vertical-align: top;}
        &.activeRed {color: var(--red2); box-shadow: 0 3px 0 var(--red2);}
        &.active {color: #91dc27; box-shadow: 0 3px 0 #91dc27;
            img {filter: brightness(1);}
        }
        &:hover {color: #91dc27; img {filter: brightness(1);}}
    }
    @media (max-width: 1400px){
        a {font-size: 20px;}
    }
    @media (max-width: 1200px){
        a {font-size: 18px; width: auto; flex-grow: 1;
            img {margin-right: 10px; height: 20px;}
        }
    }
    @media (max-width: 991px){
        flex-flow: column; border-bottom: 0;
        a {width: 100%; padding: 20px 15px 17px; box-shadow: 0 3px 0 #fff;}
    }
    @media (max-width: 500px){
        a {font-size: 16px;}
        .badge {width: 24px; height: 24px;}
    }
    
` 
const TableTop = styled.div `
    display: flex; justify-content: space-between; align-items: center; margin: 65px 0 15px;
    .searchRight {display: flex; align-items: center;
        .searchVlt {
            border: 2px solid black; background: #21232b; color: #565a69; font-weight: 700; padding: 9px 12px; display: table; height: 40px; width: 400px;
        }        
    }
    .ttRight {
        display: flex; flex-flow: column; justify-content: flex-end; font-size: 12px;
        p {
            color: #fff; white-space: nowrap; font-size: 12px; margin: 0 0 10px;
            span {color: #a6a2b0; margin: 0 4px;}
        }
        .ttLinks {
            display: flex; margin-left: auto;
            a:hover {opacity: 0.8;}
            span {margin: 0 10px; color: #a6a2b0;}
        }
    }
    @media (max-width: 991px){
        flex-flow: column; overflow: hidden; padding-bottom: 5px;
    }
    @media (max-width: 640px){
        margin-bottom: 30px;
        .searchRight {
            flex-flow: column;
            .searchVlt {margin-bottom: 15px; max-width: 90%;}
        }
    }
`
const Checkbox = styled.div ` 
    position: relative; margin-left: 11px;
    input {opacity: 0; position: absolute; visibility: hidden;
        &:checked + label:after {opacity: 1;}
    }
    label {font-size: 14px; cursor: pointer;
        &:before {content: ''; width: 14px; height: 14px; display: inline-block; vertical-align: top; background: #191b21; margin: 2px 13px 0 0;}
        &:after {content: "\f00c"; position: absolute; left: 4px; top: 1px; font-family: "Font Awesome 5 Free"; font-weight: 900; font-size: 14px; color: #91dc27; opacity: 0;}
    }
`
const Btn = styled.button ` 
    border: 2px solid black; background: none; color: #91dc27; margin-left: auto; font-weight: 700; padding: 9px 18px; display: table; margin: 22px 0 19px auto; width: 200px;
    &:hover {background: #91dc27; color:#fff; border-color: #91dc27; box-shadow: 0 0 10px #91dc27;}
    &.green-border {border: 1px solid #91dc27;}
    &.btn-lg {width: 300px;}
    &.inactive {color: #fff; box-shadow: 0 0 10px rgba(255,255,255,0.2);}
    &.hover-white {
        &:hover {background: none; color:#fff; border-color: black; box-shadow: none;}
    }
    @media (max-width: 991px){
        margin: 20px auto 0;
    }
`
const Token = styled.div `
    display: block; align-items: center; vertical-align: top; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; max-width: 120px; vertical-align: middle;
    img { margin-right: 10px; vertical-align: middle;}
`
const Shorting = styled.div `
    display: flex; position: absolute; right: 10px; flex-flow: column; top: 50%; transform: translateY(-50%);
    a {line-height: 0.7; font-size: 14px;
        .fas {line-height: inherit; }
    }
`
const TableContainer = styled.div `
    width: 100%; padding-left: 0; padding-bottom: 30px; position: relative; /* max-height: 475px; */ display: flex; align-items: flex-start;
    &.no-padding {padding: 0;}
    table {
        width: 100%; 
        tr {
            th {border: 2px solid #3b3e4b; font-size: 14px; border-top-width: 2px; border-bottom-width: 2px; height: 50px; padding: 0 10px; text-align: left; position: relative; color: #a6a2b0; vertical-align: middle; font-weight: bold;
                .fa-question-circle {font-size: 10px; position: relative; top: -0.65em;}
                &:last-child {
                    border-right: 0px;
                }
                &:first-child {
                    border-left: 0px;
                }
                &.w-10 {width: 10%;}
                &.w-12 {width: 12%;}
                &.w-15 {width: 15%;}
                &.w-20 {width: 20%;}
                &.w-30 {width: 30%;}
                &.w-40 {width: 40%;}
                &.w-50 {width: 50%;}
                &.w-60 {width: 60%;}
                &.w-70 {width: 70%;}
                &.w-80 {width: 80%;}
                &.w-90 {width: 90%;}
                &.w-100 {width: 100%;}
                &.hcol {background: #91dc27; color: #fff; /* border-color: #91dc27; */}
            }
            td {border: 1px solid #3b3e4b; height: 52px; font-size: 12px; padding: 0 10px; text-align: left; position: relative; vertical-align: middle; color: #a6a2b0; position: relative;
                &:last-child {
                    border-right: 0px;
                }
                &:first-child {
                    border-left: 0px;
                }
                .btn01 {border: 2px solid #000; padding: 2px 10px; font-size: 11px; font-weight: bold; background: none; color: #91dc27; box-shadow: 0 0 15px #323232; display: block; text-align: center; height: 35px; display: flex; align-items: center; justify-content: center; line-height: 1.1;
                    &:hover {background: #91dc27; border: 2px solid #91dc27; box-shadow: 0 0 15px #91dc27; color: #fff;}    
                    &.red {color: #c32b2d;}
                    &.white {color: #fff;}
                }
                .dlt {font-size: 10px; color: #454950; margin: -5px 0 0 0; position: absolute; right: 8px; top: 50%; &:hover {color: #c32b2d;}}
                .claim {color: #a6a2b0; font-weight: 700; opacity: 0; text-align: center; position: absolute; left: 0; right: 0; top: 0; bottom: 0; line-height: 1; display: flex; justify-content: center; align-items: center;
                    &:hover {color: #91dc27;}
                    &.color-white {color: #fff;}
                    &.color-red {color: #c32b2d;}
                }
                .arrow-dwn {color: #454950; width: 21px; height: 21px; border-radius: 100px; border: 2px solid transparent; font-size: 12px; text-align: center; padding: 1px 1px 0px 0px; margin: -10px 0 0 20px; position: absolute; right: 2px; top: 50%;
                    &:hover {border: 2px solid #c32b2d; color: #c32b2d;}
                }
                &.hcol {background: #91dc27; color: #fff; }
                &.hasBtn {
                    span {width: 74px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; display: inline-block;} 
                }
                &:hover {
                    &.hasBtn {color: transparent;}
                    position: relative;
                    .arrow-dwn {opacity: 0;}
                    .claim { opacity: 1;}
                }
                &.nobo {border: 0; vertical-align: top; padding: 10px 8px; 
                    &:hover {background: none;}
                    span {width: 100%; justify-content: space-between; margin: 0 0 15px; display: block; color: #a6a2b0; display: flex; flex-flow: wrap; align-items: center; font-size: 12px;
                        b { margin-top: 4px;}
                    }
                    .becameV {display: inline-block; color: #454950;
                        img {margin-right: 11px;}
                        p {margin: 0;}
                    }
                }
            }
            &.hRow {
                td {
                    background: #1b1c25;
                    &.hcol {background: #7dc419; color: #fff; }
                }
            }
            &:hover {
                td {background: #1b1c25;}
                .nobo {background: none;}
            }
        }
    }
    .color-red {color: #c32b2d}
    .color-green {color: #91dc27}
    .color-blue {color: #2d52f3}
    .text-center {text-align: center}
`
const VerticalSlider = styled.div `
    height: 470px; width: 53px; z-index: 5; padding: 0 0; margin-right: 17px; display: flex; flex-flow: column; /* overflow-y: scroll; */ overflow-x: hidden; flex-shrink: 0; background: #292b33;
    .VsHead {position: sticky; top: 0; border-top: 2px solid #3b3e4b; border-bottom: 2px solid #3b3e4b; height: 52px; display: block; background: #21232b; flex-shrink: 0; color: #a6a2b0; font-weight: bold; font-size: 14px; padding: 16px 0;}
    /* width */
    &::-webkit-scrollbar {width: 5px;}
    /* Track */
    &::-webkit-scrollbar-track {background: transparent; }
    /* Handle */
    &::-webkit-scrollbar-thumb {background: #191b21;}
    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover { background: #555;  }
    span {margin: 0px auto; text-align: center; cursor: pointer; width: 53px; height: 52px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; /* border-bottom: 1px solid rgb(59, 62, 75); */
        img {display: inline-block; width: 24px; height: 24px; object-fit: contain; border-radius: 50px;}
        &:hover {
            background: #3b3e4b;
            img {box-shadow: #91dc27 0px 0px 10px; width: 26px; height: 26px; object-fit: contain;}
        }
    }
    .slick-list {}
    .slick-arrow {width: 24px; height: 24px; border-radius: 50px; background: #1b1c25; border: 0; top: 50%; position: absolute; overflow: hidden; color: #a6a2b0; z-index: 5; color: transparent;
        &.slick-prev {left: -22px; top: 13px;
            &:after {content: "\f053"; color: #a6a2b0; position: absolute; left: 0; top: 0; font-family: "Font Awesome 5 Free"; font-weight: 900; left: 6px; top: 4px;}
        }
        &.slick-next {right: -22px; top: 15px;
            &:after {content: "\f054"; color: #a6a2b0; position: absolute; left: 0; top: 0; font-family: "Font Awesome 5 Free"; font-weight: 900; left: 9px; top: 5px;}
        }
    }
    .slick-initialized .slick-slide {height: 50px; display: flex; justify-content: center; align-items: center;}
`
const Progress = styled.div `
    width: 103px; height: 10px; display: flex; justify-content: flex-start; background: #3b3e4b; min-width: 100%;
    b {background: #91dc27;}
`
const ProgTxt = styled.div `
    font-size: 9px; color: #a6a2b0; white-space: nowrap; margin-top: 9px;
`
const Counter = styled.div `
    display: flex; align-items: center; 
    font-size: 11px; color: #a6a2b0; white-space: nowrap; font-weight: 400;
    b {background: #0d0e13; border: 1px solid #3b3e4b; padding: 1px 3px; min-width: 10px; display: inline-block; margin: 0 0; text-align: center;}
    i {margin: 0 3px; font-style: normal;}
`
const BtnLg = styled.div `text-align: center; position: relative; z-index: 1; color: #fff; cursor: pointer;
    b {display: block; font-size: 14px; font-weight: 700;  transition: all 0.5s ease-in-out;}
    i {display: block; font-size: 12px; font-weight: 500; font-style: normal; transition: all 0.5s ease-in-out 0s; margin-top: 2px; 
        span {color: #91dc27; font-style: normal;}
        strong {font-size: 8px; position: relative; top: -0.29em;}
    }
    &:after {content: ""; position: absolute; left: -11px; right: -11px; bottom: -10px; top: -10px; background: #6cb10c; border: 1px solid #3e4647; z-index: -1; opacity: 0; transition: all 0.3s ease-in-out; box-shadow: 0 0 10px #fff;}
    &:hover { color: #0d0e13;
        i {
            span, strong {color: #fff;}
        }
        &:after { opacity: 1;}
    }
`
const TableScroll = styled.div `
    overflow: auto; flex-grow: 1;
    table {
        min-width: 1200px;
    }
`

export default Screen03;