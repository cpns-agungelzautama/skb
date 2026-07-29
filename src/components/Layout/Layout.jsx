import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <main className={styles.wrapper}>
      {children}
    </main>
  );
}

export default Layout;