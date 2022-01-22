import styled from 'styled-components'

export const Button = styled.button`
    width: 20%;
    border: none;
    padding: 24px;
    font-size: 1.4rem;
    border-radius: 12px;
    transition:
    background-color 400ms ease,
    color 400ms ease;
    background-color: #e62429;
    color: #FFF;
    cursor: pointer;
    margin: 10px;

   &:hover {
    opacity: 0.8;
  }
`
