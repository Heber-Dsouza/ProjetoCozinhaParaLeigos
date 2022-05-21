import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import useForm from "../../hooks/useForm"
import { goToLoginPage, goToTermsPage } from '../../routes/coordinator';

import { TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { InputContainer, CustomButton, CustomButtonLogin, CustomFormHelperText, TermsLink } from './styled'
import Checkbox from '@mui/material/Checkbox'
import FormHelperText from '@mui/material/FormHelperText'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel';


const SignupForm = () => {

  const navigate = useNavigate()

  const [form, onChange] = useForm({ email: "", password: "" })
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const [formConfirm, onChangeConfirm] = useForm({confirmEmail: "", confirmPassword: ""})
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  }
  
  const [errorEmail, setErrorEmail] = useState({email: false, messageEmail: ""})
  const [errorPassword, setErrorPassword] = useState({password: false, messagePassword: ""})


  const onSubmitForm = (event) => {
    event.preventDefault()

    if (form.password !== formConfirm.confirmPassword) {
      setErrorPassword({ ...errorPassword, password: true, messagePassword: "Dados incorretos. Verifique sua senha." })
    } else {
      setErrorPassword({ ...errorPassword, password: false, messagePassword: "" })
    }

    if (form.email !== formConfirm.confirmEmail){
      setErrorEmail({ ...errorEmail, email: true, messageEmail: "Dados incorretos. Verifique seu email."})
    } else {
      setErrorEmail({ ...errorEmail, email: false, messageEmail: "" })
    }

  }

  return (
    <InputContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
          type='email'
          label="Email"
          variant="outlined"
          name={"email"}
          value={form.email}
          onChange={onChange("email")}
          required
          fullWidth
          margin='none'
        />

        <TextField
          error={errorEmail.email}
          helperText={errorEmail.messageEmail}
          type='text'
          label="Confirme seu Email"
          variant="outlined"
          name={"confirmEmail"}
          value={formConfirm.confirmEmail}
          onChange={onChangeConfirm("confirmEmail")}
          required
          fullWidth
          margin='normal'
        />

        <FormControl
          fullWidth
          name={"password"}
          variant="outlined"
          margin='dense'
          
        >
          <InputLabel htmlFor="outlined-adornment-password" >Senha*</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={form.password}
            onChange={onChange("password")}
            required

            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Senha*"

          />
        </FormControl>

  {/* ---------------------------------------------------------------------------------------------------------------- */}
        <FormControl
          fullWidth
          variant="outlined"
          margin='dense'

          
        >
          <InputLabel htmlFor="outlined-adornment-confirm-password" error={errorPassword.password}>Confirme sua Senha*</InputLabel>
          <OutlinedInput
            id="outlined-adornment-confirm-password"
            type={showConfirmPassword ? 'text' : 'password'}
            value={formConfirm.confirmPassword}
            onChange={onChangeConfirm("confirmPassword")}
            required
            error={errorPassword.password}

            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                  edge="end"
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirme sua Senha*"

          />
          <CustomFormHelperText>{errorPassword.password && errorPassword.messagePassword}</CustomFormHelperText>
        </FormControl>

          <FormControlLabel
            control={<Checkbox required />} 
            label={<TermsLink>Declaro que li e que concordo com os <span onClick={() => goToTermsPage(navigate)}>termos de uso.</span></TermsLink>} />

        <CustomButtonLogin
          type={"submit"}
          variant='contained'
          fullWidth size='large'
        >Cadastrar-se</CustomButtonLogin>

      </form>

      <CustomButton
        variant='outlined'
        fullWidth size='large'
        onClick={() => goToLoginPage(navigate)}
      ><span>Já possui uma conta?</span> Faça aqui o seu Login</CustomButton>

    </InputContainer>
  )
}

export default SignupForm