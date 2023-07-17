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


export default class Screen03 extends PureComponent {
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
                    <ProgressLine><p style={{width: '100%'}} /></ProgressLine>
                    <Title01>Download the validator file and place it in AWS lambda</Title01>

                    <DownloadFile>
                        <div className='file'>
                            <p><i class="fas fa-file-code"></i> SMART validator V.1 <span>Latest update 09/08/2022</span></p>
                            <strong>Instructions <i class="fas fa-external-link-alt"></i></strong>
                        </div>
                        <a className='downloadBtn'><i class="fas fa-download"></i> DOWNLOAD VALIDATOR FILE</a>
                    </DownloadFile>

                    <BtnSec>
                        <Link to="/screen02" className='back'><i class="fas fa-angle-left"></i> Back</Link>
                        <a className='btn'>ACTIVE VALIDATOR</a>
                    </BtnSec>
                </Container>
            </WelcomeMain>
        </>
    );
    }
}

const DownloadFile = styled.div `
    padding: 58px 0 48px 0; display: flex; align-items: center;
    .file {
        p {margin: 0 0 3px 0; color: #91dc27; font-size: 18px;}
        i {margin-right: 9px;}
        span {font-size: 14px; color: #aaa;}
        strong {font-size: 12px; color: #aaa; i {color: #91dc27; margin-left: 4px;}}
    }
    .downloadBtn {margin-left: auto; color: #91dc27; font-size: 18px; font-weight: 700; i {margin-right: 6px;}}
    @media (max-width: 991px){
        flex-flow: column; align-items: flex-start;
        .downloadBtn {margin: 20px 0 0;}
    }
`
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