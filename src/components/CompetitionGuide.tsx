import { motion } from 'motion/react';
import { QrCode, FileText, ClipboardList, Users, Cloud, BookOpen } from 'lucide-react';
import qrCode1 from 'figma:asset/24251c3ac8f3897609fbe6b67c9b15ac120a19f6.png';
import qrCode2 from 'figma:asset/a5035cd5f49ed052255b793e0d51c5dcf317f374.png';
import qrCode3 from 'figma:asset/8adbedda45733b691e2fd8d7fd06c23b0a19f8a0.png';
import qrCode4 from 'figma:asset/3705a80efe33ad490a8a41cd925465dc97c86514.png';

function CloudElement({ delay, duration, yOffset }: { delay: number; duration: number; yOffset: number }) {
  return (
    <motion.div
      className="absolute opacity-70"
      style={{ top: `${yOffset}%` }}
      initial={{ x: '-20%' }}
      animate={{ x: '120%' }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "linear"
      }}
    >
      <Cloud className="text-white/40" size={80} fill="currentColor" />
    </motion.div>
  );
}

function WaveLayer({ delay, className }: { delay: number; className: string }) {
  return (
    <motion.div
      className={`absolute bottom-0 left-0 right-0 ${className}`}
      style={{
        height: '150px',
      }}
      animate={{
        x: [0, -50, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
    >
      <svg
        viewBox="0 0 1440 150"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0,50 C240,100 480,0 720,50 C960,100 1200,0 1440,50 L1440,150 L0,150 Z"
          className="fill-current"
        />
      </svg>
    </motion.div>
  );
}

interface QRCodeCardProps {
  title: string;
  description: string;
  qrImage: string;
  icon: React.ReactNode;
  delay: number;
}

function QRCodeCard({ title, description, qrImage, icon, delay }: QRCodeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border-2 border-blue-400/40 hover:border-blue-500/70 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30"
    >
      <div className="flex flex-col items-center space-y-6">
        {/* Icon */}
        <motion.div
          className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center"
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-blue-600">
            {icon}
          </div>
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-blue-600 text-center">
          {title}
        </h3>

        {/* QR Code Image */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img 
            src={qrImage} 
            alt={title}
            className="w-64 h-64 object-contain"
            style={{ imageRendering: 'pixelated' }}
          />
        </motion.div>

        {/* Description */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 text-blue-600 text-sm">
            <QrCode size={16} />
            <span>Scan QR Code di atas</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function CompetitionGuide() {
  const qrCodes = [
    {
      title: "Juknis Lomba Essay",
      description: "",
      qrImage: qrCode1,
      icon: <FileText size={32} />,
    },
    {
      title: "Juknis Lomba Maskot",
      description: "",
      qrImage: qrCode2,
      icon: <ClipboardList size={32} />,
    },
    {
      title: "Juknis Lomba Ranking 1",
      description: "",
      qrImage: qrCode3,
      icon: <Users size={32} />,
    },
    {
      title: "Juknis Lomba Dongeng",
      description: "",
      qrImage: qrCode4,
      icon: <BookOpen size={32} />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 via-blue-400 to-blue-500 py-16 px-4 relative overflow-hidden">
      {/* Animated Clouds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <CloudElement delay={0} duration={30} yOffset={10} />
        <CloudElement delay={5} duration={35} yOffset={20} />
        <CloudElement delay={10} duration={40} yOffset={5} />
        <CloudElement delay={15} duration={32} yOffset={25} />
        <CloudElement delay={20} duration={38} yOffset={15} />
      </div>

      {/* Animated Waves at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <WaveLayer delay={0} className="text-blue-600/40" />
        <WaveLayer delay={2} className="text-blue-700/30 -mb-12" />
        <WaveLayer delay={4} className="text-blue-800/20 -mb-24" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <motion.div
          className="inline-block mb-6"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white/50">
            <QrCode size={40} className="text-white" />
          </div>
        </motion.div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
          Juknis Perlombaan
        </h1>
        
        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
          Scan QR code di bawah ini untuk mengakses informasi lengkap seputar perlombaan
        </p>
        
        {/* Decorative line */}
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mt-6"
          animate={{
            scaleX: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* QR Code Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 relative z-10">
        {qrCodes.map((qr, index) => (
          <QRCodeCard
            key={index}
            title={qr.title}
            description={qr.description}
            qrImage={qr.qrImage}
            icon={qr.icon}
            delay={0.2 + index * 0.2}
          />
        ))}
      </div>

      {/* Info Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <div className="bg-white/70 border border-blue-400/40 rounded-xl p-6 backdrop-blur-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-blue-700 font-bold mb-2">Petunjuk Penggunaan</h4>
              <ul className="text-slate-700 space-y-1 text-sm">
                <li>• Gunakan aplikasi QR scanner di smartphone Anda</li>
                <li>• Arahkan kamera ke QR code yang ingin Anda scan</li>
                <li>• Tunggu hingga QR code terdeteksi dan ikuti link yang muncul</li>
                <li>• Pastikan koneksi internet Anda stabil</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating bubbles effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '-5%',
            }}
            animate={{
              y: [-50, -window.innerHeight - 50],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
}
