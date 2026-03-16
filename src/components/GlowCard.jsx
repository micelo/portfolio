import React, { useRef } from 'react';

const GlowCard = ({ children }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        // Calculate mouse position relative to the card center
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        // Calculate angle for the glow gradient
        let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
        angle = (angle + 360) % 360;

        cardRef.current.style.setProperty("--start", (angle + 60).toString());
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className="card card-border timeline-card rounded-xl p-6 md:p-10 relative overflow-hidden transition-all duration-300 hover:bg-black-200/30"
        >
            <div className="glow" />
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default GlowCard;