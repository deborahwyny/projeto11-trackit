import React from "react";
import styled from "styled-components";
import Header from "../componentes/header";
import Footer from "../componentes/footer";
import CardCadastro from "../componentes/cardCadastro";
import CardCadastrados from "../componentes/cardCadastrados";
// import { IonIcon } from "@ionic/react";
// import { trashOutline } from "@ionic/react";


function Habitos() {
  return (
    <Conteiner>
      <Header />
      <ConteinerHabitos>
        <SubTitulo>Meus hábitos</SubTitulo>
        <BotaoPlus>+</BotaoPlus>
      </ConteinerHabitos>
      <Conteinercadastro>
        <CardCadastro />
        <AdicioneHabitos>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
          </AdicioneHabitos>

        <CardCadastrados />
      </Conteinercadastro>

     <Footer />
    </Conteiner>
  );
}


const Conteiner = styled.div`
     background-color: #E5E5E5;
  min-height: 100vh;
`;
const SubTitulo = styled.h2`
  width: 148px;
  height: 29px;
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 29px;
  color: #126ba5;
`;
const BotaoPlus = styled.button`
  width: 40px;
  height: 35px;
  background: #52b6ff;
  border-radius: 4px;
  border: none;
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 34px;
  text-align: center;
  color: #ffffff;
`;
const ConteinerHabitos = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 22px 18px 0 18px;
  align-items: center;
`;
const Conteinercadastro = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const AdicioneHabitos = styled.h4`
  width: 338px;
  height: 74px;
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  color: #666666;
  display: flex;
  justify-content: center;
  margin-top: 29px;
`;

export default Habitos;
