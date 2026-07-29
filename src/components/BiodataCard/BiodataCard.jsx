import styles from "./BiodataCard.module.css";
import peserta from "../../data/peserta";
import InfoRow from "../InfoRow/InfoRow";

function BiodataCard() {

  const leftData = [

    {
      label:"Jenis Seleksi",
      value:peserta.jenisSeleksi
    },

    {
      label:"Nama Instansi",
      value:peserta.instansi
    },

    {
      label:"Jabatan (Jenis Formasi)",
      value:peserta.jabatan
    },

    {
      label:"Lokasi Formasi",
      value:peserta.lokasiFormasi
    },

    {
      label:"Lokasi Test CAT",
      value:peserta.lokasiCAT
    },

    {
      label:"Gelar Depan Ijazah",
      value:peserta.GelarDepanIjazah
    },

    {
      label:"Nama Sesuai Ijazah",
      value:peserta.NamaSesuaiIjazah
    },

    {
      label:"Gelar Belakang Ijazah",
      value:peserta.GelarBelakangIjazah
    },

    {
      label:"Tempat Lahir Sesuai Ijazah",
      value:peserta.TempatLahirSesuaiIjazah
    },

    {
      label:"Tanggal Lahir Sesuai Ijazah",
      value:peserta.TanggalLahirSesuaiIjazah
    },

    {
      label:"Nama PT/Sekolah",
      value:peserta.NamaPTatauSekolah
    },

    {
      label:"Pendidikan",
      value:peserta.Pendidikan
    },

    {
      label:"Tahun Lulus",
      value:peserta.TahunLulus
    },

    {
      label:"No. Ijazah",
      value:peserta.NoIjazah
    },

    {
      label:"Tanggal Ijazah",
      value:peserta.TanggalIjazah
    },

    {
      label:"IPK/Nilai",
      value:peserta.IPKatauNilai
    }


  ];

  const rightData=[

    {
      label:"NIK",
      value:peserta.nik
    },

    {
      label:"Nama",
      value:peserta.nama
    },

    {
      label:"Tempat / Tanggal Lahir",
      value:`${peserta.tempatLahir}, ${peserta.tanggalLahir}`
    },

    {
      label:"Jenis Kelamin",
      value:peserta.jenisKelamin
    },

    {
      label:"Agama",
      value:peserta.agama
    },

    {
      label:"Status",
      value:peserta.status
    },

    {
      label:"Alamat",
      value:peserta.alamat
    },

    {
      label:"Kabupaten",
      value:peserta.kabupaten
    },

    {
      label:"Provinsi",
      value:peserta.provinsi
    },

    {
      label:"Email",
      value:peserta.email
    },

    {
      label:"No HP",
      value:peserta.hp
    },

    {
      label:"Non DisabilitasP",
      value:peserta.disabilitas
    }

  ];

  return(

      <section className={styles.card}>

  <div className={styles.wrapper}>

    <div className={styles.photo}>
      <img
        src={peserta.foto}
        alt={peserta.nama}
      />
    </div>

    <div className={styles.content}>

      <div>
        {leftData.map((item) => (
          <InfoRow
            key={item.label}
            label={item.label}
            value={item.value}
          />
        ))}
      </div>

      <div>
        {rightData.map((item) => (
          <InfoRow
            key={item.label}
            label={item.label}
            value={item.value}
          />
        ))}
      </div>

    </div>

  </div>

</section>

  );

}

export default BiodataCard;