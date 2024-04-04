/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent, useState, useEffect, useRef } from 'react';

import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import sideClose from './../assets/images/sideClose.png'



const Sidebar = ({sidebarVisible, onClose }) => {
    /* const [isOpen, setIsOpen] = useState(true);
    const handleCloseClick = () => {
        sidebarVisible(false);
    }; */

    const contestRef = useRef(null);
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://widget.gleamjs.io/e.js';
        script.async = true;
    
        // Append the script to the document body
        document.body.appendChild(script);
    
        return () => {
          // Clean up by removing the script when the component unmounts
        document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <SideBar className={sidebarVisible  ? 'open' : ''}>
                <Close onClick={onClose}><img src={sideClose}/></Close>
                <a className="e-widget no-button generic-loader" href="https://gleam.io/Dg2kI/refer-friends" rel="nofollow">Install Smart Exchange Virtual Wallet</a>
            </SideBar>
            <OverLay className={sidebarVisible ? 'open' : ''} onClick={onClose} />
        </>
    );
}

const FlexDiv = styled.div`
    display: flex; flex-wrap: wrap;
`;

const SideBar = styled(FlexDiv) `
    width: 452px; max-width: 100%; position: fixed; top: 0; right: 0; bottom: 0; background: #050507; box-shadow: 0 0 0 rgba(145,220,39,0.2); z-index: 1500; padding: 50px 26px; max-height: 100vh; overflow: auto; transform: translateX(100%); transition: all 0.3s ease-in-out;
    .connectwalBtn {height: 40px; border: 2px solid #000; box-shadow: 0 0 15px rgba(50,50,50,0.7); font-size: 14px; font-weight: 700; width: 100%; text-align: center; display: flex; align-items: center; justify-content: center; align-self: center;
        &:hover {box-shadow: 0 0 15px #91dc27; color: #91dc27; } 
    }
    &.open {transform: translateX(0%); box-shadow: 0 0 25px rgba(145,220,39,0.2);}
    &::-webkit-scrollbar {width: 5px;}
    &::-webkit-scrollbar-track {background: transparent; }
    &::-webkit-scrollbar-thumb {background: #191b21;}
    &::-webkit-scrollbar-thumb:hover { background: #555;  }

    .viralkit-contest {width: 100%;
        /* iframe + iframe {display: none;} */
    }
    
    .e-widget-wrapper.e-dark {max-width: 100% !important; width: 100% !important; margin: 15px 0 0 !important; background: none;}
    @media (max-width: 768px){
        padding: 50px 15px;
    }
`
const Btn = styled.a `
    border: 2px solid #91dc27; padding: 9px 33px; font-size: 16px; font-weight: bold; background: none; color: #91dc27; box-shadow: 0 0 15px #323232; display: block; text-align: center; margin: auto 0;
    &:hover {background: #91dc27; border: 2px solid #91dc27; box-shadow: 0 0 15px #91dc27; color: #fff;}
`
const ValTop = styled.div `
    display: flex; justify-content: space-between; margin: 0 0 44px 0; width: 100%; align-self: flex-start;
    .vt-left {
        span {font-size: 14px; color: #ffffff; font-weight: bold; display: block; margin: 0 0 10px 0;}
        p {font-size: 24px; color: #91dc27; font-weight: bold; margin: 0;}
    }
    .vt-right {
        span {font-size: 11px; color: #9a9a9a; font-weight: bold; display: block; margin: 0 0 7px 0;}
        p {font-size: 24px; color: #91dc27; font-weight: bold; margin: 0;}
    }
`
const TableContainer = styled.div `
    width: 100%; padding-left: 0; position: relative; /* height: calc(100vh - 310px); */ display: flex; border-top: 1px solid #000; overflow: auto; box-shadow: inset 0 1px 0 #3e4049; padding-top: 1px; align-items: flex-start; align-self: flex-start; flex-grow: 1;
    /* width */
    &::-webkit-scrollbar {width: 5px;}
    /* Track */
    &::-webkit-scrollbar-track {background: transparent; }
    /* Handle */
    &::-webkit-scrollbar-thumb {background: #191b21;}
    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover { background: #555;  }
    &.no-padding {padding: 0;}
    table {flex-grow: 1;
        thead {position: sticky; top: 0; z-index: 2; }
        tr {
            th {border: 2px solid #3b3e4b; font-size: 14px; border-top-width: 0; border-bottom-width: 0; height: 59px; padding: 0 17px; text-align: left; position: relative; color: #9a9a9a; vertical-align: middle; font-weight: bold;  background: #050507; 
                &:after {content: ""; height: 2px; background: #3b3e4b; position: absolute; left: 0; right: 0; bottom: -1px;}
                .fa-question-circle {font-size: 10px; position: relative; top: -0.65em;}
                &:last-child {
                    border-right: 0px;
                }
                &:first-child {
                    border-left: 0px;
                }
                &.w-10 {width: 10%;}
                &.w-15 {width: 15%;}
                &.w-20 {width: 20%;}
                &.w-30 {width: 30%;}
                &.w-40 {width: 40%;}
                &.w-50 {width: 50%;}
                &.w-60 {width: 60%;}
                &.w-70 {width: 70%;}
                &.w-80 {width: 80%;}
                &.w-90 {width: 90%;}
                &.w-100 {width: 100%;}
                &.hcol {background: #21232b;}
            }
            td {border: 1px solid #3b3e4b; height: 63px; font-size: 12px; padding: 0 17px; text-align: left; position: relative; vertical-align: middle; color: #9a9a9a; position: relative; color: #9a9a9a;
                &:last-child {
                    border-right: 0px;
                }
                &:first-child {
                    border-left: 0px;
                }
                ${Btn} {border: 2px solid #000; font-size: 12px; padding: 9px 10px; position: absolute; top: 50%; left: 17px; right: 17px; transform: translateY(-50%); background: #292b33; display: none;}
                .hideH {
                    span {display: block;}
                }
                &:hover {
                    &.hasBtn {color: transparent;}   
                    
                    .claim { opacity: 1;}
                }
            }
            &.hRow {
                td {
                    background: #1b1c25;
                }
            }
            &:hover {
                td {background: #1b1c25;
                    ${Btn} {display: block;}
                    .hideH {display: none;}
                }
            }
        }
    }
    .color-red {color: #c32b2d}
    .color-green {color: #91dc27}
    .color-blue {color: #2d52f3}
    .text-center {text-align: center}
    
`
const VerticalSlider = styled.div ` position: sticky; top: 0;
    height: 100%; width: 70px; z-index: 5; padding: 0 0; margin-right: 20px; display: flex; flex-flow: column; flex-shrink: 0; background: #292b33;
    .VsHead {position: sticky; top: 0; border-bottom: 2px solid #3b3e4b; height: 60px; display: block; background: #050507; flex-shrink: 0; color: #a6a2b0; font-weight: bold; font-size: 14px; padding: 19px 0px;}
    /* width */
    /* &::-webkit-scrollbar {width: 5px;}
    &::-webkit-scrollbar-track {background: transparent; }
    &::-webkit-scrollbar-thumb {background: #191b21;}
    &::-webkit-scrollbar-thumb:hover { background: #555;  } */
    span {margin: 0px auto; text-align: center; cursor: pointer; width: 70px; height: 63px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        img {display: inline-block; width: 32px; height: 32px; object-fit: contain; border-radius: 50px;}
        &:hover {
            background: #3b3e4b;
            img {box-shadow: #91dc27 0px 0px 10px;}
        }
    }
`
const Token = styled.div `
    display: inline-flex; align-items: center; vertical-align: top; white-space: nowrap; overflow: hidden; max-width: 100px; color: #fff;
    img { margin-right: 10px; width: 25px; height: 25px;}
`
const WalId = styled.div `
    display: inline-flex; align-items: center; vertical-align: top; white-space: nowrap; max-width: 100px; font-size: 14px; font-weight: 700; margin-top: 50px; margin-bottom: 42px;
    img { margin-right: 10px; width: 19px; height: 19px; object-fit: contain;}
`
const Close = styled.a `
    position: absolute; right: 15px; top: 17px;
`
const OverLay = styled.div `
    position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 1; display: none; z-index: 1499;
    &.open {display: block;}
    @media (max-width: 768px){
        background: #191b21;
    }
`

export default Sidebar;



