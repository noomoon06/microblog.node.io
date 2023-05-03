import {
  Input,
  InputContainer,
  LeftPanel,
  LoginButton,
  LoginFormContainer,
  LoginPageContainer,
  MoonImage,
  RegisterButton,
  RightPanel,
  WelcomeText,
} from "./styles";

import { Size, useWindowSize } from '../../utils/utils';

const LoginPage = () => {
  const size: Size = useWindowSize();

  return (
    <LoginPageContainer>
      <LoginFormContainer>
         {size.width && size?.width > 768 && (
            <LeftPanel />
        )}

        <RightPanel>
          <MoonImage src="login-moon.jpg"/>
          <WelcomeText>
            Welcome to Login Page
          </WelcomeText>
          <InputContainer>
            <Input type="text" placeholder="Username" />
          </InputContainer>
          <InputContainer>
            <Input type="password" placeholder="Password" />
          </InputContainer>
          <LoginButton type="button">
            Login
          </LoginButton>
          <RegisterButton type="button">
            Register
          </RegisterButton>
        </RightPanel>
      </LoginFormContainer>
    </LoginPageContainer>
  );
};

export default LoginPage;
