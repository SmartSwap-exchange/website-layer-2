import React, { PureComponent, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'



import Ico1 from './../assets/images/checkIcon1.png'
import Ico2 from './../assets/images/checkIcon2.png'
import Ico3 from './../assets/images/checkIcon3.png'
import Ico4 from './../assets/images/checkIcon4.png'
import Ico5 from './../assets/images/checkIcon5.png'
import Ico6 from './../assets/images/checkIcon6.png'
import CloseX from './../assets/images/popclose.png'


export default class PopUp05 extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: 20,
        };
    }
    
    render() {
        const { HeaderDrop } = this.state;
        return (
            <>
                <PopBody>
                    <CloseBtn><img src={CloseX}/></CloseBtn>
                    <PopWrap>
                        <Withdraw>
                            <h3>Automat Rebalance Stablecoin Vault</h3>
                            <div className='Buttons'>
                                <DropSelect className=''>Choose your CEX</DropSelect>
                                <Button className="btn2 green-border">CREATE AN API</Button>
                            </div>
                        </Withdraw>
                        <TitleDrop>
                            <div className='titleMain'>
                                <span>#1</span>
                                <p>
                                    Binance<b>|</b>Stablecoin
                                    <i>Created at April 6,2021 05:21:36pm UTC</i>
                                </p>
                            </div>
                            <div className='dropIcon'><i class="fas fa-caret-up"></i></div>
                        </TitleDrop>
                        <Form>
                            <GreenBox>
                                <h4>Open new API and whitelist the smart contract address on your account on your CEX <i className='help-circle'><i className='fas fa-question-circle protip' data-pt-position='top' data-pt-title='' aria-hidden='true' ></i></i></h4>
                                <h5>Restrict access to trusted IP: <span>44.235.252.39</span></h5>
                                <p>After creating an API on you CEX update here the API and Secret key</p>
                                <div className='FormRow'>
                                    <label>API key <i className='help-circle'><i className='fas fa-question-circle protip' data-pt-position='top' data-pt-title='' aria-hidden='true' ></i></i></label>
                                    <div className="hasInput">
                                        <Input value="***********************4F9D" type='text'/>
                                        <div className='reset'><i class="fas fa-times"></i></div>
                                    </div>
                                </div>
                                <div className='FormRow'>
                                    <label>Secret Key <i className='help-circle'><i className='fas fa-question-circle protip' data-pt-position='top' data-pt-title='' aria-hidden='true' ></i></i></label>
                                    <div className="hasInput">
                                        <Input value="***********************4F9D" type='text'/>
                                        <div className='reset'><i class="fas fa-times"></i></div>
                                    </div>
                                </div>
                            </GreenBox>
                            <div className='FormRow'>
                                <label>Your smart contract address <i className='help-circle'><i className='fas fa-question-circle protip' data-pt-position='top' data-pt-title='' aria-hidden='true' ></i></i></label>
                                <div className="hasInput lg">
                                    <Input value="0xF3B3f6F15d474C92cb4051c22697C371e6e117B1" type='text'/>
                                    <div className='reset'><i class="fas fa-copy"></i></div>
                                    <div className='formInfo'>
                                        <span>Balance:  425.563 BNB | $4,846 USDT</span>
                                        <span className='color-red'>Withdraw all funds back to your wallet</span>
                                    </div>
                                </div>
                            </div>
                            <div className='FormRow'>
                                <label>Your total amount you authorized the API to balance <i className='help-circle'><i className='fas fa-question-circle protip' data-pt-position='top' data-pt-title='' aria-hidden='true' ></i></i></label>
                                <div className="hasInput balance">
                                    <span className='currency'>$</span>
                                    <Input value="10,000" type='text'/>
                                    <div className='reset'><i class="fas fa-edit"></i></div>
                                </div>
                            </div>
                            <div className='radio-row'>
                                <input type='radio' name='deposit' id='vault' />
                                <label className='' htmlFor='vault'>Deposit stablecoin directly to the vault <i className='help-circle'><i className='fas fa-question-circle protip' data-pt-position='top' data-pt-title='' aria-hidden='true' ></i></i></label>
                                <input type='radio' name='deposit' id='cex' />
                                <label className='' htmlFor='cex'>Deposit stablecoin to the vault from your CEX account <i className='help-circle'><i className='fas fa-question-circle protip' data-pt-position='top' data-pt-title='' aria-hidden='true' ></i></i></label>
                                <a className='setting'><i class="fas fa-cog"></i></a>
                            </div>

                            <Supporting>
                                <h4>Supporting stablecoin <i className='help-circle'><i className='fas fa-question-circle protip' data-pt-position='top' data-pt-title='' aria-hidden='true' ></i></i></h4>
                                <div className='check-row'>
                                    <input type='checkbox' name='suportStablecoin' id='USDT' />
                                    <label className='' htmlFor='USDT'><img src={Ico1}/> USDT</label>

                                    <input type='checkbox' name='suportStablecoin' id='USDC' />
                                    <label className='' htmlFor='USDC'><img src={Ico2}/> USDC</label>

                                    <input type='checkbox' name='suportStablecoin' id='DAI' />
                                    <label className='' htmlFor='DAI'><img src={Ico3}/> DAI</label>

                                    <input type='checkbox' name='suportStablecoin' id='BUSD' />
                                    <label className='' htmlFor='BUSD'><img src={Ico4}/> BUSD</label>

                                    <input type='checkbox' name='suportStablecoin' id='TUSD' />
                                    <label className='' htmlFor='TUSD'><img src={Ico5}/> TUSD</label>

                                    <input type='checkbox' name='suportStablecoin' id='USDP' />
                                    <label className='' htmlFor='USDP'><img src={Ico6}/> USDP</label>
                                </div>

                                <div className='FormRow'>
                                    <label>Choose a lower level to rebalance the vault <i className='help-circle'><i className='fas fa-question-circle protip' data-pt-position='top' data-pt-title='' aria-hidden='true' ></i></i></label>
                                    <div className="hasSlider">
                                        <RangeSlider>
                                            <InputRange
                                            maxValue={100}
                                            minValue={0}
                                            value={this.state.value}
                                            onChange={value => this.setState({ value })}
                                            />
                                        </RangeSlider>
                                        <Button className="green-border">AUTHORIZE NEW LIMIT</Button>
                                    </div>
                                </div>
                                <div className='FormRow'>
                                    <label>Stop Rebalancing <i className='help-circle'><i className='fas fa-question-circle protip' data-pt-position='top' data-pt-title='' aria-hidden='true' ></i></i></label>
                                    <div className="dropSelect">Never stop</div>
                                </div>
                            </Supporting>

                            <Button className='green-border'>SAVE TO UPDATE VAULT API</Button>
                            <FormList>
                                <li><i class="fas fa-check"></i>Check vault deployes for wallet address XYZ</li>
                                <li><i class="fas fa-check"></i>Check API key</li>
                                <li><i class="fas fa-check"></i>Check secret key</li>
                                <li><i class="fas fa-check"></i>Check whitelisted smart contract address on CEX for withdraw</li>
                                <li><i class="fas fa-check"></i>Check IP whitelisted on CEX for withdraw</li>
                                <li><i class="fas fa-check"></i>Check enabled withdraw on CEX</li>
                                <li><i class="fas fa-times"></i>Check Account balance on CEX for allowed limit</li>
                                <li><i class="fas fa-times"></i>Test moving fund between CEX and vault address <i className='help-circle'><i className='fas fa-question-circle protip' data-pt-position='top' data-pt-title='' aria-hidden='true' ></i></i></li>
                            </FormList>
                            <Msg><i class="fas fa-check"></i> Your swap provider API is ready
                                <p><a>Repeat checkinge</a><span>|</span><a className='color-red'>Delete this API</a></p>
                            </Msg>
                            <RedTxt>Your SP account is not yet been active since your stablecoins balance on your CEX account is less than $25,000 authorized amount <i className='help-circle'><i className='fas fa-question-circle protip' data-pt-position='top' data-pt-title='' aria-hidden='true' ></i></i></RedTxt>
                        </Form>
                        
                        <TitleDrop>
                            <div className='titleMain'>
                                <span>#2</span>
                                <p>
                                    MEXC<b>|</b>Stablecoin
                                    <i>Created at April 6,2021 05:21:36pm UTC</i>
                                </p>
                            </div>
                            <div className='dropIcon'><i class="fas fa-caret-up"></i></div>
                        </TitleDrop>
                    </PopWrap>
                </PopBody>
            </>
        );
    }
}

const TitleDrop = styled.div ` margin: 120px 0 -74px 0; overflow: hidden; position: relative;
    .titleMain {display: inline-flex; align-items: center; padding: 0 18px; margin: 0 0 0 40px; position: relative;
        span {font-size: 24px; font-weight: 700; margin: 0px 38px 0 0 ;}
        p {font-size: 24px; font-weight: 700; margin: 0;  letter-spacing: -0.5px;
            b {font-weight: normal; color: #42444c; margin: 0 12px}
            i {display: table; color: #aaa; font-size: 12px; font-weight: normal; font-style: normal; margin: 7px 0 0 0;}
        }
        &:before {content: ""; height: 1px; background: #23242d; position: absolute; top: 50%; right: 100%; width: 100vw;}
        &:after {content: ""; height: 1px; background: #23242d; position: absolute; top: 50%; left: 100%; width: 100vw;}
    }
    .dropIcon {position: absolute; right: 37px; top: 50%; height: 30px; width: 30px; background: #000; display: flex; align-items: center; justify-content: center; margin-top: -15px; font-size: 18px;}
    @media (max-width: 1024px){
        .titleMain {
            padding: 0 10px;
            span {margin: 0px 25px 0 0; font-size: 20px;}
            p {font-size: 20px;}
        }
    }
    @media (max-width: 640px){
        margin: 80px 0 -70px 0;
        .titleMain {
            margin: 0 0 0 20px;
            span {margin: 0px 15px 0 0; font-size: 17px;
                
            }
            p {font-size: 17px; i {font-size: 11px;} b {margin: 0 6px;}}
        }
        .dropIcon {right: 20px;}
    }
`
const PopBody = styled.div `
    position: fixed; background: #020202f0; top: 0; left: 0; right: 0; bottom: 0; z-index: 100; overflow: auto; padding: 120px 0;
    @media (max-width: 991px){
        padding-top: 80px;
    }
`
const PopWrap = styled.div `
    width: 1360px; margin: 0px auto; max-width: calc(100% - 30px);
`
const Button = styled.button `
    background: #292b33; border: 2px solid #0d0e13; height: 70px; font-size: 21px; font-weight: bold; color: #fff; box-shadow: 0 0 10px #ffffff80; margin: 61px 0px 0px;  cursor: pointer; display: flex; justify-content: center; align-items: center; width: 100%; font-family: 'Montserrat', sans-serif;
    &.green-border {color: #ffffff; border-color: #91dc27; box-shadow: 0 0 10px #91dc27; background: none;
        &:hover {background: #91dc27;}
    }
    &.red-border {color: #ffffff; border-color: #b22628; box-shadow: 0 0 10px #b22628; background: none;
        &:hover {background: #b22628;}
    }
    @media (max-width: 640px) {
        padding: 14px 15px; height: auto; font-size: 18px;
    }
`
const DropSelect = styled.div `
    width: 896px; height: 70px; border: 0 solid #000; background: #21232b; position: relative; display: flex; align-items: center; padding: 0 22px; box-shadow: 0 0 10px #282a32; margin: 0 16px; font-size: 21px; font-weight: 700; max-width: 100%;
    &:after {content:""; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 6px solid #fff; position: absolute; right: 23px; top: calc(50% - 3px);}
    img {max-height: 20px;}
    @media (max-width: 991px) {
        height: 55px; font-size: 18px;
    }
`
const Withdraw = styled.div ` padding: 0 0 0; margin: 0 -16px;
    h3 {font-size: 56px; text-align: center; font-weight: 700; margin: 0 0 117px 0;}
    .Buttons {
        display: flex; justify-content: center; font-size: 21px;
        .btn2 {
            width: 432px; margin: 0 16px;
        }
    }
    @media (max-width: 1024px) {
        h3 {font-size: 46px;}
        .Buttons {
            .btn2 {height: 55px; font-size: 18px;}
        }
    }
    @media (max-width: 768px) {
        margin: 0 0;
        h3 {font-size: 36px; margin-bottom: 60px;}
        .Buttons { 
            flex-flow: column; 
            .btn2 {width: 100%; margin: 20px 0 0;}
        }
        ${DropSelect} {margin: 0;}
    }
    @media (max-width: 530px) {
        h3 {font-size: 25px;}
    }
`
const Input = styled.input `
    width: 100%; height: 60px; border: 2px solid #000; background: #121419; color: #5d5d5d; padding: 0 17px; font-size: 16px; text-transform: uppercase; font-family: 'Montserrat', sans-serif; border-radius: 0;
    &.xl {width: 448px; height: 67px;}
    @media (max-width: 1024px){
        padding-right: 54px;
    }
`
const Form = styled.div `
    border: 1px solid #23242d; border-top: 0; padding: 70px 38px 38px; width: 100%; margin-top: 50px;
    .FormRow {
        display: flex; flex-flow: column; margin-bottom: 37px; position: relative;
        label {font-size: 18px; font-weight: 700; margin: 0 0 20px 0;}
        .dropSelect {width: 100%; height: 60px; border: 2px solid #000; background: #21232b; position: relative; display: flex; align-items: center; padding: 0 22px; font-size: 18px;
            &:after {content:""; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 6px solid #fff; position: absolute; right: 23px; top: calc(50% - 3px);}
            img {max-height: 20px;}
        }
        .hasInput {position: relative; width: 100%;
            .reset {position: absolute; top: 19px; right: 20px; color: #5d5d5d; font-size: 18px;}
            .formInfo {width: 100%; display: flex; justify-content: space-between; padding: 10px 0 0 0;
                span {color: #aaa; font-size: 11px;}
            }
                .currency {position: absolute; top: 4px; left: 4px; font-size: 18px; font-weight: 700; width: 52px; height: 52px; background: #000; display: flex; align-items: center; justify-content: center;}
            &.lg {
                ${Input} {height: 76px; background: #21232b; color: #fff; font-size: 24px; font-weight: 700;}
                .reset {color: #fff; font-size: 21px; top: 26px; right: 25px;}
            }
            &.balance {
                ${Input} {background: #21232b; color: #fff; padding-left: 70px;}
                .reset {color: #fff;}
            }
        }
        .info {position: absolute; bottom: -20px; right: 0; font-size: 11px; color: #a6a2b0;}
    }
    .color-red {color: #f43436 !important;}
    .radio-row {
        display: flex; flex-flow: wrap; position: relative;
        input[type='radio'] {opacity: 0; position: absolute;
            & + label { margin-right: 52px; margin-bottom: 15px; position: relative; padding: 0 0 0 41px;
                &:before {content: ""; width: 21px; height: 21px; background: #21232b; display: inline-block; vertical-align: top; border-radius: 80px; margin: -4px 20px 0 0; box-shadow: inset 0 0 0 0 #21232b; transition: all 0.3s ease-in-out 0s; border: 1px solid #21232b; position: absolute; left: 0; top: 0;}
            }
            &:checked {
                & + label:before {background: #91dc27; box-shadow: inset 0 0 0 4px #21232b; border: 1px solid #21232b; }
            }
        }
        .setting {color: #91dc27; margin-left: auto; font-size: 16px; position: absolute; top: 0; right: 0;}
    }
    .check-row {
        display: flex; margin: 0 0 44px 0; flex-flow: wrap;
        input[type='checkbox'] {opacity: 0; position: absolute;
            & + label { margin-right: 60px; position: relative; margin-bottom: 15px;
                &:before {content: ""; width: 18px; height: 18px; background: #21232b; display: inline-block; vertical-align: top; border-radius: 0; margin: -2px 14px 0 0; box-shadow: inset 0 0 0 0 #21232b; transition: all 0.3s ease-in-out 0s; border: 2px solid #000;}
                &:after {content: "\f00c"; position: absolute; top: -3px; left: 5px; font-family: "Font Awesome 5 Free"; font-weight: 900; color: #91dc27; opacity: 0;}
                img {margin: -6px 10px 0 0;}
            }
            &:checked {
                & + label:after {opacity: 1;}
            }
        }
        .setting {color: #91dc27; margin-left: auto; font-size: 16px;}
    }
    .hasSlider {display: flex; align-items: center;
        ${Button} {width: 220px; font-size: 14px; margin: 0; height: 50px;}
    }
    @media (max-width: 1024px){
        padding: 50px 15px 38px;
        .FormRow {
            .dropSelect {height: 55px;}
            .hasInput {
                &.lg {
                    ${Input} {height: 60px; font-size: 18px;}
                    .reset {top: 18px;}
                }
            }
        }
        .check-row {
            input[type='checkbox'] {
                & + label {min-width: 140px; margin-right: 40px;}
            }
        }
    }
    @media (max-width: 768px){
        .hasSlider {
            flex-flow: column;
        }
        
    }
`
const GreenBox = styled.div `
    border: 1px solid #91dc27; padding: 30px 40px 0; margin: 0 0 36px 0;
    h4 {text-align: center; font-size: 18px; color: #fff; font-weight: 700; margin: 0 0 14px;}
    h5 {text-align: center; font-size: 18px; color: #f43436; font-weight: normal;  margin: 0 0 73px;
        span {color: #91dc27;}
    }
    p {font-size: 18px; color: #fff; font-weight: 700; margin: 0 0 36px;}
    @media (max-width: 1024px){
        padding: 20px 20px 0;
        h5 {margin-bottom: 50px;}
    }
`
const FormList = styled.ul `
    list-style: none; font-size: 14px; margin: 48px 0 10px 0; border-bottom: 1px solid #23242d; padding: 0 0 10px 0;
    i {margin-right: 25px; margin-left: 6px; 
        &.fa-check {color: #91dc27}
        &.fa-times {color: #f43436}
    }

    li {margin: 0 0 18px 0; position: relative; padding-left: 40px;
        & > .fas {position: absolute; left: 0; top: 0;}
    }
`
const Msg = styled.h2 `
    font-size: 21px; color: #91dc27; display: flex; align-items: center; margin: 0 0 37px 0;
    .fa-check {margin-right: 20px;}
    p {display: inline-block; margin-left: auto; font-size: 14px; color: #aaa; font-weight: normal;
        a {color: #aaa; font-weight: 700; margin-left: 10px;
            &:hover {text-shadow: 0 0 5px currentColor;}
        }
        span {font-weight: normal; margin-left: 10px;}
    }
    @media (max-width: 991px){
        display: block; font-size: 18px; 
        .fa-check {margin-right: 10px;}
        p {width: 100%;}
    }
`
const RedTxt = styled.p `
    font-size: 14px; color: #aaa; font-weight: normal; color: #f43436; margin: 0;
`
const Supporting = styled.div `
    background: #14151c; margin: 53px -38px 0; padding: 40px 38px 0; border: 1px solid #23242d; position: relative;
    h4 {font-size: 18px; font-weight: 700; margin: 0 0 32px 0; font-size: 18px;}
    @media (max-width: 1024px){
        padding: 40px 20px 0; margin: 53px -15px 0;
    }
`
const RangeSlider = styled.div `
    flex-grow: 1; margin-right: 22px;; height: 24px;
    .dragorInput {
    position: relative;
    width: 100%;
    height: auto;
    padding-top:0px;
    }

    .input-range__slider {
        -webkit-appearance: none;
        appearance: none;
        background: #91dc27;
        cursor: pointer;
        display: block;
        margin-left: -38.5px;
        margin-top:-31px;
        color: #fff !important;
        font-weight: 700;
        outline: none;
        position: absolute;
        top: 50%;
        transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
        width:77px;
        height:36px;
        font-weight: 400; border:0px;
        border-radius:  0; 
        // transform: translateY(-22px); 
        @media (max-width: 991px){
            width: 50px; margin-left: -25px;
        }
    }

    .input-range__slider:focus {
    box-shadow: 0 0 0 5px rgba(63, 81, 181, 0.2);
    }
    .input-range__slider:active {
        transform: scale(1.1);
    }
    .input-range__slider-container {
    transition: left 0.3s ease-out;
    z-index: 100;
    }
    .input-range__label {
    color: #8e9195;
    font-size: 12px;
    transform: translateZ(0);
    white-space: nowrap;
    }
    .input-range__label--min,
    .input-range__label--max {
    bottom: auto;
    position: absolute;
        span {color: #fff !important;}
        &:before,&:after {display: none !important;}
    }
    .input-range__label--min {
        left: 10px;
        top: 4px;
        z-index: 2;
        &:before {
        content: "\f056"; color: #c32b2d;
        font-family: "Font Awesome 5 Free"; font-weight: bold; font-size: 16px; display: inline-block; vertical-align: top; margin: -2px 11px 0 0;
        }
    }
    .input-range__label--max {
        right: 10px;
        top: 4px;
        &:after {
        content: "\f055"; color: #00f02b;
        font-family: "Font Awesome 5 Free"; font-weight: bold; font-size: 16px; display: inline-block; vertical-align: top; margin: -2px 0 0 11px;
        }
    }
    .input-range__label--value {
    position: absolute;
    top: -21px;
    z-index: 2;
    color: #fff;
    left: 0px;
    pointer-events: none;
    transform: translateX(-50%);
    }
    .input-range__label-container {
        left: 0%;
        position: relative;
        font: 400 14px/16px "IBM Plex Mono",arial;
        pointer-events: none;
    }
    .input-range__label--max .input-range__label-container {
    left: 0%;
    }
    .input-range__track {
    background: #21232b; border-radius: 0;
    cursor: pointer; border: 2px solid #000;
    display: block;
    height: 30px;
    position: relative;
    transition: left 0.3s ease-out, width 0.3s ease-out;
    }
    .input-range__track--background {
    left: 0;
    margin-top: -0.15rem;
    position: absolute;
    right: 0;
    top: 50%;
    }
    .input-range__track--active {
        background: #3b3e4b; border: 0; height: 26px;
    }
    .input-range {
    height: auto;
    position: relative;
    width: 100%;
    }
    .input-range__label--value .input-range__label-container {
    color: #fff !important;
    font-weight: 700;
    font-size:14px; position: relative;
    }

    .input-range__label--value{ 
        &:after{ content: '';
        border: none;  width: fit-content; left: -12px; right: 0; bottom: -34px; color: #fff; font-size: 12px; font-family:"IBM Plex Mono",arial; text-align: center; font-weight: 400; position: absolute;}}

    @media (max-width: 768px){
        width: 100%; margin-bottom: 30px; margin: 0 0 30px;
    }
`
const CloseBtn = styled.a `
    position: absolute; right: 52px; top: 50px;
    img {width: 30px}
    @media (max-width: 991px){
        right: 20px; top: 20px;
        img {width: 20px}
    }
`