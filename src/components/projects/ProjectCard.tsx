import { InDevelopmentProject } from './types';

interface ProjectCardProps {
  project: InDevelopmentProject;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="hover:bg-dark-purple hover:text-light-white flex items-center justify-between p-4 mb-4 bg-light-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      {/* Left side - Project info */}
      <div className="flex-1 pr-6">
        <h3 className="text-xl font-bold mb-2 text-light-purple">{project.title}</h3>
        
        {/* Stats */}
        <div className="flex gap-4 mb-2">
          {project.stats.map((stat, index) => (
            <div key={index} className="flex flex-col text-blue">
              <span className="text-sm">{stat.label}</span>
              <span className="font-semibold">{stat.value}</span>
            </div>
          ))}
        </div>
        
        {/* Description */}
        <p className="text-dark-black mb-2">{project.description}</p>
        
        {/* Start Date */}
        <p className="text-sm text-gray-500">
          Started: {project.startDate}
        </p>
      </div>

      {/* Right side - Project image */}
      <div className="w-48 h-32 flex-shrink-0">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default ProjectCard; 