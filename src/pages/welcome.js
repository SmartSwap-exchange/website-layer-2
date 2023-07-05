import React, { PureComponent, lazy, Suspense, useState } from 'react';
import styled from 'styled-components';
import HeaderWC from '../component/header';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import SS from '../assets/images/ss.png';
import BNB from '../assets/images/bnb.png';
import USDT from '../assets/images/usdt.png';




const $ = window.$;
const settings = {
    dots: true,
    arrows: false,
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

            <Container className='no-flex'>
                <TabLinks className='wow fadeInUp' data-wow-delay='0.2s'>
                    <a  onClick={() => this.toggleTab(1)} className={this.getActiveClass(1,'active')}>Self-custody vaults</a>
                    <a onClick={() => this.toggleTab(2)} className={this.getActiveClass(2,'active')}>APY & rewards </a>
                    <a onClick={() => this.toggleTab(3)} className={this.getActiveClass(3,'active')}>AI-based market maker</a>
                </TabLinks>
                {this.getActiveClass(1,
                <TabContent>
                    <VaultRow>
                        <p className='inactive'>Deposited
                            <span>$0</span>
                        </p>
                        <p className=''>APY reward
                            <span>152.5%</span>
                        </p>
                        <p className='inactive'>Expedite reward
                            <span>0%</span>
                        </p>
                        <p className='inactive'>Withdrew
                            <span>$</span>
                        </p>
                        <p className='inactive'>Total balance
                            <span>$0</span>
                        </p>
                        <p className='inactive'>ROI to date
                            <span>0%</span>
                        </p>
                    </VaultRow>
                    <Btn className='centerBlock'>DEPLOY YOUR SMART CONTRACT VAULT</Btn>
                    <TableContainer>
                        <table>
                            <tr>
                                <th>Token <Shorting><a><i class="fas fa-caret-up"></i></a><a><i class="fas fa-caret-down"></i></a></Shorting></th>
                                <th>Deposited <Shorting><a><i class="fas fa-caret-up"></i></a><a><i class="fas fa-caret-down"></i></a></Shorting></th>
                                <th>APY <i class="fas fa-question-circle"></i></th>
                                <th>Expedite reward</th>
                                <th>Withdrew</th>
                                <th className='text-center'>Claim rewards</th>
                                <th>Balance <Shorting><a><i class="fas fa-caret-up"></i></a><a><i class="fas fa-caret-down"></i></a></Shorting></th>
                                <th className='text-center'>Deposit</th>
                            </tr>
                            <tr>
                                <td>
                                    <Token><img src={SS}/> SMART</Token>
                                    <a className='dlt'><i class="fas fa-trash-alt"></i></a>
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
                                    <Token><img src={BNB}/> SMART</Token>
                                    <a className='dlt'><i class="fas fa-trash-alt"></i></a>
                                </td>
                                <td>1,000,000</td>
                                <td>87.53%</td>
                                <td className='color-green'>+1,000,000</td>
                                <td className='color-red'>-1,000,000</td>
                                <td className='text-center'><a className='claim'>CLAIM</a></td>
                                <td className='color-blue'>+1,000,000,000 <a className='arrow-dwn'><i class="fas fa-arrow-down"></i></a></td>
                                <td><a className='btn01'>DEPOSIT</a></td>
                            </tr>
                            <tr>
                                <td>
                                    <Token><img src={USDT}/> SMART</Token>
                                    <a className='dlt'><i class="fas fa-trash-alt"></i></a>
                                </td>
                                <td>1,000,000</td>
                                <td>87.53%</td>
                                <td className='color-green'>+1,000,000</td>
                                <td className='color-red'>-1,000,000</td>
                                <td className='text-center'><a className='claim'>CLAIM</a></td>
                                <td className='color-blue'>+1,000,000,000 <a className='arrow-dwn'><i class="fas fa-arrow-down"></i></a></td>
                                <td><a className='btn01'>DEPOSIT</a></td>
                            </tr>
                            <tr>
                                <td>
                                    <Token><img src={SS}/> SMART</Token>
                                    <a className='dlt'><i class="fas fa-trash-alt"></i></a>
                                </td>
                                <td>1,000,000</td>
                                <td>87.53%</td>
                                <td className='color-green'>+1,000,000</td>
                                <td className='color-red'>-1,000,000</td>
                                <td className='text-center'><a className='claim'>CLAIM</a></td>
                                <td className='color-blue'>+1,000,000,000 <a className='arrow-dwn'><i class="fas fa-arrow-down"></i></a></td>
                                <td><a className='btn01'>DEPOSIT</a></td>
                            </tr>
                            <tr>
                                <td>
                                    <Token><img src={BNB}/> SMART</Token>
                                    <a className='dlt'><i class="fas fa-trash-alt"></i></a>
                                </td>
                                <td>1,000,000</td>
                                <td>87.53%</td>
                                <td className='color-green'>+1,000,000</td>
                                <td className='color-red'>-1,000,000</td>
                                <td className='text-center'><a className='claim'>CLAIM</a></td>
                                <td className='color-blue'>+1,000,000,000 <a className='arrow-dwn'><i class="fas fa-arrow-down"></i></a></td>
                                <td><a className='btn01'>DEPOSIT</a></td>
                            </tr>
                            <tr>
                                <td>
                                    <Token><img src={USDT}/> SMART</Token>
                                    <a className='dlt'><i class="fas fa-trash-alt"></i></a>
                                </td>
                                <td>1,000,000</td>
                                <td>87.53%</td>
                                <td className='color-green'>+1,000,000</td>
                                <td className='color-red'>-1,000,000</td>
                                <td className='text-center'><a className='claim'>CLAIM</a></td>
                                <td className='color-blue'>+1,000,000,000 <a className='arrow-dwn'><i class="fas fa-arrow-down"></i></a></td>
                                <td><a className='btn01'>DEPOSIT</a></td>
                            </tr>
                        </table>
                    </TableContainer>
                </TabContent>
                )} 
                {this.getActiveClass(2,
                <TabContent>
                    <TabPera className='wow fadeInUp' data-wow-delay='0.2s'>SmartExchange functions as both a smartphone app and a web browser extension, serving as a comprehensive platform for users to engage with various blockchain opportunities. When users connect their wallets to DeFi platforms, such as DEXs , SmartExchange is triggered and presents the user with alternative and profitable offers. Users have the option to choose between faster expedited transactions or more cost-effective opportunities available in P2P or P</TabPera>
                </TabContent>
                )}
                {this.getActiveClass(3,
                <TabContent>
                    <TabPera className='wow fadeInUp' data-wow-delay='0.2s'>SmartExchange offers a user-friendly web3-based interface that is easily navigable, even for new users. The platform is highly customizable, allowing users to adjust settings and preferences according to their preferences. This level of customization enables users to optimize their DeFi experience based on their individual needs and goals. Additionally, SmartExchange provides shortcuts to favorite links, alerts, and various opportunities such as launch-pads, scale-pads, NFTs, staking, airdrops, strategy analysis, index tracking, educational, portfolio tracking, and access for all crypto apps from the google play marketplace</TabPera>
                </TabContent>
                )}
            </Container>
        </WelcomeMain>
    </>
    );
    }
}


const TableContainer = styled.div `
    width: 100%;
    table {
        width: 100%; 
        tr {
            th {border: 1px solid #3b3e4b; border-top-width: 2px; border-bottom-width: 2px; height: 52px; padding: 0 15px; text-align: left; position: relative; color: #aaaaaa;
                &:last-child {
                    border-right: 0px;
                }
                &:first-child {
                    border-left: 0px;
                }
            }
            td {border: 1px solid #3b3e4b; height: 52px;  padding: 0 15px; text-align: left; position: relative;
                &:last-child {
                    border-right: 0px;
                }
                &:first-child {
                    border-left: 0px;
                }
                .btn01 {border: 2px solid #000; padding:10px 40px; font-size: 12px; font-weight: bold; background: #0d0e13; color: #91dc27; box-shadow: 0 0 15px #323232;
                    &:hover {background: #91dc27; border: 2px solid #91dc27; box-shadow: 0 0 15px #91dc27; color: #fff;}
                }
                .dlt {float: right; font-size: 10px; &:hover {color: #c32b2d;}}
                .claim {color: #a6a2b0; font-weight: 700; &:hover {color: #91dc27;}}
                .arrow-dwn {color: #454950; width: 21px; height: 21px; display: inline-block; border-radius: 100px; border: 2px solid transparent; font-size: 12px; text-align: center; padding: 2px 1px 0 0; margin: 0 0 0 20px;
                    &:hover {border: 2px solid #c32b2d; color: #c32b2d;}
                }
            }
        }
    }
    .color-red {color: #c32b2d}
    .color-green {color: #91dc27}
    .color-blue {color: #2d52f3}
    .text-center {text-align: center}
`
const Token = styled.div `
    display: inline-flex; 
    img {margin-top: -3px; margin-right: 10px;}
`
const Shorting = styled.div `
    display: flex; position: absolute; right: 20px; flex-flow: column; top: 50%; transform: translateY(-50%);
    a {line-height: 0.7; font-size: 14px;
        .fas {line-height: inherit; }
    }
`
const TabLinks = styled.div `
    width: 100%; display: flex;
    a {color: #fff; font-size: 30px; font-weight: bold; flex-grow: 1; border-bottom: 3px solid #fff; padding: 0 0 25px; text-align: center; cursor: pointer;
        &.active {color: #91dc27; border-bottom: 3px solid #91dc27;}
    }
    @media screen and (max-width: 1440px) {
        a {font-size: 25px;}
    }
    @media screen and (max-width: 991px) {
        flex-flow: column;
        a {padding: 15px; font-size: 20px;}
    }
    @media screen and (max-width: 768px) {
    }
`
const TabContent = styled.div `
    min-height: 150px;
`
const TabPera = styled.p `
    margin: 54px 0 60px 0; font-size: 18px; color: #a6a2b0; text-align: center; line-height: 30px;
`
const VaultRow = styled.div ` text-align: center;
    display: flex; padding: 82px 0;
    p {width: 16.66%; font-size: 18px; font-weight: 700; line-height: 1.4; border-right: 1px solid #3b3e4b; margin: 0; padding: 9px 0;
        span {display: block; font-size: 26px;}
        &.inactive {color: #a6a2b0;}
    }
`
const WelcomeMain = styled.main `
    padding-top: 207px; min-height: 100vh;
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
    display: inline-block; font-size: 24px; font-weight: bold; padding: 26px 76px; border: 2px solid #91dc27; margin: 30px 0 0 0; box-shadow: 0 0 15px #91dc27;
    &.centerBlock {display: table; margin-left: auto; margin-right: auto; }
`
