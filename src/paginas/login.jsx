import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../componentes/logo";

function Login({logoImage}) {
  return (
    <ConteinerLogin>
      <Logo />
      {/* <Titulo>TrackIt</Titulo> */}
      <ConteinerInputs>
        <InputEmail type="email" placeholder="email"></InputEmail>
        <InputSenha type="password" placeholder="senha" />
        <BotaoLogin>entrar</BotaoLogin>
      </ConteinerInputs>
      <Link to="/cadastro"><LinkCadastrese >Não tem uma conta? Cadastre-se!</LinkCadastrese></Link>
    </ConteinerLogin>
  );
}

const ConteinerLogin = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh; 
`;

// const Titulo = styled.h1`
//   width: 180px;
//   height: 86.23px;
//   font-family: "Playball", cursive;
//   font-style: normal;
//   font-weight: 400;
//   font-size: 68.982px;
//   line-height: 86px;
//   text-align: center;
//   color: #126ba5;
//   margin-bottom: 32px
// `;
const ConteinerInputs = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 6px;
`;
const InputEmail = styled.input`
  width: 303px;
  height: 45px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 25px;
  color: #dbdbdb;
`;

const InputSenha = styled.input`
  width: 303px;
  height: 45px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 25px;
  color: #dbdbdb;
`;
const BotaoLogin = styled.button`
  width: 303px;
  height: 45px;
  background: #52b6ff;
  border-radius: 4px;
  border: none;
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  color: #ffffff;
`;
const LinkCadastrese = styled.p`
  width: 232px;
  height: 17px;
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  text-align: center;
  text-decoration-line: underline;
  color: #52b6ff;
  margin-top: 25px;
`;

export default Login;
