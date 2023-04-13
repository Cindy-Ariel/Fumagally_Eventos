import styled from "styled-components";

export const main = styled.main`
  width: 100%;
  height: 700px;
  background-image: url("/fundo.jpg");
  background-color: rgba(255, 0, 0, 0.5);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const container = styled.div`
  background-color: aqua;
  width: 100%;
  height: 650px;
  padding: 50px;
`;
export const containerTitulo = styled.div`
  background-color: pink;
  width: 60%;
  min-width: 479px;
  height: 320px;
  line-height: 80px;
`;

export const titulo = styled.h1`
  background-color: green;
  color: white;
  font-size: 65px;
  font-family: "STIX Two Text", serif;
`;

export const subtitulo = styled.h3`
  background-color: red;
  color: #54595f;
  height: auto;
  font-size: 30px;
  font-weight: 500;
  font-family: "Palanquin", sans-serif;
  line-height: 40px;
`;

export const botao1 = styled.button`
  background-color: yellow;
  width: 130px;
  height: 50px;
  margin-right: 10px;
  font-family: "Palanquin", sans-serif;
  font-size: 1em;
  font-weight: 900;
  color: gray;
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  border-color: yellow;
  border-radius: 100px 100px 100px 100px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
`;
export const botao2 = styled.button`
  background-color: transparent;
  width: 130px;
  height: 50px;
  margin-right: 10px;
  margin-top: 30px;
  font-family: "Palanquin", sans-serif;
  font-size: 1em;
  font-weight: 900;
  color: yellow;
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  border-color: yellow;
  border-radius: 100px 100px 100px 100px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
`;

export const containerCaixa = styled.div`
  background-color: orange;
  width: 100%;
  height: 270px;
  display: flex;
  justify-content: space-between;
`;

export const caixa = styled.div`
  background-color: blue;
  width: 100%;
  height: 260px;
  margin-right: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 5px black;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const icone = styled.img`
  background-color: black;
  width: 150px;
  height: 100px;
`;

export const textoCaixa = styled.div`
  background-color: violet;
  width: 250px;
  height: 80px;
  color: #ffffff;
  font-family: "Palanquin Dark", Sans-serif;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  line-height: 1.1em;
  letter-spacing: 4px;
`;
