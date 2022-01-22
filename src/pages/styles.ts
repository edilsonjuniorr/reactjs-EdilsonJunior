import styled from 'styled-components'
import BackgroundImage from '../images/avengers2.jpg'

export const Background = styled.div`
    height: 100vh;
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Logo = styled.img`
    position: relative;
    padding-bottom: 10px;
    height: 30%;

`