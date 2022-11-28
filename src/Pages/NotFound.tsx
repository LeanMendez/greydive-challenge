import {Link} from "react-router-dom";

import styles from "../styles/NotFound.module.scss";

function NotFound() {
  return (
    <main className={styles.notFound}>
      <h1 className={styles.title}>PAGE NOT FOUND</h1>
      <img alt="not found image" className={styles.image} src="/public/404-error.png" />
      <p>
        This page doesn&apos;t exists, please come back to the <Link to="/">Home Page!</Link>
      </p>
    </main>
  );
}
export default NotFound;
