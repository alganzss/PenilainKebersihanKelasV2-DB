import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Copy, Download, Check } from 'lucide-react';
import { useState } from 'react';
import { ReportData } from '../types';
import { getKategoriKebersihan } from '../utils/criteria';

interface ReportModalProps {
  open: boolean;
  onClose: () => void;
  reportData: ReportData | null;
}

export function ReportModal({ open, onClose, reportData }: ReportModalProps) {
  const [copied, setCopied] = useState(false);

  if (!reportData) return null;

  const generateReportText = () => {
    let report = `=== LAPORAN PENILAIAN KEBERSIHAN KELAS ===\n`;
    report += `MAN 1 KOTA BENGKULU\n\n`;
    report += `Kelas: ${reportData.kelas}\n`;
    report += `Tanggal: ${new Date(reportData.tanggal).toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })}\n`;
    report += `======================================\n\n`;

    reportData.detailPenilaian.forEach((kategori, index) => {
      report += `${index + 1}. ${kategori.nama}:\n`;
      let skorKategori = 0;

      kategori.items.forEach((item) => {
        const status = item.checked ? '✓' : '✗';
        const poin = item.checked ? item.points : 0;
        skorKategori += poin;
        report += `   ${status} ${item.text} (${poin} poin)\n`;
      });

      const maxSkor = kategori.items.length * 2;
      report += `   Subtotal: ${skorKategori}/${maxSkor} poin\n\n`;
    });

    report += `======================================\n`;
    report += `TOTAL SKOR: ${reportData.totalSkor}/100\n`;
    report += `KATEGORI: ${reportData.kategori}\n`;
    report += `======================================\n\n`;
    report += `Kepala Madrasah\n`;
    report += `Hendri Kuswiran, M.Pd.\n`;
    report += `NIP 197101122006041003`;

    return report;
  };

  const handleCopy = async () => {
    const text = generateReportText();
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const text = generateReportText();
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Laporan_Kebersihan_${reportData.kelas}_${reportData.tanggal}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl">Laporan Penilaian Kebersihan</DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto">
          <div className="bg-gray-100 rounded-lg p-6">
            <pre className="font-mono text-sm whitespace-pre-wrap leading-relaxed">
              {generateReportText()}
            </pre>
          </div>
        </div>

        <div className="flex gap-3 pt-4 border-t">
          <Button onClick={handleCopy} variant="outline" className="flex-1">
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Tersalin!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                Salin Laporan
              </>
            )}
          </Button>
          <Button onClick={handleDownload} variant="outline" className="flex-1">
            <Download className="w-4 h-4 mr-2" />
            Download TXT
          </Button>
          <Button onClick={onClose} className="flex-1 bg-blue-600 hover:bg-blue-700">
            Tutup
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
