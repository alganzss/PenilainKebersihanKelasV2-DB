import { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { 
  ClipboardCheck, 
  RotateCcw, 
  FileText, 
  Save,
  Building2,
  CalendarDays
} from 'lucide-react';
import { KategoriCard } from './components/KategoriCard';
import { ScoreDisplay } from './components/ScoreDisplay';
import { ReportModal } from './components/ReportModal';
import { ReportHistory } from './components/ReportHistory';
import { initialKriteria, getKategoriKebersihan } from './utils/criteria';
import { Kategori, ReportData } from './types';
import { projectId, publicAnonKey } from './utils/supabase/info';
import { toast } from 'sonner@2.0.3';

export default function App() {
  const [kelas, setKelas] = useState('');
  const [tanggal, setTanggal] = useState(new Date().toISOString().split('T')[0]);
  const [kriteria, setKriteria] = useState<Kategori[]>(initialKriteria);
  const [showReportModal, setShowReportModal] = useState(false);
  const [currentReport, setCurrentReport] = useState<ReportData | null>(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [saving, setSaving] = useState(false);

  const calculateTotalScore = () => {
    return kriteria.reduce((total, kategori) => 
      total + kategori.items.reduce((sum, item) => 
        sum + (item.checked ? item.points : 0), 0
      ), 0
    );
  };

  const totalSkor = calculateTotalScore();

  const handleItemCheck = (kategoriIndex: number, itemIndex: number, checked: boolean) => {
    const newKriteria = [...kriteria];
    newKriteria[kategoriIndex].items[itemIndex].checked = checked;
    setKriteria(newKriteria);
  };

  const handleReset = () => {
    if (confirm('Apakah Anda yakin ingin mereset semua data?')) {
      setKriteria(initialKriteria);
      setKelas('');
      setTanggal(new Date().toISOString().split('T')[0]);
      toast.success('Form berhasil direset');
    }
  };

  const handleGenerateReport = async () => {
    if (!kelas.trim()) {
      toast.error('Mohon isi nama kelas terlebih dahulu!');
      return;
    }

    if (!tanggal) {
      toast.error('Mohon pilih tanggal penilaian!');
      return;
    }

    const reportData: ReportData = {
      kelas,
      tanggal,
      totalSkor,
      kategori: getKategoriKebersihan(totalSkor),
      detailPenilaian: kriteria,
      timestamp: new Date().toISOString()
    };

    setCurrentReport(reportData);
    setShowReportModal(true);
  };

  const handleSaveReport = async () => {
    if (!kelas.trim()) {
      toast.error('Mohon isi nama kelas terlebih dahulu!');
      return;
    }

    if (!tanggal) {
      toast.error('Mohon pilih tanggal penilaian!');
      return;
    }

    setSaving(true);
    
    try {
      const reportData: ReportData = {
        kelas,
        tanggal,
        totalSkor,
        kategori: getKategoriKebersihan(totalSkor),
        detailPenilaian: kriteria,
        timestamp: new Date().toISOString()
      };

      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-53beb880/save-report`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(reportData)
        }
      );

      if (response.ok) {
        const data = await response.json();
        toast.success('Laporan berhasil disimpan ke database!');
        setRefreshTrigger(prev => prev + 1);
        
        // Reset form setelah save
        setKriteria(initialKriteria);
        setKelas('');
        setTanggal(new Date().toISOString().split('T')[0]);
      } else {
        const error = await response.json();
        toast.error(`Gagal menyimpan: ${error.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error saving report:', error);
      toast.error('Terjadi kesalahan saat menyimpan laporan');
    } finally {
      setSaving(false);
    }
  };

  const handleViewReport = (report: ReportData) => {
    setCurrentReport(report);
    setShowReportModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-8 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <ClipboardCheck className="w-10 h-10" />
              <h1 className="text-4xl">Penilaian Kebersihan Kelas</h1>
            </div>
            <p className="text-xl opacity-90">MAN 1 Kota Bengkulu</p>
          </motion.div>
        </div>
      </div>

      {/* Score Display */}
      <ScoreDisplay totalSkor={totalSkor} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Tabs defaultValue="penilaian" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="penilaian">Penilaian</TabsTrigger>
            <TabsTrigger value="riwayat">Riwayat</TabsTrigger>
          </TabsList>

          <TabsContent value="penilaian" className="space-y-6">
            {/* Input Section */}
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
                <CardTitle>Informasi Penilaian</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="kelas" className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      Kelas
                    </Label>
                    <Input
                      id="kelas"
                      value={kelas}
                      onChange={(e) => setKelas(e.target.value)}
                      placeholder="Contoh: X IPA 1"
                      className="text-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tanggal" className="flex items-center gap-2">
                      <CalendarDays className="w-4 h-4" />
                      Tanggal
                    </Label>
                    <Input
                      id="tanggal"
                      type="date"
                      value={tanggal}
                      onChange={(e) => setTanggal(e.target.value)}
                      className="text-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <div className="space-y-4">
              {kriteria.map((kategori, index) => (
                <KategoriCard
                  key={index}
                  kategori={kategori}
                  index={index}
                  onItemCheck={handleItemCheck}
                />
              ))}
            </div>

            {/* Action Buttons */}
            <Card className="shadow-lg bg-gradient-to-r from-gray-50 to-gray-100">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button
                    onClick={handleReset}
                    variant="outline"
                    className="h-14 text-lg"
                    size="lg"
                  >
                    <RotateCcw className="w-5 h-5 mr-2" />
                    Reset Form
                  </Button>
                  <Button
                    onClick={handleGenerateReport}
                    variant="outline"
                    className="h-14 text-lg"
                    size="lg"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Lihat Laporan
                  </Button>
                  <Button
                    onClick={handleSaveReport}
                    className="h-14 text-lg bg-green-600 hover:bg-green-700"
                    size="lg"
                    disabled={saving}
                  >
                    <Save className="w-5 h-5 mr-2" />
                    {saving ? 'Menyimpan...' : 'Simpan ke Database'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="riwayat">
            <ReportHistory 
              onViewReport={handleViewReport}
              refreshTrigger={refreshTrigger}
            />
          </TabsContent>
        </Tabs>
      </div>

      {/* Report Modal */}
      <ReportModal
        open={showReportModal}
        onClose={() => setShowReportModal(false)}
        reportData={currentReport}
      />
    </div>
  );
}
