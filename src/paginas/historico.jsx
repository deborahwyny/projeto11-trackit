import React from "react";
import styled from "styled-components";
import Footer from "../componentes/footer";
import Header from "../componentes/header";


function Historico(){
    return (
        <Conteiner>
       <Header/>
      <TituloHoje>Histórico</TituloHoje>
        <SubTitulo>Em breve você poderá ver o histórico dos seus hábitos aqui!</SubTitulo>
         <Footer />
      </Conteiner>
    )
}

const Conteiner = styled.div`
     width: 100%;
     height: 100vh;
     background-color: #E5E5E5;
     overflow-x: hidden;

   
`;


const TituloHoje = styled.h2`
    width: 100%;
  height: 29px;
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 29px;
  color: #126ba5;
  margin: 28px 0 0 18px;
`

const SubTitulo = styled.h3`
    width: 100%;
height: 22px;
font-family: "Lexend Deca", sans-serif;
font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 22px;
color: #BABABA;
margin: 28px 0 0 18px;
`
export default Historico;