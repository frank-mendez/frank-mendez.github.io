export function UnderwaterBg() {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* Deep ocean base */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#00111f] via-[#002d5c] to-[#0077b6]" />

            {/* Light rays from surface */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: [
                        'radial-gradient(ellipse 40% 60% at 25% -10%, rgba(0,210,255,0.28) 0%, transparent 70%)',
                        'radial-gradient(ellipse 30% 50% at 70% -5%, rgba(0,180,230,0.22) 0%, transparent 65%)',
                        'radial-gradient(ellipse 20% 40% at 50% 5%, rgba(100,230,255,0.15) 0%, transparent 60%)',
                    ].join(', '),
                }}
            />

            {/* Mid-depth caustic shimmer */}
            <div
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                    backgroundImage: [
                        'radial-gradient(circle 400px at 60% 35%, rgba(0,210,255,0.2) 0%, transparent 100%)',
                        'radial-gradient(circle 300px at 30% 65%, rgba(0,160,200,0.2) 0%, transparent 100%)',
                    ].join(', '),
                }}
            />

            {/* Surface highlight strip */}
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#48cae4]/25 to-transparent pointer-events-none" />

            {/* Bottom depth fade */}
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#00111f]/70 to-transparent pointer-events-none" />
        </div>
    )
}
