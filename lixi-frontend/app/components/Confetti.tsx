'use client';

import { useEffect, useState } from 'react';

interface Confetti {
    id: number;
    left: string;
    color: string;
    delay: string;
    duration: string;
    size: string;
    shape: 'square' | 'circle' | 'triangle' | 'star';
}

export function ConfettiEffect() {
    const [confetti, setConfetti] = useState<Confetti[]>([]);

    useEffect(() => {
        // Festive Tết colors
        const colors = [
            '#ffd700', '#c41e3a', '#ff6b6b', '#ffa500',
            '#ff1493', '#ff4444', '#ffdd00', '#ff69b4',
            '#daa520', '#ff8c00',
        ];
        const pieces: Confetti[] = [];

        for (let i = 0; i < 60; i++) {
            pieces.push({
                id: i,
                left: `${Math.random() * 100}%`,
                color: colors[Math.floor(Math.random() * colors.length)],
                delay: `${Math.random() * 1}s`,
                duration: `${2 + Math.random() * 3}s`,
                size: `${6 + Math.random() * 8}px`,
                shape: ['square', 'circle', 'triangle', 'star'][Math.floor(Math.random() * 4)] as Confetti['shape'],
            });
        }
        setConfetti(pieces);

        // Clean up after animation
        const timer = setTimeout(() => setConfetti([]), 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {confetti.map((piece) => (
                <div
                    key={piece.id}
                    className="confetti-piece"
                    style={{
                        left: piece.left,
                        backgroundColor: piece.shape !== 'triangle' && piece.shape !== 'star' ? piece.color : 'transparent',
                        borderLeft: piece.shape === 'triangle' ? `${parseInt(piece.size) / 2}px solid transparent` : undefined,
                        borderRight: piece.shape === 'triangle' ? `${parseInt(piece.size) / 2}px solid transparent` : undefined,
                        borderBottom: piece.shape === 'triangle' ? `${piece.size} solid ${piece.color}` : undefined,
                        borderRadius: piece.shape === 'circle' ? '50%' : piece.shape === 'star' ? '0' : '2px',
                        width: piece.shape !== 'triangle' ? piece.size : '0',
                        height: piece.shape !== 'triangle' ? piece.size : '0',
                        animationDelay: piece.delay,
                        animationDuration: piece.duration,
                        boxShadow: piece.shape === 'star' ? `
                            0 0 0 ${parseInt(piece.size) / 4}px ${piece.color},
                            0 ${parseInt(piece.size) / 2}px 0 ${parseInt(piece.size) / 4}px transparent
                        ` : undefined,
                        transform: piece.shape === 'star' ? `rotate(${Math.random() * 360}deg)` : undefined,
                    }}
                />
            ))}
        </>
    );
}
