import styles from "./Header.module.css";

import headerLogo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.img} src={headerLogo} alt="Huddle" />
    </header>
  );
};

export default Header;
