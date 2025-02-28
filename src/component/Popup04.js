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
                        <Withdraw>
                            <h3>Please withdraw your balance before deleting these vault.</h3>
                            <div className='Buttons'>
                                <Button className="btn2 green-border">CANCEL</Button>
                                <Button className="btn2 red-border">WITHDRAW</Button>
                            </div>
                        </Withdraw>
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
    width: 1360px; margin: 0px auto; max-width: calc(100% - 30px);
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
        height: 60px; font-size: 20px;
    }
`
const Withdraw = styled.div ` padding: 20% 0 0;
    h3 {font-size: 42px; text-align: center; font-weight: 700; margin: 0 0 67px 0;}
    .Buttons {
        display: flex; justify-content: center; 
        .btn2 {
            width: 432px; margin: 0 16px;
        }
    }
    @media (max-width: 991px){
        padding-top: 20vh;
        h3 {font-size: 32px;}
        .Buttons {margin: 0px -10px;
        .btn2 {font-size: 16px; margin: 0 10px;}
        }
    }
    @media (max-width: 640px){
        h3 {font-size: 28px;}
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





