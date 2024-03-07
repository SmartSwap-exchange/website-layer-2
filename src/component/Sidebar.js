import React, { PureComponent, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import icon1 from './../assets/images/icon1.png'
import icon2 from './../assets/images/icon2.png'
import icon3 from './../assets/images/icon3.png'
import icon4 from './../assets/images/icon4.png'
import topicon from './../assets/images/topicon.png'
import sideClose from './../assets/images/sideClose.png'


export default class Sidebar extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            ConnectedWal: false
        };
    }
    ShowContent = () => {
        this.setState((prevState) => ({
            ConnectedWal: !prevState.ConnectedWal,
        }));
    };
    closeSidebar = () => {
        // Call the function passed from the parent component to close the sidebar
        this.props.closeSidebar();
    };
    render() {
        const sidebarClass = this.props.isSidebarOpen ? 'open' : '';
        const { ConnectedWal } = this.state;
        return (
            <>
                <SideBar className={sidebarClass}>
                {!ConnectedWal && (<a onClick={this.ShowContent} className='connectwalBtn'>CONNECT WALLET</a>)}
                
                {ConnectedWal && ( <>
                    <Close onClick={this.closeSidebar}><img src={sideClose}/></Close>
                    <WalId><img src={topicon}/> 0x9b...0D64</WalId>
                    <ValTop>
                        <div className='vt-left'>
                            <span>Total value</span>
                            <p>$20,586.63</p>
                        </div>
                        <div className='vt-right'>
                            <span>Deposit tokens to your vaults</span>
                            <Btn>DEPOSIT</Btn>
                        </div>
                    </ValTop>
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
                            <span><img src={icon4}/></span>
                            <span><img src={icon4}/></span>
                            <span><img src={icon4}/></span>
                            <span><img src={icon4}/></span>
                            <span><img src={icon4}/></span>
                        </VerticalSlider>
                        <table>
                            <thead>
                                <tr>
                                    <th className='w-10'>Token </th>
                                    <th className='w-10'>Balance</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <Token><img src={icon2}/> SMART</Token>
                                </td>
                                <td><div className='hideH'>10,000 JNTR <span>[$5,586.63]</span></div> <Btn>DEPOSIT</Btn></td>
                            </tr>
                            <tr>
                                <td>
                                    <Token><img src={icon2}/> SMART</Token>
                                </td>
                                <td><div className='hideH'>10,000 JNTR <span>[$5,586.63]</span></div> <Btn>DEPOSIT</Btn></td>
                            </tr>
                            <tr>
                                <td>
                                    <Token><img src={icon2}/> SMART</Token>
                                </td>
                                <td><div className='hideH'>10,000 JNTR <span>[$5,586.63]</span></div> <Btn>DEPOSIT</Btn></td>
                            </tr>
                            <tr>
                                <td>
                                    <Token><img src={icon2}/> SMART</Token>
                                </td>
                                <td><div className='hideH'>10,000 JNTR <span>[$5,586.63]</span></div> <Btn>DEPOSIT</Btn></td>
                            </tr>
                            <tr>
                                <td>
                                    <Token><img src={icon2}/> SMART</Token>
                                </td>
                                <td><div className='hideH'>10,000 JNTR <span>[$5,586.63]</span></div> <Btn>DEPOSIT</Btn></td>
                            </tr>
                            <tr>
                                <td>
                                    <Token><img src={icon2}/> SMART</Token>
                                </td>
                                <td><div className='hideH'>10,000 JNTR <span>[$5,586.63]</span></div> <Btn>DEPOSIT</Btn></td>
                            </tr>
                            <tr>
                                <td>
                                    <Token><img src={icon2}/> SMART</Token>
                                </td>
                                <td><div className='hideH'>10,000 JNTR <span>[$5,586.63]</span></div> <Btn>DEPOSIT</Btn></td>
                            </tr>
                            <tr>
                                <td>
                                    <Token><img src={icon2}/> SMART</Token>
                                </td>
                                <td><div className='hideH'>10,000 JNTR <span>[$5,586.63]</span></div> <Btn>DEPOSIT</Btn></td>
                            </tr>
                            <tr>
                                <td>
                                    <Token><img src={icon2}/> SMART</Token>
                                </td>
                                <td><div className='hideH'>10,000 JNTR <span>[$5,586.63]</span></div> <Btn>DEPOSIT</Btn></td>
                            </tr>
                            <tr>
                                <td>
                                    <Token><img src={icon2}/> SMART</Token>
                                </td>
                                <td><div className='hideH'>10,000 JNTR <span>[$5,586.63]</span></div> <Btn>DEPOSIT</Btn></td>
                            </tr>
                            <tr>
                                <td>
                                    <Token><img src={icon2}/> SMART</Token>
                                </td>
                                <td><div className='hideH'>10,000 JNTR <span>[$5,586.63]</span></div> <Btn>DEPOSIT</Btn></td>
                            </tr>
                            <tr>
                                <td>
                                    <Token><img src={icon2}/> SMART</Token>
                                </td>
                                <td><div className='hideH'>10,000 JNTR <span>[$5,586.63]</span></div> <Btn>DEPOSIT</Btn></td>
                            </tr>
                            <tr>
                                <td>
                                    <Token><img src={icon2}/> SMART</Token>
                                </td>
                                <td><div className='hideH'>10,000 JNTR <span>[$5,586.63]</span></div> <Btn>DEPOSIT</Btn></td>
                            </tr>
                            </tbody>
                        </table>
                    </TableContainer>
                </>)}
                </SideBar>
                <OverLay className={sidebarClass} onClick={this.closeSidebar} />
            </>
        );
    }
}

const FlexDiv = styled.div`
    display: flex; flex-wrap: wrap;
`;

const SideBar = styled(FlexDiv) `
    width: 452px; position: fixed; top: 0; right: 0; bottom: 0; background: #050507; box-shadow: 0 0 25px rgba(145,220,39,0.2); z-index: 1500; padding: 0 36px; max-height: 100vh; overflow: auto; transform: translateX(100%); transition: all 0.3s ease-in-out;
    .connectwalBtn {height: 40px; border: 2px solid #000; box-shadow: 0 0 15px rgba(50,50,50,0.7); font-size: 14px; font-weight: 700; width: 100%; text-align: center; display: flex; align-items: center; justify-content: center; align-self: center;}
    &.open {transform: translateX(0%);}
    &::-webkit-scrollbar {width: 5px;}
    &::-webkit-scrollbar-track {background: transparent; }
    &::-webkit-scrollbar-thumb {background: #191b21;}
    &::-webkit-scrollbar-thumb:hover { background: #555;  }
`
const Btn = styled.a `
    border: 2px solid #91dc27; padding: 9px 33px; font-size: 16px; font-weight: bold; background: none; color: #91dc27; box-shadow: 0 0 15px #323232; display: block; text-align: center; margin: auto 0;
    &:hover {background: #91dc27; border: 2px solid #91dc27; box-shadow: 0 0 15px #91dc27; color: #fff;}
`
const ValTop = styled.div `
    display: flex; justify-content: space-between; margin: 0 0 44px 0; width: 100%; align-self: flex-start;
    .vt-left {
        span {font-size: 14px; color: #ffffff; font-weight: bold; display: block; margin: 0 0 10px 0;}
        p {font-size: 24px; color: #91dc27; font-weight: bold; margin: 0;}
    }
    .vt-right {
        span {font-size: 11px; color: #9a9a9a; font-weight: bold; display: block; margin: 0 0 7px 0;}
        p {font-size: 24px; color: #91dc27; font-weight: bold; margin: 0;}
    }
`
const TableContainer = styled.div `
    width: 100%; padding-left: 0; position: relative; /* height: calc(100vh - 310px); */ display: flex; border-top: 1px solid #000; overflow: auto; box-shadow: inset 0 1px 0 #3e4049; padding-top: 1px; align-items: flex-start; align-self: flex-start; flex-grow: 1;
    /* width */
    &::-webkit-scrollbar {width: 5px;}
    /* Track */
    &::-webkit-scrollbar-track {background: transparent; }
    /* Handle */
    &::-webkit-scrollbar-thumb {background: #191b21;}
    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover { background: #555;  }
    &.no-padding {padding: 0;}
    table {flex-grow: 1;
        thead {position: sticky; top: 0; z-index: 2; }
        tr {
            th {border: 2px solid #3b3e4b; font-size: 14px; border-top-width: 0; border-bottom-width: 0; height: 59px; padding: 0 17px; text-align: left; position: relative; color: #9a9a9a; vertical-align: middle; font-weight: bold;  background: #050507; 
                &:after {content: ""; height: 2px; background: #3b3e4b; position: absolute; left: 0; right: 0; bottom: -1px;}
                .fa-question-circle {font-size: 10px; position: relative; top: -0.65em;}
                &:last-child {
                    border-right: 0px;
                }
                &:first-child {
                    border-left: 0px;
                }
                &.w-10 {width: 10%;}
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
                &.hcol {background: #21232b;}
            }
            td {border: 1px solid #3b3e4b; height: 63px; font-size: 12px; padding: 0 17px; text-align: left; position: relative; vertical-align: middle; color: #9a9a9a; position: relative; color: #9a9a9a;
                &:last-child {
                    border-right: 0px;
                }
                &:first-child {
                    border-left: 0px;
                }
                ${Btn} {border: 2px solid #000; font-size: 12px; padding: 9px 10px; position: absolute; top: 50%; left: 17px; right: 17px; transform: translateY(-50%); background: #292b33; display: none;}
                .hideH {
                    span {display: block;}
                }
                &:hover {
                    &.hasBtn {color: transparent;}   
                    
                    .claim { opacity: 1;}
                }
            }
            &.hRow {
                td {
                    background: #1b1c25;
                }
            }
            &:hover {
                td {background: #1b1c25;
                    ${Btn} {display: block;}
                    .hideH {display: none;}
                }
            }
        }
    }
    .color-red {color: #c32b2d}
    .color-green {color: #91dc27}
    .color-blue {color: #2d52f3}
    .text-center {text-align: center}
`
const VerticalSlider = styled.div ` position: sticky; top: 0;
    height: 100%; width: 70px; z-index: 5; padding: 0 0; margin-right: 20px; display: flex; flex-flow: column; flex-shrink: 0; background: #292b33;
    .VsHead {position: sticky; top: 0; border-bottom: 2px solid #3b3e4b; height: 60px; display: block; background: #050507; flex-shrink: 0; color: #a6a2b0; font-weight: bold; font-size: 14px; padding: 19px 0px;}
    /* width */
    /* &::-webkit-scrollbar {width: 5px;}
    &::-webkit-scrollbar-track {background: transparent; }
    &::-webkit-scrollbar-thumb {background: #191b21;}
    &::-webkit-scrollbar-thumb:hover { background: #555;  } */
    span {margin: 0px auto; text-align: center; cursor: pointer; width: 70px; height: 63px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        img {display: inline-block; width: 32px; height: 32px; object-fit: contain; border-radius: 50px;}
        &:hover {
            background: #3b3e4b;
            img {box-shadow: #91dc27 0px 0px 10px;}
        }
    }
`
const Token = styled.div `
    display: inline-flex; align-items: center; vertical-align: top; white-space: nowrap; overflow: hidden; max-width: 100px; color: #fff;
    img { margin-right: 10px; width: 25px; height: 25px;}
`
const WalId = styled.div `
    display: inline-flex; align-items: center; vertical-align: top; white-space: nowrap; max-width: 100px; font-size: 14px; font-weight: 700; margin-top: 50px; margin-bottom: 42px;
    img { margin-right: 10px; width: 19px; height: 19px; object-fit: contain;}
`
const Close = styled.a `
    position: absolute; right: 15px; top: 17px;
`
const OverLay = styled.div `
    position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 1; display: none;
    &.open {display: block;}
    @media (max-width: 768px){
        background: #191b21;
    }
`





