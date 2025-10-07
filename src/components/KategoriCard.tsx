import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Kategori } from '../types';

interface KategoriCardProps {
  kategori: Kategori;
  index: number;
  onItemCheck: (kategoriIndex: number, itemIndex: number, checked: boolean) => void;
}

export function KategoriCard({ kategori, index, onItemCheck }: KategoriCardProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const skorKategori = kategori.items.reduce((sum, item) => 
    sum + (item.checked ? item.points : 0), 0
  );

  const maxSkorKategori = kategori.items.length * 2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Card className="overflow-hidden border-2 hover:shadow-lg transition-all duration-300">
        <CardHeader 
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">
              {kategori.nama}
            </CardTitle>
            <div className="flex items-center gap-3">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                {skorKategori}/{maxSkorKategori}
              </span>
              {isExpanded ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </div>
          </div>
        </CardHeader>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <CardContent className="pt-4 pb-2">
                <div className="space-y-3">
                  {kategori.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className={`flex items-start gap-3 p-3 rounded-lg border transition-all duration-200 ${
                        item.checked 
                          ? 'bg-green-50 border-green-200' 
                          : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      <Checkbox
                        id={`checkbox-${index}-${itemIndex}`}
                        checked={item.checked}
                        onCheckedChange={(checked) => 
                          onItemCheck(index, itemIndex, checked as boolean)
                        }
                        className="mt-0.5"
                      />
                      <label
                        htmlFor={`checkbox-${index}-${itemIndex}`}
                        className="flex-1 text-sm cursor-pointer leading-relaxed"
                      >
                        {item.text}
                      </label>
                      <span className="bg-blue-500 text-white px-2 py-0.5 rounded-full text-xs shrink-0">
                        {item.points} pts
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
}
