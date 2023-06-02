import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../componentes/logo";

function Cadastro() {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");

  const navegate = useNavigate();

  function cadastrado(e){
    e.preventDefault();

    console.log(email);
    console.log(name);
    console.log(image);
    console.log(password);

    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';

    const novoCadastro = {email,name,image,password};

   const promisse = axios.post(URL, novoCadastro);

   promisse.then (resposta=>{
    console.log(resposta)
    alert('Você foi cadastrado com sucesso!')
    navegate("/")
   } );

   promisse.catch (erro => alert(erro.response.data.message));

  }


  return (
    <PageContainer>
       <Logo />
      <ConteinerInputs onSubmit={cadastrado}>
        <InputEmail type="email" required value={email} placeholder="email" onChange={(e)=> setEmail(e.target.value)}></InputEmail>
        <InputSenha type="password" required value={password} placeholder="senha" onChange={(e) => setPassword(e.target.value)}/>
        <InputNome type="text" required value={name} placeholder="nome" onChange={(e)=> setName(e.target.value)}/>
        <InputFoto type="url" required value={image} placeholder="foto" onChange={(e)=> setImage(e.target.value)}/>
        <BotaoCadastrar type="submit">Cadastrar</BotaoCadastrar>
      </ConteinerInputs>
      <Link to="/"> <LinkLogin>Já tem uma conta? Faça login!</LinkLogin></Link>
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
