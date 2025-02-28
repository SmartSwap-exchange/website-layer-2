import React, { PureComponent, lazy, Suspense, useState } from 'react';
import styled from 'styled-components';
import HeaderWC from '../component/header';
import Popup01 from '../component/Popup01';
import Popup02 from '../component/Popup02';
import Popup03 from '../component/Popup03';
import Popup04 from '../component/Popup04';
import Popup05 from '../component/Popup05';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import SS from '../assets/images/ss.png';
import BNB from '../assets/images/bnb.png';
import USDT from '../assets/images/usdt.png';

import icon1 from '../assets/images/icon1.png'
import icon2 from '../assets/images/icon2.png'
import icon3 from '../assets/images/icon3.png'
import icon4 from '../assets/images/icon4.png'
import Automat from '../assets/images/automat.png'
import Swap from '../assets/images/swapV.png'
import Shield from '../assets/images/shield.png'
import pinf from '../assets/images/pinf.png'
import pin from '../assets/images/pin.png'
import tab1 from '../assets/images/tab1.png'
import tab2 from '../assets/images/tab2.png'
import tab3 from '../assets/images/tab3.png'
import Ico1 from './../assets/images/sb-ICO-01.png'




const $ = window.$;
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1
};

export default class Welcome extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            toggleState: 1
        };
    }
    
    toggleTab = (index) => {
        this.setState({ toggleState: index });
    };
    
    getActiveClass = (index, className) => {
        const { toggleState } = this.state;
        return toggleState === index ? className : '';
    };

    render() {
    
    return (
        <>
        <WelcomeMain id='main' className='welcome-page'>
            <HeaderWC />
            {/* <Popup01></Popup01> */}
            {/* <Popup02></Popup02> */}
            {/* <Popup03></Popup03> */}
            {/* <Popup04></Popup04> */}
            {/* <Popup05></Popup05> */}
            <Container className='no-flex'>
                <TabLinks className='wow fadeInUp' data-wow-delay='0.2s'>
                    <a  onClick={() => this.toggleTab(1)} className={this.getActiveClass(1,'active')}><img src={tab1}/>Self-custody vaults</a>
                    <a onClick={() => this.toggleTab(2)} className={this.getActiveClass(2,'active')}><img src={tab2}/>APY & rewards </a>
                    <a onClick={() => this.toggleTab(3)} className={this.getActiveClass(3,'active')}><img src={tab3}/>AI-based market maker</a>
                </TabLinks>
                {this.getActiveClass(1,
                <TabContent>
                    <VaultRow>
                        <p className='inactive'>Deposited
                            <span>$0</span>
                        </p>
                        <p className='active green'>APY reward
                            <span>152.5%</span>
                        </p>
                        <p className='inactive'>Expedite reward
                            <span>0%</span>
                        </p>
                        <p className='active red'>Withdrew
                            <span>-$100,000</span>
                        </p>
                        <p className='inactive'>Total balance
                            <span>$0</span>
                        </p>
                        <p className='inactive'>ROI to date
                            <span>0%</span>
                        </p>
                    </VaultRow>
                    <Btn>DEPLOY YOUR SMART CONTRACT VAULT</Btn>
                    <BtnSml>CREATE NEW VAULT</BtnSml>
                    <TableContainer>
                        <VerticalSlider>
                            <Slider {...settings}>
                                <span><img src={icon1}/></span>
                                <span><img src={icon2}/></span>
                                <span><img src={icon3}/></span>
                                <span><img src={icon4}/></span>
                                <span><img src={icon1}/></span>
                                <span><img src={icon2}/></span>
                                <span><img src={icon3}/></span>
                                <span><img src={icon4}/></span>
                                <span><img src={icon4}/></span>
                                <span><img src={icon4}/></span>
                                <span><img src={icon4}/></span>
                                <span><img src={icon4}/></span>
                                <span><img src={icon4}/></span>
                            </Slider>
                            
                        </VerticalSlider>
                        <div className='scroller'>
                        <table>
                            <tr>
                                <th className='w-10'>Token <Shorting><a><i className="fas fa-caret-up"></i></a><a><i className="fas fa-caret-down"></i></a></Shorting></th>
                                <th className='w-10'>Deposited <Shorting><a><i className="fas fa-caret-up"></i></a><a><i className="fas fa-caret-down"></i></a></Shorting></th>
                                <th className='w-10'>APY <i className="fas fa-question-circle"></i></th>
                                <th className='w-15'>Expedite reward</th>
                                <th className='w-10'>Withdrew</th>
                                <th className='w-10 text-center'>Claim rewards</th>
                                <th className='w-15'>Balance <Shorting><a><i className="fas fa-caret-up"></i></a><a><i className="fas fa-caret-down"></i></a></Shorting></th>
                                <th className='w-10 text-center'>Deposit</th>
                            </tr>
                            <tr>
                                <td>
                                    <Token><img src={icon1}/> SMART</Token>
                                    <a className='dlt'><i className="fas fa-trash-alt"></i></a>
                                </td>
                                <td>0</td>
                                <td>87.53%</td>
                                <td>0</td>
                                <td>0</td>
                                <td className='text-center'><a className='claim'>CLAIM</a></td>
                                <td>0</td>
                                <td><a className='btn01'>DEPOSIT</a></td>
                            </tr>
                            <tr>
                                <td>
                                    <Token><img src={icon2}/> SMART</Token>
                                    <a className='dlt'><i className="fas fa-trash-alt"></i></a>
                                </td>
                                <td>1,000,000</td>
                                <td>87.53%</td>
                                <td className='color-green'>+1,000,000</td>
                                <td className='color-red'>-1,000,000</td>
                                <td className='text-center'><a className='claim'>CLAIM</a></td>
                                <td className='color-blue'>+1,000,000,000 <a className='arrow-dwn'><i className="fas fa-arrow-down"></i></a></td>
                                <td><a className='btn01'>DEPOSIT</a></td>
                            </tr>
                            <tr>
                                <td>
                                    <Token><img src={icon3}/> SMART</Token>
                                    <a className='dlt'><i className="fas fa-trash-alt"></i></a>
                                </td>
                                <td>1,000,000</td>
                                <td>87.53%</td>
                                <td className='color-green'>+1,000,000</td>
                                <td className='color-red'>-1,000,000</td>
                                <td className='text-center'><a className='claim'>CLAIM</a></td>
                                <td className='color-blue'>+1,000,000,000 <a className='arrow-dwn'><i className="fas fa-arrow-down"></i></a></td>
                                <td><a className='btn01'>DEPOSIT</a></td>
                            </tr>
                            <tr>
                                <td>
                                    <Token><img src={icon1}/> SMART</Token>
                                    <a className='dlt'><i className="fas fa-trash-alt"></i></a>
                                </td>
                                <td>1,000,000</td>
                                <td>87.53%</td>
                                <td className='color-green'>+1,000,000</td>
                                <td className='color-red'>-1,000,000</td>
                                <td className='text-center'><a className='claim'>CLAIM</a></td>
                                <td className='color-blue'>+1,000,000,000 <a className='arrow-dwn'><i className="fas fa-arrow-down"></i></a></td>
                                <td><a className='btn01'>DEPOSIT</a></td>
                            </tr>
                            <tr>
                                <td>
                                    <Token><img src={icon2}/> SMART</Token>
                                    <a className='dlt'><i className="fas fa-trash-alt"></i></a>
                                </td>
                                <td>1,000,000</td>
                                <td>87.53%</td>
                                <td className='color-green'>+1,000,000</td>
                                <td className='color-red'>-1,000,000</td>
                                <td className='text-center'><a className='claim'>CLAIM</a></td>
                                <td className='color-blue'>+1,000,000,000 <a className='arrow-dwn'><i className="fas fa-arrow-down"></i></a></td>
                                <td><a className='btn01'>DEPOSIT</a></td>
                            </tr>
                            <tr>
                                <td>
                                    <Token><img src={icon3}/> SMART</Token>
                                    <a className='dlt'><i className="fas fa-trash-alt"></i></a>
                                </td>
                                <td>1,000,000</td>
                                <td>87.53%</td>
                                <td className='color-green'>+1,000,000</td>
                                <td className='color-red'>-1,000,000</td>
                                <td className='text-center'><a className='claim'>CLAIM</a></td>
                                <td className='color-blue'>+1,000,000,000 <a className='arrow-dwn'><i className="fas fa-arrow-down"></i></a></td>
                                <td><a className='btn01'>DEPOSIT</a></td>
                            </tr>
                            <tr>
                                <td>
                                    <Token><img src={icon3}/> SMART</Token>
                                    <a className='dlt'><i className="fas fa-trash-alt"></i></a>
                                </td>
                                <td>1,000,000</td>
                                <td>87.53%</td>
                                <td className='color-green'>+1,000,000</td>
                                <td className='color-red'>-1,000,000</td>
                                <td className='text-center'><a className='claim'>CLAIM</a></td>
                                <td className='color-blue'>+1,000,000,000 <a className='arrow-dwn'><i className="fas fa-arrow-down"></i></a></td>
                                <td><a className='btn01'>DEPOSIT</a></td>
                            </tr>
                            <tr>
                                <td>
                                    <Token><img src={icon3}/> SMART</Token>
                                    <a className='dlt'><i className="fas fa-trash-alt"></i></a>
                                </td>
                                <td>1,000,000</td>
                                <td>87.53%</td>
                                <td className='color-green'>+1,000,000</td>
                                <td className='color-red'>-1,000,000</td>
                                <td className='text-center'><a className='claim'>CLAIM</a></td>
                                <td className='color-blue'>+1,000,000,000 <a className='arrow-dwn'><i className="fas fa-arrow-down"></i></a></td>
                                <td><a className='btn01'>DEPOSIT</a></td>
                            </tr>
                        </table>
                        </div>
                    </TableContainer>
                    <TableBottom>
                        <div className='pagination'>
                            <span>Page</span>
                            <div className='select'>
                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                            <span>result 1-10 of 300</span>
                        </div>
                        <a className='becameV PBLink'>
                            <p><img src={Shield}/> Become your own validator </p>
                        </a>
                        <div className='automat'><a className=' PBLink'><img src={Automat}/>Automat rebalance stablecoin vaults</a> <a className='claimBtn'>CLAIM ALL</a> 8,000,000,000</div>
                    </TableBottom>
                </TabContent>
                )} 
                {this.getActiveClass(2,
                <APYrewards>
                    <h3>How to gain APY</h3>
                    <p>To expedite their orders, users first send their funds to SmartExchange's intermediate smart contract. At the same time, the system selects a swap provider with enough funds in their vault to match the order, and the provider's funds are added to the intermediate contract. The intermediate smart contract then sends the user's funds to the intended cross-chain destination, along with the swap provider's wallet address as the receiver. </p>
                    <p>Based on the transaction proof, the swap provider's funds are instantly released to the user's wallet, while the provider waits for the time needed to receive the swapped funds directly from the cross-chain.</p>

                    <h5>Example</h5>
                    <ul>
                        <li>Bob wants to expedite a cross chain swap 1 ETH (Ethereum) for 150 MATIC (Polygon) using SmartExchange.</li>
                        <li>Bob  sends their 1 ETH to SmartExchange's intermediate smart contract.</li>
                        <li>SmartExchange's system selects a swap provider with enough MATIC funds in their vault to match Bob's order.</li>
                        <li>The swap provider sends slightly less than 150 MATIC to account for their fee, so Bob  receives slightly less than 150 MATIC.</li>
                        <li>The intermediate smart contract then sends the 1 ETH directly to the third-party cross-chain provider along with the provider's wallet address as the receiver of the 150 MATIC.</li>
                        <li>Based on the proof of deposit for the 1 ETH to  the intermediate smart contract , the MATIC tokens released directly to Bob's wallet.</li>
                        <li>After the waiting time is over, the swap provider receives the full 150 MATIC tokens directly from the third-party cross-chain provider.</li>
                    </ul>

                    <h4>From wrap token to native tokens</h4>
                    <p>Many cross-chain exchanges provide wrapped tokens on the destination chain instead of native tokens, requiring the receiver to perform an additional swap to unwrap the token. Swap providers that expedite user orders won't need to spend time unwrapping tokens; instead, the SmartExchange contract will handle the process for them.</p>
                </APYrewards>
                )} 
                {this.getActiveClass(3,
                <APYrewards>
                    <h3>AI-based market maker</h3>
                    <p>SmartExchange provides an advanced AI tool for passive managing market maker trades across a wide range of tokens. This tool optimizes the buying and selling ranges to maximize the return on investment. For example, a market maker can choose to trade with 1, 5, 10, or even more types of tokens. The AI system is capable of dynamically adjusting the limit buy and sell orders based on real-time data, ensuring that market makers can maximize their profits effectively.</p>
                    <div className='has2table'>
                        <div className='tableMain'>
                        <TableContainer className='no-padding'>
                            <table>
                                <tr>
                                    <th className='w-10'>Your Self-Custody Vaults <Shorting><a><i className="fas fa-caret-up"></i></a><a><i className="fas fa-caret-down"></i></a></Shorting></th>
                                    <th className='w-10'>Supply <Shorting><a><i className="fas fa-caret-up"></i></a><a><i className="fas fa-caret-down"></i></a></Shorting></th>
                                </tr>
                                <tr>
                                    <td>
                                        <Token><img src={icon1}/> SMART</Token>
                                    </td>
                                    <td>10,000,000</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Token><img src={icon2}/> SMART</Token>
                                    </td>
                                    <td>1,000,000</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Token><img src={icon3}/> SMART</Token>
                                    </td>
                                    <td>1,000,000</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Token><img src={icon1}/> SMART</Token>
                                    </td>
                                    <td>1,000,000</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Token><img src={icon2}/> SMART</Token>
                                    </td>
                                    <td>1,000,000</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Token><img src={icon3}/> SMART</Token>
                                    </td>
                                    <td>1,000,000</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Token><img src={icon2}/> SMART</Token>
                                    </td>
                                    <td>1,000,000</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Token><img src={icon3}/> SMART</Token>
                                    </td>
                                    <td>1,000,000</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Token><img src={icon2}/> SMART</Token>
                                    </td>
                                    <td>1,000,000</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Token><img src={icon3}/> SMART</Token>
                                    </td>
                                    <td>1,000,000</td>
                                </tr>
                            </table>
                        </TableContainer>
                        </div>
                        <div className='swap'><img src={Swap}/></div>
                        <div className='tableMain'>
                        <TableContainer className='no-padding'>
                            <table>
                                <tr>
                                    <th className='w-10'>Token from Market Making <Shorting><a><i className="fas fa-caret-up"></i></a><a><i className="fas fa-caret-down"></i></a></Shorting></th>
                                    <th className='w-10'>Supply <Shorting><a><i className="fas fa-caret-up"></i></a><a><i className="fas fa-caret-down"></i></a></Shorting></th>
                                </tr>
                                <tr>
                                    <td>
                                        <Token><img src={icon1}/> SMART</Token>
                                    </td>
                                    <td>10,000,000</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Token><img src={icon2}/> SMART</Token>
                                    </td>
                                    <td>1,000,000</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Token><img src={icon3}/> SMART</Token>
                                    </td>
                                    <td>1,000,000</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Token><img src={icon1}/> SMART</Token>
                                    </td>
                                    <td>1,000,000</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Token><img src={icon2}/> SMART</Token>
                                    </td>
                                    <td>1,000,000</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Token><img src={icon3}/> SMART</Token>
                                    </td>
                                    <td>1,000,000</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Token><img src={icon2}/> SMART</Token>
                                    </td>
                                    <td>1,000,000</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Token><img src={icon3}/> SMART</Token>
                                    </td>
                                    <td>1,000,000</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Token><img src={icon2}/> SMART</Token>
                                    </td>
                                    <td>1,000,000</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Token><img src={icon3}/> SMART</Token>
                                    </td>
                                    <td>1,000,000</td>
                                </tr>
                            </table>
                        </TableContainer>
                        </div>
                    </div>
                    <TableBottom className='no-padding'>
                        <div className='pagination'>
                            <span>Page</span>
                            <div className='select'>
                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                            <span>result 1-10 of 300</span>
                        </div>
                    </TableBottom>
                </APYrewards>
                )} 
            </Container>
        </WelcomeMain>
    </>
    );
    }
}


const TableContainer = styled.div `
    width: 100%; padding-left: 70px; position: relative; 
    &.no-padding {padding: 0;}
    .scroller {max-height: 475px; overflow: auto;}
    table {
        width: 100%; 
        tr {
            th {border: 1px solid #3b3e4b; font-size: 14px; border-top-width: 2px; border-bottom-width: 2px; height: 50px; padding: 0 15px; text-align: left; position: sticky; top: 0; color: #a6a2b0; vertical-align: middle; background: #0d0e13; z-index: 1;
                &:last-child {
                    border-right: 0px;
                }
                &:first-child {
                    border-left: 0px;
                }
                &.w-10 {width: 10%;}
                &.w-15 {width: 13%;}
                &.w-20 {width: 20%;}
                &.w-30 {width: 30%;}
                &.w-40 {width: 40%;}
                &.w-50 {width: 50%;}
                &.w-60 {width: 60%;}
                &.w-70 {width: 70%;}
                &.w-80 {width: 80%;}
                &.w-90 {width: 90%;}
                &.w-100 {width: 100%;}
            }
            td {border: 1px solid #3b3e4b; height: 52px; font-size: 12px; padding: 0 15px; text-align: left; position: relative; vertical-align: middle; color: #a6a2b0; position: relative;
                &:last-child {
                    border-right: 0px;
                }
                &:first-child {
                    border-left: 0px;
                }
                .btn01 {border: 2px solid #000; padding:9px 40px; font-size: 12px; font-weight: bold; background: none; color: #91dc27; box-shadow: 0 0 15px #323232;
                    &:hover {background: #91dc27; border: 2px solid #91dc27; box-shadow: 0 0 15px #91dc27; color: #fff;}
                }
                .dlt {font-size: 10px; color: #454950; margin: -5px 0 0 0; position: absolute; right: 8px; top: 50%; &:hover {color: #c32b2d;}}
                .claim {color: #a6a2b0; font-weight: 700; &:hover {color: #91dc27;}}
                .arrow-dwn {color: #454950; width: 21px; height: 21px; border-radius: 100px; border: 2px solid transparent; font-size: 12px; text-align: center; padding: 2px 0px 0px 0px; margin: -10px 0 0 20px; position: absolute; right: 8px; top: 50%;
                    &:hover {border: 2px solid #c32b2d; color: #c32b2d;}
                }
            }
            &:hover {
                td {background: #1b1c25;}
            }
        }
    }
    .color-red {color: #c32b2d}
    .color-green {color: #91dc27}
    .color-blue {color: #2d52f3}
    .text-center {text-align: center}
    @media (max-width: 1350px){
        
        .scroller {overflow: auto; max-height: inherit;}
        table {
            min-width: 1200px;
        }
    }
`
const Token = styled.div `
    display: inline-flex; align-items: center; vertical-align: top;
    img { margin-right: 10px;}
`
const Shorting = styled.div `
    display: flex; position: absolute; right: 20px; flex-flow: column; top: 50%; transform: translateY(-50%);
    a {line-height: 0.7; font-size: 14px;
        .fas {line-height: inherit; }
    }
`
const TabLinks = styled.div `
    padding: 48px 0px 0px; border-bottom: 3px solid #fff; display: flex;
    a {color: #fff; padding: 2px 20px 30px; font-size: 24px; font-weight: bold; flex-grow: 1; text-align: center;
        &:last-child {border-right: 0 solid #000; box-shadow: 0 0 0 #3d3f49; }
        img {margin-right: 20px; filter: brightness(100); transition: all 0.3s ease-in-out 0s;}
        &.activeRed {color: var(--red2); box-shadow: 0 3px 0 var(--red2);}
        &.active {color: #91dc27; box-shadow: 0 3px 0 #91dc27;
            img {filter: brightness(1);}
        }
        &:hover {color: #91dc27; img {filter: brightness(1);}}
    }
    @media screen and (max-width: 1440px) {
        a {font-size: 22px;}
    }
    @media screen and (max-width: 991px) {
        flex-flow: column; border-bottom: 0px;
        a {padding: 15px; font-size: 20px; border-bottom: 2px solid #fff;
            &.active {border-bottom: 2px solid #91dc27; box-shadow: 0 0 0 #3d3f49;}
        }
    }
    @media screen and (max-width: 768px) {
        a {font-size: 20px; img {max-height: 22px; margin-right: 10px;}}
    }
`
const TabContent = styled.div `
    min-height: 150px;
`

const VaultRow = styled.div ` text-align: center;
    display: flex; padding: 82px 0;
    p {width: 16.66%; font-size: 18px; font-weight: 700; line-height: 1.4; border-right: 1px solid #3b3e4b; margin: 0; padding: 9px 10px;
        span {display: block; font-size: 26px;}
        &.inactive {color: #a6a2b0;}
        &.active {
            &.green {span {color: #91dc27;}}
            &.red {span {color: #c32b2d;}}
        }
        &:last-child {border-right: 0 solid #3b3e4b;}
    }
    @media (max-width: 1300px){
        p {font-size: 16px;
            span {font-size: 20px;}
        }
    }
    @media (max-width: 1024px){
        flex-flow: wrap; 
        p {width: 33.33%; margin-bottom: 15px;}
    }
    @media (max-width: 768px){
        flex-flow: wrap; 
        p {width: 50%; margin-bottom: 15px;
            &:nth-child(even) {border: 0;}
        }
    }
`
const WelcomeMain = styled.main `
    padding-top: 207px; min-height: 100vh; font-family: 'Montserrat', sans-serif; padding-bottom: 80px;
    @media (max-width: 767px){
        background-size: 170%; 
    }
`
const Container = styled.div `
    width: 100%; max-width: 1353px; margin: 0 auto; display: flex; flex-flow: wrap;
    &.no-flex {display: block;}
    &.justify-center {justify-content: center;}
    &.mob-p0 {padding: 0;}
    @media (max-width: 1353px){
        padding: 0 20px;
    }
`
const Btn = styled.a `
    display: table; font-size: 24px; font-weight: bold; padding: 26px 76px; border: 2px solid #91dc27; margin: 30px 0 0 0; box-shadow: 0 0 15px #91dc27; margin: 0px auto; text-align: center;
    &.centerBlock {display: table; margin-left: auto; margin-right: auto; }
    &:hover {background: #91dc27; color: #fff;}
    @media (max-width: 991px){
        padding: 20px 30px; font-size: 20px;
    }
    @media (max-width: 768px){
        padding: 15px 30px; font-size: 18px;
    }
`
const BtnSml = styled.button `
    border: 2px solid black; background: #0d0e13; color: #91dc27; margin-left: auto; font-weight: 700; padding: 10px 18px; display: table; margin: 22px 0 19px auto; line-height: 1; font-family: 'Montserrat', sans-serif; font-size: 12px; box-shadow: 0 0 15px #323232;
    &:hover {background: #91dc27; color:#fff; border-color: #91dc27; box-shadow: 0 0 10px #91dc27;}
`

const VerticalSlider = styled.div `
    height: 50px; width: 480px; background: #3b3e4b; position: absolute; left: 0; right: 0; transform: rotate(90deg);     transform-origin: left top; margin: 0 0 0 50px; z-index: 5; padding: 0 10px;
    span {display: flex !important; margin: 0px auto; text-align: center; cursor: pointer; height: 50px; width: 50px !important; align-items: center; justify-content: center;
        img {display: inline-block; transform: rotate(-90deg); width: 24px; height: 24px; object-fit: contain; border-radius: 50px;}
        &:hover {
            background-color: #0d0e13;
            img {box-shadow: #91dc27 0px 0px 10px;}
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
const TableBottom = styled.div `
    display: flex; align-items: center; font-size: 12px; color: #aaaaaa; padding-left: 70px; padding-top: 21px; margin-bottom: 0;
    &.no-padding {padding-left: 0;}
    .pagination {
        display: flex; align-items: center; margin-right: 12px;
        .select {margin: 0 10px; position: relative;
            &:after {content:""; border-left: 4px solid transparent; border-right: 4px solid transparent; border-top: 4px solid #fff; position: absolute; right: 10px; top: 50%; margin-top: -3px;}
        }
        select {width: 65px; height: 30px; border: 0; padding: 0 10px; background: #3b3e4b; color: #fff; -webkit-appearance: none;}
    }
    .becameV {border-left: 1px solid #454950; border-right: 1px solid #454950; color: #454950; font-size: 12px; padding: 3px 20px; margin-right: 18px;
        p {margin: 0;}
        img {margin-right: 10px;}
    }
    .automat { cursor: pointer;
        img {margin-right: 10px;}
        &:hover {color: #a6a2b0;}
    }
    .PBLink {color: #454950;
        &:hover {color: #a6a2b0; img {filter: brightness(2)}}
        
    }
    .claimBtn {border: 2px solid #000; padding: 8px 32px; font-size: 12px; font-weight: bold; background: none; color: #a6a2b0; box-shadow: 0 0 15px #323232; margin: 0 27px 0 75px; line-height: 1;
        &:hover {background: #91dc27; border: 2px solid #91dc27; box-shadow: 0 0 15px #91dc27; color: #fff;}
    }
    @media (max-width: 1350px){
        .claimBtn {margin: 0 27px;}
        /* flex-flow: wrap;
        .automat {width: 100%;} */
    }
    @media (max-width: 1150px){
        flex-flow: wrap;
        .pagination {width: 100%; margin: 0 0 15px;}
        .becameV {border-left: 0; padding-left: 0;}
    }
    @media (max-width: 991px) {
        flex-flow: column; padding-left: 0;
        .pagination {width: auto; margin: 0 auto 15px;}
        .becameV {display: table; margin: 0px auto 15px; border: 0;}
        .automat { width: 100%; text-align: center;
            a {display: table; margin: 0px auto 15px;}
        }
    }
`
const APYrewards = styled.div `
    padding: 71px 0px 0px;
    h3 {font-size: 42px; font-weight: 700; text-align: center; margin: 0 0 32px 0;}
    h5 {font-size: 18px; font-weight: normal; margin: 34px 0 25px 0;}
    h4 {font-size: 24px; font-weight: 700; margin: 34px 0 17px 0;}
    p {font-size: 18px; line-height: 1.67; margin: 0;}
    ul {margin: 0 0 59px}
    li {font-size: 18px; padding: 0px 0px 0px 32px; position: relative; line-height: 1.67;
        &:before {content: ""; position: absolute; width: 12px; height: 12px; background: #fff; left: 0; top: 9px; border-radius: 50px;}
    }
    .has2table {display: flex; padding: 47px 0 0 0;
        .tableMain {width: calc(50% - 60px);}
        .swap {align-self: center; text-align: center; padding: 0 38px; cursor: pointer;}
    }
    ${TableContainer} {max-height: 467px; overflow: auto;
        /* width */
        ::-webkit-scrollbar {width: 9px;}
        /* Track */
        ::-webkit-scrollbar-track {background: transparent; }
        /* Handle */
        ::-webkit-scrollbar-thumb {background: #3b3e4b; }
        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover { background: #555;  }
    }
    @media (max-width: 991px){
        h3 {font-size: 35px;  margin: 0 0 32px 0;}
        h5 {font-size: 16px; font-weight: normal; margin: 34px 0 25px 0;}
        h4 {font-size: 20px; font-weight: 700; margin: 34px 0 17px 0;}
        p {font-size: 16px; line-height: 1.67; margin: 0;}
        li {font-size: 16px; margin-bottom: 8px;
            &:before {width: 8px; height: 8px; top: 7px;}
        }
        ${TableContainer} {
            table {min-width: 520px;}
        }
        .has2table {
            .tableMain {width: calc(50% - 35px);}
            .swap {padding: 0 18px; img {width: 35px;}}
        }
    }
    @media (max-width: 768px){
        h3 {font-size: 30px; text-align: left; } 
        .has2table {
            flex-flow: column;
            .tableMain {width: 100%;}
            .swap {padding: 25px 18px; img {width: 35px; transform: rotate(90deg);}}
        }
    }
`