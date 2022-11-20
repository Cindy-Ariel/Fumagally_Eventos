import styled from "styled-components";
import { WhatsappLogo } from "phosphor-react";

export const Linha_Superior_Header = styled.div`
  width: 100%;
  height: 30px;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  z-index: 1;
  span{
    display:flex;
  }

`;

export const Icone_Whats = styled(WhatsappLogo)`
  width: 1.5rem;
  height: 1.5rem;
  color: #0d0e0d;
`;

export const Header = styled.div`
  width: 100vw;
  height: 100px;
  background-color: pink;
  display: flex;
  justify-content: space-around;
  align-items: center;
  translate: 0px 30px;
  position: fixed;
  z-index: 1;
`;

export const Logo = styled.img`
  width: 200px;
  height: 50px;
  background-color: blue;
`;
export const Menu_Navegacao = styled.ul`
  width: 500px;
  height: 50px;
  background-color: white;
  margin-left: 200px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  position: relative;
`;
export const Menu_Item = styled.li`
  width: 80px;
  height: 50px;
  background-color: black;
  /* position: relative; */
`;

export const Login_Cadastro_Box = styled.div`
  width: 200px;
  height: 50px;
  background-color: green;
  display: flex;
`;
