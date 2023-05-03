import styled from 'styled-components';

export const LoginPageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const LoginFormContainer = styled.div`
  display: flex;
  height: 500px;
  width: 100%;
  max-width: 715px;
  box-shadow: 0px 5px 5px 5px grey;
  border-radius: 10px;
  margin: 15vh auto;
`;

export const LeftPanel = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background: url('login-banner.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 500px 400px;
`;

export const RightPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-content: space-around;
  gap: 7px;
  padding: 10px;
`;

export const WelcomeText = styled.h1`
  font-family: courier;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const MoonImage = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  margin-top: 40px;
  align-self: center;
`;

export const InputContainer = styled.div`
  height: 40px;
  max-width: 250px;
  width: 100%;
  border-bottom: 0.5px solid grey;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  border: 0;
  height: 35px;
  font-size: 16px;
`;

export const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  max-width: 250px;
  width: 100%;
  font-size: 20px;
  color: white;
  background-color: #324ab2;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
`;

export const RegisterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  max-width: 250px;
  width: 100%;
  font-size: 20px;
  color: white;
  background-color: #FC8EAC;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
`;