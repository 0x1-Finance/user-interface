import React from 'react'
import styled from 'styled-components'

export const BodyWrapper = styled.div<{ disabled?: boolean }>`
  position: relative;
  max-width: 420px;
  margin-top: 50px;
  width: 100%;
  background: aliceblue;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.4), 0px 16px 24px rgba(0, 0, 0, 0.4),
    0px 24px 32px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 1rem;
  pointer-events: ${({ disabled }) => disabled && 'none'};
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children, disabled }: { children: React.ReactNode; disabled?: boolean }) {
  return <BodyWrapper disabled={disabled}>{children}</BodyWrapper>
}
