import styled from "styled-components";

export const containerGeral = styled.div`
   background-image: url("/fundoDiferenciais.png");
  width: 100%;
  height: 700px;
  display: flex;
  padding-left: 30px;
`;
export const containerCaixas = styled.div`
  background-color: orange;
  width: 80%;
  height: 700px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 10px;

`;
export const caixas = styled.div`
  background-color: aqua;
  width: 45%;
  height: 48%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border-color: black;
  box-shadow: 7px 5px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  
`;
export const iconeCaixa = styled.img`
  background-color: yellow;
  width: 50px;
  height: 50px;
  margin-bottom: 15px;
`;
export const tituloCaixa = styled.h2`
  background-color: gold;
  width: 60%;
  height: 60px;
  line-height: 25px;

  font-size: 18px;
`;
export const textoCaixa = styled.p`
  font-size: 15px;
  line-height: 20px;
  color: gray;
  font-family: "Palanquin Dark", Sans-serif;
`;

export const containerTexto = styled.div`
  background-color: purple;
  width: 70%;
  height: 600px;
  box-shadow: 0px 20px 20px gray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  padding-top: 80px;
`;
export const titulo = styled.h2`
  background-color: yellow;
  width: 60%;
  height: 150px;
`;
export const subtitulo = styled.h3`
  background-color: blueviolet;
  width: 80%;
  height: 50px;
`;
export const texto = styled.p``;
