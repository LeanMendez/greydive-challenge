import {Link} from "react-router-dom";

import "../styles/Globals.scss";
import styles from "../styles/Home.module.scss";
import data from "../Data/Data.json";

const Home: React.FC = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Lista de test realizados</h1>
      <ul>
        {data.map((item) => {
          return (
            <li key={item.cliente} className={styles.link}>
              <Link to={`/tests/${item.cliente}`}>Test de la empresa {item.cliente}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Home;
