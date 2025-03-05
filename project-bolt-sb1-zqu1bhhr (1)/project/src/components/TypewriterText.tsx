import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
  typingSpeed?: number;
  startDelay?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  className = '',
  typingSpeed = 100,
  startDelay = 500
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  
  useEffect(() => {
    const startTyping = setTimeout(() => {
      setIsTyping(true);
    }, startDelay);
    
    return () => clearTimeout(startTyping);
  }, [startDelay]);
  
  useEffect(() => {
    if (!isTyping) return;
    
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, typingSpeed, isTyping]);
  
  return (
    <div className={className}>
      {displayText}
      {currentIndex < text.length && (
        <span className="inline-block w-2 h-4 bg-cyan-400 ml-1 animate-blink"></span>
      )}
    </div>
  );
};

export default TypewriterText;