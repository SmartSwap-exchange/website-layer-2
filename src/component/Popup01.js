import React, { PureComponent, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


import Ico1 from './../assets/images/sb-ICO-01.png'
import CloseX from './../assets/images/popclose.png'


export default class PopUp01 extends PureComponent {

    render() {
        return (
            <>
                <PopBody>
                    <CloseBtn><img src={CloseX}/></CloseBtn>
                    <PopWrap>
                        <Form>
                            <h2>Create new vault</h2>
                            <div className='FormRow'>
                                <label>Choose a chain</label>
                                <div className='dropSelect'><img src={Ico1}/></div>
                            </div>
                            <div className='FormRow'>
                                <label>Choose a token</label>
                                <div className='dropSelect'></div>
                            </div>
                            <Button as={Link} to="/screen3"  className="green-border">CREATE NEW VAULT</Button>
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
    position: fixed; background: #020202f0; top: 0; left: 0; right: 0; bottom: 0; z-index: 100; overflow: auto;
`
const PopWrap = styled.div `
    width: 900px; margin: 0px auto 30px; max-width: calc(100% - 30px);
`
const Form = styled.div `
    width: 896px; margin: 0 auto; max-width: 100%;
    h2 {font-size: 42px; font-weight: 700; text-align: center; margin: 91px auto 75px;}
    .mb-3 {margin-bottom: 44px;}
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
    background: #292b33; border: 2px solid #0d0e13; height: 85px; font-size: 24px; font-weight: bold; color: #fff; box-shadow: 0 0 10px #ffffff80; margin: 61px 0px 0px;  cursor: pointer; display: flex; justify-content: center; align-items: center; width: 100%;
    &.green-border {color: #ffffff; border-color: #91dc27; box-shadow: 0 0 10px #91dc27; background: none;
        &:hover {background: #91dc27;}
    }
    &.red-border {color: #ffffff; border-color: var(--red2); box-shadow: 0 0 10px var(--red2);
        &:hover {background: var(--red2);}
    }
    @media (max-width: 991px){
        height: 65px; font-size: 20px;
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





