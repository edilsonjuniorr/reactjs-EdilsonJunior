import React, { useState } from 'react'
import * as S from '../styles'
import { Button } from '../../components'
import logoMarvel from '../../images/marvel.png'

const Hub = (): JSX.Element => {
  return (
      <S.Background>
        <S.LogoMarvel src={logoMarvel} alt="logo da marvel"/>
        <Button
          text="Personagens"
          method={() => (window.location.pathname = '/characters')}
          />
        <Button
          text="Quadrinhos"
          method={() => (window.location.pathname = '/comics')}
          />
        <Button
          text="Criadores"
          method={() => (window.location.pathname = '/creators')}
          />
      </S.Background>
  )
}

export default Hub
