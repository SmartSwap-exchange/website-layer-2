import React, { PureComponent, lazy, Suspense, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import HeaderWC from '../component/header';

import MainBg from '../assets/images/bg.png';
import bottomBg from '../assets/images/bottomBg.png';
import logo01 from '../assets/images/solution/logo01.png';
import logo02 from '../assets/images/solution/logo02.png';
import logo03 from '../assets/images/solution/logo03.png'; 
import logo04 from '../assets/images/solution/logo04.png';
import logo05 from '../assets/images/solution/logo05.png';
import logo06 from '../assets/images/solution/logo06.png';
import logo07 from '../assets/images/solution/logo07.png';
import lgIco03 from '../assets/images/vault-blue.png';
import check from '../assets/images/solution/check.png';
import times from '../assets/images/solution/times.png';
import howworks from '../assets/images/howworks2.png';
import CheckIcon from '../assets/images/CheckIcon.png';
import quantum from '../assets/images/solution/quantum.png';
import smartex from '../assets/images/solution/smartex.png';
import smartex2 from '../assets/images/solution/smartex2.png';


export default class Screen03 extends PureComponent {
    render() {
    return (
        <>
            <Solution id='main' className='welcome-page'>
                <Header>
                    <Link to="/"><img src={smartex2} alt='smart ex'/></Link>
                    <Link to='/vaults' className='headBtn'>Deploy Your Smart Vault</Link>
                </Header>
                <Container className='no-flex'>
                    <Banner>
                        <h1 className='wow fadeInUp' data-wow-delay='0.2s'>Why Your Project Needs Smart Vault</h1>
                    </Banner>
                    <LeftRightTxt className='col-reverse'>   
                        <h2>The Benefits of Partnering with Smart Vault</h2>
                        <div className='flex'>
                            <div className='LR-Left wow fadeInRight' data-wow-delay='0.2s'><img src={lgIco03}/></div>
                            <div className='LR-Right wow fadeInLeft' data-wow-delay='0.2s'>
                                <ul>
                                    <li><span>Expedite new users into your project</span></li>
                                    <li><span>Generate fees for your project to buy back token</span></li>
                                    <li><span>Increase trading volume </span></li>
                                    <li><span>Remove sell pressure from market</span></li>
                                </ul>
                            </div>
                        </div>
                    </LeftRightTxt>
                    
                    <HowIt>
                        <h3 className='wow fadeInUp' data-wow-delay='0.2s'>How to Increase token Value with Smart Vault</h3>
                        <p className='wow fadeInUp' data-wow-delay='0.2s'>Leverage our advanced Layer 2 virtual wallet technology to integrate tokens into your Smart Vault, accelerating the onboarding of new users into your project's ecosystem. The tokens stored in the self-custody vault will generate unlimited fees, which will strategically and automatically buy back your tokens, increasing their value and reducing selling pressure in the market.</p>

                        <h4>Example Case</h4>
                        <p className='wow fadeInUp' data-wow-delay='0.2s'>Let's say your project name is XYZ and it's on the Solana chain. Now, let's assume that a user wants to cross from PEPE (Ethereum chain) to BONK (Solana chain) and wants to expedite their cross-bridge transaction to quickly obtain BONK tokens. Assuming there are no BONK tokens available in the Smart Exchange vaults, the Smart Exchange will utilize your XYZ tokens to help expedite the user's cross-chain transaction. Here's how it works: The user will send $100 of Pepe to the Smart Exchange, which will be sent to 3rd party cross-chain providers. While the cross-chain transaction is taking place (which can take 5-15 minutes), the Smart Exchange will allow your Smart Vault to lend $99 worth of XYZ tokens.</p>
                        <p className='wow fadeInUp' data-wow-delay='0.2s'>These tokens will be converted to BONK and given to the user instantly. After the 5-15 minutes, when the 3rd party cross-chain transaction completes the bridging, the $100 of PEPE will convert to SOL tokens or wrapped ETH on the Solana chain, and the Smart Exchange will use this fund to buy back $100 worth of XYZ tokens (1% more than the lending amount) Such an event will not only result in the buyback of more XYZ tokens (1% average for each expedite equal to more than 365% APY a year), and increasing the value of the XYZ token in the market, but will also increase trading volume and bring confidence to your community traders.</p>
                        <img className='wow fadeInUp' data-wow-delay='0.2s' src={howworks} alt='how it works' />
                    </HowIt>
                </Container>
                <UltimateSec>
                    <Container className='no-flex wow zoomIn' data-wow-delay='0.2s'>
                        <h4>Unlimited APY and Airdrops for Your Community</h4>
                        <h5>Encouraging our community members to hold their XYZ tokens in self-custody vaults is essential for the sustainability and growth of our project. Here's why:</h5>
                        
                        <ul>
                            <li>
                                <img src={CheckIcon} alt='check' />
                                <b>Faster Transactions</b>
                                <p>Storing XYZ tokens in self-custody vaults enables quicker cross-chain transactions by using these tokens to facilitate immediate swaps.</p>
                            </li>
                            <li>
                                <img src={CheckIcon} alt='check' />
                                <b>Unlimited APY</b>
                                <p>Token holders can earn high returns from fees generated by these expedited transactions. The more transactions processed, the higher the potential APY.</p>
                            </li>
                            <li>
                                <img src={CheckIcon} alt='check' />
                                <b>Unlimited Airdrops</b>
                                <p>Token holders in self-custody vaults are also eligible for unlimited airdrops provided by other projects. This adds an additional layer of value, rewarding long-term holders with potentially lucrative bonuses from various collaborations and partnerships.</p>
                            </li>
                            <li>
                                <img src={CheckIcon} alt='check' />
                                <b>Reduced Selling Pressure</b>
                                <p>By locking tokens away, we decrease the immediate availability of XYZ tokens for sale, helping to maintain or increase the market value.</p>
                            </li>
                            <li>
                                <img src={CheckIcon} alt='check' />
                                <b>Long-Term Holding Incentives</b>
                                <p>The opportunity to earn substantial APY encourages holders to keep their investments over a longer period, benefiting from the project's growth and enhancing liquidity and financial stability.</p>
                            </li>
                        </ul>
                    </Container>
                </UltimateSec>
                <PageBottom>
                    <Container className='no-flex wow zoomIn' data-wow-delay='0.2s'>
                        <h3>How to Integrate with Smart Vault?</h3>
                        <p>Simply add your tokens to your self-custody smart vault and let those tokens passively work for you and your community with unlimited APY and gas free airdrops, Smart Vault is an easy WIN for your project and your community. </p>
                        <ButtonMain href='https://calendly.com/aaron-sanchez-metaengine-partnerships/30' target='_blank'>DEPLOY YOUR SMART VAULT</ButtonMain>
                    </Container>
                </PageBottom>
                <Footer>
                    <div className='footer-right'>
                        <span>Powered by: </span>
                        <a className='https://quantum.foundation/' target='_blank'><img src={quantum} alt='quantum.foundation' /></a>
                        <b/>
                        <a><img src={smartex} alt='quantum.foundation' /></a>
                    </div>
                </Footer>
            </Solution>
        </>
    );
    }
}


const Solution = styled.main `
    padding-top: 324px;  min-height: 100vh; font-family: 'Montserrat', sans-serif; background: url(${MainBg}) no-repeat #000; background-size: 100%;
    @media (max-width: 767px){
        padding-top: 40%;
    }
    @media (max-width: 767px){
        background-size: 170%; 
    }
`
const Container = styled.div `
    width: 100%; max-width: 1360px; margin: 0 auto; display: flex; flex-flow: wrap;
    &.no-flex {display: block;}
    &.justify-center {justify-content: center;}
    &.mob-p0 {padding: 0;}
    @media (max-width: 1360px){
        /* padding: 0 20px; max-width: 1000px; */ padding: 0 30px;
    }
    @media (max-width: 768px){
        padding: 0 15px;
    }
`
const Banner = styled.div `text-align: center; padding-bottom: 88px;
    h1 {font-size: 68px; font-weight: 700; color: #fff; width: 100%; margin: 0;
        span {font-size: 46px; display: block;}
    }
    p {margin: 0 0 68px; font-size: 24px; color: #a6a2b0}
    .bannerLogos {
        display: flex; justify-content: space-between; align-items: center; 
        a {margin: 0 30px;}
    }
    @media screen and (max-width: 1360px) {
        padding-bottom: 60px;
        h1 {font-size: 50px;
            span {font-size: 34px; margin-top: 5px;}
        }
        p {font-size: 20px;}
        .bannerLogos a {margin: 0 16px;}
    }
    @media screen and (max-width: 991px) {
        padding-bottom: 40px;
        h1 {font-size: 35px;
            span {font-size: 35px;display: inherit;}
        }
        .bannerLogos {
            flex-flow: wrap; justify-content: center;
            a {margin: 0 16px 15px;
                img {max-height: 50px;}
            }
        }
    }
    @media screen and (max-width: 640px) {
        h1 {font-size: 30px;
            span {font-size: 30px;}
        }
        p {line-height: 1.5;}
    }
`
const LeftRightTxt = styled.div `
    padding-top: 50px; margin: 50px 0;
    h2 {font-size: 48px; text-align: center; margin: 0 0 50px;}
    .flex {display: flex;}
    .LR-Left {width: 50%; align-self: center; margin-right: auto; text-align: center;}
    .LR-Right {width: 50%; align-self: center; padding: 0 0;
        h4 {font-size: 48px; color: #fff; margin: 0 0 50px 0; line-height: 1.2;
            span {color: #fff;}
        }
        h5 {font-size: 24px; color: #a6a2b0; margin: 0 0 30px 0;}
        p {font-size: 18px; line-height: 1.7; color: #a6a2b0; margin: 0 0 30px 0;}
            img {filter: brightness(100);}
            &.color-icon {
                img {filter: none; margin-left: 37px;}
            }
        }
        ul {margin: 0;
            li {
                color: #a6a2b0; font-size: 18px; line-height: 1.7; margin-bottom: 34px; padding-left: 82px; position: relative;
                &:after {content: ""; width: 30px; height: 36px; position: absolute; left: 26px; top: 0; background: url(${check}) no-repeat center center; background-size: 100%;}
                &.wrong:after {background: url(${times}) no-repeat center left;}
                span {background: linear-gradient(90deg, rgb(168, 73, 242), rgb(103, 100, 255)) text; color: transparent; font-size: 21px; font-weight: 700;}
            }
        }
    }
    &.col-reverse {
        .LR-Left {order: 2;  margin-right: 0;  margin-left: auto;}
        .LR-Right {order: 1;}
    }
    @media (max-width: 1360px){
        h2 {font-size: 30px; margin-bottom: 20px;}
        .LR-Right { 
            padding: 0;
        }
    }
    @media (max-width: 1024px){
        .LR-Right {
            h4 {font-size: 26px;  margin-bottom: 35px;}
            h5 {font-size: 20px; margin-bottom: 20px;}
            ul {margin: 0;
                li {font-size: 16px; line-height: 1.4;}
            }
            p {font-size: 16px; line-height: 1.4; margin-bottom: 20px;}
        }
    }
    @media (max-width: 768px) {
        margin-bottom: 80px; padding-top: 0;
        .flex {flex-flow: column;}
        h2 {font-size: 25px;}
        .LR-Left {width: 100%;
            img {width: 300px; max-width: 100%;}
        }
        .LR-Right {width: 100%; text-align: center;}
        ul {margin: 0;
            li {text-align: left; padding-left: 60px;
                &:after {left: 0; transform: scale(0.8);}
            }
        }
        &.col-reverse {
            .LR-Left {order: 1;
            .LR-Right {order: 2;}
        }
    }
`
const PageBottom = styled.div `
    padding: 170px 0 202px; background: url(${bottomBg}) no-repeat bottom center; background-size: 100% 100%;
    h5 {color: #fff; font-size: 18px; font-weight: 700; text-align: center; margin: 0 0 15px;}
    h3 {text-align: center; font-size: 48px; font-weight: 700; color: #a849f2; text-shadow: 0 0 25px #a849f2; background: linear-gradient(90deg, rgb(168, 73, 242), rgb(103, 100, 255)) text; color: transparent; margin: 0 0 40px;}
    p { text-align: center;
        strong {font-size: 24px; font-weight: 700;}
        color: #a6a2b0; font-size: 18px; margin-bottom: 32px; line-height: 1.6;
    }
    @media (max-width: 1360px){
        h3 {font-size: 40px;}
    }
    @media (max-width: 768px){
        padding-bottom: 50px; padding-top: 50px;
        h3 {font-size: 30px; margin-bottom: 30px;}
        p {margin-bottom: 20px;}
        
    }
`
const ButtonMain = styled.a `
    color: #fff; padding: 26px 30px; width: 502px; height: 80px; font-size: 24px; font-weight: 700; margin: 97px auto 0; border-radius: 5px; position: relative; display: flex; justify-content: center; align-items: center; background: linear-gradient(90deg, #a849f2, #6764ff); z-index: 1; box-shadow: 0 0 25px rgba(168,73,242,0.43); text-align: center;
    &:after {content: ""; position: absolute; bottom: 2px; top: 2px; left: 2px; right: 2px; z-index: -1; border-radius: 5px; background: #0c0522; transition: all 0.5s ease-in-out;}
    &:hover {
        &:after {background: linear-gradient(90deg, #a849f2, #6764ff); }
    }
    @media (max-width: 768px){
        max-width: 100%; margin-top: 50px; padding: 20px 30px; height: auto; font-size: 20px;
    }
`
const HowIt = styled.div `
    text-align: center; margin-bottom: 50px; position: relative; z-index: 2; margin-top: 135px;
    h3 {font-size: 48px; font-weight: 700; margin: 0 0 36px;}
    h4 {font-size: 30px; font-weight: 700; margin: 97px 0 42px; text-align: left;}
    p {font-size: 18px; font-weight: normal; line-height: 1.65; text-align: left; color:#a6a2b0; margin: 0 0 33px;}
    img {margin-top: 54px;}
    &:before { content: ""; position: absolute; width: 650px; height: 650px; border-radius: 100%; filter: blur(120px); right: -55%; top: 0%; z-index: -1; opacity: 0.35; background: #4846b2; transform: translateY(-5%);}
    &:after { content: ""; position: absolute; width: 650px; height: 650px; border-radius: 100%; filter: blur(120px); left: -55%; top: 50%; z-index: -1; opacity: 0.35; background: #7332a5; transform: translateY(40%);}
    @media (max-width: 1360px){
        h3 {font-size: 35px; 
            
        }
    }
    @media (max-width: 768px){
        h3 {font-size: 30px; margin-bottom: 30px;}
        p {font-size: 16px; line-height: 1.5; margin-bottom: 20px;}
    }
`
const RandomTxt = styled.p `
    margin: 132px 0; font-size: 30px; font-weight: 700; text-align: center; text-shadow: 0 0 25px #a849f2; background: linear-gradient(90deg, #a849f2, #6764ff) text; color: transparent; opacity: 0.6;
    @media (max-width: 768px){
        margin: 90px 0; font-size: 26px; text-shadow: 0 0 15px #a849f2;
        br {display: none;}
    }
`
const Footer = styled.div `
    height: 80px; display: flex; align-items: center; padding: 0 30px;
    .footer-right {display: flex; align-items: center;
        span {font-size: 12px; color: #5f5f5f; font-weight: 700; margin-right: 18px;}
        a {margin-right: 30px;}
        b {height: 33px; width: 1px; background: #1c1c1c; margin-right: 30px;}
    }
    @media screen and (max-width: 640px) {
        height: auto; padding: 15px 20px;
        .footer-right {
            flex-flow: wrap;
            span {width: 100%; margin-bottom: 10px;}
            a {max-width: 40%; margin-right: 5%;}
            b {margin-right: 5%;}
        }
    }
`
const Header = styled.div `
    display: flex; align-items: center; justify-content: space-between; position: absolute; left: 0; right: 0; top: 0; padding: 10px 10px;
    .headBtn {color: #fff; padding: 7px 26px; font-size: 14px; font-weight: 700; margin: 0px 0; border-radius: 5px; position: relative; display: flex; justify-content: center; align-items: center; z-index: 1; box-shadow: 0 0 15px #fff; border: 1px solid #fff; margin-right: 30px; transition: all 0.5s ease-in-out; text-align: center;
        &:hover {color: #000; background: #fff;}
    }
    @media screen and (max-width: 640px) {
        padding: 5px 10px;
        .headBtn {padding: 7px 15px; margin-right: 5px; box-shadow: 0 0 10px #fff; }
        a {
            img {margin-left: -15px; max-width: 220px;}
        }
    }
    @media screen and (max-width: 480px) {
        .headBtn {font-size: 12px;}
    }
    @media screen and (max-width: 400px) {
        .headBtn {padding: 7px 10px;}
        a {
            img {max-width: 200px;}
        }
    }
`
const UltimateSec = styled.div `
    padding: 131px 0 0;
    h4 {text-align: center; font-size: 48px; font-weight: bold; color: white; margin: 0;}
    h5 {text-align: center; font-size: 18px; font-weight: normal; color: #a6a2b0; margin: 30px 0 0 0; line-height: 1.7; padding: 0 100px;}
    ul {
        margin: 73px 0 0 0; padding: 0;
        li {
            padding-left: 82px; position: relative; margin-bottom: 30px;
            img {position: absolute; left: 20px; top: -4px;}
            b {display: block; font-size: 21px;}
            p {margin: 0; color: #a6a2b0; font-size: 18px; line-height: 1.6; margin-top: 5px;}
        }
    }
    @media screen and (max-width: 991px) {
        h4 {font-size: 38px}
        h5 {padding: 0;}
    }
    @media screen and (max-width: 640px) {
        h4 {font-size: 25px}
        h5 {padding: 0; font-size: 16px; margin-top: 20px;}
        ul {
            li {
                padding-left: 40px;
                b {font-size: 18px;}
                p {font-size: 16px;}
                img {left: 0; top: 0; width: 25px;}
            }
        }
    }
`