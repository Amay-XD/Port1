import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  description: string;
  color: 'cyan' | 'purple' | 'green';
  pdfUrl?: string;
  logo?: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ 
  title, 
  issuer, 
  date, 
  description,
  color,
  pdfUrl,
  logo
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const colorClasses = {
    cyan: {
      border: 'group-hover:border-cyan-500',
      text: 'text-cyan-400',
      glow: 'group-hover:shadow-cyan-500/20'
    },
    purple: {
      border: 'group-hover:border-purple-500',
      text: 'text-purple-400',
      glow: 'group-hover:shadow-purple-500/20'
    },
    green: {
      border: 'group-hover:border-green-500',
      text: 'text-green-400',
      glow: 'group-hover:shadow-green-500/20'
    }
  };
  
  return (
    <div 
      className={`group perspective-1000 h-64 cursor-pointer`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front */}
        <div className={`absolute inset-0 backface-hidden bg-gray-800 p-6 rounded-lg border border-gray-700 ${colorClasses[color].border} transition-all duration-300 group-hover:shadow-lg ${colorClasses[color].glow}`}>
          <div className="h-full flex flex-col justify-between">
            <div>
              {logo && (
                <div className="w-16 h-16 mb-4 overflow-hidden rounded-lg bg-white p-2">
                  <img src={logo} alt={issuer} className="w-full h-full object-contain" />
                </div>
              )}
              <h3 className={`text-xl font-bold mb-2 ${colorClasses[color].text}`}>{title}</h3>
              <p className="text-gray-400">{issuer}</p>
            </div>
            <div className="mt-auto">
              <p className="text-sm text-gray-500">{date}</p>
              <p className="text-xs text-gray-400 mt-2">Click to view details</p>
            </div>
          </div>
        </div>
        
        {/* Back */}
        <div className={`absolute inset-0 backface-hidden rotate-y-180 bg-gray-800 p-6 rounded-lg border border-gray-700 ${colorClasses[color].border} transition-all duration-300 group-hover:shadow-lg ${colorClasses[color].glow}`}>
          <div className="h-full flex flex-col">
            <h3 className={`text-lg font-bold mb-2 ${colorClasses[color].text}`}>{title}</h3>
            <p className="text-gray-300 text-sm mb-4">{description}</p>
            {pdfUrl && (
              <a 
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`inline-flex items-center text-sm ${colorClasses[color].text} hover:underline mt-2`}
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Verify Certificate
              </a>
            )}
            <div className="mt-auto">
              <p className="text-xs text-gray-400">Click to flip back</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;