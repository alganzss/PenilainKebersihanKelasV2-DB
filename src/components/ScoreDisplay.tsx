import { motion } from 'motion/react';
import { TrendingUp, Award, Target } from 'lucide-react';
import { getSkorColor, getKategoriKebersihan } from '../utils/criteria';

interface ScoreDisplayProps {
  totalSkor: number;
}

export function ScoreDisplay({ totalSkor }: ScoreDisplayProps) {
  const percentage = (totalSkor / 100) * 100;
  const kategori = getKategoriKebersihan(totalSkor);
  const colorClass = getSkorColor(totalSkor);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-lg">
      <div className={`bg-gradient-to-r ${colorClass} text-white p-6`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Award className="w-12 h-12" />
              </motion.div>
              <div>
                <h3 className="text-sm opacity-90">Total Skor Penilaian</h3>
                <div className="text-4xl mt-1">
                  {totalSkor}<span className="text-2xl">/100</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-sm opacity-90">Persentase</span>
                </div>
                <div className="text-3xl">{percentage}%</div>
              </div>

              <div className="text-center">
                <div className="flex items-center gap-2 mb-1">
                  <Target className="w-5 h-5" />
                  <span className="text-sm opacity-90">Kategori</span>
                </div>
                <div className="text-xl px-4 py-1 bg-white/20 rounded-full">
                  {kategori}
                </div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 bg-white/20 rounded-full h-3 overflow-hidden">
            <motion.div
              className="bg-white h-full rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
