import styles from "./InfoRow.module.css";

function InfoRow({ label, value }) {
  return (
    <div className={styles.row}>
      <div className={styles.label}>{label}</div>

      <div className={styles.separator}>:</div>

      <div className={styles.value}>{value}</div>
    </div>
  );
}

export default InfoRow;