import React from "react";
import styled from "styled-components";

function Cadastro() {
  return (
    <PageContainer>
      <Titulo>TrackIt</Titulo>
      <ConteinerInputs>
        <InputEmail type="email" placeholder="email"></InputEmail>
        <InputSenha type="password" placeholder="senha" />
        <InputNome type="text" placeholder="nome" />
        <InputFoto type="url" placeholder="foto" />
        <BotaoCadastrar>Cadastrar</BotaoCadastrar>
      </ConteinerInputs>
      <LinkLogin>Já tem uma conta? Faça login!</LinkLogin>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const Titulo = styled.h1`
  width: 180px;
  height: 86px;
  font-family: "Playball", cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 68px;
  line-height: 86px;
  text-align: center;
  color: #126ba5;
  margin-bottom: 32px;
`;
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

const InputNome = styled.input`
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

const InputFoto = styled.input`
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

const BotaoCadastrar = styled.button `
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
`

const LinkLogin = styled.p`
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
`

export default Cadastro;
