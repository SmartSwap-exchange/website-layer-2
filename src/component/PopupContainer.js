import React, { useEffect, useState } from 'react'
import Gs from '../theme/globalStyles'
import { Zoom, Fade } from 'react-reveal';
import styled from 'styled-components'
import { Link, NavLink ,useLocation } from 'react-router-dom'
import Media from '../theme/media-breackpoint'
import cross from '../assets/images/cross.png'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import Dropdown from './DropDown.js';





function PopupContainer({onClose, ClickChange }) {
	const [value, setValue] = useState(20);

	const handleChangeStart = () => {
		console.log('Change event started');
	};

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	const handleChangeComplete = () => {
		console.log('Change event completed');
	};

	const [ToggleState, setToggleState] = useState(1);
    const toggleTab = (index: number) => {
        setToggleState(index);
    };
    const getActiveClass = (index: number, className: any) =>
        ToggleState === index ? className : '';

	
	return (
		<>
			<ContainerMain>
				<Overlay onClick={onClose} />
				<CloseBtn onClick={onClose}><img src={cross}/></CloseBtn>
				{/* <Popup>
					<PopTitle className='color-green'>Add supply
						<p>Add supply to your airdrop</p>
					</PopTitle>
					<div className='formCol'>
						<div className='formCol'>
							<label>Add supply</label>
							<div className='textBox'>
								<input type='text' className='inputBx' placeholder='' value='1,000,000,000,000'/>
								<div class="floatingInfo">Balance: 10,000,000 DOT</div>
							</div>
						</div>
					</div>
					<Button className='lg v4'>ADD SUPPLY</Button>
				</Popup> */}
				{/* <Popup>
					<PopTitle className='color-red'>Withdraw supply
						<p>Your balance will be withdraw back to your wallet</p>
					</PopTitle>
					<div className='formCol'>
						<div className='formCol'>
							<label>Withdraw</label>
							<div className='textBox'>
								<input type='text' className='inputBx' placeholder='' value='1,000,000,000,000'/>
								<div class="floatingInfo">Balance: 10,000,000 DOT</div>
							</div>
						</div>
					</div>
					<Button className='lg v5'>WITHDRAW SUPPLY</Button>
				</Popup> */}

				<Popup>
					<PopTitle>Add/Remove Vault Balance</PopTitle>
					<TopMenu>
                        <a onClick={() => toggleTab(1)} className={getActiveClass(1, 'active')}>Add</a>
                        <a onClick={() => toggleTab(2)} className={getActiveClass(2, 'active red')}>Remove</a>
                    </TopMenu>
					{getActiveClass(1,<>
					<div className='formCol'>
						<label>Chain</label>
						<div className='textBox'>
							<Dropdown buttonText="BSC">
								<a href="">Dropdown 01</a>
								<a href="">Dropdown 02</a>
								<a href="">Dropdown 03</a>
								<a href="">Dropdown 04</a>
							</Dropdown>
						</div>
					</div>
					<div className='formCol hasinfoTxt'>
						<label>Amount</label>
						<div className='textBox f-row'>
							<SliderContainer>
								<Slider
								min={0}
								max={100}
								value={value}
								onChangeStart={handleChangeStart}
								onChange={handleChange}
								onChangeComplete={handleChangeComplete}
								/>
								<div className='startEnd'>
									<b>0</b>
									<b>100%</b>
								</div>
							</SliderContainer>
							<input type='text' className='inputBx' placeholder='' value={value}/>
							<div class="floatingInfo">
								<span>Wallet: <b>Ox1234...6789</b></span>
								<span>Balance: <b>45.6539</b> BNB [$85,458.63]</span>
							</div>
						</div>
					</div>
					<Button className='lg v4'>ADD TO THE VAULT</Button>
					</>)}

					{getActiveClass(2,<>
					<div className='formCol'>
						<label>Chain</label>
						<div className='textBox'>
							<Dropdown buttonText="BSC">
								<a href="">Dropdown 01</a>
								<a href="">Dropdown 02</a>
								<a href="">Dropdown 03</a>
								<a href="">Dropdown 04</a>
							</Dropdown>
						</div>
					</div>
					<div className='formCol hasinfoTxt'>
						<label>Amount</label>
						<div className='textBox f-row'>
							<SliderContainer className='color-red'>
								<Slider
								min={0}
								max={100}
								value={value}
								onChangeStart={handleChangeStart}
								onChange={handleChange}
								onChangeComplete={handleChangeComplete}
								/>
								<div className='startEnd'>
									<b>0</b>
									<b>100%</b>
								</div>
							</SliderContainer>
							<input type='text' className='inputBx' placeholder='' value={value}/>
							<div class="floatingInfo">
								<span>Wallet: <b>Ox1234...6789</b></span>
								<span>Balance: <b>45.6539</b> BNB [$85,458.63]</span>
							</div>
						</div>
					</div>
					<Button className='lg v5'>REMOVE FROM THE VAULT</Button>
					</>)}
				</Popup>
			</ContainerMain>
		</>
	)

}
const FlexDiv = styled.div`
	display: flex; align-items: center; justify-content:center; flex-wrap:wrap;
	`;
const Overlay = styled.div`
	position: fixed; left: 0; top: 0; right: 0; bottom: 0; background: #0d0e13; opacity: 0.95;
`
const ContainerMain = styled.div`
	position: fixed; left: 0; top: 0; right: 0; bottom: 0; z-index: 10001; display: flex; flex-flow: column; display: flex; align-items: center; justify-content: center;
`
const Popup = styled.div`
	position: relative; z-index: 10; margin: 0px auto; width: 664px; max-width: calc(100% - 30px);
	.formCol {display: table; width: 100%; margin-bottom: 54px;
        sup {top: -0.8em;}
        &.alignSelf-right {margin-left: auto;}
		&.hasinfoTxt {padding-bottom: 27px;}
        & > label {display: table-cell; width: 270px; font-weight: 700; text-align: left; margin: 0 0 0 0; line-height: 1.6; min-height: 56px; vertical-align: middle;}
        .textBox {
            position: relative; width: 430px; min-height: 56px; display: flex; align-items: center;  flex-flow: wrap; margin-left: auto; 
            .inputBx {width: 100%; height: 56px; border: 2px solid #000; background: #21232b; font-size: 16px; color: #fff; padding: 0 30px 0 13px;}
            .txtSub {position: absolute; top: 0; bottom: 0; right: 0; background: #000; display: flex; align-items: center; justify-content: center; padding: 0 17px; font-weight: 700;}
            .IconSub {position: absolute; top: 0; bottom: 0; right: 0; display: flex; align-items: center; justify-content: center; padding: 0 17px; font-weight: 700; font-size: 16px;}
            .estimate {display: flex; width: 100%; font-size: 12px; color: #8e9195;
                b {width: 80px; text-align: left; font-weight: normal;}
            }
            .infoRight {
                font-size: 11px; color: #c32b2d; text-align: right; margin-left: auto;
                b {display: block; font-size: 16px; color: #8e9195; margin-top: 6px;}
            }
            .floatingInfo {position: absolute; bottom: -28px; right: 0; font-size: 12px; color: #a6a2b0; display: flex; left: 0; justify-content: space-between;
				span {
					b {color: #fff;}
				}
			}
			&.f-row {flex-flow: row;
				.inputBx {width: 140px; margin-left: auto;}
			}
        }
        &.lg {width: 100%; max-width: 100%; display: flex;
            & > label {display: flex; align-items: center; white-space: nowrap;}
            .textBox {
            }
        }
    }
	${Media.sm} {
        .formCol {
            flex-flow: column; display: flex; flex-grow: 1; max-width: 100%; margin-bottom: 30px;
            & > label {min-height: auto; margin-bottom: 10px; width: 100%;}
            .textBox {margin: 0; width: 100%;
                .infoRight {text-align: left; margin-left: 0;}
            }
        }
    }
`
const PopTitle = styled.div`
	font-size: 36px; color: #fff; font-weight: 700; text-align: center; margin-bottom: 50px;
	&.color-green {color: #91dc27; }
	&.color-red {color: #c32b2d; }
	p {font-size: 14px; color: #a6a2b0; font-weight: normal; margin-top: 20px; font-size: 18px;}
	${Media.sm} {
		margin-bottom: 30px; font-size: 26px;
	}
`
const Button = styled.a `
    width: 660px; height: 80px; display: table; margin: 0 auto; font-size: 24px; font-weight: 700; color: #91dc27; background: #0d0e13; box-shadow: 0 0 15px rgba(255,255,255,0.7); display: flex; align-items: center; justify-content: center; margin: 65px auto 65px; max-width: 100%;
    img {margin-left: 33px;}
    &:hover {background: #91dc27; color: #fff;}
    &.v2 {font-size: 18px; color: #fff; border: 2px solid #000; box-shadow: 0 0 15px #323232; height: 70px;}
    &.v3 {color: #fff; }
    &.v4 {box-shadow: 0 0 15px #91dc27;}
    &.v5 {box-shadow: 0 0 15px #c32b2d; color: #c32b2d;}
    &.v5:hover {color: #fff; background: #c32b2d;}
	${Media.sm} {
		margin-bottom: 0; margin-top: 50px; height: auto; padding: 15px 10px; font-size: 20px;
	}
`
const CloseBtn = styled.a `
	position: absolute; top: 40px; right: 30px;
	&:hover {opacity: .6;}
	${Media.sm} {top: 20px; right: 20px;
		img {width: 20px;}
	}
`
const SliderContainer = styled.div `
	width: 270px;
	.startEnd {display: flex; justify-content: space-between; font-size: 12px; font-weight: 700; color: #a6a2b0;}
	.rangeslider {background: #21232b;}
	.rangeslider-horizontal {
		height: 7px;  margin: 30px 0 14px;
		.rangeslider__fill {background-color: #40434f;}
		.rangeslider__handle {
			background: #91dc27; border-color: #91dc27; width: 20px; height: 20px;
			&:after {display: none;}
			.rangeslider__handle-tooltip {display: block;}
		}
	} 
	&.color-red {
		.rangeslider-horizontal {
			.rangeslider__handle {
				background: #c32b2d; border-color: #c32b2d;
			}
		}
	}
`
const TopMenu = styled.div `
    padding: 48px 0px 0px; border-bottom: 3px solid #fff; display: flex; margin-bottom: 40px;
    a {color: #fff; padding: 2px 20px 32px; font-size: 18px; font-weight: bold; flex-grow: 1; text-align: center; position: relative; width: 100%; 
        &:last-child {border-right: 0 solid #000; box-shadow: 0 0 0 #3d3f49; }
        img {margin-right: 11px; filter: brightness(100); transition: all 0.3s ease-in-out 0s; height: 20px;}
        .badge {background-color: #91dc27; font-size: 12px; width: 27px; height: 27px; position: absolute; top: 0; border-radius: 100px; line-height: 27px; margin: -13px 0 0 6px; color: #0d0e13 !important;}
        &.activeRed {color: var(--red2); box-shadow: 0 3px 0 var(--red2);}
        &.active {color: #91dc27; box-shadow: 0 3px 0 #91dc27;
            img {filter: brightness(1);}
        }
        &.active.red {color: #c32b2d; box-shadow: 0 3px 0 #c32b2d;
        }
        &:hover {color: #545453; img {filter: brightness(1);}}
    }
` 
const DropdownBtn = styled.div `
    width: 100%; height: 56px; border: 2px solid #000; background: #21232b; font-size: 16px; color: #fff; padding: 0 13px 0 13px; display: flex; align-items: center; justify-content: space-between;
    span {display: flex; align-items: center; justify-content: space-between; 
        img {margin-right: 15px; width: 24px; height: 24px; object-fit: contain;}
    }
`
const DropDownList = styled.div `
    width: 100%; border: 2px solid #000; background: #21232b; font-size: 16px; color: #fff; display: flex; align-items: center; flex-flow: column; justify-content: space-between; position: absolute; top: 54px; left: 0; right: 0; z-index: 1; padding: 10px 0 10px; /* display: none; */
    a {
		text-align: left; width: 100%; color: #fff; font-size: 14px; display: flex; align-items: center; padding: 10px 18px;
		&:hover {background: rgba(0,0,0,0.2);}
	}
`


export default PopupContainer;
