import React from 'react';

interface ProjectCardProps {
  title: string;
  status: string;
  description: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  status, 
  description, 
  tags 
}) => {
  return (
    <div className="group bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">{title}</h3>
          <span className="px-2 py-1 text-xs rounded-full bg-gray-700 text-purple-400 border border-purple-500/30">{status}</span>
        </div>
        
        <p className="text-gray-300 mb-6">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-xs rounded-full bg-gray-900 text-gray-400 border border-gray-700 group-hover:border-purple-500/50 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="px-6 py-4 bg-gray-900 border-t border-gray-700 group-hover:border-purple-500/30 transition-colors">
        <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
          View Details →
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;