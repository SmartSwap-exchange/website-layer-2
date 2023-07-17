import React, { PureComponent, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


import Ico1 from './../assets/images/sb-ICO-01.png'
import icon1 from '../assets/images/icon1.png'
import icon2 from '../assets/images/icon2.png'
import icon3 from '../assets/images/icon3.png'
import icon4 from '../assets/images/icon4.png'
import pinf from '../assets/images/pinf.png'
import pin from '../assets/images/pin.png'
import cross2 from '../assets/images/cross2.png'


export default class PopUp01 extends PureComponent {
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
        const { HeaderDrop } = this.state;
        return (
            <>
                <PopBody>
                    <PopWrap>
                        <SelectSec>
                            <Center>
                                <Close><img src={cross2}/></Close>
                                <SelectTitle><h4>Select <i className="fas fa-question-circle"></i></h4>    
                                    <SelectSml><span>BSC </span>
                                        <ul>
                                            <li>BSC</li>
                                            <li>BSC</li>
                                            <li>BSC</li>
                                        </ul>
                                    </SelectSml>
                                </SelectTitle>
                                <Input type='text' placeholder='Search name or paste address' value=''></Input>
                                <div className='selectedPills'>
                                    <strong><img src={icon1}/>BNB <a><i className="fas fa-times"></i></a></strong>
                                    <strong><img src={icon2}/>WBNB <a><i className="fas fa-times"></i></a></strong>
                                    <strong><img src={icon3}/>BAI <a><i className="fas fa-times"></i></a></strong>
                                    <strong><img src={icon4}/>USDT <a><i className="fas fa-times"></i></a></strong>
                                </div>
                            </Center>
                            <TableScroll>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Token name</th>
                                            <th>Supply</th>
                                            <th>24h change (%) <i className="fas fa-angle-down"></i></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><img className='pin' width={15} src={pinf} /><Token><img src={icon1}/> SMART</Token></td>
                                            <td>10,000,000</td>
                                            <td className='color-green'>0.54%</td>
                                        </tr>
                                        <tr>
                                            <td><img className='pin' width={15} src={pinf} /><Token><img src={icon1}/> SMART</Token></td>
                                            <td>10,000,000</td>
                                            <td className='color-green'>+4.28%+</td>
                                        </tr>
                                        <tr>
                                            <td><img className='pin' width={15} src={pinf} /><Token><img src={icon1}/> SMART</Token></td>
                                            <td>10,000,000</td>
                                            <td className='color-red'>-7.33%</td>
                                        </tr>
                                        <tr>
                                            <td><img className='pin' width={15} src={pin} /><Token><img src={icon1}/> SMART</Token></td>
                                            <td>10,000,000</td>
                                            <td className='color-green'>0.54%</td>
                                        </tr>
                                        <tr>
                                            <td><img className='pin' width={15} src={pinf} /><Token><img src={icon1}/> SMART</Token></td>
                                            <td>10,000,000</td>
                                            <td className='color-green'>+4.28%+</td>
                                        </tr>
                                        <tr>
                                            <td><img className='pin' width={15} src={pinf} /><Token><img src={icon1}/> SMART</Token></td>
                                            <td>10,000,000</td>
                                            <td className='color-red'>-7.33%</td>
                                        </tr>
                                        <tr>
                                            <td><img className='pin' width={15} src={pinf} /><Token><img src={icon1}/> SMART</Token></td>
                                            <td>10,000,000</td>
                                            <td className='color-green'>+4.28%+</td>
                                        </tr>
                                        <tr>
                                            <td><img className='pin' width={15} src={pinf} /><Token><img src={icon1}/> SMART</Token></td>
                                            <td>10,000,000</td>
                                            <td className='color-red'>-7.33%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </TableScroll>
                            <div className='selectFooter'>
                                Having trouble finding a token?
                            </div>
                        </SelectSec>
                    </PopWrap>
                </PopBody>
            </>
        );
    }
}

const FlexDiv = styled.div`
    display: flex; align-items: center; justify-content: center; flex-wrap: wrap;
`;
const PopBody = styled.div `
    position: fixed; background: #020202f0; top: 0; left: 0; right: 0; bottom: 0; z-index: 100; overflow: auto;
`
const PopWrap = styled.div `
    width: 900px; margin: 0px auto 30px; max-width: calc(100% - 30px);
`
const Input = styled.input `
    width: 380px; height: 50px; border: 2px solid #000; background: #21232b; color: #565a69; padding: 0 17px; color: #fff; font-size: 16px;
    &.xl {width: 448px; height: 67px;}
    @media (max-width: 991px){
        width: 100%; height: 45px; padding: 0 15px;
    }
`
const SelectSec = styled.div `
    display: block; width: 440px; margin: 30px auto 0; padding: 45px 0 0; background: #16191e; max-width: 100%;
    strong {font-size: 16px; font-weight: 700;}
    .selectedPills { margin: 18px 0px 25px;
        strong {border: 1px solid #545861; display: inline-flex; align-items: center; padding: 4px 9px 3px 6px; font-size: 12px; margin-right: 7px; margin-bottom: 5px; position: relative; background: #16191e;
            img {margin-right: 11px; border-radius: 100px; height: 24px; width: 24px; object-fit: cover;}
            a {width: 18px; height: 18px; border-radius: 50px; background: #000; color: rgb(255, 255, 255); text-align: center; font-size: 11px; line-height: 18px; position: absolute; right: -9px; top: -9px; z-index: 1; opacity: 0; transition: all 0.5s ease-in-out 0s; cursor: pointer;}
            &:hover {background: #91dc27;
                a {opacity: 1;}
            }
        }
    }
    .selectFooter {
        border-top: 1px solid #3b3e45; font-size: 12px; color: #fff; text-align: center; padding: 21px 0; margin-top: 20px;
    }
    ${Input} {border: 0; border-radius: 0;}
    @media (max-width: 991px){
        .selectedPills {
            strong {
                img {height: 20px; width: 20px;}
            }
        }
    }
`
const Center = styled.div `
    width: 100%; position: relative; padding: 0 30px;
    @media (max-width: 640px){
        padding: 0 20px;
    }
`
const Close = styled.div `
    position: absolute; top: -32px; right: 16px; width: 18px; cursor: pointer;
    @media (max-width: 991px){

    }
`
const SelectTitle = styled.div `
    display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px;
    h4 {font-size: 16px; font-weight: 700; margin: 0;
        i {position: relative; top: -5px; font-size: 12px;}
    }
`
const SelectSml = styled.div `
    position: relative;
    span {border: 0 solid #000; background: #21232b; width: 90px; height: 34px; display: inline-block; font-size: 14px; display: flex; justify-content: space-between; align-items: center; padding: 0 10px;
        &:after {content:""; border-left: 4px solid transparent; border-right: 4px solid transparent; border-top: 4px solid #fff;}
    }
    ul {position: absolute; left: 0; right: 0; top: 36px; border: 2px solid #000; z-index: 2; background: #21232b; display: none;
        li {padding: 5px 10px;
            &:hover {background: #292b33; cursor: pointer;}
        }
    }
`
const TableScroll = styled.div `
    width: 440px; max-height: 43vh; overflow: auto; position: relative;
    /* width */
    ::-webkit-scrollbar {width: 9px;}
    /* Track */
    ::-webkit-scrollbar-track {background: transparent; }
    /* Handle */
    ::-webkit-scrollbar-thumb {background: #2c2f36; }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover { background: #555;  }
    table {
        width: 100%; 
        tr {
            th {border-bottom: 0 solid #3b3e4b; font-size: 12px; font-weight: normal; border-bottom-width: 1px; padding: 12px 15px 12px; text-align: left; position: sticky; z-index: 1; color: #fff; vertical-align: middle; top: 0; left: 0; background: #16191e; 
                &:last-child {
                    padding-right: 25px; text-align: right; 
                    i { margin-left: 8px;}
                }
                &:first-child {
                    padding-left: 25px;
                }
            }
            td {border: 0 solid #3b3e4b;  font-size: 14px; padding: 16px 15px; text-align: left; position: relative; vertical-align: middle; color: #fff;
                &:last-child {
                    padding-right: 25px; text-align: right; 
                }
                &:first-child {
                    padding-left: 25px;
                }
                .pin {margin-right: 10px; margin-top: 3px;}
            }
            &:hover {
                td {background: #24282e;}
            }
        }
        .color-red {color: #c32b2d}
        .color-green {color: #91dc27}
    }
    @media (max-width: 991px){
        max-width: 100%;
        table {width: 600px;}
    }
`
const Token = styled.div `
    display: inline-flex; align-items: center; vertical-align: top;
    img { margin-right: 10px;}
`





