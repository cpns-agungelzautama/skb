import styles from "./ResultCard.module.css";

function ResultCard() {
    return (
        <section className={styles.card}>

            <div className={styles.header}>

                <div className={styles.title}>
                    ✔ SELEKSI KOMPETENSI BIDANG
                </div>

                <div className={styles.badge}>
                    LULUS
                </div>

            </div>

            <hr />

            <h2>
                Selamat,
                <span> AGUNG ELZA UTAMA</span>!
            </h2>

            <p>
                Anda dinyatakan
                <strong> LULUS </strong>
                Seleksi Kompetensi Bidang CPNS Tahun 2026. Tahap selanjutnya adalah pengisian Daftar Riwayat Hidup (DRH)
                bagi peserta yang Lulus untuk diusulkan penetapan Nomor Induk PNS,
                harap memantau jadwal pengisian Daftar Riwayat Hidup.
            </p>

        </section>
    );
}

export default ResultCard;