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
background-image: url("https://images.pexels.com/photos/1478685/pexels-photo-1478685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
background-repeat: no-repeat;
background-size: cover;
`

export const Fundo_Branco = styled.div`
width: 100vw;
height: 100vh;
background-color: white;
position: absolute;
display: flex;
align-items: flex-end;
clip-path: polygon(0 0, 31% 0, 50% 100%, 0% 100%);


`
export const Sombra = styled.span`   
filter: drop-shadow(10px -2rem 1rem rgba(0,0,0,0.5));
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