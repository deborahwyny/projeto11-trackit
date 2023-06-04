import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { IonIcon } from "@ionic/react";
import { trashOutline } from "ionicons/icons";
import axios from "axios";
import { UserContext } from "../context/UserContext";



function CardCadastrados(){
  const {usuario} = useContext(UserContext);


    const [itens, setItens] = useState([]);
    useEffect ( () => {

        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
        const config ={
            headers: {
                Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTM5OCwiaWF0IjoxNjg1NzM4Nzg1fQ.KvGK0g4nJwvQ_6RknkxyVfE-xVfgFXaHEoxOL8H2iAk'
            }
        }

        const promise = axios.get(URL, config);

        promise.then(resposta => {console.log(resposta)
          setItens(resposta.data)
      });
        promise.catch(erro => console.log(erro.responses))

    },[usuario.token]);

    function clicou(){
        console.log("Botão de cadastro clicado!")
    }
  

    return (

       
        <>
        {itens.map((item, index) => (
          <ConteinerCadastrados key={index}>
            <HabitosCadastrados>
              <TituloCadastrado>{item.name}</TituloCadastrado>
              <StyledIcon icon={trashOutline} />
              <ConteinerBotao >
                <BotaoCadastrados onClick={clicou}>D</BotaoCadastrados>
                <BotaoCadastrados onClick={clicou}>S</BotaoCadastrados>
                <BotaoCadastrados onClick={clicou}>T</BotaoCadastrados>
                <BotaoCadastrados onClick={clicou}>Q</BotaoCadastrados>
                <BotaoCadastrados onClick={clicou}>Q</BotaoCadastrados>
                <BotaoCadastrados onClick={clicou}>S</BotaoCadastrados>
                <BotaoCadastrados onClick={clicou}>S</BotaoCadastrados>
              </ConteinerBotao>
            </HabitosCadastrados>
          </ConteinerCadastrados>
        ))}
      </>
            
          
       

    )
}

const StyledIcon = styled(IonIcon)`
position: absolute;
top: 7px;
right: 7px;
`

const HabitosCadastrados = styled.div`
width: 340px;
height: 91px;
background: #FFFFFF;
border-radius: 5px;
margin: 0 0 0 4px;
position: relative;

`
const TituloCadastrado = styled.h2`
width: 100%;
height: 30px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19px;
line-height: 25px;
color: #666666;
align-items: center;
margin: 8px 0 0 15px;
`
const ConteinerCadastrados = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const ConteinerBotao = styled.div`
display: flex;
flex-direction: row;
gap: 4px;
margin: 0 0 0 11px;

`

const BotaoCadastrados = styled.button`
width: 30px;
height: 30px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: #DBDBDB;

`



export default CardCadastrados;