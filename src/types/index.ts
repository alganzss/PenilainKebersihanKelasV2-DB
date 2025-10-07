export interface KriteriaItem {
  text: string;
  checked: boolean;
  points: number;
}

export interface Kategori {
  nama: string;
  items: KriteriaItem[];
}

export interface ReportData {
  id?: string;
  kelas: string;
  tanggal: string;
  totalSkor: number;
  kategori: string;
  detailPenilaian: Kategori[];
  timestamp: string;
}
