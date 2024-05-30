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
import lgIco03 from '../assets/images/solution/expedite.png';
import check from '../assets/images/solution/check.png';
import times from '../assets/images/solution/times.png';
import howworks from '../assets/images/solution/howworks.png';
import expedite02 from '../assets/images/solution/expedite02.png';
import expedite03 from '../assets/images/solution/expedite03.png';
import quantum from '../assets/images/solution/quantum.png';
import smartex from '../assets/images/solution/smartex.png';
import smartex2 from '../assets/images/solution/smartex2.png';


export default class Screen03 extends PureComponent {
    render() {
    return (
        <>
            <Solution id='main' className='welcome-page'>
                <Header>
                    <a><img src={smartex2} alt='smart ex'/></a>
                    <a target='_blank' href='https://calendly.com/aaron-sanchez-metaengine-partnerships/30' className='headBtn'>Schedule a Demo</a>
                </Header>
                <Container className='no-flex'>
                    <Banner>
                        <h1 className='wow fadeInUp' data-wow-delay='0.2s'>Accelerate your EXISTING BRIDGES
                            <span>with a Cutting Edge Cross-Chain Expedite Solution</span>
                        </h1>
                        <p className='wow fadeInUp' data-wow-delay='0.3s'>Whichever bridge your work with, we can help speed up any and all bridges process.</p>
                        <div className='bannerLogos wow fadeInUp' data-wow-delay='0.4s'>
                            <a><img src={logo01} alt='logo'/></a>
                            <a><img src={logo02} alt='logo'/></a>
                            <a><img src={logo03} alt='logo'/></a>
                            <a><img src={logo04} alt='logo'/></a>
                            <a><img src={logo05} alt='logo'/></a>
                            <a><img src={logo06} alt='logo'/></a>
                            <a><img src={logo07} alt='logo'/></a>
                        </div>
                    </Banner>
                    <LeftRightTxt className='col-reverse'>   
                        <h2>EXPEDITE crosschain in seconds</h2>
                        <div className='flex'>
                            <div className='LR-Left wow fadeInRight' data-wow-delay='0.2s'><img src={lgIco03}/></div>
                            <div className='LR-Right wow fadeInLeft' data-wow-delay='0.2s'>
                                <ul>
                                    <li className='wrong'>Bridges offer a swap service with varying completion times, from minutes to hours, Your community needs speed, not long waiting times.</li>
                                    <li>SmartExchange is short-loan lending protocol that runs on top of the bridge and enables instant token transactions without any waiting period. We are not a bridge. We help users jump into your ecosystem nearly instantaneously to enjoy the benefits.</li>
                                    <li>For every cross-chain transaction that occurs, we will give them APY that costs you nothing.</li>
                                </ul>
                            </div>
                            
                        </div>
                    </LeftRightTxt>
                    <RandomTxt>
                    Expedite solution enables users to complete <br/>
                    any cross-chain transactions in seconds.
                    </RandomTxt>
                    <HowIt>
                        <h3 className='wow fadeInUp' data-wow-delay='0.2s'>How does it work?</h3>
                        <p className='wow fadeInUp' data-wow-delay='0.2s'>When a user initiates a cross-chain transfer through the blockchain bridge, SmartExchange's vaults instantly lend the desired tokens to the user, providing immediate access to the assets they need. Simultaneously, SmartExchange submits proof of this lending transaction to the blockchain bridge. The bridge, recognizing this proof, redirects the tokens from the cross-chain transfer directly to SmartExchange's vaults, rather than the user's wallet. This process not only streamlines cross-chain swaps by eliminating unnecessary waiting times but also maintains the security and integrity of user funds by leveraging the trust and efficiency of blockchain bridges.</p>
                        <p className='wow fadeInUp' data-wow-delay='0.2s'>Behind the magic of EXPEDITE are the users of our layer 2 Virtual Wallet Virtual wallets. This virtual wallet functions automatically as a self-custody decentralized short-term loans provider which powers the EXPEDITE swap solutions for cross-chain users while generating passive profits from EXPEDITE fees.</p>
                        <p className='wow fadeInUp' data-wow-delay='0.2s'>Your users loan your token, while your bridge does its work, leaving a seemless experience for those users coming into your blockchain ecosystem.</p>
                        <img className='wow fadeInUp' data-wow-delay='0.2s' src={howworks} alt='how it works' />
                    </HowIt>

                    <LeftRightTxt>  
                        <div className='flex'>
                            <div className='LR-Left wow fadeInLeft' data-wow-delay='0.2s'><img src={expedite02}/></div>
                            <div className='LR-Right wow fadeInRight' data-wow-delay='0.2s'>
                                <h4>We are not here to replace your bridge, we just EXPEDITE it</h4>
                                <h5>We help users enter your ecosystem faster.</h5>
                                <p>Your users are rewarded with unlimited APY for facilitating other users into your ecosystem. The more liquidity they bring, the more your community is rewarded.</p>
                                <p>Talk about a WIN-WIN solution.</p>
                            </div>
                        </div>
                    </LeftRightTxt>
                    <LeftRightTxt className='col-reverse'>  
                        <div className='flex'>
                            <div className='LR-Left wow fadeInRight' data-wow-delay='0.2s'><img src={expedite03}/></div>
                            <div className='LR-Right wow fadeInLeft' data-wow-delay='0.2s'>
                                <h4>How do you get EXPEDITE for your blockchain?</h4>
                                <p>We can build a custom solution any where in your website, partners, or anywhere where your current bridge lies. We will also build the integration on our end so SmartExchanges internal users can benefit from there as well.</p>
                            </div>
                        </div>
                    </LeftRightTxt>
                </Container>
                <PageBottom>
                    <Container className='no-flex wow zoomIn' data-wow-delay='0.2s'>
                        <h5>Wait, there's more!</h5>
                        <h3>Do you want us to reward your holders with</h3>
                        <p><strong>Here's how it works:</strong></p>
                        <p>When your users self-custody your native token, they will receive an APY derived from expedited cross-chain service fees. This means that your holders not only facilitate the entry of new users into your ecosystem but also earn unlimited APY for doing so, without any expenditure from your side!  This process maintains the stability of your token's circulation and drives buying pressure to your native token at the same time.</p>
                        <ButtonMain href='https://calendly.com/aaron-sanchez-metaengine-partnerships/30' target='_blank'>SCHEDULE A DEMO</ButtonMain>
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
    padding-top: 207px;  min-height: 100vh; font-family: 'Montserrat', sans-serif; background: url(${MainBg}) no-repeat #000; background-size: 100%;
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
const Banner = styled.div `text-align: center; padding-bottom: 273px;
    h1 {font-size: 68px; font-weight: 700; color: #fff; width: 100%; 
        span {font-size: 46px; display: block;}
    }
    p {margin: 0 0 68px; font-size: 24px; color: #a6a2b0}
    .bannerLogos {
        display: flex; justify-content: space-between; align-items: center; 
        a {margin: 0 30px;}
    }
    @media screen and (max-width: 1360px) {
        padding-bottom: 120px;
        h1 {font-size: 50px;
            span {font-size: 34px; margin-top: 5px;}
        }
        p {font-size: 20px;}
        .bannerLogos a {margin: 0 16px;}
    }
    @media screen and (max-width: 991px) {

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
    .LR-Right {width: 50%; align-self: center; padding: 0 35px;
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
                &:after {content: ""; width: 36px; height: 36px; position: absolute; left: 26px; top: 0; background: url(${check}) no-repeat center center; background-size: contain;}
                &.wrong:after {background: url(${times}) no-repeat center left;}
            }
        }
    }
    &.col-reverse {
        .LR-Left {order: 2;  margin-right: 0;  margin-left: auto;}
        .LR-Right {order: 1;}
    }
    @media (max-width: 1360px){
        h2 {font-size: 35px;}
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
    @media (max-width: 768px){
        margin-bottom: 80px; padding-top: 0;
        .flex {flex-flow: column;}
        h2 {font-size: 30px;}
        .LR-Left {width: 100%;
            img {width: 300px; max-width: 100%;}
        }
        .LR-Right {width: 100%; text-align: center;}
        ul {margin: 20px 0 0;
            li {text-align: left; padding-left: 40px; margin-bottom: 24px;
                &:after {left: 0; transform: scale(0.8); width: 25px; top: -9px;}
                span {font-size: 16px;}
            }
        }
        &.col-reverse {
            .LR-Left {order: 1;
            .LR-Right {order: 2;}
        }
    }
`
const PageBottom = styled.div `
    padding: 166px 0; background: url(${bottomBg}) no-repeat bottom center; background-size: 100%;
    h5 {color: #fff; font-size: 18px; font-weight: 700; text-align: center; margin: 0 0 15px;}
    h3 {text-align: center; font-size: 48px; font-weight: 700; color: #a849f2; text-shadow: 0 0 25px #a849f2; background: linear-gradient(90deg, #a849f2, #6764ff) text; color: transparent; opacity: 0.6; margin: 0 0 80px;}
    p {
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
    color: #fff; padding: 26px 30px; width: 432px; height: 80px; font-size: 24px; font-weight: 700; margin: 96px auto 0; border-radius: 5px; position: relative; display: flex; justify-content: center; align-items: center; background: linear-gradient(90deg, #a849f2, #6764ff); z-index: 1; box-shadow: 0 0 25px rgba(168,73,242,0.43); 
    &:after {content: ""; position: absolute; bottom: 2px; top: 2px; left: 2px; right: 2px; z-index: -1; border-radius: 5px; background: #0c0522; transition: all 0.5s ease-in-out;}
    &:hover {
        &:after {background: linear-gradient(90deg, #a849f2, #6764ff); }
    }
    @media (max-width: 768px){
        max-width: 100%; margin-top: 50px; padding: 20px 30px; height: auto; font-size: 20px;
    }
`
const HowIt = styled.div `
    text-align: center; margin-bottom: 50px; position: relative; z-index: 2;
    h3 {font-size: 48px; font-weight: 700; margin: 0 0 50px;}
    p {font-size: 18px; font-weight: normal; line-height: 1.6; text-align: left; color:#a6a2b0; margin: 0 0 60px;}
    img {margin-top: 126px;}
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
    .headBtn {color: #fff; padding: 7px 26px; font-size: 14px; font-weight: 700; margin: 0px 0; border-radius: 5px; position: relative; display: flex; justify-content: center; align-items: center; z-index: 1; box-shadow: 0 0 15px #fff; border: 1px solid #fff; margin-right: 30px; transition: all 0.5s ease-in-out;
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