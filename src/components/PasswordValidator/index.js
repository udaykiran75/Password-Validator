import {useState} from 'react'

import {
  Homebgcontainer,
  PasswordContainer,
  Heading,
  ParaText,
  Input,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, updatePassword] = useState('')
  const showError = password.length < 8

  const onChangePassword = event => {
    updatePassword(event.target.value)
  }

  return (
    <Homebgcontainer>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <ParaText>Check how strong and secure is your password</ParaText>
        <Input type="password" value={password} onChange={onChangePassword} />
        {showError && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </PasswordContainer>
    </Homebgcontainer>
  )
}
export default PasswordValidator
