import React, { useState } from 'react'
import * as S from '../styles'
import { Button } from '../../components'

const Hub = (): JSX.Element => {
  return (
     <S.Background>
       <Button
        text="Personagens"
        method={() => (window.location.pathname = '/characters')}
        />
     </S.Background>
  )
}

export default Hub
