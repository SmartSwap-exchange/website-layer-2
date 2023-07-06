import React, { PureComponent, lazy, Suspense, useState } from 'react';
import styled from 'styled-components';
import HeaderWC from '../component/header';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import BannerBg from '../assets/welcome/home-bg.png';
import Apple from '../assets/images/apple.png';
import PlayS from '../assets/images/play.png';
import Browsers from '../assets/images/browser.png';
import TotalValueImg from '../assets/welcome/TotalValue.png';
import ZeroPersent from '../assets/images/0persent.png';
import ZeroDollar from '../assets/images/0dollar.png';
import Lock from '../assets/welcome/locker.png';
import Lock2 from '../assets/welcome/locker2.png';
import Eth from '../assets/welcome/eth.png';
import slider1 from '../assets/welcome/slider1.jpg';
import slider2 from '../assets/welcome/slider2.jpg';
import slider3 from '../assets/welcome/slider3.jpg';
import slider4 from '../assets/welcome/slider4.jpg';
import slider5 from '../assets/welcome/slider5.jpg';
import slider6 from '../assets/welcome/slider6.jpg';
import slider7 from '../assets/welcome/slider7.jpg';
import slider8 from '../assets/welcome/slider8.jpg';
import slider9 from '../assets/welcome/slider9.jpg';
import slider10 from '../assets/welcome/slider10.jpg';
import phone from '../assets/welcome/phone.png';



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

            <BannerSec>
                <Container className='justify-center'>
                    <BannerHD className='wow fadeInUp' data-wow-delay='0.2s'><span>LAYER 2</span> VIRTUAL WALLET</BannerHD>
                    <p className='wow fadeInUp' data-wow-delay='0.3s'>Your own private key wallet | Earn rewards via self-custody | Generate income with AI market making | Reduce swap cost | Expedite cross-chain waiting times | Customize shortcuts and apps</p>
                    <BtnPrimary className='disableBtn wow fadeInUp btnLg' data-wow-delay='0.4s'>
                        <div className='btnTop'>
                            <img src={Apple}/>
                            <div className='btnTxt'>
                                <i>DOWNLOAD</i>
                                <b>SmartExchange</b>
                            </div>
                        </div>
                    </BtnPrimary>
                    <BtnPrimary className='disableBtn wow fadeInUp btnLg' data-wow-delay='0.4s'>
                        <div className='btnTop'>
                            <img src={PlayS}/>
                            <div className='btnTxt'>
                                <i>DOWNLOAD</i>
                                <b>SmartExchange</b>
                            </div>
                        </div>
                    </BtnPrimary>
                    <BtnPrimary target='_blank' href="https://chrome.google.com/webstore/detail/smart-extension-beta/pcoblipkncbakbcnfkgobkikjfkjmhoc" className=' wow fadeInUp btnLg' data-wow-delay='0.4s'>
                        <div className='btnTop'>
                            <img src={Browsers}/>
                            <div className='btnTxt'>
                                <i>INSTALL</i>
                                <b>SmartExchange</b>
                            </div>
                        </div>
                    </BtnPrimary>
                </Container>
            </BannerSec>

            <Container className='no-flex'>
                <TabLinks className='wow fadeInUp' data-wow-delay='0.2s'>
                    <a  onClick={() => this.toggleTab(1)} className={this.getActiveClass(1,'active')}>What is SmartExchange?</a>
                    <a onClick={() => this.toggleTab(2)} className={this.getActiveClass(2,'active')}>How it works?</a>
                    <a onClick={() => this.toggleTab(3)} className={this.getActiveClass(3,'active')}>New user experience</a>
                </TabLinks>
                {this.getActiveClass(1,
                <TabContent>
                    <TabPera className='wow fadeInUp' data-wow-delay='0.2s'>SmartExchange is a layer 2 virtual wallet utilizing the established security of decentralized wallets like MetaMask and TrustWallet. It optimizes multi-chain and cross-chain transactions, enhancing speed, cost-efficiency, and risk mitigation. Users can generate passive income through decentralized Arbitrage and AI Quantum market-making systems.</TabPera>

                </TabContent>
                )} 
                {this.getActiveClass(2,
                <TabContent>
                    <TabPera className='wow fadeInUp' data-wow-delay='0.2s'>SmartExchange functions as both a smartphone app and a web browser extension, serving as a comprehensive platform for users to engage with various blockchain opportunities. When users connect their wallets to DeFi platforms, such as DEXs , SmartExchange is triggered and presents the user with alternative and profitable offers. Users have the option to choose between faster expedited transactions or more cost-effective opportunities available in P2P or P2DEX.</TabPera>
                </TabContent>
                )}
                {this.getActiveClass(3,
                <TabContent>
                    <TabPera className='wow fadeInUp' data-wow-delay='0.2s'>SmartExchange offers a user-friendly web3-based interface that is easily navigable, even for new users. The platform is highly customizable, allowing users to adjust settings and preferences according to their preferences. This level of customization enables users to optimize their DeFi experience based on their individual needs and goals. Additionally, SmartExchange provides shortcuts to favorite links, alerts, and various opportunities such as launch-pads, scale-pads, NFTs, staking, airdrops, strategy analysis, index tracking, educational, portfolio tracking, and access for all crypto apps from the google play marketplace.</TabPera>
                </TabContent>
                )}
                <TabImages className='wow fadeIn' data-wow-delay='0.2s'>
                        <Slider {...settings}>
                            <div><img src={slider1}/></div>
                            <div><img src={slider2}/></div>
                            <div><img src={slider3}/></div>
                            <div><img src={slider4}/></div>
                            <div><img src={slider5}/></div>
                            <div><img src={slider6}/></div>
                            <div><img src={slider7}/></div>
                            <div><img src={slider8}/></div>
                            <div><img src={slider9}/></div>
                            <div><img src={slider10}/></div>
                        </Slider>
                        <div className='and'>&</div>
                        <div className='mob-img'><img src={phone}/></div>
                    </TabImages>

                    <TabBtns>
                        <BtnPrimary className='disableBtn wow fadeInUp btnLg' data-wow-delay='0.4s'>
                            <div className='btnTop'>
                                <img src={Apple}/>
                                <div className='btnTxt'>
                                    <i>DOWNLOAD</i>
                                    <b>SmartExchange</b>
                                </div>
                            </div>
                        </BtnPrimary>
                        <BtnPrimary className='disableBtn wow fadeInUp btnLg' data-wow-delay='0.4s'>
                            <div className='btnTop'>
                                <img src={PlayS}/>
                                <div className='btnTxt'>
                                    <i>DOWNLOAD</i>
                                    <b>SmartExchange</b>
                                </div>
                            </div>
                        </BtnPrimary>
                        <BtnPrimary target='_blank' href="https://chrome.google.com/webstore/detail/smart-extension-beta/pcoblipkncbakbcnfkgobkikjfkjmhoc" className=' wow fadeInUp btnLg' data-wow-delay='0.4s'>
                            <div className='btnTop'>
                                <img src={Browsers}/>
                                <div className='btnTxt'>
                                    <i>INSTALL</i>
                                    <b>SmartExchange</b>
                                </div>
                            </div>
                        </BtnPrimary>
                    </TabBtns>
                    <TotalValue>
                        <div className='totalGrid wow fadeInUp' data-wow-delay='0.2s'>
                            <h4>Speed up waiting times</h4>
                                <p>Cross-chain platforms offer a swap service with varying completion times, from minutes to hours. SmartExchange enables instant expedite token reception without any waiting period.</p>
                        </div>
                        <div className='rowMain'>
                            <div className='totalGrid wow fadeInUp' data-wow-delay='0.2s'>
                                <h4>Decentralized arbitrage</h4>
                                <p>Virtual wallets function automatically as a self-custody decentralized short-term arbitrage system, offering swift solutions for cross-chain users and generating passive profits from expedite fees.</p>
                            </div>
                            <div className='totalGrid wow fadeInUp' data-wow-delay='0.2s'>
                                <img src={TotalValueImg}/>
                            </div>
                            <div className='totalGrid wow fadeInUp' data-wow-delay='0.2s'>
                                <h4>AI-Driven market maker</h4>
                                <p>Virtual wallets offer self-custody market-making, allowing unlimited funtom swap orders across markets without gas fees or locked funds beforehand. Along with AI-optimized trading, it boosts ROI and provides a superior alternative to Uniswap V3.</p>
                            </div>
                        </div>
                        <div className='totalGrid wow fadeInUp' data-wow-delay='0.2s'>
                            <h4>Reduce swap costs </h4>
                                <p>SmartExchange enables an efficient decentralized P2P network that reduces the costs associated with slippage often experienced in current AMMs.</p>
                        </div>
                    </TotalValue>
                    <ValueMain>
                        <div className='valueCol wow fadeInLeft' data-wow-delay='0.2s'>
                            <img src={ZeroDollar}/>
                            <h3>Total Value Locked</h3>
                            <p>All funds are entirely held by the user's self-custody vaults, and there is $0 exposure to any hacking.</p>
                        </div>
                        <div className='ValImg'><img className='desk' src={Lock}/> <img className='responsive' src={Lock2}/></div>
                        <div className='valueCol wow fadeInRight' data-wow-delay='0.2s'>
                            <img src={ZeroPersent}/>
                            <h3>0% Security Exposure</h3>
                            <p>Our vaults have zero security exposure as they rely on the security of your own original private key wallet, which is never shared with us.</p>
                        </div>
                    </ValueMain>
                    <WalletSec>
                        <h3>Gain APY Via Self Custody Virtual Wallet</h3>
                        <p>Your vaults are controlled by your own private key from your personal wallet, whether it's MetaMask, TrustWallet, or any other vendor. Your vault also function as a decentralized arbitrage system, facilitating short-term loans for a few minutes to expedite cross-chain transactions for other user</p>
                        <p>By holding your funds in your virtual wallet, you can earn APY and receive prorated fees from FastSwap expedited transactions, even if your tokens haven't been utilized for expediting transactions.</p>
                        <p>You have the opportunity to boost your earnings and leverage your holdings through market making, with AI-optimized </p>
                        <h2>152.5% APY</h2>
                        <BtnDark className='disabled'>CREATE YOUR VIRTUAL WALLET</BtnDark>
                    </WalletSec>
                    <Supporting>Supporting :<img src={Eth}/>300+ EVM blockchains</Supporting>
            </Container>
        </WelcomeMain>
    </>
    );
    }
}

// New
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
const TabBtns = styled.div `
    display: flex; justify-content: center; padding: 0 0 237px 0;
    @media screen and (max-width: 991px) {
        flex-flow: column; align-items: center; 
        padding: 0 0 100px 0;
    }
`
const TabPera = styled.p `
    margin: 54px 0 60px 0; font-size: 18px; color: #a6a2b0; text-align: center; line-height: 30px;
`
const TotalValue = styled.div `
    display: flex; align-items: center; width: 100%; justify-content: space-between;
    .totalGrid {width: 400px; text-align: center;
        h4 {font-size: 30px; font-weight: bold; margin: 0 0 18px;}
        p {font-size: 18px; color: #a6a2b0; margin: 0; line-height: 30px;}
        img {margin: 25px 0;}
    }
    .rowMain {width: 500px; max-width: 100%;
        .totalGrid {width: 100%;}
    }
    @media screen and (max-width: 1350px) {
        .totalGrid {
            h4 {font-size: 26px;}
            p {font-size: 16px;}
        }
    }
    @media screen and (max-width: 1024px) {
        flex-flow: column;
        .totalGrid { max-width: 100%;
            padding: 20px 0;
            h4 {font-size: 26px;}
            p {font-size: 16px;}
            img {margin: 0 0;}
        }
    }
`
const ValueMain = styled.div `
    display: flex; padding: 235px 0 0 0;
    .valueCol {
        width: 430px; max-width: 100%;
        h3 {font-size: 36px; font-weight: bold; margin: 29px 0 35px;}
        p {font-size: 21px; color: #a6a2b0; margin: 0; line-height: 36px;}
    }
    .ValImg {margin: 0 auto;
        .responsive {display: none;}
    }
    @media screen and (max-width: 1350px) {
        .valueCol {
            h3 {font-size: 30px; margin: 22px 0 30px;}
            p {font-size: 18px; line-height: 1.6;}
            
        }
    }
    @media screen and (max-width: 991px) {
        flex-flow: column; align-items: center; padding: 100px 0 0 0;
        .valueCol { text-align: center;
            h3 {font-size: 26px; margin: 22px 0 30px;} 
            img {max-height: 130px;}
        }
        .ValImg {margin: 30px auto;
            .desk {display: none;}
            .responsive {display: block;}
        }
    }
`
const WalletSec = styled.div `
    text-align: center; margin: 213px 0 0; padding: 112px 116px 65px; position: relative;
    &:after {position: absolute; top: 0; left: -50vw; bottom: 0; content: ""; z-index: -1; width: 100vw; margin-left: 50%;
    background-image: -moz-linear-gradient( 0deg, rgb(13,14,19) 0%, rgb(145,220,39) 50%, rgb(13,14,19) 100%);
    background-image: -webkit-linear-gradient( 0deg, rgb(13,14,19) 0%, rgb(145,220,39) 50%, rgb(13,14,19) 100%);
    background-image: -ms-linear-gradient( 0deg, rgb(13,14,19) 0%, rgb(145,220,39) 50%, rgb(13,14,19) 100%);}
    h3 {font-size: 36px; font-weight: bold; margin: 0 0 32px;}
    p {font-size: 18px; line-height: 30px; margin: 0 0 30px 0;}
    h2 {font-size: 48px; font-weight: bold; margin: 36px 0 0 0;}
    @media screen and (max-width: 1400px) {
        padding: 112px 20px 65px;
    }
    @media screen and (max-width: 991px) {
        margin: 100px 0 0; padding: 70px 0 20px;
        h3 {font-size: 30px; margin: 0 0 20px;}
        p {font-size: 18px; margin: 0 0 20px 0;}
        h2 {font-size: 40px; margin: 20px 0 0 0;}
    }
    @media screen and (max-width: 768px) {
        h3 {font-size: 26px;}
        p {font-size: 16px;line-height: 1.6;}
        h2 {font-size: 30px;}
    }
`
const BtnDark = styled.div `
    color: #91dc27; font-size: 24px; width: 665px; max-width: 100%; background: #0d0e13; margin: 46px auto 56px; padding: 27px 0; font-weight: 700; cursor: pointer;
    &:hover {color: #fff; background: #0d0e13;}
    &.disabled {
        position: relative;
        &:after {
            opacity: 0; visibility: hidden; background-color: #0d0e13; content: "Coming Soon"; border: none; position: absolute; inset: 0px; display: flex; -webkit-box-align: center; align-items: center; -webkit-box-pack: center; justify-content: center; color: #91dc27; 
        }
        &:hover {
            &:after {opacity: 1; visibility: visible;}
        }
    }
    @media screen and (max-width: 991px) {
        font-size: 22px;  padding: 20px 10px; width: auto; 
    }
    @media screen and (max-width: 768px) {
        font-size: 18px;  padding: 18px 10px;
    }
`
const Supporting = styled.div `
    display: flex; justify-content: center; color: #a6a2b0; font-size: 14px; font-weight: bold; text-align: center; width: 100%; padding: 20px 0; position: relative;
    &:after {position: absolute; top: 0; left: -50vw; bottom: 0; content: ""; z-index: -1; width: 100vw; margin-left: 50%;
    background: #16171e;}
    img {margin: -5px 7px 0 9px;}
`
const TabImages = styled.div `
    margin: 140px -90px 98px; display: flex; align-items: center;
    .slick-slider {width: 932px; }
    .slick-list {box-shadow: 0 0 20px #ffffff50;}
    .slick-arrow {display: none;}
    .slick-dots {display: flex; position: static; align-items: center; justify-content: center; margin: 20px 0 0; padding: 0;
        li {list-style: none;}
        button {background: none; border: 0; color: transparent; height: 8px; width: 19px; background: #3d3d3d; margin: 0 4px; border-radius: 5px;
        &:before {display: none;}}
        .slick-active button {background: #91dc27;}
    }
    .and {width: 121px; height: 121px; border-radius: 100%; background: #282a32; font-size: 60px; font-weight: 700; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 20px #91dc2790; margin: 0 32px 0 46px; flex-shrink: 0; }
    @media screen and (max-width: 1440px) {
        margin: 140px 0 98px;
        .slick-slider {width: 60%; }
        .and {width: 100px; height: 100px; font-size: 50px;}
        .mob-img {margin-right: -20px; max-width: 30%;}
    }
    @media screen and (max-width: 991px) {
        margin: 80px 0 80px; flex-flow: column; 
        .slick-slider {width: 100%; }
        .and {width: 100px; height: 100px; font-size: 50px; margin: 60px auto; }
        .mob-img {margin-right: -20px; max-width: 80%;}
        .slick-dots { margin: 15px 0 0;
            button {height: 6px; width: 15px; margin: 0 2px; overflow: hidden; padding: 0;}
        }
    }
`
// New



const WelcomeMain = styled.main `
    background: url(${BannerBg}) no-repeat top center; background-size: 100%; 
    @media (max-width: 767px){
        background-size: 170%; 
    }
`
const BannerSec = styled.section `
    padding: 264px 0 361px 0;
    /* padding: 114px 0 225px 0; */
    width: 100%; min-height: 300px; text-align: center;
    p {
        color: #a6a2b0; font-size: 24px; line-height: 1.8; margin: 0 0 44px 0;
    }
    @media (max-width: 1200px){
        padding: 264px 0 200px 0;
    }
    @media (max-width: 991px){
        p {
            br {display: none;}
        }
    }
    @media (max-width: 767px){
        min-height: 100vh; padding: 200px 0 80px; display: flex; align-items: center; justify-content: center;
        p {font-size: 20px;}
    }
    @media (max-width: 480px){
        p {font-size: 18px;}
    }
`
const BannerHD = styled.h3 `
    font-size: 66px; color: white; font-weight: bold; text-transform: uppercase;
    margin: 0 0 9px 0; font-weight: normal; text-shadow: 0 0 15px #fff;
    span {color: #91dc27; font-weight: bold; text-shadow: 0 0 0 #fff;}
    
    @media (max-width: 767px){
        font-size: 32px;
    }
    @media (max-width: 480px){
        font-size: 28px;
    }
`
const BtnPrimary = styled.a `
    background-color: inherit; color: #FFF; font-weight: 700; border: 0 solid #91dc27; box-shadow: 0px 0px 10px #9d9d9d; padding: 18px 24px; font-size: 18px; display: inline-block; cursor: pointer; text-align: center; transition: all 0.5s ease-in-out 0s; position: relative; background: #0d0e13; margin: 0 15px;
    &.disableBtn:after {
    opacity: 0; background-color: rgb(145, 220, 39); visibility: hidden; content: "Coming Soon"; border: none; position: absolute; inset: 0px; display: flex; -webkit-box-align: center; align-items: center; -webkit-box-pack: center; justify-content: center; color: rgb(255, 255,  255); font-size: 20px;
    }
    .btnTop {
        display: flex; align-items: center;
        img {flex-shrink: 0; margin-right: 25px; filter: grayscale(100%);}
        .btnTxt { text-align: left; 
            i {display: block; font-size: 14px; font-style: normal; color: #a6a2b0; font-weight: normal; }
            b {display: block; font-size: 24px;}
        }
    }
    
    @media (max-width: 1024px){
        min-width: 200px; margin-bottom: 25px;
    }
    @media (max-width: 767px){
        min-width: 200px;
        padding: 18px 24px;
        font-size: 16px;
        .btnTop {
            display: flex; align-items: center;
            img {max-height: 39px;}
            .btnTxt { text-align: left; 
                i {display: block; font-size: 12px; font-style: normal; color: #a6a2b0; font-weight: normal; }
                b {display: block; font-size: 20px;}
            }
        }
    }
    &.btnLg {padding: 18px 42px; font-size: 24px;
        @media (max-width: 1200px){
            padding: 18px 28px;
        }
        @media (max-width: 767px){
            max-width: 100%; min-width: 200px; font-size: 18px;
        }
    }
    &.btnXl {min-width: 666px; padding: 26px 50px; font-size: 24px; display: table; margin: 0px auto;
        @media (max-width: 767px){
            max-width: 100%; min-width: 200px; padding: 20px 50px; font-size: 18px;
        }
    }
    &:hover {background-color: #91dc27;
        &:after {opacity: 1; visibility: visible;}
        .btnTop {
            img {filter: grayscale(0%);}
            .btnTxt {
                i {color: #fff;}
            }
        }
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