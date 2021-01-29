import React from 'react'
import styled from 'styled-components'
import FooteLinkIcon from '../../assets/images/footerLink_icon.png'
import BLogo from '../../assets/images/binance-logo.png'
import BscScanLogo from '../../assets/images/BscScan-logo-light.png'
import './Footer.css'
const Link02: React.FC = () => {
    return (
        <FLink02B>
        <StyledAbsoluteLinkB href="https://0x1.finance" target="_blank">0x1 Finance © 2021 | Powered by Binance Smart Chain</StyledAbsoluteLinkB>

        </FLink02B>
    )
}

const Link01: React.FC = () => {
    return (
      <FLink01B>
        <StyledAbsoluteLinkA href="#/add" >List new token</StyledAbsoluteLinkA> |
        <StyledAbsoluteLinkA href="https://github.com/0x1-Finance" target="_blank">Github</StyledAbsoluteLinkA> |
        <StyledAbsoluteLinkA href="https://twitter.com/0x1Finance" target="_blank">Twitter</StyledAbsoluteLinkA> |
        <StyledAbsoluteLinkA href="https://t.me/finance0x1" target="_blank">Telegram</StyledAbsoluteLinkA> |
        <StyledAbsoluteLinkA href="https://discord.gg/hzc98weRq5" target="_blank">Discord</StyledAbsoluteLinkA> |
        <StyledAbsoluteLinkA href="https://0x1-finance.medium.com" target="_blank">Medium</StyledAbsoluteLinkA>
      </FLink01B>
    )
}

const StyledIcon01 = styled.a`
    cursor:pointer; 
    text-decoration: none;
    width:25px;
    height:25px;
    margin:0 16px;
    display:inline-block;
    background:url(${FooteLinkIcon}) 50% 50% no-repeat;
`
const StyledAbsoluteLinkA = styled.a`
    cursor:pointer; 
    text-decoration: none;
    color:#fff;
    font-family: "Lucida Console";
    margin:0 16px;
    &:hover {
        color: cyan;
    }
`
const StyledAbsoluteLinkB = styled.a`
    cursor:pointer; 
    text-decoration: none;
    color:#fff;
    font:normal 12px/16px "IBM Plex Mono", arial;
    margin:0 6px;
    &:hover {
        color: cyan;
    }
`

const FooterFrame = styled.footer`

    background-color:#070707;
    width:100%;
    height:100px; 
    margin-top:40px;
    display:flex;
    align-items:center;
    padding:28px 20px;
    flex-wrap:wrap;
    position:relative;
    @media (min-width: 320px) and (max-width: 500px){
        flex-wrap: wrap;
        flex-direction: row;
    }
    @media (min-width: 501px) and (max-width: 767px){
        height:auto;
        padding:10px 10px 30px 10px;
    }
    @media (min-width: 768px) and (max-width: 991px){
        height:auto;
        padding:10px 10px 30px 10px;
    } 
`

const JRLogo = styled.div`
    margin-right:auto;
    min-width:110px;

    @media (min-width: 320px) and (max-width: 500px){
        margin:0 auto 20px auto;
    }
`

const FooterCbox = styled.div`
    text-align:center;
    margin:0 auto;
`

const FLink01B = styled.div`
    font:normal 15px/16px arial;color:#424242;
    padding-bottom:8px;
    display:flex;
    align-items:center;
    justify-content:center;
`

const FLink02B = styled.div`
    font:normal 15px/16px arial;color:#2a2a2a;
    padding-bottom:8px;
`

const BinanceLogo = styled.div`
    margin-left:auto;
    @media (min-width: 320px) and (max-width: 500px){
        margin:0 auto 20px auto;
    }
`

const BinanceLogoLink = styled.a`
    &:hover {
        opacity:0.7;
    }
`

const FooterBody = styled.div`
    display:block;
    margin: 8px;
    width:99%;
    position: fixed;
    left: 0;
    bottom: 0;
    

`
const Footer: React.FC = () => {
    
    return (
        <FooterBody>
            <FooterFrame>
				<BinanceLogo>
                    <BinanceLogoLink href="https://bscscan.com" target="_blank"><img src={BscScanLogo} height="36px;" /> </BinanceLogoLink>
                </BinanceLogo>
                <FooterCbox>
                    <Link01 />
                    <Link02 />
                </FooterCbox>
                <BinanceLogo>
                    <BinanceLogoLink href="https://www.binance.com/en/register?ref=N581OGL7" target="_blank"><img src={BLogo} /> </BinanceLogoLink>
                </BinanceLogo>
            </FooterFrame>
        </FooterBody>
    )}

export default Footer