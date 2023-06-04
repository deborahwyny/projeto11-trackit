import { link } from "ionicons/icons";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ProgressoContext } from "../context/ProgressoContext";


function Footer(){

  const {progresso, setProgresso} = useContext(ProgressoContext)
    return (
        <FooterConteiner> 
        <Link to="/Habitos"> <BotaoHabitos>Hábitos</BotaoHabitos></Link>
        <Link to="/Hoje"><BotaoHoje><CircularProgressbar value={progresso} text={"Hoje"} styles={buildStyles({
          trailColor: "transparent",
          textColor:"#FFFFFF",
          backgroundColor:"#52B6FF",
          pathColor:"#FFFFFF"
          
          
        })}/></BotaoHoje></Link> 
        <Link to="/historico"><BotaoHistorico>Histórico</BotaoHistorico></Link>
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