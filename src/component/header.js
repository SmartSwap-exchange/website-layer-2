import React, { PureComponent, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Sidebar2 from '../component/Sidebar2';
import ReferSidebar from '../component/ReferSidebar';

import chrome from '../assets/welcome/chrome.png';


import LogoM from '../assets/welcome/logo.png'
import Logo2 from '../assets/welcome/logo2.png'
import selogo01 from './../assets/images/pdo.png';
import selogo02 from './../assets/images/detf.png';
import selogo03 from './../assets/images/cbdc.png';
import selogo04 from './../assets/images/derex.png';
import selogo05 from './../assets/images/dumper.png';
import selogo06 from './../assets/images/freez.png';
import selogo07 from './../assets/images/lpinsure.png';
import selogo08 from './../assets/images/nft.png';
import selogo09 from './../assets/images/ibo.png';
import selogo10 from './../assets/images/degenswap.png';
import selogo11 from './../assets/images/uni.png';
import selogo12 from './../assets/images/multiverse.png';
import selogo13 from './../assets/images/vsinger.png';
import selogo14 from './../assets/images/vtuber.png';
import selogo15 from './../assets/images/oxn finance.png';
import selogo16 from './../assets/images/updown.png';
import selogo17 from './../assets/images/w3b.png';
import selogo18 from './../assets/images/mass.png';
import selogo19 from './../assets/images/social.png';
import DropIcon from './../assets/images/tab22.png';
import hright from './../assets/images/hright.png';
import GiftB from './../assets/images/giftB.png';
import handtn from './../assets/images/handtn.png';
import dreward from './../assets/images/dreward.png';
import arrows from './../assets/images/arrows.png';
import giftWhite from './../assets/images/giftWhite.png';


export default class HeadFreeListing extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      HeaderDrop: false,
      // SideBarMenu: false,
      // sidebarVisible: false
    };
  }

  toggleHeaderDrop = () => {
    this.setState((prevState) => ({
      HeaderDrop: !prevState.HeaderDrop,
    }));
  };

  toggleSelectToken = () => {
    this.setState((prevState) => ({
      SideBarMenu: !prevState.SideBarMenu,
    }));
  };

  closeSidebar = () => {
      this.setState({ SideBarMenu: false });
  };
  

  render() {
    const { HeaderDrop } = this.state;
    return (
        <>
          <Sidebar2 sidebarVisible={this.props.toggleState} onClose={() => this.props.setToggleState() } />
          <ReferSidebar sidebarVisible={this.props.toggleStateSidebar}  onClose={() => this.props.setoggleStateSidebar() } />
          <HeaderMain className='header'>
            <TopNew>
              <div onClick={()=>{this.props.setToggleState()}} className='tn-sec'>
                <span>1</span>
                <p>Claim your <b>$100</b> welcome bonus <img src={GiftB} alt='Gift Black'/></p>
              </div>
              <a target="_blank" href='/vaults' className='tn-sec'>
                <span>2</span>
                <p>Claim your <b>547.50%</b> APY <img src={handtn} alt='Gift Black'/></p>
              </a>
              <div onClick={()=>{this.props.setoggleStateSidebar()}} className='tn-sec'>
                <span>3</span>
                <p>Refer & win up to a <b>$1000</b> reward <img src={dreward} alt='Gift Black'/></p>
              </div>
            </TopNew>
          {/* <TopBar>
            <img src={DropIcon} />
            <p>Hold <span>$SMART</span> on your virtual wallet and enjoy VIP access to all <span>UNLIMITED PASSIVE AIRDROP</span> </p>
          </TopBar> */}
          <LHead className="header wow fadeInDown">
              <Logo className={`logo  ${HeaderDrop && 'open'}`} ><Link to="/"><img  src={LogoM} alt="logo" /></Link> <Triangle onClick={this.toggleHeaderDrop}/></Logo>
              {HeaderDrop && (
                <>
                <DropDownMenu>
                    <Scrollbars renderThumbHorizontal={props => <div {...props} className="thumb-horizontal"/>}
                      renderTrackVertical={props => <div {...props} className="track-vertical"/>}
                      renderThumbVertical={props => <div {...props} className="thumb-vertical"/>}
                    >
                      <a href='https://nft.protection/'><img src={selogo08} /></a>
                      <a href='https://landing.derex.exchange/'><img src={selogo04} /></a>
                      <a href='https://Ibo.DEREX.exchange'><img src={selogo09} /></a>
                      <a href='https://pdo.finance/'><img src={selogo01} /></a>
                      <a href='https://lp.insure/'><img src={selogo07} /></a>
                      <a href='https://www.dumpershield.exchange/'><img src={selogo05} /></a>
                      <a href='https://freez.finance/'><img src={selogo06} /></a>
                      <a href='https://degenswap.io/'><img src={selogo10} /></a>
                      <a href='https://Uniguard.exchange'><img src={selogo11} /></a>
                      <a href='https://cbdc.science/'><img src={selogo03} /></a>
                      <a data-id="01" className='soon'><img src={selogo12} /></a>
                      <a data-id="02" className='soon'><img src={selogo13} /></a>
                      <a data-id="03" className='soon'><img src={selogo14} /></a>
                      <a data-id="04" className='soon'><img src={selogo15} /></a>
                      <a data-id="05" className='soon'><img src={selogo02} /></a>
                      <a data-id="06" className='soon'><img src={selogo16} /></a>
                      <a data-id="07" className='soon'><img src={selogo17} /></a>
                      <a data-id="08" className='soon'><img src={selogo19} /></a>
                      {/* <a data-no="09" className='no'><img src={selogo18} /></a> */}
                      {/* <a><img src={selogo08} /></a>
                      <a><img src={selogo09} /></a>
                      <a><img src={selogo10} /></a> */}
                    </Scrollbars>
                  </DropDownMenu>
                  <OverLay onClick={this.toggleHeaderDrop} />
                </>
              )}
              {/* <RMbox>
                  <a  className="link01 disableBtnLink" ><span>Rewards program</span></a>
                  <a className="headerBtn disabled">GAIN 152.50% APY</a>
              </RMbox> */}
              <HRight>
                <HBtn
                  target='_blank' href='https://chromewebstore.google.com/detail/smartexchange-beta/pcoblipkncbakbcnfkgobkikjfkjmhoc'
                  // onClick={()=>{this.props.setToggleState()}} 
                >
                  <p>Claim Your <span>&nbsp;$100&nbsp;</span> Welcome Bonus</p> <img alt='rightIcon' src={giftWhite}/>
                  <div className='btnTop'>
                      <img src={chrome}/>
                      <div className='btnTxt'>
                          <b>Install virtual wallet</b>
                          <i>Google web store</i>
                      </div>
                  </div>
                </HBtn>
                <HBtn className='last' target="_blank" href='/vaults'>
                  <p>Claim Your <span>&nbsp;547.50%&nbsp;</span> APY</p> <img alt='rightIcon' src={hright}/>
                  {/* <div className='btnTop'>
                      <img src={chrome}/>
                      <div className='btnTxt'>
                          <b>Install virtual wallet</b>
                          <i>Google web store</i>
                      </div>
                  </div> */}
                </HBtn>
                {/* <Link target="_blank" onClick={this.toggleSelectToken} to='/screen04' className='rightIcon'><img src={hright}/></Link> */}
              </HRight>
          </LHead> 
          
          </HeaderMain>
        </>
    );
  }
}

const FlexDiv = styled.div`
  display: flex; align-items: center; justify-content: center; flex-wrap: wrap;
`;
const TopNew = styled.div `
  left: 0; right: 0; height: 40px; background-image: linear-gradient(90deg,#91dc27,#91dc27,#91dc27); display: flex; justify-content: center;  transition: all 0.5s ease-in-out; overflow: hidden;
  .tn-sec {display: flex; align-items: center;  width: 33.33%; justify-content: center; position: relative; cursor: pointer;
    span  {border: 1px solid #000; width: 22px; height: 22px; border-radius: 100%; display: flex; justify-content: center; align-items: center; color: #000; line-height: 24px; font-weight: 700; margin-right: 18px;}
    p {color: #000; font-weight: 700; font-size: 14px; margin: 0 0 0; 
      b {color: #fff; text-shadow: rgba(0, 0, 0, 0.8) 0px 0px 10px;}
    }
    img {/* filter: brightness(0); */ height: 21px; margin-left: 18px; margin-top: -3px;}
    &:hover {background-image: linear-gradient(90deg,#91dc27,#538e00,#91dc27);}
  }
  &:before {
    content: ""; width: 64px; height: 40px; background: url(${arrows}) no-repeat; background-size: contain; position: absolute; left: 33.33%; transform: translateX(-50%); z-index: 2;
  }
  &:after {
    content: ""; width: 64px; height: 40px; background: url(${arrows}) no-repeat; background-size: contain; position: absolute; right: 33.33%; transform: translateX(50%); z-index: 2;
  }
  @media (max-width: 1250px){
    &:after {width: 30px; background-size: 100% 100%; }
    &:before {width: 30px; background-size: 100% 100%;} 
    .tn-sec {
      span {font-size: 12px; margin-right: 5px;}
      p {font-size: 12px;}
      img {height: 16px; margin-left: 5px;}
    }
  }
  @media (max-width: 991px){
    flex-flow: column; height: auto; max-height: 400px;
    &:after {display: none;}
    &:before {display: none;} 
    .tn-sec {width: 100%; padding: 10px 0;}
  }
`
const OverLay = styled.div `
  position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 1;
  @media (max-width: 768px){
    background: #191b21;
  }
`
const DropDownMenu = styled.div `
    position: absolute; top: 110px; left: 0; width: 375px; flex-flow: column; background: #191b21; padding: 10px 0; display: flex; z-index: 100; height: calc(100vh - 113px); overflow: auto;
    a {width: 100%; margin: 0; /* min-height: 80px; */ font-size: 18px; padding: 6px 40px; display: block; position: relative;
      &.soon {
        &:hover {
          opacity: 1;
          &:after {content: "Coming Soon"; position: absolute; top: 0; left: 0; right: 0; bottom: 0; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 700; text-shadow: 0 0 10px #91dc27;}
          img {opacity: 0.2; filter: grayscale(100) blur(4px);}
        }
      }
      img {max-height: 85px;}
    }
    a:hover {opacity: 0.6;}
    &.open {display: flex;}

    .track-vertical {
      width: 19px !important;
      height: 100%;
      display: block;
      position: absolute;
      left: 0px;
      .thumb-vertical {
        width: 4px !important;
        margin: 3px 5px;
        background-color: #2d303c;
      }
    }


    @media (max-width: 768px){
      width: 337px; left: 50%; transform: translateX(-50%); top: 78px; height: calc(100vh - 78px);
      a {padding: 14px 20px;}
    }
`
const TopBar = styled.div `
  /* position: absolute; top: 0; */ left: 0; right: 0; height: 40px; background: #91dc27; display: flex; justify-content: center; align-items: center; 
  p {color: #000; font-weight: 700; font-size: 14px; margin: 2px 0 0;
    span {color: #fff;}
  }
  img {filter: brightness(0); height: 25px; margin-right: 12px;}
`
const HeaderMain = styled.div `
  position: fixed; top: 0; left: 0; right: 0; display: flex; flex-flow: column; z-index: 100;
  &.fixed {
    @media (max-width: 991px){
      ${TopNew} {max-height: 0;}
    }
  }
`
const LHead = styled(FlexDiv) ` 
    justify-content:flex-start; width: 100%; position: sticky; top: 0; transition: all 0.3s ease-in-out; z-index: 100; padding: 20px 40px;
    &.fixed {background: rgba(0,0,0,0.8);
      .logo {}
      .link01.disableBtnLink:hover:after {background: #000;}
    }
    @media (max-width: 991px){
      padding: 20px 20px 20px 15px;
      &.fixed {padding: 20px 20px 20px 15px;}
    }
`
const Logo = styled.div ` 
    margin-right:25px; display: flex; align-items: center;  top: 0; width: 375px; padding:26px 40px; position: absolute; left: 0; cursor: pointer; z-index: 2;
    .logo2 {display: none;}
  &.open {background: #191b21;}
  @media screen and (max-width: 991px) {
    padding: 12px 10px;
  }
  @media screen and (max-width: 768px) {
    padding: 18px 10px; width: auto; margin-right: 0;
    img {width: 220px;}
  }
`
const Triangle = styled.a `
  display: inline-flex; margin-left: 25px; width: 30px; height: 30px; justify-content: center; align-items: center; flex-shrink: 0;
  &:after {content: ""; border-top: 6px solid #fff; border-left: 5px solid transparent; border-right: 5px solid transparent; display: inline-block;}
  @media (max-width: 768px){
    margin-left: 5px;
  }
`
const RMbox = styled(FlexDiv) `
    margin-left:auto; 
    .link01{ color: #fff; font-size:14px; font-weight:700; 
      &:hover{ color: #91dc27; &:after {opacity: 1; visibility: visible; }} 
      &.disableBtnLink {position: relative; overflow: hidden;
        span {opacity: 1; display: block;}
        &:after { opacity: 0;
          visibility: hidden;
          content: "Coming Soon";
          border: none;
          position: absolute;
          inset: 0px;
          display: flex;
          /* background-color: #0d0e13;  */
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;
          color: rgb(255, 255, 255);
          font-size: 15px;
        }
        &:hover{
          color: transparent;
          span {opacity: 0; color: transparent;} 
          &:after {opacity: 1; visibility: visible; background: #0d0e13;}
        }
      }
    }
    .headerBtn { background-color: inherit; color: #FFF; font-weight: 700; border: 2px solid #91dc27; box-shadow: 0px 0px 10px #91dc27; padding: 10px 24px; margin-left: 50px; transition: all 0.5s ease-in-out 0s;
      &:hover { background-color: #91dc27; }
      &.disabled {
        position: relative;
        &:after {
          opacity: 0; visibility: hidden; background-color: rgb(145, 220, 39); content: "Coming Soon"; border: none; position: absolute; inset: 0px; display: flex; -webkit-box-align: center; align-items: center; -webkit-box-pack: center; justify-content: center; color: rgb(255, 255,  255); 
        }
        &:hover {
          &:after {opacity: 1; visibility: visible;}
        }
      }
    }
    @media (max-width: 991px){
      .headerBtn {margin-left: 20px;}
    }
    @media (max-width: 768px){
      width: 100%; margin-top: 65px;
      .headerBtn {padding: 8px 15px; margin-left: 20px;}
    }
    @media (max-width: 470px){
      
    }
`
const HRight = styled.div `
  display: flex; margin-left: auto ; align-items: center; position: relative;
  &
  p {
  }
  
  a.rightIcon {}
`
const HBtn = styled.a `
  font-size: 14px; color: #fff; padding: 10px 44px 10px 0 ; border-right: 1px solid #35373a; margin: 0; margin-left: 30px; font-weight: bold; position: relative; display: flex; align-items: center;
  img {/* height: 31px; */ margin-left: 18px; margin-top: -1px;}
  span {color: #91dc27;}
  &.last {
    border-right: 0; padding-right: 0;
  }
  .btnTop {display: flex; align-items: center; font-weight: bold; background: #91dc27; position: absolute; top: 50%; left: 0; right: 0; bottom: 0; justify-content: center; height: 65px; width: 290px; transform: translateY(-50%); /* opacity: 0; visibility: hidden; */ box-shadow: 0px 0px 10px #9d9d9d; border-radius: 5px;
      img {filter: brightness(0); flex-shrink: 0; margin-right: 18px; margin-top: 0; margin-left: 0; width: 30px; transition: all 0.5s ease-in-out;}
      b {display: block; font-weight: bold; font-size: 16px; color: #0d0e13; transition: all 0.5s ease-in-out;}
      i {display: block; font-weight: bold; font-size: 11px; color: #0d0e13; font-style: normal; transition: all 0.5s ease-in-out 0s; margin-top: 2px;}
  }
  &:hover {
    .btnTop {opacity: 1; visibility: visible;}
  }
  @media screen and (max-width: 991px) {
    border-right: 2px solid #35373a;
    p {display: none;}
    img {margin-left: 0;}
    .btnTop {display: none;}
  }
  @media screen and (max-width: 640px) {
    padding: 10px 10px; margin: 0; border-right: 0 solid #35373a;
    img {height: 25px;}
  }
`





