'use client';

import { useMemo } from 'react';

interface FloatingItem {
    id: number;
    type: 'lantern' | 'blossom' | 'sparkle';
    left: string;
    top: string;
    size: number;
    delay: string;
    duration: string;
    opacity: number;
}

export function FestiveBackground() {
    const items = useMemo(() => {
        const result: FloatingItem[] = [];

        // Lanterns (5 items) - scattered around edges
        for (let i = 0; i < 5; i++) {
            result.push({
                id: i,
                type: 'lantern',
                left: `${5 + Math.random() * 90}%`,
                top: `${-5 + Math.random() * 30}%`,
                size: 28 + Math.random() * 20,
                delay: `${i * 1.2}s`,
                duration: `${4 + Math.random() * 3}s`,
                opacity: 0.15 + Math.random() * 0.15,
            });
        }

        // Peach blossoms (10 items) - falling from top
        for (let i = 0; i < 10; i++) {
            result.push({
                id: 100 + i,
                type: 'blossom',
                left: `${Math.random() * 100}%`,
                top: `${-10 + Math.random() * 10}%`,
                size: 12 + Math.random() * 14,
                delay: `${i * 0.8}s`,
                duration: `${8 + Math.random() * 6}s`,
                opacity: 0.2 + Math.random() * 0.2,
            });
        }

        // Golden sparkles (8 items) - scattered
        for (let i = 0; i < 8; i++) {
            result.push({
                id: 200 + i,
                type: 'sparkle',
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                size: 4 + Math.random() * 6,
                delay: `${i * 0.5}s`,
                duration: `${2 + Math.random() * 2}s`,
                opacity: 0.3 + Math.random() * 0.4,
            });
        }

        return result;
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 festive-bg-container">
            {items.map((item) => (
                <div
                    key={item.id}
                    className={`absolute ${item.type === 'lantern' ? 'animate-lantern-float' :
                            item.type === 'blossom' ? 'animate-blossom-fall' :
                                'animate-sparkle-pulse'
                        }`}
                    style={{
                        left: item.left,
                        top: item.top,
                        animationDelay: item.delay,
                        animationDuration: item.duration,
                        opacity: item.opacity,
                    }}
                >
                    {item.type === 'lantern' && (
                        <svg width={item.size} height={item.size * 1.4} viewBox="0 0 40 56" fill="none">
                            <line x1="20" y1="0" x2="20" y2="10" stroke="#FFD700" strokeWidth="1" />
                            <rect x="15" y="8" width="10" height="3" rx="1" fill="#FFD700" />
                            <ellipse cx="20" cy="28" rx="13" ry="17" fill="#C41E3A" opacity="0.8" />
                            <ellipse cx="20" cy="28" rx="13" ry="17" stroke="#FFD700" strokeWidth="1" />
                            <text x="20" y="32" textAnchor="middle" fill="#FFD700" fontSize="10" fontFamily="serif">福</text>
                            <rect x="15" y="43" width="10" height="3" rx="1" fill="#FFD700" />
                            <line x1="20" y1="46" x2="20" y2="54" stroke="#FFD700" strokeWidth="0.8" />
                        </svg>
                    )}
                    {item.type === 'blossom' && (
                        <svg width={item.size} height={item.size} viewBox="0 0 24 24" fill="none">
                            <ellipse cx="12" cy="6" rx="3" ry="5" fill="#FF69B4" opacity="0.8" />
                            <ellipse cx="12" cy="6" rx="3" ry="5" fill="#FF69B4" opacity="0.8" transform="rotate(72 12 12)" />
                            <ellipse cx="12" cy="6" rx="3" ry="5" fill="#FF69B4" opacity="0.8" transform="rotate(144 12 12)" />
                            <ellipse cx="12" cy="6" rx="3" ry="5" fill="#FF69B4" opacity="0.8" transform="rotate(216 12 12)" />
                            <ellipse cx="12" cy="6" rx="3" ry="5" fill="#FF69B4" opacity="0.8" transform="rotate(288 12 12)" />
                            <circle cx="12" cy="12" r="2.5" fill="#FFD700" />
                        </svg>
                    )}
                    {item.type === 'sparkle' && (
                        <div
                            className="rounded-full"
                            style={{
                                width: item.size,
                                height: item.size,
                                background: 'radial-gradient(circle, #FFD700 0%, transparent 70%)',
                            }}
                        />
                    )}
                </div>
            ))}

            {/* Subtle cloud motifs at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 opacity-5">
                <svg width="100%" height="100%" viewBox="0 0 1440 128" preserveAspectRatio="none">
                    <path d="M0,96 C240,32 480,128 720,64 C960,0 1200,96 1440,48 L1440,128 L0,128 Z" fill="#FFD700" />
                </svg>
            </div>
        </div>
    );
}
