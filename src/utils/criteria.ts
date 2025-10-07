import { Kategori } from '../types';

export const initialKriteria: Kategori[] = [
  {
    nama: "Kebersihan Lantai",
    items: [
      { text: "Lantai sudah disapu dan dipel", checked: false, points: 2 },
      { text: "Tidak ada jejak kaki/sepatu", checked: false, points: 2 },
      { text: "Tidak ada barang berserakan", checked: false, points: 2 },
      { text: "Tidak ada sampah", checked: false, points: 2 },
      { text: "Tidak ada genangan di lantai", checked: false, points: 2 }
    ]
  },
  {
    nama: "Kebersihan Meja dan Bangku Siswa",
    items: [
      { text: "Tidak ada sampah di kolong meja", checked: false, points: 2 },
      { text: "Tidak ada sampah di atas meja", checked: false, points: 2 },
      { text: "Tidak ada barang berserakan di meja", checked: false, points: 2 },
      { text: "Saat piket, kursi dinaikkan ke atas meja", checked: false, points: 2 },
      { text: "Meja dan kursi tertata rapi", checked: false, points: 2 }
    ]
  },
  {
    nama: "Kebersihan Papan Tulis dan Dinding",
    items: [
      { text: "Tidak ada coretan tidak penting di papan tulis", checked: false, points: 2 },
      { text: "Tidak ada noda/coretan di dinding", checked: false, points: 2 },
      { text: "Tidak ada cat dinding yang terkelupas", checked: false, points: 2 },
      { text: "Saklar bersih tidak ada debu/kotoran", checked: false, points: 2 },
      { text: "Stop kontak bersih tidak ada debu/kotoran", checked: false, points: 2 }
    ]
  },
  {
    nama: "Kebersihan Jendela dan Pintu",
    items: [
      { text: "Tidak ada noda/kotoran di jendela", checked: false, points: 2 },
      { text: "Tidak ada noda/kotoran di pintu", checked: false, points: 2 },
      { text: "Tidak ada kerusakan pintu yang disengaja", checked: false, points: 2 },
      { text: "Tidak ada kerusakan jendela yang disengaja", checked: false, points: 2 },
      { text: "Tidak ada stiker/tempelan yang tidak penting", checked: false, points: 2 }
    ]
  },
  {
    nama: "Kebersihan dan Kerapian Meja Guru",
    items: [
      { text: "Ada taplak meja", checked: false, points: 2 },
      { text: "Taplak meja dipasang rapi di meja", checked: false, points: 2 },
      { text: "Tersedianya tempat penyimpanan spidol, penghapus, dan ATK lainnya", checked: false, points: 2 },
      { text: "Tidak ada barang berserakan di atas meja", checked: false, points: 2 },
      { text: "Tidak ada barang berserakan di atas kursi", checked: false, points: 2 }
    ]
  },
  {
    nama: "Ketersediaan Peralatan Kebersihan",
    items: [
      { text: "Ada sapu", checked: false, points: 2 },
      { text: "Ada alat pel", checked: false, points: 2 },
      { text: "Ada ember", checked: false, points: 2 },
      { text: "Ada serokan", checked: false, points: 2 },
      { text: "Ada kemoceng", checked: false, points: 2 }
    ]
  },
  {
    nama: "Kelengkapan Administrasi Kelas",
    items: [
      { text: "Ada foto presiden dan wakil presiden", checked: false, points: 2 },
      { text: "Ada foto pancasila", checked: false, points: 2 },
      { text: "Ada jadwal piket", checked: false, points: 2 },
      { text: "Ada jadwal pelajaran", checked: false, points: 2 },
      { text: "Ada struktur kelas", checked: false, points: 2 }
    ]
  },
  {
    nama: "Kebersihan Loteng/Langit-langit",
    items: [
      { text: "Tidak ada sarang laba-laba", checked: false, points: 2 },
      { text: "Tidak ada debu", checked: false, points: 2 },
      { text: "Tidak ada coretan", checked: false, points: 2 },
      { text: "Tidak ada benda/kotoran yang menempel", checked: false, points: 2 },
      { text: "Tidak ada kerusakan yang disengaja", checked: false, points: 2 }
    ]
  },
  {
    nama: "Kebersihan Sudut Kelas",
    items: [
      { text: "Sudut kelas dalam keadaan rapi/tertata", checked: false, points: 2 },
      { text: "Jika ada lemari/loker siswa, barang-barang tersusun rapi", checked: false, points: 2 },
      { text: "Jika melepas sepatu, tersusun rapi di sudut kelas", checked: false, points: 2 },
      { text: "Jika ada tugas dari guru yang harus disimpan di dalam kelas, pastikan tersusun rapi", checked: false, points: 2 },
      { text: "Tidak ada bau/aroma tidak sedap disetiap sudut kelas", checked: false, points: 2 }
    ]
  },
  {
    nama: "Ketersediaan Keranjang Penyimpanan Handphone",
    items: [
      { text: "Digunakan sesuai fungsi awal", checked: false, points: 2 },
      { text: "Tidak untuk meletakkan alat tulis", checked: false, points: 2 },
      { text: "Tidak untuk meletakkan jurnal kelas", checked: false, points: 2 },
      { text: "Tidak untuk tempat arsip surat ketidakhadiran siswa", checked: false, points: 2 },
      { text: "Tidak untuk meletakkan barang lain ataupun barang pribadi", checked: false, points: 2 }
    ]
  }
];

export const getKategoriKebersihan = (skor: number): string => {
  if (skor >= 90) return 'SANGAT BERSIH';
  if (skor >= 80) return 'BERSIH';
  if (skor >= 70) return 'CUKUP BERSIH';
  if (skor >= 60) return 'KURANG BERSIH';
  return 'TIDAK BERSIH';
};

export const getSkorColor = (skor: number): string => {
  if (skor >= 90) return 'from-green-500 to-emerald-600';
  if (skor >= 80) return 'from-green-400 to-green-500';
  if (skor >= 70) return 'from-yellow-400 to-yellow-500';
  if (skor >= 60) return 'from-orange-400 to-orange-500';
  return 'from-red-500 to-red-600';
};
