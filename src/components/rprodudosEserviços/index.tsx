import * as S from "./style";

export const ProdutosEservicos = () => {
  return (
    <div>
      <S.containerGeral>
        <S.container>
          <S.titulo>PRODUTOS E SERVIÇOS</S.titulo>
          <S.bordaTopo></S.bordaTopo>
          <S.subtitulo>COMPRAR OU ALUGAR ?</S.subtitulo>
          <S.texto>
            Comprar barracas pode ser uma boa opção se você planeja usá-las
            frequentemente . Além disso, ao comprar barracas, você pode
            economizar dinheiro a longo prazo. No entanto, comprar barracas pode
            ser um investimento inicial mais caro e você precisará se preocupar
            com o armazenamento e manutenção das barracas. Alugar barracas
            também é uma boa opção se você precisar de vários tipos de barracas
            diferentes para diferentes eventos. Além disso, ao alugar barracas,
            você não precisará se preocupar com a manutenção das barracas e elas
            serão entregues e montadas para você. Em resumo, a decisão de
            comprar ou alugar barracas dependerá de suas necessidades
            específicas e do uso que você pretende dar às barracas. Se você
            tiver dúvidas, não hesite em entrar em contato conosco para obter
            mais informações e ajuda na escolha da melhor opção para você.
          </S.texto>
        </S.container>
        <S.containerCaixas>
          <S.caixa>
            <S.imagem src="/barracaPlanta.webp"></S.imagem>
            <S.caixaIconTituloTexto>
              <S.iconCaixa></S.iconCaixa>
              <S.tituloCaixa>BARRACA TIPO FEIRA VERDE</S.tituloCaixa>
              <S.textoCaixa>
                Barraca desmontável com a estrutura tubular de aço tratado e
                galvanizado, lona verde KP 500, anti chamas , 04 aguas com
                varanda e balcão. TAMANHOS 2X2 E 1,5X,1,5
              </S.textoCaixa>
            </S.caixaIconTituloTexto>
          </S.caixa>

          <S.caixa>
            <S.imagem src="/barracamarron.webp"></S.imagem>
            <S.caixaIconTituloTexto>
              <S.iconCaixa></S.iconCaixa>
              <S.tituloCaixa>BARRACA TIPO FEIRA MARROM</S.tituloCaixa>
              <S.textoCaixa>
                Barraca desmontável com a estrutura tubular de aço tratado e
                galvanizado, lona marrom KP 500, anti chamas , 04 aguas, balcão.
                TAMANHOS 2X2.
              </S.textoCaixa>
            </S.caixaIconTituloTexto>
          </S.caixa>

          <S.caixa>
            <S.imagem src="/tenda.jpg"></S.imagem>
            <S.caixaIconTituloTexto>
              <S.iconCaixa></S.iconCaixa>
              <S.tituloCaixa>TENDA</S.tituloCaixa>
              <S.textoCaixa>
                Tenda desmontável com a estrutura tubular de aço tratado e
                galvanizado, lona KP 1000, anti chamas , 04 aguas,. TAMANHOS 4×4
              </S.textoCaixa>
            </S.caixaIconTituloTexto>
          </S.caixa>
        </S.containerCaixas>
      </S.containerGeral>
    </div>
  );
};
