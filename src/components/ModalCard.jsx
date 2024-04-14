'use client'
export default function ModalCard({ isOpen, children }) {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#00000034]">
            <div>
                {children}
            </div>
        </div>
    );
}