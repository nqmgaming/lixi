'use client';

import { useState, useEffect, useCallback } from 'react';
import {
    EnvelopeIcon,
    ShieldLockIcon,
    PlusIcon,
    CopyIcon,
    ChartIcon,
    CheckIcon,
    CloseIcon,
    LinkIcon,
    HistoryIcon,
    EnvelopeSendIcon,
    BoxIcon,
    MoneyIcon,
    SpinnerIcon,
} from '../components/Icons';

interface Campaign {
    id: number;
    name: string;
    budgetTotal: number;
    budgetUsed: number;
    status: string;
    startAt: string;
    endAt: string | null;
    createdAt: string;
    _count: { envelopes: number };
    stats?: {
        total: number;
        claimed: number;
        unused: number;
        budgetRemaining: number;
    };
    envelopes?: { id: number; status: string; amount: number | null; claimedAt: string | null }[];
}

interface GeneratedLink {
    token: string;
    url: string;
}

export default function AdminPage() {
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false);
    const [campaigns, setCampaigns] = useState<Campaign[]>([]);
    const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    // Create campaign form
    const [newName, setNewName] = useState('');
    const [newBudget, setNewBudget] = useState('');

    // Generate envelopes
    const [quantity, setQuantity] = useState('10');
    const [generatedLinks, setGeneratedLinks] = useState<GeneratedLink[]>([]);
    const [copiedAll, setCopiedAll] = useState(false);

    const fetchCampaigns = useCallback(async () => {
        try {
            const res = await fetch('/api/campaigns', {
                headers: { Authorization: `Bearer ${password}` },
            });
            if (!res.ok) throw new Error('Unauthorized');
            const data = await res.json();
            setCampaigns(data);
        } catch {
            setError('Không thể tải danh sách chiến dịch');
        }
    }, [password]);

    useEffect(() => {
        if (authenticated) {
            fetchCampaigns();
        }
    }, [authenticated, fetchCampaigns]);

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const res = await fetch('/api/campaigns', {
                headers: { Authorization: `Bearer ${password}` },
            });
            if (res.ok) {
                setAuthenticated(true);
            } else {
                setError('Sai mật khẩu');
            }
        } catch {
            setError('Không thể kết nối');
        } finally {
            setLoading(false);
        }
    }

    async function handleCreateCampaign(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);
        try {
            const res = await fetch('/api/campaigns', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${password}`,
                },
                body: JSON.stringify({
                    name: newName,
                    budgetTotal: parseInt(newBudget) * 1000,
                }),
            });
            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.message || 'Lỗi tạo chiến dịch');
            }
            setSuccess('Tạo chiến dịch thành công!');
            setNewName('');
            setNewBudget('');
            fetchCampaigns();
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Lỗi');
        } finally {
            setLoading(false);
        }
    }

    async function handleGenerateLinks(campaignId: number) {
        setLoading(true);
        setError(null);
        setGeneratedLinks([]);
        try {
            const res = await fetch(`/api/campaigns/${campaignId}/envelopes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${password}`,
                },
                body: JSON.stringify({ quantity: parseInt(quantity) }),
            });
            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.message || 'Lỗi tạo link');
            }
            const data = await res.json();
            setGeneratedLinks(data);
            fetchCampaigns();
            loadCampaignDetail(campaignId);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Lỗi');
        } finally {
            setLoading(false);
        }
    }

    async function loadCampaignDetail(id: number) {
        try {
            const res = await fetch(`/api/campaigns/${id}`, {
                headers: { Authorization: `Bearer ${password}` },
            });
            if (res.ok) {
                const data = await res.json();
                setSelectedCampaign(data);
            }
        } catch { /* silent */ }
    }

    function handleCopyAll() {
        const frontendUrl = window.location.origin;
        const text = generatedLinks.map(l => `${frontendUrl}/e/${l.token}`).join('\n');
        navigator.clipboard.writeText(text);
        setCopiedAll(true);
        setTimeout(() => setCopiedAll(false), 2000);
    }

    function handleCopyLink(token: string) {
        const frontendUrl = window.location.origin;
        navigator.clipboard.writeText(`${frontendUrl}/e/${token}`);
    }

    function formatVND(amount: number) {
        return new Intl.NumberFormat('vi-VN').format(amount) + 'đ';
    }

    // Login screen
    if (!authenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center px-4">
                <div className="result-card rounded-2xl p-8 max-w-md w-full">
                    <div className="text-center mb-6">
                        <div className="flex justify-center mb-3">
                            <ShieldLockIcon size={48} className="text-lixi-gold" />
                        </div>
                        <h1 className="text-2xl font-bold text-lixi-gold font-heading">Admin Panel</h1>
                        <p className="text-lixi-cream/50 text-sm mt-1">Đăng nhập để quản lý lì xì</p>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Mật khẩu admin"
                            className="input-festive"
                        />
                        {error && <p className="text-red-400 text-sm">{error}</p>}
                        <button
                            type="submit"
                            disabled={loading}
                            className="btn-claim w-full py-3 rounded-xl text-base font-bold disabled:opacity-50 cursor-pointer"
                        >
                            {loading ? 'Đang kiểm tra...' : 'Đăng nhập'}
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    // Admin dashboard
    return (
        <div className="min-h-screen px-4 py-8 max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-lixi-gold flex items-center gap-2 font-heading">
                        <EnvelopeIcon size={28} />
                        Quản Lý Lì Xì
                    </h1>
                    <p className="text-lixi-cream/40 text-sm mt-1">Tạo chiến dịch, sinh link, theo dõi ngân sách</p>
                </div>
                <a
                    href="/"
                    className="text-sm text-lixi-gold/60 hover:text-lixi-gold transition-colors"
                >
                    ← Trang chủ
                </a>
            </div>

            {/* Alerts */}
            {error && (
                <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm flex items-center gap-2">
                    <CloseIcon size={14} className="text-red-400" />
                    {error}
                    <button onClick={() => setError(null)} className="ml-auto text-red-400 cursor-pointer">
                        <CloseIcon size={14} />
                    </button>
                </div>
            )}
            {success && (
                <div className="mb-4 p-3 rounded-xl bg-green-500/10 border border-green-500/30 text-green-300 text-sm flex items-center gap-2">
                    <CheckIcon size={14} className="text-green-400" />
                    {success}
                    <button onClick={() => setSuccess(null)} className="ml-auto text-green-400 cursor-pointer">
                        <CloseIcon size={14} />
                    </button>
                </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
                {/* Create Campaign */}
                <div className="result-card rounded-2xl p-6">
                    <h2 className="text-lg font-bold text-lixi-gold mb-4 flex items-center gap-2 font-heading">
                        <PlusIcon size={18} className="text-lixi-gold" />
                        Tạo Chiến Dịch Mới
                    </h2>
                    <form onSubmit={handleCreateCampaign} className="space-y-3">
                        <div>
                            <label className="text-xs text-lixi-cream/50 mb-1 block">Tên chiến dịch</label>
                            <input
                                type="text"
                                value={newName}
                                onChange={e => setNewName(e.target.value)}
                                placeholder="VD: Lì xì Tết 2026"
                                required
                                className="input-festive text-sm"
                            />
                        </div>
                        <div>
                            <label className="text-xs text-lixi-cream/50 mb-1 block">Ngân sách (nghìn đồng)</label>
                            <input
                                type="number"
                                value={newBudget}
                                onChange={e => setNewBudget(e.target.value)}
                                placeholder="VD: 500 (= 500.000đ)"
                                required
                                min="1"
                                className="input-festive text-sm"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="btn-claim w-full py-2.5 rounded-lg text-sm font-bold disabled:opacity-50 cursor-pointer"
                        >
                            Tạo chiến dịch
                        </button>
                    </form>
                </div>

                {/* Campaign List */}
                <div className="result-card rounded-2xl p-6">
                    <h2 className="text-lg font-bold text-lixi-gold mb-4 flex items-center gap-2 font-heading">
                        <CopyIcon size={18} className="text-lixi-gold" />
                        Danh Sách Chiến Dịch
                    </h2>
                    {campaigns.length === 0 ? (
                        <p className="text-lixi-cream/40 text-sm">Chưa có chiến dịch nào</p>
                    ) : (
                        <div className="space-y-3 max-h-80 overflow-y-auto">
                            {campaigns.map(c => (
                                <button
                                    key={c.id}
                                    onClick={() => loadCampaignDetail(c.id)}
                                    className={`w-full text-left p-3 rounded-xl border transition-all duration-200 cursor-pointer ${selectedCampaign?.id === c.id
                                        ? 'bg-lixi-red/20 border-lixi-gold/40'
                                        : 'bg-lixi-red/5 border-lixi-gold/10 hover:border-lixi-gold/25'
                                        }`}
                                >
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="font-medium text-lixi-cream text-sm">{c.name}</p>
                                            <p className="text-xs text-lixi-cream/40 mt-0.5">
                                                {c._count.envelopes} bao lì xì
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs text-lixi-gold font-medium">
                                                {formatVND(c.budgetUsed)} / {formatVND(c.budgetTotal)}
                                            </p>
                                            <div className="w-20 h-1.5 bg-lixi-red/20 rounded-full mt-1 overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-lixi-gold to-yellow-400 rounded-full transition-all duration-500"
                                                    style={{ width: `${Math.min(100, (c.budgetUsed / c.budgetTotal) * 100)}%` }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Campaign Detail */}
            {selectedCampaign && (
                <div className="mt-6 result-card rounded-2xl p-6">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h2 className="text-lg font-bold text-lixi-gold flex items-center gap-2 font-heading">
                                <ChartIcon size={18} className="text-lixi-gold" />
                                {selectedCampaign.name}
                            </h2>
                            {selectedCampaign.stats && (
                                <div className="flex gap-4 mt-2 text-xs text-lixi-cream/60">
                                    <span className="flex items-center gap-1">
                                        <EnvelopeSendIcon size={12} className="text-lixi-gold/60" />
                                        Tổng: {selectedCampaign.stats.total}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <CheckIcon size={12} className="text-green-400/60" />
                                        Đã mở: {selectedCampaign.stats.claimed}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <BoxIcon size={12} className="text-lixi-cream/40" />
                                        Chưa mở: {selectedCampaign.stats.unused}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <MoneyIcon size={12} className="text-lixi-gold/60" />
                                        Còn lại: {formatVND(selectedCampaign.stats.budgetRemaining)}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Generate links */}
                    <div className="flex gap-3 items-end mb-4">
                        <div className="flex-1">
                            <label className="text-xs text-lixi-cream/50 mb-1 block">Số lượng link</label>
                            <input
                                type="number"
                                value={quantity}
                                onChange={e => setQuantity(e.target.value)}
                                min="1"
                                max="100"
                                className="input-festive text-sm"
                            />
                        </div>
                        <button
                            onClick={() => handleGenerateLinks(selectedCampaign.id)}
                            disabled={loading}
                            className="btn-claim py-2 px-4 rounded-lg text-sm font-bold whitespace-nowrap disabled:opacity-50 flex items-center gap-1.5 cursor-pointer"
                        >
                            {loading ? (
                                <SpinnerIcon size={14} className="text-[#1a0a0a]" />
                            ) : (
                                <>
                                    <LinkIcon size={14} />
                                    Tạo Link
                                </>
                            )}
                        </button>
                    </div>

                    {/* Generated links list */}
                    {generatedLinks.length > 0 && (
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <h3 className="text-sm font-medium text-lixi-gold flex items-center gap-1.5">
                                    <CheckIcon size={14} className="text-green-400" />
                                    Đã tạo {generatedLinks.length} link!
                                </h3>
                                <button
                                    onClick={handleCopyAll}
                                    className="text-xs bg-lixi-red/20 border border-lixi-gold/20 text-lixi-gold px-3 py-1.5 rounded-lg hover:bg-lixi-red/30 transition-colors flex items-center gap-1.5 cursor-pointer"
                                >
                                    {copiedAll ? (
                                        <>
                                            <CheckIcon size={12} className="text-green-400" />
                                            Đã copy!
                                        </>
                                    ) : (
                                        <>
                                            <CopyIcon size={12} />
                                            Copy tất cả
                                        </>
                                    )}
                                </button>
                            </div>
                            <div className="max-h-60 overflow-y-auto space-y-1.5 p-3 rounded-xl bg-black/20">
                                {generatedLinks.map((link, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-2 p-2 rounded-lg bg-lixi-red/5 border border-lixi-gold/10 group"
                                    >
                                        <span className="text-xs text-lixi-cream/40 w-6">{i + 1}.</span>
                                        <code className="text-xs text-lixi-cream/70 flex-1 truncate font-mono">
                                            {window.location.origin}/e/{link.token}
                                        </code>
                                        <button
                                            onClick={() => handleCopyLink(link.token)}
                                            className="text-lixi-gold/60 hover:text-lixi-gold opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                                        >
                                            <CopyIcon size={14} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Envelope history */}
                    {selectedCampaign.envelopes && selectedCampaign.envelopes.length > 0 && (
                        <div className="mt-4">
                            <h3 className="text-sm font-medium text-lixi-gold mb-2 flex items-center gap-1.5">
                                <HistoryIcon size={14} className="text-lixi-gold" />
                                Lịch sử
                            </h3>
                            <div className="max-h-40 overflow-y-auto space-y-1">
                                {selectedCampaign.envelopes.filter(e => e.status === 'claimed').map(e => (
                                    <div key={e.id} className="flex justify-between text-xs p-2 rounded-lg bg-lixi-red/5">
                                        <span className="text-lixi-cream/60">#{e.id}</span>
                                        <span className="text-lixi-gold font-medium">{formatVND(e.amount || 0)}</span>
                                        <span className="text-lixi-cream/40">
                                            {e.claimedAt ? new Date(e.claimedAt).toLocaleString('vi-VN') : '-'}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
