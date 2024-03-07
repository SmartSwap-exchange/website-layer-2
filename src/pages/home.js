import React, { PureComponent, lazy, Suspense, useState } from 'react';
import styled from 'styled-components';
import HeaderWC from '../component/header';

import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
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
import btn01 from '../assets/images/btn01.png';
import btn02 from '../assets/images/btn02.png';
import btn03 from '../assets/images/btn03.png';
import btn04 from '../assets/images/btn04.png';
import btn05 from '../assets/images/btn05.png';
import btn06 from '../assets/images/btn06.png';
import lgIco01 from '../assets/welcome/lgIco01.png';
import lgIco02 from '../assets/welcome/lgIco02.png';
import lgIco03 from '../assets/welcome/lgIco03.png';
import lgIco04 from '../assets/welcome/lgIco04.png';
import lgIco05 from '../assets/welcome/lgIco05.png';
import lgIco06 from '../assets/welcome/lgIco06.png';
import chrome from '../assets/welcome/chrome.png';
import peraIco from '../assets/welcome/peraIco.png';
import tabImg01 from '../assets/welcome/tabImg01.png';
import Recket2 from '../assets/welcome/rocket2.png';
import qntmLogo from '../assets/welcome/qntmLogo.png';
import tab1Img01 from '../assets/welcome/tab1Img01.png';
import tab1Img02 from '../assets/welcome/tab1Img02.png';
import tab1Img03 from '../assets/welcome/tab1Img03.png';
import tab1Img04 from '../assets/welcome/tab1Img04.png';
import tab1Img05 from '../assets/welcome/tab1Img05.png';
import tab1Img06 from '../assets/welcome/tab1Img06.png';



const $ = window.$;
const settings = {
    dots: true,
    arrows: false,
};

export default class Welcome extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            toggleState: 1,
            activeTab: 'tabL01',
            activeTab2: 'tabL04'
        };
    }
    
    toggleTab = (index) => {
        this.setState({ toggleState: index });
    };
    
    getActiveClass = (index, className) => {
        const { toggleState } = this.state;
        return toggleState === index ? className : '';
    };

    // Function to handle click on tab title
    handleTabClick = (id) => {
        this.setState({ activeTab: id });
    };
    handleTabClick2 = (id) => {
        this.setState({ activeTab2: id });
    };
    render() {
        const { activeTab } = this.state;
        const { activeTab2 } = this.state;
    return (
    <>
        <WelcomeMain id='main' className='welcome-page'>
            {/* <HeaderWC /> */}

            <BannerSec>
                <Container className='justify-center'>
                    <BannerHD className='wow fadeInUp' data-wow-delay='0.2s'><span>LAYER 2</span> VIRTUAL WALLET</BannerHD>
                    <p className='wow fadeInUp' data-wow-delay='0.3s'>Tokens in your wallet are like money under the mattress, generating no income. Hodl your tokens in a self-custody layer 2 wallet, leveraging your own wallet's security, and enjoy unlimited passive airdrops, self-custody trading and short-term loan fees that help other users to expedite any cross-chain transaction to seconds</p>
                    <BtnPrimary href='/screen04' className='disableBtn wow fadeInUp btnLg' data-wow-delay='0.4s'>
                        <strong>FOR HOLDERS</strong>
                        <div className='btnTop'>
                            <img src={btn01}/>
                            <div className='btnTxt'>
                                <b>Self-custody <br/>
                                short-term loans</b>
                            </div>
                        </div>
                    </BtnPrimary>
                    <BtnPrimary className='disableBtn wow fadeInUp btnLg' data-wow-delay='0.4s'>
                        <strong>FOR HOLDERS</strong>
                        <div className='btnTop'>
                            <img src={btn02}/>
                            <div className='btnTxt'>
                                <b>Expedite cross-chain<br/>
                                to seconds</b>
                            </div>
                        </div>
                    </BtnPrimary>
                    <BtnPrimary href='http://airdrop.tube/' target='_blank' className='wow fadeInUp btnLg' data-wow-delay='0.4s'>
                        <strong>FOR HOLDERS</strong>
                        <div className='btnTop'>
                            <img src={btn03}/>
                            <div className='btnTxt'>
                                <b>Free airdrop<br/>
                                distribution</b>
                            </div>
                        </div>
                    </BtnPrimary>
                    <BtnPrimary href='http://airdrop.tube/' target='_blank' className='wow fadeInUp btnLg' data-wow-delay='0.4s'>
                        <strong>FOR HOLDERS</strong>
                        <div className='btnTop'>
                            <img src={btn04}/>
                            <div className='btnTxt'>
                                <b>Unlimited passive <br/>
                                airdrop subscription</b>
                            </div>
                        </div>
                    </BtnPrimary>
                    <BtnPrimary className='disableBtn wow fadeInUp btnLg' data-wow-delay='0.4s'>
                        <strong>FOR HOLDERS</strong>
                        <div className='btnTop'>
                            <img src={btn05}/>
                            <div className='btnTxt'>
                                <b>Quantum virtual<br/>
                                limit orders </b>
                            </div>
                        </div>
                    </BtnPrimary>
                    <BtnPrimary className='disableBtn wow fadeInUp btnLg' data-wow-delay='0.4s'>
                        <strong>FOR HOLDERS</strong>
                        <div className='btnTop'>
                            <img src={btn06}/>
                            <div className='btnTxt'>
                                <b>limit orders <br/>
                                wallet to your dApp</b>
                            </div>
                        </div>
                    </BtnPrimary>
                    
                </Container>
            </BannerSec>
            
            <LeftRightTxt>
                <Container>
                    <div className='LR-Left'><img src={lgIco01}/></div>
                    <div className='LR-Right'>
                        <h5>FOR HOLDERS</h5>
                        <h4>Self custody expedite
                        short loans</h4>
                        <p>Virtual wallets function automatically as a self-custody decentralized short-term loans offering expedite swap solutions for cross-chain users and generating passive profits from expedite fees.</p>
                        <BtnChrome href='https://chromewebstore.google.com/detail/smartexchange-beta/pcoblipkncbakbcnfkgobkikjfkjmhoc' target='_blank'>
                            <div className='btnTop'>
                                <img src={chrome}/>
                                <div className='btnTxt'>
                                    <b>Install virtual wallet</b>
                                    <i>Web Store</i>
                                </div>
                            </div>
                        </BtnChrome>
                    </div>
                </Container>
            </LeftRightTxt>
            <LeftRightTxt className='col-reverse'>
                <Container>
                    <div className='LR-Left'><img src={lgIco02}/></div>
                    <div className='LR-Right'>
                        <h5>FOR HOLDERS</h5>
                        <h4>Unlimited passive airdrop subscription</h4>
                        <p>Virtual wallets function automatically as a self-custody decentralized short-term arbitrage system, offering swift solutions for cross-chain users and generating passive profits from expedite fees.</p>
                        <BtnClaim>
                            CLAIM YOUR <span>$25</span> WELCOME BONUS
                        </BtnClaim>
                    </div>
                </Container>
            </LeftRightTxt>
            <LeftRightTxt >
                <Container>
                    <div className='LR-Left'><img src={lgIco03}/></div>
                    <div className='LR-Right'>
                        <h5>FOR HOLDERS</h5>
                        <h4>Expedite cross chain
to seconds </h4>
                        <p>Cross-chain platforms offer a swap service with varying completion times, from minutes to hours. SmartExchange enables instant expedite token reception without any waiting period.</p>
                        <BtnClaim>
                            CLAIM YOUR <span>$25</span> WELCOME BONUS
                        </BtnClaim>
                    </div>
                </Container>
            </LeftRightTxt>
            <LeftRightTxt className='col-reverse'>
                <Container>
                    <div className='LR-Left'><img src={lgIco04}/></div>
                    <div className='LR-Right'>
                        <h5>FOR HOLDERS</h5>
                        <h4>Quantum virtual limit</h4>
                        <p>Virtual wallets are designed to facilitate quantum virtual orders across various markets without the necessity to spend gas or lock any funds beforehand. </p>
                        <BtnClaim>
                            CLAIM YOUR <span>$25</span> WELCOME BONUS
                        </BtnClaim>
                    </div>
                </Container>
            </LeftRightTxt>

            <WalletSec className='btnOnly'>
                <BtnDark className='disabled white-color shadow-white'>CLAIM YOUR&nbsp;<span className='color-green'>$25</span>&nbsp;WELCOME BONUS <img className='img-right' src={peraIco}/>
                <div className='btnTop'>
                    <img src={chrome}/>
                    <div className='btnTxt'>
                        <b>Install virtual wallet</b>
                        <i>Web Store</i>
                    </div>
                </div>
                </BtnDark>
            </WalletSec>

            <Container className='no-flex'>
                <TabLinks className='wow fadeInUp' data-wow-delay='0.2s'>
                    <a  onClick={() => this.toggleTab(1)} className={this.getActiveClass(1,'active')}>What is SmartExchange?</a>
                    <a onClick={() => this.toggleTab(2)} className={this.getActiveClass(2,'active')}>How it works?</a>
                    <a onClick={() => this.toggleTab(3)} className={this.getActiveClass(3,'active')}>New user experience</a>
                </TabLinks>
                {this.getActiveClass(1,
                <TabContent>
                    {/* <TabPera className='wow fadeInUp' data-wow-delay='0.2s'>SmartExchange is a layer 2 virtual wallet utilizing the established security of decentralized wallets like MetaMask and TrustWallet. It optimizes multi-chain and cross-chain transactions, enhancing speed, cost-efficiency, and risk mitigation. Users can generate passive income through decentralized Arbitrage and AI Quantum market-making systems.</TabPera> */}
                    <TabImgTxt>
                        <div className='tt-left'>
                            <div data-id="tabL01" >
                                <h3 className={activeTab === 'tabL01' ? 'active' : ''} onMouseEnter={() => this.handleTabClick('tabL01')}>Self-custody vaults</h3>
                                {activeTab === 'tabL01' ?  <p>SmartExchange is a Layer 2 virtual wallet featuring self-custody vaults that utilize the established security of decentralized wallets like MetaMask and TrustWallet.</p> : ''}
                            </div>
                            <div data-id="tabL02" >
                                <h3 className={activeTab === 'tabL02' ? 'active' : ''} onMouseEnter={() => this.handleTabClick('tabL02')}>Cheaper swap</h3>
                                {activeTab === 'tabL02' ? <p>The smart extension is designed to pop up and offer users cheaper swap options every time they visit decentralized applications (dApps) like Uniswap, 1inch, and similar platforms</p> : ''}
                            </div>
                            <div data-id="tabL03" >
                                <h3 className={activeTab === 'tabL03' ? 'active' : ''} onMouseEnter={() => this.handleTabClick('tabL03')}>Faster cross-chain</h3>
                                {activeTab === 'tabL03' ? <p>When performing a cross-chain swap, users have the option to choose between the cheapest router or the fastest one, which is a unique expedited solution to bridge between any cross-chain in seconds</p> : ''}
                            </div>
                        </div>
                        <div className='tt-right'>
                        <img id="tabL01" src={activeTab === 'tabL01' ? tab1Img01 : ''} style={{ display: activeTab === 'tabL01' ? 'block' : 'block' }} />
                        <img id="tabL02" src={activeTab === 'tabL02' ? tab1Img02 : ''} style={{ display: activeTab === 'tabL02' ? 'block' : 'none' }} />
                        <img id="tabL03" src={activeTab === 'tabL03' ? tab1Img03 : ''} style={{ display: activeTab === 'tabL03' ? 'block' : 'none' }} />
                        </div>
                    </TabImgTxt>
                </TabContent>
                )} 
                {this.getActiveClass(2,
                <TabContent>
                    <TabImg>
                        <img src={tabImg01} />
                    </TabImg>
                </TabContent>
                )}
                {this.getActiveClass(3,
                <TabContent>
                    {/* <TabPera className='wow fadeInUp' data-wow-delay='0.2s'>SmartExchange offers a user-friendly web3-based interface that is easily navigable, even for new users. The platform is highly customizable, allowing users to adjust settings and preferences according to their preferences. This level of customization enables users to optimize their DeFi experience based on their individual needs and goals. Additionally, SmartExchange provides shortcuts to favorite links, alerts, and various opportunities such as launch-pads, scale-pads, NFTs, staking, airdrops, strategy analysis, index tracking, educational, portfolio tracking, and access for all crypto apps from the google play marketplace.</TabPera> */}

                    <TabImgTxt>
                        <div className='tt-left'>
                            <div data-id="tabL04" >
                                <h3 className={activeTab2 === 'tabL04' ? 'active' : ''} onMouseEnter={() => this.handleTabClick2('tabL04')}>Unlimited airdrops</h3>
                                {activeTab2 === 'tabL04' ?  <p>$SMART token, acting as Unlimited Airdrop Subscription (UAS) token, represent an innovative cryptocurrency utility. They offer passive access to unlimited airdrops when held in self-custody.</p> : ''}
                            </div>
                            <div data-id="tabL05" >
                                <h3 className={activeTab2 === 'tabL05' ? 'active' : ''} onMouseEnter={() => this.handleTabClick2('tabL05')}>Unlimited APY</h3>
                                {activeTab2 === 'tabL05' ? <p>Holders can passively receive expedited fees every time users leverage the holding fund to perform short-term expedited loans</p> : ''}
                            </div>
                            <div data-id="tabL06" >
                                <h3 className={activeTab2 === 'tabL06' ? 'active' : ''} onMouseEnter={() => this.handleTabClick2('tabL06')}>VIP access</h3>
                                {activeTab2 === 'tabL06' ? <p></p> : ''}
                            </div>
                        </div>
                        <div className='tt-right'>
                        <img id="tabL04" src={activeTab2 === 'tabL04' ? tab1Img04 : ''} style={{ display: activeTab2 === 'tabL04' ? 'block' : 'block' }} />
                        <img id="tabL05" src={activeTab2 === 'tabL05' ? tab1Img05 : ''} style={{ display: activeTab2 === 'tabL05' ? 'block' : 'none' }} />
                        <img id="tabL06" src={activeTab2 === 'tabL06' ? tab1Img06 : ''} style={{ display: activeTab2 === 'tabL06' ? 'block' : 'none' }} />
                        </div>
                    </TabImgTxt>
                </TabContent>
                )}
                <>{/* 
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
                */}</>
                <LeftRightTxt className='col-reverse'>
                    <Container>
                        <div className='LR-Left'><img src={lgIco05}/></div>
                        <div className='LR-Right'>
                            <h5>FOR PROJECTS</h5>
                            <h4>Distributes airdrops to holders and traders for <span>FREE</span></h4>
                            <p>Boost your project's success by sharing your tokens or NFTs with over 10 Million+ verified wallet holders.</p>
                            <BtnSecondry href='http://airdrop.tube/' target='_blank'>
                                LAUNCH AIRDROP GIVEAWAY <img src={Recket2}/>
                            </BtnSecondry>
                        </div>
                    </Container>
                </LeftRightTxt>
                <LeftRightTxt >
                    <Container>
                        <div className='LR-Left'><img src={lgIco06}/></div>
                        <div className='LR-Right'>
                            <h5>FOR HOLDERS</h5>
                            <h4>Integrate virtual wallet to your dApp</h4>
                            <p>Cross-chain platforms offer a swap service with varying completion times, from minutes to hours. SmartExchange enables instant expedite token reception without any waiting period.</p>
                            <LinkBtn>Start Integration <i class="fas fa-angle-double-right"></i></LinkBtn>
                        </div>
                    </Container>
                </LeftRightTxt>
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
            </Container>
        </WelcomeMain>
        <FootBtn>
            <BtnDark className='disabled white-color shadow-white'>CLAIM YOUR&nbsp;<span className='color-green'>$25</span>&nbsp;WELCOME BONUS <img className='img-right' src={peraIco}/></BtnDark>
        </FootBtn>
        <Footer>
            <span>Powered by:</span> <img src={qntmLogo} />
        </Footer>
    </>
    );
    }
}

// New
const TabLinks = styled.div `
    width: 100%; display: flex;
    a {color: #fff; font-size: 24px; font-weight: bold; flex-grow: 1; border-bottom: 3px solid #fff; padding: 0 0 25px; text-align: center; cursor: pointer; width: 33.33%;
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
    display: flex; padding: 158px 0; position: relative; margin-top: 140px;
    &:after {position: absolute; top: 0; left: -50vw; bottom: 0; content: ""; z-index: -1; width: 100vw; margin-left: 50%;
    background-image: -moz-linear-gradient( 0deg, rgb(13,14,19) 0%, rgb(145,220,39) 50%, rgb(13,14,19) 100%);
    background-image: -webkit-linear-gradient( 0deg, rgb(13,14,19) 0%, rgb(145,220,39) 50%, rgb(13,14,19) 100%);
    background-image: -ms-linear-gradient( 0deg, rgb(13,14,19) 0%, rgb(145,220,39) 50%, rgb(13,14,19) 100%);}
    .valueCol {
        width: 430px; max-width: 100%;
        h3 {font-size: 36px; font-weight: bold; margin: 29px 0 35px; color: #000;}
        p {font-size: 21px; color: #fff; margin: 0; line-height: 36px;}
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
const BtnDark = styled.div `
    color: #91dc27; font-size: 24px; width: 665px; max-width: 100%; background: #0d0e13; margin: 46px auto 56px; padding: 27px 0; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center;
    .img-right {margin-left: 26px;}
    
    &.disabled {
        position: relative;
        &:after {
            opacity: 0; visibility: hidden; background-color: #0d0e13; content: "Coming Soon"; border: none; position: absolute; inset: 0px; display: flex; -webkit-box-align: center; align-items: center; -webkit-box-pack: center; justify-content: center; color: #91dc27; 
        }
        &:hover {
            &:after {opacity: 1; visibility: visible;}
        }
    }
    .color-green {color: #91dc27;}
    &.white-color {color: #fff;}
    .btnTop {display: flex; align-items: center; font-weight: bold; position: absolute; left: 0; top: 0; right: 0; bottom: 0; background: #91dc27; color: #0d0e13; text-align: left; justify-content: center; opacity: 0; visibility: hidden; z-index: 1;
        img {filter: brightness(0); width: 48px; flex-shrink: 0; margin-right: 25px; transition: all 0.5s ease-in-out;}
        b {display: block; font-size: 24px; color: #0d0e13; transition: all 0.5s ease-in-out;}
        i {display: block; font-size: 14px; font-style: normal; transition: all 0.5s ease-in-out 0s; margin-top: 6px;}
    }
    &.shadow-white {box-shadow: 0 0 18px 8px #fff;}
    &:hover {color: #fff; background: #0d0e13;
        .btnTop {opacity: 1; visibility: visible;}
    }
    @media screen and (max-width: 991px) {
        font-size: 22px;  padding: 20px 10px; width: auto; 
    }
    @media screen and (max-width: 768px) {
        font-size: 18px;  padding: 18px 10px;
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
    &.btnOnly {
        margin: 90px 0 204px; padding: 84px 0;
        ${BtnDark} {margin: 0 auto;}
    }
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
    .slick-dots {display: flex !important; position: static; align-items: center; justify-content: center; margin: 20px 0 0; padding: 0; 
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
    padding: 264px 0 120px 0;
    /* padding: 114px 0 225px 0; */
    width: 100%; min-height: 300px; text-align: center;
    p {
        color: #a6a2b0; font-size: 22px; line-height: 1.8; margin: 0 0 78px 0;
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
    background-color: inherit; color: #FFF; font-weight: 700; border: 0 solid #91dc27; box-shadow: 0px 0px 10px #9d9d9d; padding: 18px 24px; font-size: 18px; display: inline-block; cursor: pointer; text-align: center; transition: all 0.5s ease-in-out 0s; position: relative; background: #0d0e13; margin: 0 15px; width: 355px; margin-bottom: 54px;
    &.disableBtn:after {
        opacity: 0; background-color: rgb(145, 220, 39); visibility: hidden; content: "Coming Soon"; border: none; position: absolute; inset: 0px; display: flex; -webkit-box-align: center; align-items: center; -webkit-box-pack: center; justify-content: center; color: rgb(255, 255,  255); font-size: 20px;
    }
    &.h-dark {
        :hover {color: #000;
            .btnTop {
                img {filter: grayscale(0);}
                .btnTxt i {color: #000;}
            }
        }
    }
    .btnTop {
        display: flex; align-items: center;
        img {flex-shrink: 0; margin-right: 25px; filter: grayscale(100%); transition: all 0.5s ease-in-out 0s;}
        .btnTxt { text-align: left; 
            i {display: block; font-size: 14px; font-style: normal; color: #a6a2b0; font-weight: normal; transition: all 0.5s ease-in-out 0s;}
            b {display: block; font-size: 21px;}
        }
    }
    &.btnLg {padding: 18px 20px; font-size: 24px;
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
    span {font-size: 18px; color: #fff;
        span {color: #91dc27;}
    }
    strong {position: absolute; top: -25px; left: 0; font-size: 12px; color: #585560;}
    &.color-icon {
        img {filter: none;}
    }
    &.color-green {color: #91dc27; 
        span {color: #91dc27; font-size: 24px;}
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
const LeftRightTxt = styled.div `
    .LR-Left {width: 50%; align-self: center; margin-right: auto; text-align: center;}
    .LR-Right {width: 50%; align-self: center;
        h5 {font-size: 16px; color: #585560; margin: 0 0 19px 0;}
        h4 {font-size: 48px; color: #91dc27; margin: 0 0 22px 0; line-height: 1.2;
            span {color: #fff;}
        }
        p {font-size: 18px; line-height: 1.7; color: #a6a2b0; margin: 0 0 46px 0;}
        ${BtnPrimary} {margin: 0; width: auto; display: inline-flex; align-items: center;
            img {filter: brightness(100);}
            &.color-icon {
                img {filter: none; margin-left: 37px;}
            }
        }
    }
    &.col-reverse {
        .LR-Left {order: 2;  margin-right: 0;  margin-left: auto;}
        .LR-Right {order: 1;}
    }
`
const TabImg = styled.div `
    padding: 67px 0 100px;
`
const LinkBtn = styled.a `
    font-size: 18px; font-weight: 700; color: #91dc27; display: flex; align-items: center; transition: all 0.3s ease-in-out;
    i {margin-left: 30px;}
    &:hover {color: #fff;}
`
const BtnSecondry = styled.a ` 
    margin: 0; width: auto; display: inline-flex; align-items: center; box-shadow: 0px 0px 10px 2px #fff; padding: 18px 48px; font-size: 24px; font-weight: 700; color: #91dc27; transition: all 0.3s ease-in-out;
    img {margin-left: 35px;}
    &:hover {box-shadow: 0 0 12px #91dc27;}
`
const FootBtn = styled.div `
    padding: 90px 0;  display: flex; justify-content: center; 
`
const TabImgTxt = styled.div `
    display: flex; align-items: flex-start; margin-top: 80px; min-height: 470px;
    .tt-left { padding-right: 70px; width: 494px; display: block;
        > div {margin: 0 0 46px; 
            h3 {font-size: 21px; font-weight: 700; color: #fff; margin: 0;
                &.active {color: #91dc27;}
            }
            p {font-size: 16px; color: #a6a2b0; line-height: 1.6; margin: 20px 0 0;}
        }
    }
    .tt-right {box-shadow: 0 0 25px rgba(255,255,255, 0.07);}
`
const Footer = styled.div `
    display: flex; align-items: center; background: #16171e;  padding: 16px 42px;
    span {margin-right: 30px;}
`


const BtnClaim = styled.a `
    color: #fff; padding: 32px 30px; box-shadow: 0px 0px 10px #9d9d9d; font-size: 18px; font-weight: bold; display: inline-block; transition: all 0.5s ease-in-out;
    span {color: #91dc27;}
    &:hover {background: #91dc27;
        span {color: #fff;}
    }
`
const BtnChrome = styled.a `
    display: inline-flex; padding: 18px 34px; font-size: 24px; color: #FFF; font-weight: 700; border: 0 solid #91dc27; box-shadow: 0px 0px 10px #9d9d9d; cursor: pointer; transition: all 0.5s ease-in-out 0s; position: relative; background: #0d0e13; 
    .btnTop {display: flex; align-items: center; font-weight: bold;
        img {filter: brightness(1); flex-shrink: 0; margin-right: 25px; transition: all 0.5s ease-in-out;}
        b {display: block; font-size: 24px; color: #91dc27; transition: all 0.5s ease-in-out;}
        i {display: block; font-size: 14px; font-style: normal; transition: all 0.5s ease-in-out 0s; margin-top: 6px;}
    }
    &:hover {background-color: #91dc27;
        .btnTop {
            img {filter: brightness(0);}
            b {color: #000;}
            i {color: #000;}
        }
    }
`