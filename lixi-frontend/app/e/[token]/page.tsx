'use client';

import { useState, useEffect, use } from 'react';
import { ConfettiEffect } from '../../components/Confetti';
import { QRCode } from '../../components/QRCode';
import { Fireworks } from '../../components/Fireworks';
import { FestiveBackground } from '../../components/FestiveBackground';
import {
    EnvelopeIcon,
    CoinIcon,
    LanternIcon,
    BlossomIcon,
    HorseIcon,
    HorseZodiacBanner,
    ErrorIcon,
    ClockIcon,
    CheckIcon,
    CopyIcon,
    SpinnerIcon,
} from '../../components/Icons';

interface EnvelopeStatus {
    status: 'unused' | 'claimed' | 'expired' | 'closed';
    campaignName?: string;
    amount?: number;
    amountFormatted?: string;
    wish?: string;
    claimedAt?: string;
    message?: string;
    recipientBank?: string | null;
    recipientAccount?: string | null;
    recipientName?: string | null;
}

interface ClaimResult {
    amount: number;
    amountFormatted: string;
    wish: string;
    campaignName: string;
}

const BANKS = [
    { id: 'MB', name: 'MB Bank' },
    { id: 'VCB', name: 'Vietcombank' },
    { id: 'TCB', name: 'Techcombank' },
    { id: 'ACB', name: 'ACB' },
    { id: 'TPB', name: 'TPBank' },
    { id: 'VPB', name: 'VPBank' },
    { id: 'BIDV', name: 'BIDV' },
    { id: 'VTB', name: 'VietinBank' },
    { id: 'SACOM', name: 'Sacombank' },
    { id: 'MSB', name: 'MSB' },
    { id: 'SHB', name: 'SHB' },
    { id: 'OCB', name: 'OCB' },
    { id: 'HDBank', name: 'HDBank' },
    { id: 'CAKE', name: 'CAKE' },
    { id: 'Momo', name: 'Momo' },
];

export default function EnvelopePage({ params }: { params: Promise<{ token: string }> }) {
    const { token } = use(params);
    const [status, setStatus] = useState<EnvelopeStatus | null>(null);
    const [loading, setLoading] = useState(true);
    const [claiming, setClaiming] = useState(false);
    const [tearing, setTearing] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [claimResult, setClaimResult] = useState<ClaimResult | null>(null);
    const [copied, setCopied] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Recipient bank info form
    const [recipientBank, setRecipientBank] = useState('');
    const [recipientAccount, setRecipientAccount] = useState('');
    const [recipientName, setRecipientName] = useState('');
    const [submittingBank, setSubmittingBank] = useState(false);
    const [bankSubmitted, setBankSubmitted] = useState(false);

    // Fetch envelope status on mount
    useEffect(() => {
        fetchStatus();
    }, [token]);

    async function fetchStatus() {
        try {
            const res = await fetch(`/api/envelopes/${token}`);
            const data = await res.json();

            if (!res.ok) {
                setError(data.message || 'Lì xì không tồn tại');
                setLoading(false);
                return;
            }

            setStatus(data);

            if (data.status === 'claimed') {
                setShowResult(true);
                setClaimResult({
                    amount: data.amount,
                    amountFormatted: new Intl.NumberFormat('vi-VN').format(data.amount) + 'đ',
                    wish: data.wish,
                    campaignName: data.campaignName,
                });
                // Check if bank info already submitted
                if (data.recipientBank) {
                    setBankSubmitted(true);
                    setRecipientBank(data.recipientBank);
                    setRecipientAccount(data.recipientAccount || '');
                    setRecipientName(data.recipientName || '');
                }
            }
        } catch {
            setError('Không thể kết nối đến server');
        } finally {
            setLoading(false);
        }
    }

    async function handleClaim() {
        setClaiming(true);
        setTearing(true);

        // Wait for tear animation
        await new Promise(resolve => setTimeout(resolve, 800));

        try {
            const res = await fetch(`/api/envelopes/${token}/claim`, {
                method: 'POST',
            });
            const data = await res.json();

            if (!res.ok) {
                setTearing(false);
                setError(data.message || 'Có lỗi xảy ra');
                setClaiming(false);
                return;
            }

            setClaimResult(data);
            setShowResult(true);
        } catch {
            setTearing(false);
            setError('Không thể kết nối đến server');
        } finally {
            setClaiming(false);
        }
    }

    async function handleSubmitBankInfo(e: React.FormEvent) {
        e.preventDefault();
        if (!recipientBank || !recipientAccount || !recipientName) return;

        setSubmittingBank(true);
        try {
            const res = await fetch(`/api/envelopes/${token}/recipient`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    bank: recipientBank,
                    account: recipientAccount,
                    name: recipientName,
                }),
            });
            const data = await res.json();

            if (!res.ok) {
                setError(data.message || 'Có lỗi xảy ra');
                return;
            }

            setBankSubmitted(true);
        } catch {
            setError('Không thể kết nối đến server');
        } finally {
            setSubmittingBank(false);
        }
    }

    function handleCopy() {
        if (!claimResult) return;
        const text = `Lì xì ${claimResult.amountFormatted}\nNgân hàng: ${recipientBank}\nSTK: ${recipientAccount}\nChủ TK: ${recipientName}`;
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    // Loading state
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <FestiveBackground />
                <div className="text-center relative z-10">
                    <div className="animate-envelope-pulse mb-4">
                        <EnvelopeIcon size={72} className="mx-auto" />
                    </div>
                    <p className="text-lixi-gold/70 animate-pulse">Đang tải lì xì...</p>
                </div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center px-4">
                <FestiveBackground />
                <div className="result-card rounded-2xl p-8 max-w-md w-full text-center relative z-10">
                    <div className="flex justify-center mb-4">
                        <ErrorIcon size={48} className="text-lixi-gold/60" />
                    </div>
                    <h2 className="text-xl font-bold text-lixi-gold mb-2 font-heading">Ôi không!</h2>
                    <p className="text-lixi-cream/70">{error}</p>
                </div>
            </div>
        );
    }

    // Expired/Closed state
    if (status?.status === 'expired' || status?.status === 'closed') {
        return (
            <div className="min-h-screen flex items-center justify-center px-4">
                <FestiveBackground />
                <div className="result-card rounded-2xl p-8 max-w-md w-full text-center relative z-10">
                    <div className="flex justify-center mb-4">
                        <ClockIcon size={48} className="text-lixi-gold/60" />
                    </div>
                    <h2 className="text-xl font-bold text-lixi-gold mb-2 font-heading">
                        {status.status === 'expired' ? 'Lì xì đã hết hạn' : 'Chiến dịch đã kết thúc'}
                    </h2>
                    <p className="text-lixi-cream/70">{status.message}</p>
                </div>
            </div>
        );
    }

    // Claimed state (result)
    if (showResult && claimResult) {
        return (
            <div className="min-h-screen flex items-center justify-center px-4 py-8">
                <FestiveBackground />
                <ConfettiEffect />
                <Fireworks autoFire={false} duration={4000} particleCount={60} />

                <div className="result-card rounded-2xl p-8 max-w-md w-full text-center animate-reveal relative z-10">
                    {/* Coin animation */}
                    <div className="animate-coin-drop mb-2">
                        <CoinIcon size={64} className="mx-auto" />
                    </div>

                    {/* Amount */}
                    <div className="animate-amount-count mb-4">
                        <p className="text-sm text-lixi-gold/60 mb-1">Bạn nhận được</p>
                        <h1 className="text-5xl font-bold animate-golden-shimmer font-heading">
                            {claimResult.amountFormatted}
                        </h1>
                    </div>

                    {/* Wish */}
                    <div className="mb-4 px-4">
                        <p className="text-lg text-lixi-cream/90 italic leading-relaxed">
                            &ldquo;{claimResult.wish}&rdquo;
                        </p>
                    </div>

                    {/* Horse Zodiac Banner */}
                    <HorseZodiacBanner className="mb-4" />

                    {/* Divider */}
                    <div className="w-24 h-px bg-gradient-to-r from-transparent via-lixi-gold/40 to-transparent mx-auto mb-6" />

                    {/* Bank Info Form or Submitted Info */}
                    {!bankSubmitted ? (
                        <div className="text-left">
                            <p className="text-sm text-lixi-gold mb-3 font-semibold text-center">
                                Nhập thông tin nhận tiền
                            </p>
                            <form onSubmit={handleSubmitBankInfo} className="space-y-3">
                                <div>
                                    <label className="text-xs text-lixi-cream/50 mb-1 block">Ngân hàng</label>
                                    <select
                                        value={recipientBank}
                                        onChange={e => setRecipientBank(e.target.value)}
                                        required
                                        className="input-festive cursor-pointer"
                                    >
                                        <option value="" className="bg-[#1a0a0a]">Chọn ngân hàng...</option>
                                        {BANKS.map(b => (
                                            <option key={b.id} value={b.id} className="bg-[#1a0a0a]">{b.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="text-xs text-lixi-cream/50 mb-1 block">Số tài khoản</label>
                                    <input
                                        type="text"
                                        value={recipientAccount}
                                        onChange={e => setRecipientAccount(e.target.value)}
                                        placeholder="VD: 0123456789"
                                        required
                                        className="input-festive"
                                        inputMode="numeric"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs text-lixi-cream/50 mb-1 block">Tên chủ tài khoản</label>
                                    <input
                                        type="text"
                                        value={recipientName}
                                        onChange={e => setRecipientName(e.target.value.toUpperCase())}
                                        placeholder="VD: NGUYEN VAN A"
                                        required
                                        className="input-festive uppercase"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={submittingBank}
                                    className="btn-claim w-full py-3 rounded-xl text-sm font-bold disabled:opacity-50 flex items-center justify-center gap-2"
                                >
                                    {submittingBank ? (
                                        <>
                                            <SpinnerIcon size={16} />
                                            Đang gửi...
                                        </>
                                    ) : (
                                        'Gửi thông tin nhận tiền'
                                    )}
                                </button>
                            </form>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            <div className="flex items-center justify-center gap-2 text-green-400 mb-2">
                                <CheckIcon size={20} className="text-green-400" />
                                <span className="text-sm font-medium">Đã gửi thông tin nhận tiền!</span>
                            </div>

                            {/* QR Code for sender to scan */}
                            <QRCode
                                bankId={recipientBank}
                                accountNo={recipientAccount}
                                accountName={recipientName}
                                amount={claimResult.amount}
                                description={`Li Xi ${token.slice(0, 8)}`}
                            />

                            <div className="bg-black/20 rounded-xl p-4 text-left space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-lixi-cream/50">Ngân hàng:</span>
                                    <span className="text-lixi-cream font-medium">
                                        {BANKS.find(b => b.id === recipientBank)?.name || recipientBank}
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-lixi-cream/50">STK:</span>
                                    <span className="text-lixi-cream font-medium font-mono">{recipientAccount}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-lixi-cream/50">Chủ TK:</span>
                                    <span className="text-lixi-cream font-medium">{recipientName}</span>
                                </div>
                            </div>

                            {/* Copy button */}
                            <button
                                onClick={handleCopy}
                                className="w-full py-3 px-4 rounded-xl bg-lixi-red/20 border border-lixi-gold/20 text-lixi-gold hover:bg-lixi-red/30 transition-all duration-300 text-sm font-medium flex items-center justify-center gap-2 cursor-pointer"
                            >
                                {copied ? (
                                    <>
                                        <CheckIcon size={16} className="text-green-400" />
                                        Đã copy!
                                    </>
                                ) : (
                                    <>
                                        <CopyIcon size={16} />
                                        Copy thông tin
                                    </>
                                )}
                            </button>
                        </div>
                    )}

                    {/* Campaign name */}
                    <p className="mt-4 text-xs text-lixi-cream/40">
                        Từ chiến dịch: {claimResult.campaignName}
                    </p>
                </div>
            </div>
        );
    }

    // Unused state - ready to claim
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <FestiveBackground />

            {/* Background sparkles */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="sparkle"
                        style={{
                            left: `${10 + Math.random() * 80}%`,
                            top: `${10 + Math.random() * 80}%`,
                            animationDelay: `${i * 0.3}s`,
                            width: `${4 + Math.random() * 6}px`,
                            height: `${4 + Math.random() * 6}px`,
                        }}
                    />
                ))}
            </div>

            <div className="flex flex-col items-center gap-6 max-w-sm w-full relative z-10">
                {/* Campaign name */}
                {status?.campaignName && (
                    <p className="text-lixi-gold/60 text-sm font-medium tracking-wider uppercase animate-bounce-in">
                        {status.campaignName}
                    </p>
                )}

                {/* Envelope card */}
                <div
                    className={`envelope-card rounded-2xl p-8 w-full aspect-[3/4] flex flex-col items-center justify-center gap-6 animate-float animate-glow-pulse ${tearing ? 'animate-tear-open' : ''
                        }`}
                >
                    {/* Corner decorations */}
                    <div className="envelope-corner envelope-corner-tl" />
                    <div className="envelope-corner envelope-corner-tr" />
                    <div className="envelope-corner envelope-corner-bl" />
                    <div className="envelope-corner envelope-corner-br" />

                    {/* Decorative top seal */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-lixi-gold to-lixi-gold-dark flex items-center justify-center shadow-lg">
                        <span className="text-3xl text-lixi-red font-bold" style={{ fontFamily: 'serif' }}>福</span>
                    </div>

                    {/* Decorative text */}
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-lixi-gold mb-1 font-heading" style={{ textShadow: '0 2px 10px rgba(255,215,0,0.3)' }}>
                            LÌ XÌ
                        </h2>
                        <p className="text-lixi-cream/60 text-sm">
                            Chúc Mừng Năm Mới
                        </p>
                    </div>

                    {/* Horse + decorative zodiac */}
                    <div className="flex flex-col items-center gap-1">
                        <HorseIcon size={56} className="drop-shadow-[0_0_15px_rgba(255,215,0,0.25)]" />
                        <span className="text-lixi-gold/50 text-[9px] tracking-[0.2em] uppercase">Bính Ngọ 2026</span>
                    </div>
                </div>

                {/* Claim button */}
                <button
                    onClick={handleClaim}
                    disabled={claiming}
                    className="btn-claim w-full py-4 px-8 rounded-2xl text-lg font-bold tracking-wide disabled:opacity-50 disabled:cursor-not-allowed animate-bounce-in flex items-center justify-center gap-2 cursor-pointer"
                    style={{ animationDelay: '0.3s' }}
                >
                    {claiming ? (
                        <span className="flex items-center justify-center gap-2">
                            <SpinnerIcon size={20} className="text-[#1a0a0a]" />
                            Đang mở...
                        </span>
                    ) : (
                        <>
                            <EnvelopeIcon size={24} />
                            Xé Bao Nhận Lộc
                        </>
                    )}
                </button>

                {/* Tagline */}
                <p className="text-lixi-cream/30 text-xs text-center">
                    Mỗi bao lì xì chỉ mở được một lần duy nhất
                </p>
            </div>
        </div>
    );
}
