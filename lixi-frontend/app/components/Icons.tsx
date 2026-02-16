'use client';

import React from 'react';

interface IconProps {
    size?: number;
    className?: string;
    color?: string;
}

// ===== Bao Lì Xì (Red Envelope) =====
export function EnvelopeIcon({ size = 24, className = '' }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
            {/* Envelope body */}
            <rect x="8" y="12" width="48" height="40" rx="4" fill="#C41E3A" />
            <rect x="8" y="12" width="48" height="40" rx="4" stroke="#FFD700" strokeWidth="2" />
            {/* Flap */}
            <path d="M8 16L32 32L56 16" fill="#9B1630" />
            <path d="M8 16L32 32L56 16" stroke="#FFD700" strokeWidth="1.5" />
            {/* Gold seal circle */}
            <circle cx="32" cy="32" r="10" fill="#FFD700" />
            <circle cx="32" cy="32" r="8" fill="#DAA520" />
            {/* 福 character */}
            <text x="32" y="37" textAnchor="middle" fill="#C41E3A" fontSize="14" fontWeight="bold" fontFamily="serif">福</text>
            {/* Gold trim lines */}
            <line x1="12" y1="48" x2="52" y2="48" stroke="#FFD700" strokeWidth="1" opacity="0.5" />
            <line x1="12" y1="45" x2="52" y2="45" stroke="#FFD700" strokeWidth="0.5" opacity="0.3" />
        </svg>
    );
}

// ===== Gold Coin =====
export function CoinIcon({ size = 24, className = '' }: IconProps) {
    const id = React.useId();
    const gradId = `coinGrad-${id}`;
    const innerId = `coinInner-${id}`;

    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
            <defs>
                <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFD700" />
                    <stop offset="50%" stopColor="#FFA500" />
                    <stop offset="100%" stopColor="#FFD700" />
                </linearGradient>
                <linearGradient id={innerId} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#DAA520" />
                    <stop offset="100%" stopColor="#B8860B" />
                </linearGradient>
            </defs>
            <circle cx="32" cy="32" r="28" fill={`url(#${gradId})`} stroke="#B8860B" strokeWidth="2" />
            <circle cx="32" cy="32" r="22" fill={`url(#${innerId})`} stroke="#FFD700" strokeWidth="1.5" />
            {/* Square hole */}
            <rect x="26" y="26" width="12" height="12" rx="1" fill="#8B6914" stroke="#FFD700" strokeWidth="1" />
            {/* Decorative dots */}
            <circle cx="32" cy="12" r="2" fill="#FFF8DC" opacity="0.6" />
            <circle cx="32" cy="52" r="2" fill="#FFF8DC" opacity="0.6" />
            <circle cx="12" cy="32" r="2" fill="#FFF8DC" opacity="0.6" />
            <circle cx="52" cy="32" r="2" fill="#FFF8DC" opacity="0.6" />
        </svg>
    );
}

// ===== Horse Zodiac (Ngựa — Bính Ngọ 2026) =====
export function HorseIcon({ size = 24, className = '' }: IconProps) {
    const id = React.useId();
    const goldId = `horseGold-${id}`;
    const maneId = `horseMane-${id}`;
    const glowId = `horseGlow-${id}`;

    return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
            <defs>
                <linearGradient id={goldId} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFD700" />
                    <stop offset="50%" stopColor="#FFAA00" />
                    <stop offset="100%" stopColor="#DAA520" />
                </linearGradient>
                <linearGradient id={maneId} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C41E3A" />
                    <stop offset="100%" stopColor="#FF4444" />
                </linearGradient>
                <filter id={glowId}>
                    <feGaussianBlur stdDeviation="2" result="glow" />
                    <feMerge>
                        <feMergeNode in="glow" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
            {/* Galloping body */}
            <ellipse cx="48" cy="52" rx="22" ry="15" fill={`url(#${goldId})`} />
            {/* Chest */}
            <ellipse cx="33" cy="45" rx="10" ry="13" fill={`url(#${goldId})`} />
            {/* Neck — arched, proud */}
            <path d="M30 40C28 32 25 24 23 18C22 14 24 10 28 12C31 14 34 22 36 32L33 40Z" fill={`url(#${goldId})`} />
            {/* Head — refined, long */}
            <ellipse cx="22" cy="16" rx="9" ry="7" transform="rotate(-20 22 16)" fill={`url(#${goldId})`} />
            {/* Snout */}
            <ellipse cx="15" cy="20" rx="5" ry="4" transform="rotate(-10 15 20)" fill="#EEBB44" />
            {/* Ears — alert, pointed */}
            <path d="M18 8L15 1L22 7Z" fill="#DAA520" />
            <path d="M26 6L25 -1L30 5Z" fill="#DAA520" />
            <path d="M19 8L16.5 2.5L22 7.5Z" fill="#FFCC33" opacity="0.5" />
            {/* Eye — expressive */}
            <circle cx="20" cy="14" r="2.5" fill="#1a0a0a" />
            <circle cx="19.5" cy="13.2" r="1" fill="white" />
            <circle cx="20.8" cy="14.8" r="0.5" fill="white" opacity="0.6" />
            {/* Nostrils */}
            <circle cx="13" cy="21" r="1.2" fill="#8B6914" />
            <circle cx="15.5" cy="22" r="1" fill="#8B6914" />
            {/* Mouth */}
            <path d="M12 23C13 24 15 24.5 17 24" stroke="#8B6914" strokeWidth="0.8" fill="none" />
            {/* Flowing mane — thick, wavy */}
            <path d="M26 8C29 5 30 10 32 7C34 4 35 12 37 8C39 5 39 14 40 10C41 7 42 16 42 20" stroke={`url(#${maneId})`} strokeWidth="4" strokeLinecap="round" fill="none" filter={`url(#${glowId})`} />
            <path d="M28 10C30 8 31 12 33 9C35 7 36 14 38 11" stroke={`url(#${maneId})`} strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6" />
            {/* Front legs — galloping */}
            <path d="M28 56C26 62 22 68 20 74" stroke={`url(#${goldId})`} strokeWidth="5" strokeLinecap="round" />
            <path d="M36 58C35 64 32 70 31 76" stroke={`url(#${goldId})`} strokeWidth="5" strokeLinecap="round" />
            {/* Rear legs — kicking back */}
            <path d="M56 58C58 64 62 70 65 76" stroke={`url(#${goldId})`} strokeWidth="5" strokeLinecap="round" />
            <path d="M64 54C67 60 70 66 72 72" stroke={`url(#${goldId})`} strokeWidth="5" strokeLinecap="round" />
            {/* Hooves — gleaming */}
            <rect x="17" y="73" width="7" height="4" rx="2" fill="#8B6914" />
            <rect x="28" y="75" width="7" height="4" rx="2" fill="#8B6914" />
            <rect x="62" y="75" width="7" height="4" rx="2" fill="#8B6914" />
            <rect x="69" y="71" width="7" height="4" rx="2" fill="#8B6914" />
            {/* Hoof glint */}
            <rect x="18" y="73.5" width="3" height="1.5" rx="0.5" fill="#FFD700" opacity="0.5" />
            <rect x="63" y="75.5" width="3" height="1.5" rx="0.5" fill="#FFD700" opacity="0.5" />
            {/* Flowing tail — majestic */}
            <path d="M68 46C74 42 80 44 78 50C76 56 70 54 74 48" stroke={`url(#${maneId})`} strokeWidth="4" strokeLinecap="round" fill="none" filter={`url(#${glowId})`} />
            <path d="M70 48C76 50 80 56 76 62" stroke={`url(#${maneId})`} strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M69 50C75 53 78 58 74 64" stroke={`url(#${maneId})`} strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
            {/* Sparkle stars around horse */}
            <path d="M82 20L84 24L88 22L84 25L86 29L83 26L79 28L82 25L80 21L83 23Z" fill="#FFD700" opacity="0.7" />
            <path d="M8 35L9 37L11 36L9 38L10 40L8.5 38.5L7 40L7.5 38L6 37L8 37.5Z" fill="#FFD700" opacity="0.5" />
            <circle cx="90" cy="40" r="1.5" fill="#FFD700" opacity="0.6" />
            <circle cx="5" cy="50" r="1" fill="#FFD700" opacity="0.4" />
        </svg>
    );
}

// ===== Horse Zodiac Banner (large, for prominent display) =====
export function HorseZodiacBanner({ className = '' }: { className?: string }) {
    return (
        <div className={`relative text-center ${className}`}>
            <div className="flex items-center justify-center gap-3 mb-1">
                <div className="w-8 h-px bg-gradient-to-r from-transparent to-lixi-gold/40" />
                <span className="text-lixi-gold/60 text-[10px] tracking-[0.25em] uppercase font-medium">Năm Bính Ngọ</span>
                <div className="w-8 h-px bg-gradient-to-l from-transparent to-lixi-gold/40" />
            </div>
            <div className="flex justify-center">
                <HorseIcon size={80} className="drop-shadow-[0_0_20px_rgba(255,215,0,0.3)]" />
            </div>
            <p className="text-lixi-gold/50 text-[10px] tracking-[0.15em] mt-1">Mã đáo thành công • 2026</p>
        </div>
    );
}

// ===== Lantern (Đèn Lồng) =====
export function LanternIcon({ size = 24, className = '', color = '#C41E3A' }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 40 56" fill="none" className={className}>
            {/* String */}
            <line x1="20" y1="0" x2="20" y2="10" stroke="#FFD700" strokeWidth="1.5" />
            {/* Top cap */}
            <rect x="14" y="8" width="12" height="4" rx="1" fill="#FFD700" />
            {/* Body */}
            <ellipse cx="20" cy="28" rx="14" ry="18" fill={color} opacity="0.9" />
            <ellipse cx="20" cy="28" rx="14" ry="18" stroke="#FFD700" strokeWidth="1.5" />
            {/* Ribs */}
            <path d="M20 10C20 10 20 46 20 46" stroke="#FFD700" strokeWidth="0.8" opacity="0.4" />
            <path d="M10 14C10 14 10 42 10 42" stroke="#FFD700" strokeWidth="0.5" opacity="0.3" />
            <path d="M30 14C30 14 30 42 30 42" stroke="#FFD700" strokeWidth="0.5" opacity="0.3" />
            {/* 福 */}
            <text x="20" y="32" textAnchor="middle" fill="#FFD700" fontSize="12" fontWeight="bold" fontFamily="serif">福</text>
            {/* Bottom cap */}
            <rect x="14" y="44" width="12" height="4" rx="1" fill="#FFD700" />
            {/* Tassel */}
            <line x1="18" y1="48" x2="17" y2="54" stroke="#FFD700" strokeWidth="1" />
            <line x1="20" y1="48" x2="20" y2="56" stroke="#FFD700" strokeWidth="1.2" />
            <line x1="22" y1="48" x2="23" y2="54" stroke="#FFD700" strokeWidth="1" />
        </svg>
    );
}

// ===== Peach Blossom (Hoa Đào) =====
export function BlossomIcon({ size = 24, className = '', color = '#FF69B4' }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
            {/* 5 petals */}
            <ellipse cx="20" cy="10" rx="5" ry="8" fill={color} opacity="0.85" transform="rotate(0 20 20)" />
            <ellipse cx="20" cy="10" rx="5" ry="8" fill={color} opacity="0.85" transform="rotate(72 20 20)" />
            <ellipse cx="20" cy="10" rx="5" ry="8" fill={color} opacity="0.85" transform="rotate(144 20 20)" />
            <ellipse cx="20" cy="10" rx="5" ry="8" fill={color} opacity="0.85" transform="rotate(216 20 20)" />
            <ellipse cx="20" cy="10" rx="5" ry="8" fill={color} opacity="0.85" transform="rotate(288 20 20)" />
            {/* Center */}
            <circle cx="20" cy="20" r="4" fill="#FFD700" />
            {/* Stamens */}
            <circle cx="18" cy="18" r="1" fill="#DAA520" />
            <circle cx="22" cy="18" r="1" fill="#DAA520" />
            <circle cx="20" cy="22" r="1" fill="#DAA520" />
        </svg>
    );
}

// ===== Firework Burst (small decorative) =====
export function FireworkBurstIcon({ size = 24, className = '' }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
            {/* Center flash */}
            <circle cx="24" cy="24" r="3" fill="#FFD700" />
            {/* Rays */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
                <line
                    key={angle}
                    x1="24"
                    y1="24"
                    x2={24 + 18 * Math.cos((angle * Math.PI) / 180)}
                    y2={24 + 18 * Math.sin((angle * Math.PI) / 180)}
                    stroke={angle % 60 === 0 ? '#FFD700' : angle % 60 === 30 ? '#FF6B6B' : '#FFA500'}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.8"
                />
            ))}
            {/* Sparkle dots at ray tips */}
            {[0, 60, 120, 180, 240, 300].map((angle) => (
                <circle
                    key={`dot-${angle}`}
                    cx={24 + 20 * Math.cos((angle * Math.PI) / 180)}
                    cy={24 + 20 * Math.sin((angle * Math.PI) / 180)}
                    r="2"
                    fill="#FFD700"
                    opacity="0.7"
                />
            ))}
        </svg>
    );
}

// ===== Lock Icon =====
export function LockIcon({ size = 24, className = '' }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            <circle cx="12" cy="16" r="1" fill="currentColor" />
        </svg>
    );
}

// ===== Target Icon =====
export function TargetIcon({ size = 24, className = '' }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
        </svg>
    );
}

// ===== Copy / Clipboard Icon =====
export function CopyIcon({ size = 24, className = '' }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
    );
}

// ===== Check Icon =====
export function CheckIcon({ size = 24, className = '' }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="12" r="10" strokeWidth="2" />
            <path d="M8 12l3 3 5-5" />
        </svg>
    );
}

// ===== Gear / Settings Icon =====
export function GearIcon({ size = 24, className = '' }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
    );
}

// ===== Link Icon =====
export function LinkIcon({ size = 24, className = '' }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
    );
}

// ===== Clock Icon =====
export function ClockIcon({ size = 24, className = '' }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    );
}

// ===== Error / Sad Face Icon =====
export function ErrorIcon({ size = 24, className = '' }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="12" r="10" />
            <line x1="8" y1="15" x2="16" y2="15" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
    );
}

// ===== Plus Icon =====
export function PlusIcon({ size = 24, className = '' }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
    );
}

// ===== Chart / Statistics Icon =====
export function ChartIcon({ size = 24, className = '' }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
    );
}

// ===== History / Scroll Icon =====
export function HistoryIcon({ size = 24, className = '' }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M3 3v5h5" />
            <path d="M3.05 13A9 9 0 1 0 6 5.3L3 8" />
            <path d="M12 7v5l4 2" />
        </svg>
    );
}

// ===== Heart Icon =====
export function HeartIcon({ size = 24, className = '' }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
    );
}

// ===== Envelope Send Icon (for stats) =====
export function EnvelopeSendIcon({ size = 24, className = '' }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M22 2L11 13" />
            <path d="M22 2L15 22L11 13L2 9L22 2Z" />
        </svg>
    );
}

// ===== Box / Package Icon =====
export function BoxIcon({ size = 24, className = '' }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
    );
}

// ===== Money / Wallet Icon =====
export function MoneyIcon({ size = 24, className = '' }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
    );
}

// ===== Close / X Icon =====
export function CloseIcon({ size = 24, className = '' }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    );
}

// ===== Loading Spinner Icon =====
export function SpinnerIcon({ size = 24, className = '' }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className={`animate-spin ${className}`}>
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
    );
}

// ===== Shield / Lock Admin Icon =====
export function ShieldLockIcon({ size = 24, className = '' }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <rect x="9" y="10" width="6" height="5" rx="1" />
            <path d="M10 10V8a2 2 0 0 1 4 0v2" />
        </svg>
    );
}

// ===== Celebration / Party Icon =====
export function CelebrationIcon({ size = 24, className = '' }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
            <path d="M4 22L9 2" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 22L18 14" stroke="#C41E3A" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 22L20 20" stroke="#FF69B4" strokeWidth="2" strokeLinecap="round" />
            <circle cx="8" cy="6" r="2" fill="#FFD700" />
            <circle cx="16" cy="10" r="1.5" fill="#C41E3A" />
            <circle cx="20" cy="16" r="1.5" fill="#FF69B4" />
            <circle cx="14" cy="4" r="1" fill="#FFA500" />
            <circle cx="18" cy="8" r="1" fill="#FFD700" />
        </svg>
    );
}
// ===== Music Icons =====
export function MusicIcon({ size = 24, className = '' }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
        </svg>
    );
}

export function MuteIcon({ size = 24, className = '' }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
    );
}
