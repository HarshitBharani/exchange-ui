import logo from "../../images/logo.png";
import styles from "./nav.module.css";
export const Navbar = () => {
  return (
    <nav>
      <ul className={styles.navUl}>
        <li className={styles.logo}>
          <img src={logo} alt="" />
        </li>
        <li className={styles.listElement}>Trade</li>
        <li className={styles.listElement}>Earn</li>
        <li className={styles.listElement}>Support</li>
        <li className={styles.listElement}>About</li>
        <li className={styles.navButton}>
          <button>Connect Wallet</button>
        </li>
      </ul>
    </nav>
  );
};
