import * as S from "./style";

export const Header = () => {
  return (
    <>
      <S.Linha_Superior_Header>
        <span> Montagem e desmontagem GRATIS para Belo Horizonte!</span>
        <span> <S.Icone_Whats /> (31) 9399-1156</span>
      </S.Linha_Superior_Header>


      <S.Header>
        <S.Logo src="" alt="imagem da logo" />
        <S.Menu_Navegacao>
          <S.Menu_Item />
          <S.Menu_Item />
          <S.Menu_Item />
          <S.Menu_Item />
          <S.Menu_Item />
        </S.Menu_Navegacao>
        <S.Login_Cadastro_Box />
      </S.Header>


    </>
  );
};
