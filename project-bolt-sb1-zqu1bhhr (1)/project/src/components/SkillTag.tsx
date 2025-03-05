import React from 'react';

interface SkillTagProps {
  text: string;
  color: 'cyan' | 'purple' | 'green';
}

const SkillTag: React.FC<SkillTagProps> = ({ text, color }) => {
  const colorClasses = {
    cyan: {
      border: 'group-hover:border-cyan-500',
      text: 'group-hover:text-cyan-400',
      shadow: 'group-hover:shadow-cyan-500/30'
    },
    purple: {
      border: 'group-hover:border-purple-500',
      text: 'group-hover:text-purple-400',
      shadow: 'group-hover:shadow-purple-500/30'
    },
    green: {
      border: 'group-hover:border-green-500',
      text: 'group-hover:text-green-400',
      shadow: 'group-hover:shadow-green-500/30'
    }
  };
  
  return (
    <div className="group">
      <div className={`px-4 py-2 rounded-full bg-gray-800 border border-gray-700 ${colorClasses[color].border} text-gray-300 ${colorClasses[color].text} transition-all duration-300 hover:shadow-lg ${colorClasses[color].shadow}`}>
        {text}
      </div>
    </div>
  );
};

export default SkillTag;