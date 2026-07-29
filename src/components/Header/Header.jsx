import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <img
            src="/images/logo-bkn.png"
            alt="BKN"
          />

          <div>
            <h1>HASIL SELEKSI SKB CPNS</h1>

            <p>
              Sistem Seleksi Calon Aparatur Sipil Negara
              Tahun Anggaran 2026
            </p>
          </div>
        </div>

        <div className={styles.user}>
          <span>👤</span>

          Agung Elza Utama
        </div>
      </div>
    </header>
  );
}

export default Header;