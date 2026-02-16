'use client';

interface QRCodeProps {
    bankId: string;
    accountNo: string;
    accountName: string;
    amount: number;
    description: string;
}

export function QRCode({ bankId, accountNo, accountName, amount, description }: QRCodeProps) {
    // VietQR API - generates QR code for bank transfer
    const qrUrl = `https://img.vietqr.io/image/${bankId}-${accountNo}-compact2.png?amount=${amount}&addInfo=${encodeURIComponent(description)}&accountName=${encodeURIComponent(accountName)}`;

    return (
        <div className="flex flex-col items-center gap-3">
            <div className="rounded-xl overflow-hidden border-2 border-lixi-gold/30 bg-white p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={qrUrl}
                    alt="QR chuyển khoản"
                    width={200}
                    height={200}
                    className="rounded-lg"
                />
            </div>
            <p className="text-xs text-lixi-gold/60 text-center">
                Quét QR để chuyển khoản
            </p>
        </div>
    );
}
