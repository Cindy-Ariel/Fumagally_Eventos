import * as S from "./style";

export const Post = () => {
  return (
    <div>
      <S.containerGeral>
        <S.container>
          <S.containerTitulo>
            <S.titulo>POST DO DIA</S.titulo>
          </S.containerTitulo>
          <S.bordaTopo></S.bordaTopo>

          <S.texto>
            Estamos com uma promoção para um pacote de aluguel de 05 diárias em
            locais diferentes escolhido pela nossa equipe, os locais ainda não
            foram divulgados mas garantimos que serão os melhores eventos de
            Belo Horizonte e com um precinho ótimo para vocês. No valor estará
            incluso transporte , montagem e desmontagem. Entre em contato para
            não ficar de fora dessa.
          </S.texto>
          <div>
            <S.botao1>SAIBA MAIS</S.botao1>
            <S.botao2>EVENTOS</S.botao2>
          </div>
        </S.container>

        <S.containerImagem>
          <S.imagem></S.imagem>
        </S.containerImagem>
      </S.containerGeral>
    </div>
  );
};
