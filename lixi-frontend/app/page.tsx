import { FestiveBackground } from './components/FestiveBackground';
import { Fireworks } from './components/Fireworks';
import { EnvelopeIcon, CoinIcon, LockIcon, TargetIcon, GearIcon, HeartIcon, HorseIcon, LanternIcon, BlossomIcon } from './components/Icons';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <FestiveBackground />
      <Fireworks autoFire interval={2000} particleCount={50} />

      <div className="text-center max-w-lg relative z-10">
        {/* Year of the Horse Header */}
        <div className="mb-6 animate-bounce-in">
          <div className="flex items-center justify-center gap-2 mb-2">
            <LanternIcon size={20} className="opacity-50" />
            <span className="text-lixi-gold/50 text-xs tracking-[0.3em] uppercase font-medium">
              Tết Bính Ngọ 2026
            </span>
            <LanternIcon size={20} className="opacity-50" />
          </div>
        </div>

        {/* Hero */}
        <div className="mb-8">
          <div className="relative inline-block mb-4">
            <div className="animate-envelope-pulse">
              <EnvelopeIcon size={96} className="mx-auto drop-shadow-[0_0_30px_rgba(255,215,0,0.3)]" />
            </div>
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold animate-golden-shimmer mb-3 font-heading"
          >
            Lì Xì Online
          </h1>
          <p className="text-lixi-cream/60 text-lg">
            Xé bao nhận lộc • Chúc mừng năm mới
          </p>
        </div>

        {/* Horse Zodiac Banner */}
        <div className="mb-8 animate-bounce-in" style={{ animationDelay: '0.2s' }}>
          <div className="result-card rounded-2xl p-4 inline-flex items-center gap-3">
            <HorseIcon size={48} />
            <div className="text-left">
              <p className="text-lixi-gold font-semibold text-sm">Năm Bính Ngọ</p>
              <p className="text-lixi-cream/50 text-xs">Mã đáo thành công • Vạn sự như ý</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { icon: <TargetIcon size={28} className="text-lixi-gold" />, label: 'Mỗi link\nbốc 1 lần' },
            { icon: <CoinIcon size={32} />, label: 'Nhận lộc\nngay tức thì' },
            { icon: <LockIcon size={28} className="text-lixi-gold" />, label: 'An toàn\nbảo mật' },
          ].map((f, i) => (
            <div key={i} className="result-card rounded-xl p-4 text-center cursor-pointer hover:border-lixi-gold/40 transition-all duration-300" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
              <div className="flex justify-center mb-2">{f.icon}</div>
              <p className="text-xs text-lixi-cream/70 whitespace-pre-line">{f.label}</p>
            </div>
          ))}
        </div>

        {/* Admin link */}
        <a
          href="/admin"
          className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-lixi-red/20 border border-lixi-gold/20 text-lixi-gold hover:bg-lixi-red/30 transition-all duration-300 text-sm font-medium cursor-pointer"
        >
          <GearIcon size={16} className="text-lixi-gold" />
          Quản lý (Admin)
        </a>

        {/* Decorative footer */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <BlossomIcon size={16} className="opacity-40" />
          <p className="text-xs text-lixi-cream/20 flex items-center gap-1">
            Made with <HeartIcon size={12} className="text-lixi-red/50" /> for Tết
          </p>
          <BlossomIcon size={16} className="opacity-40" />
        </div>
      </div>
    </div>
  );
}
