import React from "react";
import styled from "styled-components";
import { IonIcon } from "@ionic/react";
import { trashOutline } from "ionicons/icons";

function CardCadastrados(){
    return (

        <ConteinerCadastrados>

        <HabitosCadastrados>
          <TituloCadastrado>Ler 1 capítulo de livro</TituloCadastrado>
          <StyledIcon icon={trashOutline} />
          <ConteinerBotao>
          <BotaoCadastrados>D</BotaoCadastrados>
          <BotaoCadastrados>S</BotaoCadastrados>
          <BotaoCadastrados>T</BotaoCadastrados>
          <BotaoCadastrados>Q</BotaoCadastrados>
          <BotaoCadastrados>Q</BotaoCadastrados>
          <BotaoCadastrados>S</BotaoCadastrados>
          <BotaoCadastrados>S</BotaoCadastrados>
          </ConteinerBotao>
        </HabitosCadastrados>
        </ConteinerCadastrados>

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