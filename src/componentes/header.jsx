import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Header({}){
    return(
     
         <HeaderContainer>
          <Link to="/"><Titulo>TrackIt</Titulo></Link> 
          <IconUser
            src="https://64.media.tumblr.com/6566e1dfdd380b1e1bea4d7da2e38821/fc1cee0b79687753-8d/s1280x1920/84bad96a2f5b8feeb3254f17413aadf5b334e11d.jpg"
            alt=""
          />
        </HeaderContainer>
        
    )
}


const HeaderContainer = styled.div`
    height: 70px;
  background: #126ba5;
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
  color: #ffffff;
  align-items: center;
`;
const IconUser = styled.img`
  width: 51px;
  height: 51px;
  border-radius: 98px;
`;

export default Header;