import styled from "styled-components";

export const containerGeral = styled.div`
  background-color: green;
  width: 100%;
  height: 800px;
  display: flex;
  padding: 50px;
`;
export const container = styled.div`
  background-color: orange;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  padding-top: 50px;
`;
export const titulo = styled.h2`
  background-color: aqua;
  width: 80%;
  height: 20%;
  color: #3a1484;
  font-family: "Palanquin Dark", Sans-serif;
  font-size: 2.4rem;
  font-weight: 900;
  line-height: 1em;
  letter-spacing: 2px;
`;
export const bordaTopo = styled.div`
  width: 100%;
  height: 9px;
  background-image: linear-gradient(to right, yellow 0%, 10%, transparent 10%);
`;

export const subtitulo = styled.h3`
  height: 60px;
  padding-top: 10px;
  color: #54595f;
  font-family: "Palanquin", Sans-serif;
  font-size: 1em;
`;

export const texto = styled.p`
  width: 80%;
  height: 80%;
  background-color: rosybrown;
  font-size: 20px;
  color: #54595f;
  font-family: "Palanquin", Sans-serif;
  font-size: 1em;
  font-weight: 400;
  line-height: 25px;
  border-left: 10px;
  border-color: yellow;
  padding-top: 20px;
  padding-right: 30px;
  border-right: 8px solid yellow;
`;
export const containerCaixas = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  box-shadow: 0px 20px 20px gray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const caixa = styled.div`
  background-color: purple;
  width: 85%;
  height: 30%;
  display: flex;
  border-radius: 10px;
  border-color: black;
  padding: 5px;
  margin: 10px;
  box-shadow: 7px 5px 8px rgba(0, 0, 0, 0.2);
`;
export const imagem = styled.img`
  width: 40%;
  height: 100%;
`;

export const caixaIconTituloTexto = styled.div`
  width: 70%;
  height: 100%;
`;

export const iconCaixa = styled.img``;
export const tituloCaixa = styled.h2`
  background-color: bisque;
  width: 100%;
  height: 35%;

  padding-right: 10px;
  padding-left: 10px;
`;
export const textoCaixa = styled.p`
  padding-right: 10px;
  padding-left: 10px;
  font-size: 15px;
`;
