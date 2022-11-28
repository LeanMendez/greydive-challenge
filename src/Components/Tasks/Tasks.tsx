import {IClientTest} from "../MainContent/MainContent";
import Task from "../Task/Task";

import styles from "./styles/Tasks.module.scss";

interface dataTasks {
  dataTasks: IClientTest;
}

const Tasks: React.FC<dataTasks> = ({dataTasks}) => {
  return (
    <main className={styles.container}>
      <>
        <h2 className={styles.title}>TAREAS</h2>
        <h3 className={styles.subtitle}>Escenario</h3>
        <p className={styles.description}>{dataTasks.escenario}</p>
        {dataTasks.preguntas.map((task, index) => {
          return <Task key={index} data={{...task, index}} />;
        })}
      </>
    </main>
  );
};

export default Tasks;
