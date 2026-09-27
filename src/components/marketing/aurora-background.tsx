export function AuroraBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-background">
            {/* Blob 1: Top Right - Bright Cyan */}
            <div 
                className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[100px] animate-blob" 
                style={{ background: 'radial-gradient(circle at center, rgba(203, 255, 252, 0.4) 0%, rgba(0, 130, 124, 0.1) 50%, transparent 70%)' }}
            />
            
            {/* Blob 2: Middle Left - Emerald / Teal */}
            <div 
                className="absolute top-[30%] left-[-20%] w-[60vw] h-[60vw] rounded-full blur-[120px] animate-blob delay-200"
                style={{ background: 'radial-gradient(circle at center, rgba(34, 197, 94, 0.25) 0%, rgba(0, 130, 124, 0.15) 50%, transparent 70%)' }}
            />
            
            {/* Blob 3: Bottom Center - Lavender / Purple */}
            <div 
                className="absolute bottom-[-20%] left-[20%] w-[70vw] h-[50vw] rounded-full blur-[140px] animate-blob delay-500"
                style={{ background: 'radial-gradient(circle at center, rgba(253, 233, 255, 0.35) 0%, rgba(229, 176, 236, 0.1) 50%, transparent 70%)' }}
            />
        </div>
    );
}
