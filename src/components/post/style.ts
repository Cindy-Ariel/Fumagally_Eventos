import styled from "styled-components";

export const containerGeral = styled.div`
  background-color: green;
  width: 100%;
  height: 700px;
  display:flex;
  padding: 50px;

`;
export const container = styled.div`
  background-color: orange;
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  padding-top: 80px;

`;
export const containerTitulo = styled.div`
  background-color: aqua;
  width: 60%;
  height: 150px;
`  

 export const titulo = styled.h2`
  width: 100%;
  font-size: 40px;
  color: #3a1484;
  font-family: "Palanquin Dark", Sans-serif;
  font-size: 3.8rem;
  font-weight: 900;
  line-height: 0.9em;
  letter-spacing: 2px;
`;

export const bordaTopo = styled.div`
    width: 100%; 
    height: 9px; 
    background-image: linear-gradient(to right, #000 0%, #000 10%, transparent 10%);
`;


export const texto = styled.p`
  width: 80%;
  background-color: rosybrown;
  font-size: 20px;
  color: #54595f;
  font-family: "Palanquin", Sans-serif;
  font-size: 1em;
  font-weight: 400;
  line-height: 25px;
  border-left: 10px;
  border-color: yellow;
  border-right: 8px solid yellow;
  padding-top:10px;

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

export const containerImagem = styled.div`
background-color: purple;
width: 100%;
height: 100%;
box-shadow: 0px 20px 20px gray;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;

`
export const imagem = styled.img`
background-color: black;
width: 90%;
height: 90%;
margin: 10px;
`