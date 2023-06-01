import React from "react";
import styled from "styled-components";
import { IonIcon } from "@ionic/react";
import { checkmark } from "ionicons/icons";
import Header from "../componentes/header";
import Footer from "../componentes/footer";
import Cardinfos from "../componentes/cardInfos";

function Hoje() {
  return (
    <Conteiner>
      <Header />
      <TituloHoje>Segunda, 17/05</TituloHoje>
      <SubTitulo>Nenhum hábito concluído ainda</SubTitulo>
      <Cardinfos />
      <Footer />
    </Conteiner>
  );
}

const Conteiner = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e5e5e5;
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
`;

const SubTitulo = styled.h3`
  width: 100%;
  height: 22px;
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  color: #bababa;
  margin: 28px 0 0 18px;
`;


export default Hoje;
