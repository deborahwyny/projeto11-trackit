import React from "react";
import styled from "styled-components";

function Habitos(){
    return(
        
        <Conteiner>
        <Header>
            <Titulo>TrackIt</Titulo>
            <IconUser src="https://64.media.tumblr.com/6566e1dfdd380b1e1bea4d7da2e38821/fc1cee0b79687753-8d/s1280x1920/84bad96a2f5b8feeb3254f17413aadf5b334e11d.jpg" alt=""/>
        </Header>
        <ConteinerHabitos>
            <SubTitulo>Meus hábitos</SubTitulo>
            <BotaoPlus>+</BotaoPlus>
        </ConteinerHabitos>
        <Conteinercadastro>
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
            <BotaoSalvar>Salvar</BotaoSalvar>
            <BotaoCancelar>Cancelar</BotaoCancelar>
            </ConteinerBotoes>

        </Cadastro>
        </Conteinercadastro>
        </Conteiner>
    )
}

const Conteiner = styled.div`
    background-color #E5E5E5;
    height: 100vh; 
   

`
const Header = styled.div`
max-width: 100%; 
height: 70px;
background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 18px 0 18px;
`
const Titulo = styled.h3`
width: 97px;
height: 49px;
font-family: "Playball", cursive;
font-style: normal;
font-weight: 400;
font-size: 38.982px;
line-height: 49px;
color: #FFFFFF;
align-items: center;
`
const IconUser = styled.img`
    width: 51px;
height: 51px;
border-radius: 98px;
`
const SubTitulo = styled.h2`
width: 148px;
height: 29px;
font-family: "Lexend Deca", sans-serif;
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 29px;
color: #126BA5;
`
const BotaoPlus = styled.button`
width: 40px;
height: 35px;
background: #52B6FF;
border-radius: 4px;
border: none;
font-family: "Lexend Deca", sans-serif;
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 34px;
text-align: center;
color: #FFFFFF;
`
const ConteinerHabitos = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 22px 18px 0 18px;
    align-items: center;
`

const InputHabito = styled.input`
width: 303px;
height: 45px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
font-family: "Lexend Deca", sans-serif;
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: #666666;
`

const DiasSemana = styled.button`
    width: 30px;
height: 30px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
font-family: "Lexend Deca", sans-serif;
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: #DBDBDB;
`

const BotaoCancelar = styled.button`
    width: 69px;
height: 20px;
font-family: "Lexend Deca", sans-serif;
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 20px;
text-align: center;
color: #52B6FF;
background-color: #FFFFFF;
border: none;

`

const BotaoSalvar = styled.button`
    width: 84px;
height: 35px;
background: #52B6FF;
border-radius: 4px;
border: none;
font-family: "Lexend Deca", sans-serif;
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 20px;
text-align: center;
color: #FFFFFF;
`
const Cadastro = styled.div`
    width: 340px;
height: 180px;
background: #FFFFFF;
border-radius: 5px;
display: flex;
justify-content: center;
flex-direction: column;
padding: 0 0 0 19px;
`

const Conteinercadastro = styled.span`
display: flex;
justify-content: center;
align-items: center;

`

const ConteinerSemanas = styled.span`
    margin-top: 8px;
    display: flex;
    gap: 4px;
`
const ConteinerBotoes = styled.span`
display: flex;
    width: 100%;
    flex-direction: row-reverse;
    align-items: center;
    gap: 23px;
    
`

export default Habitos;