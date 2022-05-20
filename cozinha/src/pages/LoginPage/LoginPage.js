import React from 'react'


import slideOne from "../../assets/img/slides/meal_1.png"
import LoginForm from './LoginForm';

import { ScreenContainer, SlideImg, Welcome } from './styled'

const LoginPage = () => {

  

  return (
    <ScreenContainer>
      <Welcome>Bem-Vindo(a)!</Welcome>
      <SlideImg src={slideOne} />
      <LoginForm/>
    </ScreenContainer>
  )
}

export default LoginPage
