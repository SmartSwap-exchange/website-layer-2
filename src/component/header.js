import React, { PureComponent, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Sidebar from '../component/Sidebar';
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


export default class HeadFreeListing extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      HeaderDrop: false,
      SideBarMenu: false
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
        <HeaderMain className='header'>
        <TopBar>
          <img src={DropIcon} />
          <p>Hold <span>$SMART</span> on your virtual wallet and enjoy VIP access to all UNLIMITED PASSIVE AIRDROP subscription tokens</p>
        </TopBar>
        <LHead className="header wow fadeInDown">
            <Logo className={`logo  ${HeaderDrop && 'open'}`} onClick={this.toggleHeaderDrop}><img  src={LogoM} alt="logo" /> <Triangle/></Logo>
            {HeaderDrop && (
              <>
              <DropDownMenu>
                  <Scrollbars renderThumbHorizontal={props => <div {...props} className="thumb-horizontal"/>}
                    renderTrackVertical={props => <div {...props} className="track-vertical"/>}
                    renderThumbVertical={props => <div {...props} className="thumb-vertical"/>}
                  >
                    <a href='https://pdo.finance/'><img src={selogo01} /></a>
                    <a className='soon'><img src={selogo02} /></a>
                    <a href='https://cbdc.science/'><img src={selogo03} /></a>
                    <a href='https://landing.derex.exchange/'><img src={selogo04} /></a>
                    <a href='https://www.dumpershield.exchange/'><img src={selogo05} /></a>
                    <a href='https://freez.finance/'><img src={selogo06} /></a>
                    <a href='https://lp.insure/'><img src={selogo07} /></a>
                    <a href='https://nft.protection/'><img src={selogo08} /></a>
                    <a href='https://Ibo.DEREX.exchange'><img src={selogo09} /></a>
                    <a href='https://degenswap.io/'><img src={selogo10} /></a>
                    <a href='https://Uniguard.exchange'><img src={selogo11} /></a>
                    <a className='no'><img src={selogo12} /></a>
                    <a className='soon'><img src={selogo13} /></a>
                    <a className='soon'><img src={selogo14} /></a>
                    <a className='soon'><img src={selogo15} /></a>
                    <a className='soon'><img src={selogo16} /></a>
                    <a className='soon'><img src={selogo17} /></a>
                    <a className='no'><img src={selogo18} /></a>
                    <a className='soon'><img src={selogo19} /></a>
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
              <HBtn>Claim Your <span>$25</span> Welcome Bonus
                <div className='btnTop'>
                    <img src={chrome}/>
                    <div className='btnTxt'>
                        <b>Install virtual wallet</b>
                        <i>Web Store</i>
                    </div>
                </div>
              </HBtn>
              <a onClick={this.toggleSelectToken} className='rightIcon'><img src={hright}/></a>
            </HRight>
        </LHead> 
        <Sidebar closeSidebar={this.closeSidebar}  isSidebarOpen={this.state.SideBarMenu} />
        </HeaderMain>
    );
  }
}

const FlexDiv = styled.div`
  display: flex; align-items: center; justify-content: center; flex-wrap: wrap;
`;

const OverLay = styled.div `
  position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 1;
  @media (max-width: 768px){
    background: #191b21;
  }
`
const DropDownMenu = styled.div `
    position: absolute; top: 113px; left: 0; width: 375px; flex-flow: column; background: #191b21; padding: 10px 0; display: flex; z-index: 100; height: calc(100vh - 113px); overflow: auto;
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
  p {color: #000; font-weight: 700; font-size: 14px; margin: 2px 0 0;}
  img {filter: brightness(0); height: 25px; margin-right: 12px;}
`
const HeaderMain = styled.div `
  position: fixed; top: 0; left: 0; right: 0; display: flex; flex-flow: column; z-index: 100;
  &.fixed {
    ${TopBar} {display: none;}
  }
`
const LHead = styled(FlexDiv) ` 
    padding:36px 40px; justify-content:flex-start; width: 100%; position: sticky; top: 0; transition: all 0.3s ease-in-out; z-index: 100; 
    &.fixed {background: rgba(0,0,0,0.8);
      .logo {}
      .link01.disableBtnLink:hover:after {background: #000;}
    }
    @media (max-width: 768px){
      padding: 20px 20px 20px 15px;
      &.fixed {padding: 16px 20px 16px 15px;}
    }
`
const Logo = styled.a ` 
    margin-right:25px; display: flex; align-items: center;  top: 0; width: 375px; padding:26px 40px; position: absolute; left: 0; cursor: pointer; z-index: 2;
    .logo2 {display: none;}
    @media (max-width: 768px){
      width: 337px; margin: 0px auto; left: 50%; transform: translateX(-50%);
      /* img:not(.logo2) {display: none;} */ padding: 7px 20px;
      .logo2 {display: block; height: 43px; filter: drop-shadow(0px 0px 7px #91dc27)}
      /*       overflow: hidden; width: 80px
 */    }
  &.open {background: #191b21;}
`
const Triangle = styled.a `
  display: inline-block; border-top: 6px solid #fff; border-left: 5px solid transparent; border-right: 5px solid transparent; margin-left: 36px;
  @media (max-width: 768px){
    margin-left: 20px;
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
  font-size: 14px; color: #fff; padding: 10px 44px 10px 0 ; border-right: 1px solid #35373a; margin: 0; margin-right: 30px; font-weight: bold; position: relative;
  span {color: #91dc27;}
  .btnTop {display: flex; align-items: center; font-weight: bold; background: #91dc27; position: absolute; top: 50%; left: 0; right: 0; bottom: 0; justify-content: center; height: 65px; width: 260px; transform: translateY(-50%); opacity: 0; visibility: hidden; box-shadow: 0px 0px 10px #9d9d9d;
      img {filter: brightness(0); flex-shrink: 0; margin-right: 18px; width: 30px; transition: all 0.5s ease-in-out;}
      b {display: block; font-weight: bold; font-size: 16px; color: #0d0e13; transition: all 0.5s ease-in-out;}
      i {display: block; font-weight: bold; font-size: 11px; color: #0d0e13; font-style: normal; transition: all 0.5s ease-in-out 0s; margin-top: 2px;}
  }
  &:hover {
    .btnTop {opacity: 1; visibility: visible;}
  }
`




