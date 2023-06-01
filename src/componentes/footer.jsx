import React from "react";
import styled from "styled-components";

function Footer(){
    return (
        <FooterConteiner> 
        <BotaoHabitos>Hábitos</BotaoHabitos>
        <BotaoHoje>Hoje</BotaoHoje>
        <BotaoHistorico>Histórico</BotaoHistorico>
      </FooterConteiner>
    )
}

const FooterConteiner = styled.footer`
width: 100%;
  height: 70px;
position: fixed;
 bottom: 0;
 left: 0;
 margin-top: auto;
background: #FFFFFF;
display: flex;
justify-content: space-around;
align-items: center;
`;

const BotaoHabitos = styled.button`
   width: 68px;
height: 22px;
font-family: "Lexend Deca", sans-serif;
font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 22px;
text-align: center;
color: #52B6FF;
border: none;
background-color: #FFFFFF;
`

const BotaoHoje = styled.button`
   width: 91px;
height: 91px;
background: #52B6FF;
border-radius: 50%;
border: none;
font-family: "Lexend Deca", sans-serif;
font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 22px;
text-align: center;
color: #FFFFFF;
position: fixed;
bottom: 10px;
`
const BotaoHistorico = styled.button`
  width: 68px;
height: 22px;
font-family: "Lexend Deca", sans-serif;
font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 22px;
text-align: center;
color: #52B6FF;
border: none;
background-color: #FFFFFF;  
`  


export default Footer;