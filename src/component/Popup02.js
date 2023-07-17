import React, { PureComponent, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


import Ico1 from './../assets/images/sb-ICO-01.png'
import CloseX from './../assets/images/popclose.png'


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
                    <CloseBtn><img src={CloseX}/></CloseBtn>
                    <PopWrap>
                        <Form>
                            <TopMenu className='mb-3'>
                                <a onClick={() => this.toggleTab(1)} className={this.getActiveClass(1,'active')}>Deposit</a>
                                <a onClick={() => this.toggleTab(2)} className={this.getActiveClass(2,'activeRed')}>Withdraw</a>
                            </TopMenu>
                            {this.getActiveClass(1,
                            <>
                                <div className='FormRow'>
                                    <label>Choose a chain</label>
                                    <div className='dropSelect'></div>
                                </div>
                                <div className='FormRow'>
                                    <label>Deposit amount</label>
                                    <Input className='xl' type='text' name='' />
                                    <span className='info'>Balance:  1,000.22 XYZ [$145.52]</span>
                                </div>
                                <Button className="green-border">DEPOSIT</Button>
                            </>
                            )} 
                            {this.getActiveClass(2,
                            <>
                                <div className='FormRow'>
                                    <label>Choose a chain</label>
                                    <div className='dropSelect'></div>
                                </div>
                                <div className='FormRow'>
                                    <label>Withdraw amount</label>
                                    <Input className='xl' type='text' name='' />
                                    <span className='info'>Balance:  1,000.22 XYZ [$145.52]</span>
                                </div>
                                <Button className="red-border">WITHDRAW</Button>
                            </>
                            )} 
                        </Form>
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
    position: fixed; background: #020202f0; top: 0; left: 0; right: 0; bottom: 0; z-index: 100;
`
const PopWrap = styled.div `
    width: 900px; margin: 0px auto; max-width: calc(100% - 30px);
`
const Form = styled.div `
    width: 896px; margin: 0 auto; max-width: 100%;
    h2 {font-size: 42px; font-weight: 700; text-align: center; margin: 91px auto 75px;}
    .mb-3 {margin-bottom: 58px;}
    .FormRow {
        display: flex; align-items: center; justify-content: space-between; margin-bottom: 27px; position: relative;
        label {font-size: 18px; font-weight: 700;}
        .dropSelect {width: 448px; height: 67px; border: 2px solid #000; background: #21232b; position: relative; display: flex; align-items: center; padding: 0 22px;
            &:after {content:""; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 6px solid #fff; position: absolute; right: 23px; top: calc(50% - 3px);}
            img {max-height: 20px;}
        }
        .info {position: absolute; bottom: -20px; right: 0; font-size: 11px; color: #a6a2b0;}
    }
    @media (max-width: 991px){
        h2 {font-size: 32px; margin: 20% auto 30px;}
        .FormRow { flex-flow: column; align-items: flex-start;
            label {margin-bottom: 10px;}
            .dropSelect {width: 100%; height: 55px;}
        }
    }
`
const Button = styled.button `
    background: #292b33; border: 2px solid #0d0e13; height: 85px; font-size: 24px; font-weight: bold; color: #fff; box-shadow: 0 0 10px #ffffff80; margin: 61px 0px 0px;  cursor: pointer; display: flex; justify-content: center; align-items: center; width: 100%; font-family: 'Montserrat', sans-serif;
    &.green-border {color: #ffffff; border-color: #91dc27; box-shadow: 0 0 10px #91dc27; background: none;
        &:hover {background: #91dc27;}
    }
    &.red-border {color: #ffffff; border-color: #b22628; box-shadow: 0 0 10px #b22628; background: none;
        &:hover {background: #b22628;}
    }
    @media (max-width: 991px){
        height: 65px; font-size: 20px;
    }
`
const TopMenu = styled.div ` 
    padding: 48px 0px 0px; border-bottom: 3px solid #fff; display: flex;
    a {color: #fff; padding: 2px 20px 30px; font-size: 24px; font-weight: bold; flex-grow: 1; text-align: center;
        &:last-child {border-right: 0 solid #000; box-shadow: 0 0 0 #3d3f49; }
        img {margin-right: 20px; filter: brightness(100); transition: all 0.3s ease-in-out 0s;}
        &.activeRed {color: #b22628; box-shadow: 0 3px 0 #b22628;}
        &.active {color: #91dc27; box-shadow: 0 3px 0 #91dc27;
            img {filter: brightness(1);}
        }
        &:hover {color: #91dc27; img {filter: brightness(1);}}
    }
    @media (max-width: 991px){
        padding-top: 90px;
        a {font-size: 18px; padding: 2px 10px 20px;}
    }
` 
const Input = styled.input `
    width: 380px; height: 50px; border: 2px solid #000; background: #21232b; color: #565a69; padding: 0 17px; color: #fff; font-size: 16px;
    &.xl {width: 448px; height: 67px;}
    @media (max-width: 991px){
        min-width: 100%; height: 55px;
        &.xl { height: 55px;}
    }
`
const CloseBtn = styled.a `
    position: absolute; right: 52px; top: 50px;
    img {width: 30px}
    @media (max-width: 991px){
        right: 20px; top: 20px;
        img {width: 20px}
    }
`





