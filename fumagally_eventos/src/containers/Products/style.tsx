import styled from "styled-components";
import { styled as mStyled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";

export const Section_Produtos = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #ee1a25;
  display: flex;
  padding: 400px 150px;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

export const Box_Produto = styled.div`
  width: 100%;
  height: 700px;
  background-color: white;
`;

export const Produto = mStyled(Tabs)({
    width: "100%",
    height: "200px",
    backgroundColor: "green",

  }) as typeof Tabs;
  
  
export const barracas = styled.div`
width: 100%;
height: 700px;
margin-top: 25px;
background-color: #5e4646;
display: grid;
grid-template-columns: auto auto auto ;
grid-gap:20px;
padding: 30px;




`
