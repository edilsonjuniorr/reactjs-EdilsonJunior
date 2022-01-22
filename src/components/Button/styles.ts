import styled, { css } from 'styled-components'

type ButtonProps = {
  isSmall?: boolean
}

export const Button = styled.button<ButtonProps>`
  margin: 10px;
  background-color: #e62429;
  color: #FFF;
  border-radius: 12px;
  border-color: #FFF;
  cursor: pointer;
  display: block;
  font-size: 14px;
  font-weight: 700;
  height: 53px;
  letter-spacing: 0.08em;
  line-height: 21, 28px;
  margin-bottom: 10px;
  padding: ${({ isSmall }) => (isSmall ? '8px 16px' : '16px 32px')};
  text-align: center;
  min-width: 189px;
  width: ${({ isSmall }) => (isSmall ? '157px' : '201px')};

  &:hover {
    opacity: 0.8;
  }
`