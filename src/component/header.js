import React, { PureComponent, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars-2';


import LogoM from '../assets/welcome/logo.png'
import Logo2 from '../assets/welcome/logo2.png'
import selogo01 from './../assets/images/se-logos/selogo01.png';
import selogo02 from './../assets/images/se-logos/selogo02.png';
import selogo03 from './../assets/images/se-logos/selogo03.png';
import selogo04 from './../assets/images/se-logos/selogo04.png';
import selogo05 from './../assets/images/se-logos/selogo05.png';
import selogo06 from './../assets/images/se-logos/selogo06.png';
import selogo07 from './../assets/images/se-logos/selogo07.png';
import selogo08 from './../assets/images/se-logos/selogo08.png';
import selogo09 from './../assets/images/se-logos/selogo09.png';
import selogo10 from './../assets/images/se-logos/selogo10.png';


export default class HeadFreeListing extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      HeaderDrop: false,
    };
  }

  toggleHeaderDrop = () => {
    this.setState((prevState) => ({
      HeaderDrop: !prevState.HeaderDrop,
    }));
  };

  render() {
    const { HeaderDrop } = this.state;
    return (
        <>
        
        <LHead className="header wow fadeInDown">
            <Logo className={`logo  ${HeaderDrop && 'open'}`} onClick={this.toggleHeaderDrop}><img  src={LogoM} alt="logo" /> <Triangle/></Logo>
            {HeaderDrop && (
            <DropDownMenu>
              <Scrollbars renderThumbHorizontal={props => <div {...props} className="thumb-horizontal"/>}
                renderTrackVertical={props => <div {...props} className="track-vertical"/>}
                renderThumbVertical={props => <div {...props} className="thumb-vertical"/>}
              >
                  <a><img src={selogo01} /></a>
                  <a><img src={selogo02} /></a>
                  <a><img src={selogo03} /></a>
                  <a><img src={selogo04} /></a>
                  <a><img src={selogo05} /></a>
                  <a><img src={selogo06} /></a>
                  <a><img src={selogo07} /></a>
                  {/* <a><img src={selogo08} /></a>
                  <a><img src={selogo09} /></a>
                  <a><img src={selogo10} /></a> */}
                </Scrollbars>
              </DropDownMenu>
            )}
            <RMbox>
                <a  className="link01 disableBtnLink" ><span>Rewards program</span></a>
                <a className="headerBtn disabled">GAIN 152.50% APY</a>
            </RMbox>
        </LHead>
        </>
    );
  }
}

const FlexDiv = styled.div`
  display: flex; align-items: center; justify-content: center; flex-wrap: wrap;
`;

const DropDownMenu = styled.div `
    position: absolute; top: 113px; left: 0; width: 375px; flex-flow: column; background: #191b21; padding: 10px 0; display: flex; z-index: 100; height: calc(100vh - 113px); overflow: auto;
    a {width: 100%; margin: 0; min-height: 80px; padding: 14px 40px; display: block;}
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
const LHead = styled(FlexDiv) ` 
    padding:36px 40px; justify-content:flex-start; width: 100%;
    position: fixed; top: 0; transition: all 0.3s ease-in-out; z-index: 100;
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
    margin-right:25px; display: flex; align-items: center;  top: 0; width: 375px; padding:26px 40px; position: absolute; left: 0; cursor: pointer; 
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






