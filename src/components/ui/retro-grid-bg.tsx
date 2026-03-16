export function RetroGridBg() {
    return (
        <div className="absolute inset-0 overflow-hidden bg-[#070714]">
            {/* Perspective grid layer */}
            <div className="absolute inset-0" style={{ perspective: '300px' }}>
                <div
                    className="absolute inset-x-[-20%] bottom-0 h-[200%]"
                    style={{
                        backgroundImage: [
                            'linear-gradient(to right, rgba(99,102,241,0.22) 1px, transparent 1px)',
                            'linear-gradient(to bottom, rgba(99,102,241,0.22) 1px, transparent 1px)',
                        ].join(', '),
                        backgroundSize: '50px 50px',
                        transform: 'rotateX(70deg)',
                        transformOrigin: 'bottom center',
                    }}
                />
            </div>
            {/* Violet center glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px] rounded-full bg-violet-600/20 blur-3xl pointer-events-none" />
            {/* Top fade */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#070714] to-transparent pointer-events-none" />
            {/* Bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#070714] to-transparent pointer-events-none" />
        </div>
    )
}
