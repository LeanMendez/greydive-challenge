import styles from "./styles/Navbar.module.scss";

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <a href="https://www.greydive.com/">
        <img
          alt="Logo-greydive"
          className={styles.logo}
          src="https://uploads-ssl.webflow.com/612fcc289671bc539ecd004e/612ff6936ef1a98f2a9b29cf_logo-greydive-gris.png"
          width="270px"
        />
      </a>
    </div>
  );
};

export default Navbar;
