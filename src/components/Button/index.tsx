import React from 'react'
import * as S from './styles'

type ButtonProps = {
    text: string; 
  method: () => void; 
}

const Button = ({
  method,
  text, 
}: ButtonProps): JSX.Element => {
  return (
    <S.Button onClick={method}>
      {text}
    </S.Button>
  )
}

export default Button
