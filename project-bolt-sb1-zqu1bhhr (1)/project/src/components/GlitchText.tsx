import React, { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  const [isGlitching, setIsGlitching] = useState(false);
  
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 3000);
    
    return () => clearInterval(glitchInterval);
  }, []);
  
  return (
    <h1 className={`relative ${className}`}>
      <span className={`relative z-10 ${isGlitching ? 'opacity-90' : ''}`}>
        {text}
      </span>
      
      {isGlitching && (
        <>
          <span className="absolute top-0 left-0 z-0 text-red-500 animate-glitch-1" aria-hidden="true">
            {text}
          </span>
          <span className="absolute top-0 left-0 z-0 text-blue-500 animate-glitch-2" aria-hidden="true">
            {text}
          </span>
        </>
      )}
    </h1>
  );
};

export default GlitchText;