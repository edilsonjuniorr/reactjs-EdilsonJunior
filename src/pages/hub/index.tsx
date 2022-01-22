import React, { useState } from 'react'
import * as S from '../styles'
import { Button } from '../../components'
import logoMarvel from '../../images/marvel.png'

const Hub = (): JSX.Element => {
  return (
      <S.Background>
        <S.Logo src={logoMarvel} alt="logo da marvel"/>
        <Button
          text="Thor"
          method={() => (window.location.pathname = '/thordetails')}
          />
        <Button
          text="Hulk"
          method={() => (window.location.pathname = '/hulkdetails')}
          />
        <Button
          text="Iron Man"
          method={() => (window.location.pathname = '/ironmandetails')}
          />
      </S.Background>
  )
}

export default Hub
