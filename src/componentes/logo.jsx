import React from "react";
import logoImage from "../assets/Group 8.png"

function Logo({logo}){
    return(

        <ConteinerLogin>
            <img src={logoImage} alt="logo projeto" />
        </ConteinerLogin>

    )
}

export default Logo;

const ConteinerLogin = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh; 
`;