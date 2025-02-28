import React, { PureComponent, lazy, Suspense, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import HeaderWC from '../component/header';

import icon1 from '../assets/images/icon1.png'
import icon2 from '../assets/images/icon2.png'
import icon3 from '../assets/images/icon3.png'
import icon4 from '../assets/images/icon4.png'
import Shield from '../assets/images/shield.png'
import Automat from '../assets/images/automat.png'


export default class Screen01 extends PureComponent {
    render() {
    return (
        <>
            <WelcomeMain id='main' className='welcome-page'>
                <HeaderWC />
                
                <Container className='no-flex'>
                    <TopText>
                        <h3>Be your own validator</h3>
                        <p>Any swap provider can choose to become a master validator to validate their own expedited transactions, but it is not mandatory. When the validator approves sending the user funds and the swap provider's vault address to the third-party cross-chain provider, the intermediate smart contract will simultaneously release the swap provider's funds to the user. As a result, no transaction will take place with prior approval from the validator.
If a swap provider wishes to become a validator for their own transactions, all they need to do , is to install a file on their server or private computer that will validate their transactions.</p>
                    </TopText>
                    <ProgressLine><p style={{width: '66.66%'}} /></ProgressLine>
                    <Title01>Select the validator wallet address to activate master validator status</Title01>

                    <TableContainer className='no-padding'>
                        <table>
                            <tr>
                                <th className='w-05'>
                                    <Checkbox>
                                        <input type='checkbox' name='suportStablecoin' id='th1' />
                                        <label className='' htmlFor='th1'></label>
                                    </Checkbox>
                                </th>
                                <th ><div className='dropTh'>Blockchains</div> <Shorting><a><i className="fas fa-caret-up"></i></a><a><i className="fas fa-caret-down"></i></a></Shorting></th>
                                <th >Vault address </th>
                                <th >Total balance <Shorting><a><i className="fas fa-caret-up"></i></a><a><i className="fas fa-caret-down"></i></a></Shorting></th>
                                <th className='w-30 text-center'>Be your own validator </th>
                            </tr>
                            <tr>
                                <td className=''>
                                    <Checkbox>
                                        <input type='checkbox' name='suportStablecoin' id='td1' />
                                        <label className='' htmlFor='td1'></label>
                                    </Checkbox>
                                </td>
                                <td>
                                    <Token><img src={icon1}/> SMART</Token>
                                </td>
                                <td className='color-blue'>0x291...912Af</td>
                                <td>$1,000,000,000</td>
                                <td className='text-center'><a className='btnLnk color-green'><i class="fas fa-check-circle"></i> VALIDATION ACTIVATED</a>
                                    <div className='links'>
                                        <span><i class="fas fa-download"></i></span>
                                        <span><i class="fas fa-edit"></i></span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className=''>
                                    <Checkbox>
                                        <input type='checkbox' name='suportStablecoin' id='td2' />
                                        <label className='' htmlFor='td2'></label>
                                    </Checkbox>
                                </td>
                                <td>
                                    <Token><img src={icon2}/> SMART</Token>
                                </td>
                                <td className='color-blue'>0x291...912Af</td>
                                <td>-</td>
                                <td className='text-center'><a className='btnLnk'>BECOME A VALIDATOR</a></td>
                            </tr>
                            <tr>
                                <td className=''>
                                    <Checkbox>
                                        <input type='checkbox' name='suportStablecoin' id='td3' />
                                        <label className='' htmlFor='td3'></label>
                                    </Checkbox>
                                </td>
                                <td>
                                    <Token><img src={icon3}/> SMART</Token>
                                </td>
                                <td className='color-blue'>0x291...912Af</td>
                                <td>-</td>
                                <td className='text-center'><a className='btnLnk'>BECOME A VALIDATOR</a></td>
                            </tr>
                        </table>
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
                        <a className='becameV'>
                            <p><img src={Shield}/> Become your own validator </p>
                        </a>
                        <a className='automat'><img src={Automat}/>Automat rebalance stablecoin vaults </a>
                    </TableBottom>
                    <BtnSec>
                        <Link to="/screen01" className='back'><i class="fas fa-angle-left"></i> Back</Link>
                        <Link to="/screen03" className='btn'>NEXT STEP</Link>
                        <p>Total chosen chains: <span>1</span></p>
                    </BtnSec>
                </Container>
            </WelcomeMain>
        </>
    );
    }
}


const WelcomeMain = styled.main `
    padding-top: 207px; min-height: 100vh; font-family: 'Montserrat', sans-serif;
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
const TopText = styled.div `
    h3 {font-size: 42px; font-weight: 700; text-align: center; margin: 0 0 32px 0;}
    p {font-size: 18px; line-height: 1.67; margin: 0;}
    @media (max-width: 640px){
        h3 {font-size: 32px; text-align: left;}
    }
    @media (max-width: 520px){
        h3 {font-size: 28px;}
    }
    `
const ProgressLine = styled.div `
    margin: 72px 0 58px 0; height: 4px; width: 100%; background: #303030; border-radius:5px;
    p {background: #91dc27; height: 4px; width: 25%; border-radius: 5px; box-shadow: 0 0 10px #91dc27;}
    @media (max-width: 520px){
        margin: 50px 0 50px 0;
    }
`
const Title01 = styled.h2 `
    font-size: 24px; font-weight: 700; margin: 0;
    @media (max-width: 768px){
        font-size: 20px;
    }
`
const BtnSec = styled.div `
    border-top: 1px solid #303030; padding: 48px 0; display: flex; align-items: center; position: relative;
    .btn {background: none; border: 2px solid #91dc27; height: 65px; font-size: 18px; font-weight: bold; color: #fff; box-shadow: 0 0 10px #91dc27; cursor: pointer; display: flex; justify-content: center; align-items: center; width: 428px; font-family: 'Montserrat', sans-serif; margin: 0 0 0 auto; max-width: 100%;
        &:hover {background: #91dc27; color: #fff;}
    }
    .back {font-size: 14px; color: #a6a2b0;
        i {margin: 0 6px 0 0;}
        &:hover {color: #91dc27;}
    }
    p { position: absolute; bottom: 20px; right: 0; margin: 0; font-size: 12px; color: #aaa;
        span {color: #91dc27;}
    }
    @media (max-width: 768px){
        flex-flow: column-reverse;
        .btn {margin: 0; width: 100%;}
        .back { margin-top: 15px;}
        p {bottom: auto; top: 20px;}
    }
`
const TableContainer = styled.div `
    width: 100%; padding-left: 70px; position: relative; max-height: 475px; margin: 47px 0 0 0;
    &.no-padding {padding: 0;}
    table {
        width: 100%; 
        tr {
            th {border: 1px solid #3b3e4b; font-size: 14px; border-top-width: 2px; border-bottom-width: 2px; height: 50px; padding: 0 15px; text-align: left; position: sticky; top: 0; color: #fff; vertical-align: middle; background: #0d0e13; z-index: 1;
                &:last-child {
                    border-right: 0px;
                }
                &:first-child {
                    border-left: 0px;
                }
                &.w-05 {width: 50px;}
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
                .dropTh {
                    &:after {content: "\f0d7"; margin-left: 20px; font-family: "Font Awesome 5 Free";}
                }
            }
            td {border: 1px solid #3b3e4b; height: 52px; font-size: 14px; padding: 0 15px; text-align: left; position: relative; vertical-align: middle; color: #fff; position: relative;
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
                .links {position: absolute; right: 0; top: 50%; transform: translateY(-50%);
                    span {margin-right: 7px; cursor: pointer;
                        &:hover {color: #91dc27;}
                    }
                }
                .btnLnk {font-weight: 700; font-size: 12px;
                    i {margin-right: 10px; font-size: 16px;}
                    &:hover {color: #91dc27;}
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
    @media (max-width: 1353px){
        overflow: auto;
        table {min-width: 1100px;}
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
const Checkbox = styled.div `
    input[type='checkbox'] {opacity: 0; position: absolute;
        & + label {  position: relative;
            &:before {content: ""; width: 18px; height: 18px; background: #21232b; display: inline-block; vertical-align: top; border-radius: 0; margin: -2px 14px 0 0; box-shadow: inset 0 0 0 0 #21232b; transition: all 0.3s ease-in-out 0s; border: 2px solid #000;}
            &:after {content: "\f00c"; position: absolute; top: -3px; left: 5px; font-family: "Font Awesome 5 Free"; font-weight: 900; color: #91dc27; opacity: 0;}
            img {margin: -6px 10px 0 0;}
        }
        &:checked {
            & + label:after {opacity: 1;}
        }
    }
`
const TableBottom = styled.div `
    display: flex; align-items: center; font-size: 12px; color: #aaaaaa; padding-left: 0; padding-top: 21px; margin-bottom: 50px;
    &.no-padding {padding-left: 0;}
    .pagination {
        display: flex; align-items: center; margin-right: auto;
        .select {margin: 0 10px; position: relative;
            &:after {content:""; border-left: 4px solid transparent; border-right: 4px solid transparent; border-top: 4px solid #fff; position: absolute; right: 10px; top: 50%; margin-top: -3px;}
        }
        select {width: 65px; height: 30px; border: 0; padding: 0 10px; background: #3b3e4b; color: #fff; -webkit-appearance: none;}
    }
    .becameV { color: #aaa; font-size: 12px; padding: 3px 20px; margin-right: 18px; 
        p {margin: 0;}
        img {margin-right: 10px;}
    }
    .automat { cursor: pointer; color: #aaa;
        img {margin-right: 10px;}
        &:hover {color: #a6a2b0;}
    }
    .claimBtn {border: 2px solid #000; padding: 8px 32px; font-size: 12px; font-weight: bold; background: none; color: #a6a2b0; box-shadow: 0 0 15px #323232; margin: 0 27px 0 75px; line-height: 1;
        &:hover {background: #91dc27; border: 2px solid #91dc27; box-shadow: 0 0 15px #91dc27; color: #fff;}
    }
    @media (max-width: 991px){
        flex-flow: column; justify-content: center; align-items: center; 
        .pagination {margin: 0 auto 10px; }
        .becameV {margin-bottom: 10px;}
    }
`