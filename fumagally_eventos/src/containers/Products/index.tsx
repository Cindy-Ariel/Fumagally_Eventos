import * as S from "./style";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {ImgMediaCard} from "../../components/Card";

export const Produtos = () => {
    const [abaAtual, setAbaAtual] = useState(0);

    const mudarAba = (event: React.SyntheticEvent, newValue: number) => {
        setAbaAtual(newValue);
    };
  
  return (
    <S.Section_Produtos>
      
      
        <Tabs value={abaAtual} onChange={mudarAba} aria-label="basic tabs example">
          <Tab label="Item zero"  id="simple-tab-0" aria-controls="simple-tabpanel-0"/>
          <Tab label="Item one" id="simple-tab-1" aria-controls="simple-tabpanel-1" />
          <Tab label="Item two"  id="simple-tab-2" aria-controls="simple-tabpanel-2" />
          <Tab label="Item three"  id="simple-tab-3" aria-controls="simple-tabpanel-3" />
          <Tab label="Item fuor"  id="simple-tab-4" aria-controls="simple-tabpanel-4" />
        </Tabs>
      
      { abaAtual === 0 && <S.barracas>
        
        <ImgMediaCard/>
        <ImgMediaCard/>
        <ImgMediaCard/>
      
        <ImgMediaCard/>
        <ImgMediaCard/>
        <ImgMediaCard/>
        
        
      </S.barracas>}
        
      { abaAtual === 1 && <S.barracas>
        
        <ImgMediaCard/>
        <ImgMediaCard/>
        <ImgMediaCard/>
      
        <ImgMediaCard/>
        <ImgMediaCard/>
        <ImgMediaCard/>
        
        
      </S.barracas>}

      { abaAtual === 2 && <S.barracas>
        
        <ImgMediaCard/>
        <ImgMediaCard/>
        <ImgMediaCard/>
      
        <ImgMediaCard/>
        <ImgMediaCard/>
        <ImgMediaCard/>
        
        
      </S.barracas>}

      { abaAtual === 3 && <S.barracas>
        
        <ImgMediaCard/>
        <ImgMediaCard/>
        <ImgMediaCard/>
      
        <ImgMediaCard/>
        <ImgMediaCard/>
        <ImgMediaCard/>
        
        
      </S.barracas>}

      { abaAtual === 4 && <S.barracas>
        
        <ImgMediaCard/>
        <ImgMediaCard/>
        <ImgMediaCard/>
      
        <ImgMediaCard/>
        <ImgMediaCard/>
        <ImgMediaCard/>
        
        
      </S.barracas>}
    </S.Section_Produtos>
  );
};
