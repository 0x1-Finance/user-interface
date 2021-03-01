import { ChainId } from '@bscswap/sdk'
import React from 'react'
import { isMobile } from 'react-device-detect'
import { Text } from 'rebass'

import styled from 'styled-components'

import { useActiveWeb3React } from '../../hooks'
import { useDarkModeManager } from '../../state/user/hooks'
import { useETHBalances } from '../../state/wallet/hooks'

import { YellowCard } from '../Card'
import Settings from '../Settings'
import Menu from '../Menu'

import { RowBetween } from '../Row'
import Web3Status from '../Web3Status'

const Nav: React.FC = () => {
  return (
    <StyledNav>
	  <StyledAbsoluteLink href="/">Home</StyledAbsoluteLink>
      <StyledAbsoluteLink href="#/swap">Trade</StyledAbsoluteLink>
	  <StyledAbsoluteLink href="#/pool">Pool</StyledAbsoluteLink>
	  <StyledAbsoluteLink href="https://farm.0x1.finance" target="_blank">Farm</StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://info.0x1.exchange" target="_blank">Analytics</StyledAbsoluteLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  line-height: 40px;
  font-weight: 500;
  @media (max-width: 600px) {
    display: none;
  }
`

const StyledAbsoluteLink = styled.a`
  color: black;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: 5px
  margin-right: 5px;
  text-decoration: none;
  background-color: white;
  border-radius: 10px;
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.2);
  -moz-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.2);
  box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.2);
  @media (max-width: 400px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`


const HeaderFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  top: 0;
  position: absolute;
  z-index: 2;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    padding: 12px 0 0 0;
    width: calc(100%);
    position: relative;
  `};
`

const HeaderElement = styled.div`
  display: flex;
  align-items: center;
`

const HeaderElementWrap = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-top: 0.5rem;
`};
`

const Title = styled.a`
  display: flex;
  align-items: center;
  pointer-events: auto;

  :hover {
    cursor: pointer;
  }
`

const AccountElement = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.2);
  -moz-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.2);
  box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.2);
  white-space: nowrap;
  width: 100%;

  :focus {
    border: 1px solid blue;
  }
`

const TestnetWrapper = styled.div`
  white-space: nowrap;
  width: fit-content;
  margin-left: 10px;
  pointer-events: auto;
`

const NetworkCard = styled(YellowCard)`
  width: fit-content;
  margin-right: 10px;
  padding: 8px 12px;
  background-color: white;
  border-radius: 10px;
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.2);
  -moz-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.2);
  box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.2);
`

const HeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: column;
    align-items: flex-end;
  `};
`

const BalanceText = styled(Text)`
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: none;
  `};
  color: white;
  background-color: black;
`

const NETWORK_LABELS: { [chainId in ChainId]: string | null } = {
  [ChainId.MAINNET]: 'Wrong Network',
  [ChainId.RINKEBY]: 'Wrong Network',
  [ChainId.ROPSTEN]: 'Wrong Network',
  [ChainId.GÖRLI]: 'Wrong Network',
  [ChainId.KOVAN]: 'Wrong Network',
  [ChainId.BSC_MAINNET]: 'BSC Mainnet',
  [ChainId.BSC_TESTNET]: 'BSC Testnet'
}

export default function Header() {
  const { account, chainId } = useActiveWeb3React()

  const userEthBalance = useETHBalances([account])[account]
  const [isDark] = useDarkModeManager()

  return (
    <HeaderFrame>
      <RowBetween style={{ alignItems: 'flex-start'}} padding="1rem 1rem 0 1rem" >
        <Nav />
        <HeaderControls>
          <HeaderElement>
            <TestnetWrapper>
              {!isMobile && NETWORK_LABELS[chainId] && <NetworkCard>{NETWORK_LABELS[chainId]}</NetworkCard>}
            </TestnetWrapper>
            <AccountElement active={!!account} style={{ pointerEvents: 'auto' }}>
              {account && userEthBalance ? (
                <BalanceText style={{ flexShrink: 0 }} pl="0.75rem" pr="0.5rem" fontWeight={500}>
                  {userEthBalance?.toSignificant(4)} BNB
                </BalanceText>
              ) : null}
              <Web3Status />
            </AccountElement>
          </HeaderElement>
          <HeaderElementWrap>
            <Settings />
            <Menu />
          </HeaderElementWrap>
        </HeaderControls>
      </RowBetween>
    </HeaderFrame>
  )
}
