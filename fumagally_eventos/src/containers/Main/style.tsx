import styled from "styled-components";

export const Main = styled.main`
width: 100vw;
height: 100vh;
background-color: purple;


`
export const Fundo_Imagem = styled.img`
width: 100vw;
height: 100vh;
position: absolute;
background-color: orange;
`

export const Fundo_Branco = styled.div`
width: 100vw;
height: 100vh;
background-color: #36b310;
position: absolute;
display: flex;
align-items: flex-end;
clip-path: polygon(0 0, 31% 0, 62% 100%, 0% 100%);
`

export const Conteudo_Principal = styled.div`
padding: 50px;
width: 35%;
height: 60%;
display: flex;
position: relative;
flex-direction: column;
background-color: blue;

`
export const Titulo = styled.h1 `
width: 100%;
height: 150px;
background-color: yellow;
`

export const Subtitulo = styled.p`
width: 100%;
height: 30px;
background-color: orange;
margin-top:5%;
`
export const Botao =styled.button`
width: 30%;
height: 50px;
position: absolute;
background-color: aqua;
bottom: 20%;

`