import React from "react";
import styled from "styled-components";


function Historico(){
    return (
        <Conteiner>
        <Header>
        <Titulo>TrackIt</Titulo>
        <IconUser
          src="https://64.media.tumblr.com/6566e1dfdd380b1e1bea4d7da2e38821/fc1cee0b79687753-8d/s1280x1920/84bad96a2f5b8feeb3254f17413aadf5b334e11d.jpg"
          alt=""
        />
      </Header>
      <TituloHoje>Histórico</TituloHoje>
        <SubTitulo>Em breve você poderá ver o histórico dos seus hábitos aqui!</SubTitulo>
         <FooterHabitos>
        <BotaoHabitos>Hábitos</BotaoHabitos>
        <BotaoHoje>Hoje</BotaoHoje>
        <BotaoHistorico>Histórico</BotaoHistorico>
      </FooterHabitos>
      </Conteiner>
    )
}

const Conteiner = styled.div`
     width: 100%;
     height: 100vh;
     background-color: #E5E5E5;
     overflow-x: hidden;

   
`;

const Header = styled.div`
  height: 70px;
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px 0 18px;
`;
const Titulo = styled.h3`
  width: 97px;
  height: 49px;
  font-family: "Playball", cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 38.982px;
  line-height: 49px;
  color: #ffffff;
  align-items: center;
`;
const IconUser = styled.img`
  width: 51px;
  height: 51px;
  border-radius: 98px;
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
const FooterHabitos = styled.footer`
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
export default Historico;