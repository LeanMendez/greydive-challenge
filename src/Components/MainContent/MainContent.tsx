import Tasks from "../Tasks/Tasks";

import styles from "./styles/MainContent.module.scss";

export interface IClientTest {
  timeTest: string;
  plataforma: string;
  linkVideo: string;
  transcripcion: string;
  preguntas: {
    tiempo: string;
    tipoTarea: string;
    respuesta: string;
    texto: string;
    link?: string;
  }[];
  horarioEnvio: {seconds: number; nanoseconds: number};
  idVideo: string;
  response: {status: number; data: string};
  id: string;
  escenario: string;
  link: string;
  cliente: string;
}

interface IContentType {
  data: IClientTest;
}

const MainContent: React.FC<IContentType> = ({data}) => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>
        {data.cliente[0].toLocaleUpperCase() + data.cliente.substring(1)}
      </h1>
      <div className={styles.subtitlesContainer}>
        <h3 className={styles.subtitle}>Testeador N°1</h3>
        <h3 className={styles.subtitle}>
          Test:<span className={styles.description}>Test de usabilidad del sitio</span>
        </h3>
      </div>

      <video controls className={styles.video} src={data.linkVideo} />
      <div className={styles.transcriptionContainer}>
        <h2 className={styles.transcription}>TRANSCRIPCION</h2>
        <p className={styles.transcriptionContent}>{data.transcripcion}</p>
      </div>
      <Tasks dataTasks={data} />
    </main>
  );
};

export default MainContent;
