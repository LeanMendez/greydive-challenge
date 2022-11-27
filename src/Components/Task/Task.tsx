import styles from "./styles/Task.module.scss";

interface ITask {
  data: {
    tiempo: string;
    tipoTarea: string;
    respuesta: string;
    texto: string;
    link?: string;
    index: number;
  };
}

const Task: React.FC<ITask> = ({data}) => {
  return (
    <article className={styles.task}>
      <h3 className={styles.title}>Tarea {data.index + 1} </h3>
      <div className={styles.durationContainer}>
        <p className={styles.description}>{data.texto}</p>
        <p className={styles.response}>
          Respuesta: <span className={styles.answer}>{data.respuesta}</span>
        </p>
        <p className={styles.duration}>
          Duración de la tarea <span className={styles.time}>{data.tiempo}</span>
        </p>
      </div>
    </article>
  );
};

export default Task;
