import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../componentes/logo";
import axios from "axios";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navegate = useNavigate();
  // const [loading, setLoading] = useState(false);


  function login(e){
    e.preventDefault();
    // setLoading(true);

    const URL= 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';

    const novoLogin = { email, password };

    const promise = axios.post(URL, novoLogin);

    promise.then (resposta => {console.log(resposta.data)
    navegate('/habitos')
    // setLoading(false)
  });
    promise.catch(erro => {console.log(erro.response)
      });
  };

  return (
    <ConteinerLogin>
      <Logo />
      <ConteinerInputs>
        <InputEmail type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="email"></InputEmail>
        <InputSenha type="password" value={password} onChange={(e)=> setPassword (e.target.value)} placeholder="senha" />
        <BotaoLogin onClick={login}>entrar</BotaoLogin>
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
  /* {loading ? (
    <Loader type="ThreeDots" color="#FFFFFF" height={16} width={16} />
  ) : (
    "entrar"
  )} */
  
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
