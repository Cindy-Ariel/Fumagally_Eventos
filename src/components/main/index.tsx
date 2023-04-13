import * as S from "./style";

export const Main = () => {
  return (
    <S.main>
      <S.container>
        <S.containerTitulo>
          <S.titulo> Barracas para venda e aluguel.</S.titulo>
          <S.subtitulo> Barracas para feira e eventos.</S.subtitulo>
          <S.botao1>CONTATO</S.botao1>
          <S.botao2>EVENTOS</S.botao2>
        </S.containerTitulo>

        <S.containerCaixa>
          <S.caixa>
            <S.icone src="" alt=""></S.icone>
            <S.textoCaixa>TRANSPORTE MONTAGEM E DESMONTAGEM</S.textoCaixa>
          </S.caixa>

          <S.caixa>
            <S.icone src="" alt=""></S.icone>
            <S.textoCaixa>FABRICAÇÃO PRÓPRIA</S.textoCaixa>
          </S.caixa>

          <S.caixa>
            <S.icone src="" alt=""></S.icone>
            <S.textoCaixa>QUALIDADE ELEVADA</S.textoCaixa>
          </S.caixa>
        </S.containerCaixa>
      </S.container>
    </S.main>
  );
};
