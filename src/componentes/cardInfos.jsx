import React from "react";
import styled from "styled-components";
import { IonIcon } from "@ionic/react";
import { checkmark } from "ionicons/icons";

function Cardinfos(){
    return(
        <ConteinterInfos>
        <InfosHabito>
          <TituloHabito>Ler 1 capítulo de livro </TituloHabito>
          <InfoHabitoAtual>Sequência atual: 3 dias</InfoHabitoAtual>
          <InfoRecord>recorde: 5 dias </InfoRecord>
          <Botao>
            <StyledIcon icon={checkmark} />
          </Botao>
        </InfosHabito>
      </ConteinterInfos>
    )
}

const InfosHabito = styled.div`
  width: 340px;
  height: 94px;
  background: #ffffff;
  border-radius: 5px;
  position: relative;
`;
const TituloHabito = styled.h4`
  width: 208px;
  height: 25px;
  left: 33px;
  top: 190px;
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 25px;
  color: #666666;
  margin: 18px 0 0 18px;
`;

const InfoHabitoAtual = styled.p`
  width: 146px;
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12.976px;
  line-height: 16px;
  color: #666666;
  margin: 0 0 0 18px;
`;

const InfoRecord = styled.p`
  width: 146px;
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #666666;
  margin: 0 0 0 18px;
`;

const ConteinterInfos = styled.div`
  display: flex;
  justify-content: center;
  margin: 18px 0 0 0;
`;

const Botao = styled.button`
  width: 69px;
  height: 69px;
  background: #ebebeb;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  border: none;
  position: absolute;
  top: 10px;
  right: 20px;
`;

const StyledIcon = styled(IonIcon)`
  color: #ffffff;
  font-size: 54px;
`;

export default Cardinfos;