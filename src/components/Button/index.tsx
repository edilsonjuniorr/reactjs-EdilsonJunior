import React from 'react'
import * as S from './styles'

type ButtonProps = {
    text: string;
    isSmall?: boolean;
  method: () => void; 
}

const Button = ({
  method,
  text, 
  isSmall,
}: ButtonProps): JSX.Element => {
  return (
    <S.Button isSmall={isSmall} onClick={method}>
      {text}
    </S.Button>
  )
}
export default Button