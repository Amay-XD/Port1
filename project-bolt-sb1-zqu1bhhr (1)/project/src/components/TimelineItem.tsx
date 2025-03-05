import React from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  organization: string;
  description: string;
  highlight?: string;
  image?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  year, 
  title, 
  organization, 
  description,
  highlight,
  image }) => {
  return (
    <div className="mb-12 relative group">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 mb-4 md:mb-0">
          <div className="bg-gray-800 p-3 rounded-lg border border-gray-700 group-hover:border-purple-500 transition-colors duration-300">
            <span className="text-purple-400 font-mono">{year}</span>
          </div>
        </div>
        
        <div className="md:w-3/4 md:pl-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gray-700 group-hover:bg-purple-500 transition-colors duration-300">
            <div className="absolute left-1/2 top-4 w-3 h-3 rounded-full bg-purple-500 -translate-x-1/2 group-hover:animate-pulse"></div>
          </div>
          
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 group-hover:border-purple-500 transition-colors duration-300">
            <div className="flex items-start gap-4">
              {image && (
                <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
                  <img src={image} alt={organization} className="w-full h-full object-cover" />
                </div>
              )}
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
                <p className="text-gray-400 mb-3">{organization}</p>
                <p className="text-gray-300">{description}</p>
                {highlight && (
                  <p className="mt-2 text-purple-400 font-semibold">{highlight}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;