import React from 'react'

import slideOne from "../../assets/img/slides/meal_1.png"
import SignupForm from './SignupForm';

import { ScreenContainer, SlideImg, Welcome } from './styled'

const SignupPage = () => {
  return (
    <ScreenContainer>
      <Welcome>Cadastre-se. É grátis!</Welcome>
      <SlideImg src={slideOne} />
      <SignupForm />
    </ScreenContainer>
  )
}

export default SignupPage