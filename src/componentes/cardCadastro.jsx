import React from "react";
import styled from "styled-components";

function CardCadastro(){
    return(
        <Cadastro>
          <InputHabito type="text" placeholder="Ler 1 capítulo de livro" />
          <ConteinerSemanas>
            <DiasSemana>D</DiasSemana>
            <DiasSemana>S</DiasSemana>
            <DiasSemana>T</DiasSemana>
            <DiasSemana>Q</DiasSemana>
            <DiasSemana>Q</DiasSemana>
            <DiasSemana>S</DiasSemana>
            <DiasSemana>S</DiasSemana>
          </ConteinerSemanas>
          <ConteinerBotoes>
            <BotaoCancelar>Cancelar</BotaoCancelar>
            <BotaoSalvar>Salvar</BotaoSalvar>
          </ConteinerBotoes>
        </Cadastro>
    )
}

const InputHabito = styled.input`
  width: 303px;
  height: 45px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: #666666;
`;

const DiasSemana = styled.button`
  width: 30px;
  height: 30px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: #dbdbdb;
`;

const BotaoCancelar = styled.button`
  width: 69px;
  height: 20px;
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: #52b6ff;
  background-color: #ffffff;
  border: none;
`;

const BotaoSalvar = styled.button`
  width: 84px;
  height: 35px;
  background: #52b6ff;
  border-radius: 4px;
  border: none;
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
`;
const Cadastro = styled.div`
  width: 340px;
  height: 180px;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 0 0 19px;
`;
const ConteinerSemanas = styled.span`
  margin-top: 8px;
  display: flex;
  gap: 4px;
`;
const ConteinerBotoes = styled.span`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 23px;
  margin: 10px 0px 0 143px;
`;

export default CardCadastro;