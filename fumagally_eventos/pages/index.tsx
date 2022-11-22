import { Main } from "../src/containers/Main";
import { Header } from "../src/components/Header";
import styles from "../styles/Home.module.css";
import { Produtos } from "../src/containers/Products";

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Produtos/>
    </div>
  );
}
