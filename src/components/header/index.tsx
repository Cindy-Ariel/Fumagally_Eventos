import * as S from "./style";

export const Header = () => {
  return (
    <S.header>
      <S.logo src="/logo2.png" />

      <S.navegacao>
        <S.ul>
          <li>PROMOÇÕES</li>
          <li>TOPICOS</li>
          <li>SERVIÇOS</li>
          <li>PERGUNTAS</li>
          <li>EVENTOS</li>
          <S.botao>CONTATO</S.botao>
        </S.ul>
      </S.navegacao>
    </S.header>
  );
};
