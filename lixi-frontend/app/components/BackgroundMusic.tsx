'use client';

import { useState, useEffect, useRef } from 'react';
import { MusicIcon, MuteIcon } from './Icons';

export function BackgroundMusic() {
    const [muted, setMuted] = useState(true);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Load preference from localStorage
        const savedMuted = localStorage.getItem('lixi_bgm_muted');
        let initialMuted = false;

        if (savedMuted !== null) {
            initialMuted = savedMuted === 'true';
        }

        setMuted(initialMuted);

        const audio = audioRef.current;
        if (audio) {
            audio.volume = 0.3; // Low volume background

            if (!initialMuted) {
                const playPromise = audio.play();
                if (playPromise !== undefined) {
                    playPromise.catch(() => {
                        // Auto-play was prevented. 
                        // Do NOT mute. Wait for interaction.
                        console.log('Autoplay blocked. Waiting for interaction...');

                        const resumeAudio = () => {
                            if (audioRef.current) {
                                audioRef.current.play().then(() => {
                                    console.log('Audio resumed after interaction');
                                }).catch(e => console.error('Play failed again', e));
                            }
                            document.removeEventListener('click', resumeAudio);
                            document.removeEventListener('touchstart', resumeAudio);
                        };

                        document.addEventListener('click', resumeAudio);
                        document.addEventListener('touchstart', resumeAudio);
                    });
                }
            }
        }
    }, []);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            if (muted) {
                audio.pause();
            } else {
                audio.play().catch(e => {
                    console.error('Manual play failed', e);
                    // If manual play fails (rare if triggered by click), fallback to interaction listener
                    // But usually button click IS the interaction.
                });
            }
            localStorage.setItem('lixi_bgm_muted', String(muted));
        }
    }, [muted]);

    return (
        <div className="fixed bottom-4 left-4 z-[100]">
            <audio
                ref={audioRef}
                src="/sounds/background.mp3"
                loop
                preload="auto"
            />
            <button
                onClick={() => setMuted(!muted)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md transition-all duration-300 shadow-lg border border-lixi-gold/30 hover:border-lixi-gold/60 group
                    ${muted ? 'bg-black/40 text-white/60' : 'bg-lixi-red/80 text-lixi-gold animate-pulse-slow'}
                `}
                aria-label={muted ? "Bật nhạc" : "Tắt nhạc"}
            >
                {muted ? (
                    <MuteIcon size={20} />
                ) : (
                    <MusicIcon size={20} className="animate-bounce-slight" />
                )}
                <span className={`text-xs font-medium ${muted ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 w-auto'} transition-all duration-300`}>
                    Nhạc Tết
                </span>
            </button>
        </div>
    );
}
