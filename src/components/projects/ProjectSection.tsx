import { FinishedProject } from './types';
import { Github, Globe, Twitter } from 'lucide-react';

interface ProjectSectionProps {
  project: FinishedProject;
  index: number;
}

const ProjectSection = ({ project, index }: ProjectSectionProps) => {
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'github':
        return <Github className="w-5 h-5" />;
      case 'website':
        return <Globe className="w-5 h-5" />;
      case 'twitter':
        return <Twitter className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 items-center">
      {/* Image Section */}
      {index % 2 === 0 ? null : (
        <div className="w-full md:w-1/4 h-full">
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="w-full md:w-3/4 h-full bg-dark-purple rounded-lg hover:cursor-pointer">
        <div className="space-y-6 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div>
            <h3 className="text-2xl font-bold text-light-white">{project.title}</h3>
            <p className="text-light-purple mt-2 text-lg">
              {project.tagline}
            </p>
          </div>
          
          {/* Stats */}
          <div className="flex justify-between items-start gap-4 py-4">
            {project.stats.map((stat, statIndex) => (
              <div 
                key={statIndex} 
                className="flex flex-col items-center"
              >
                <span className="text-4xl font-bold text-blue">
                  {stat.value}
                </span>
                <span className="text-sm text-dark-black mt-2 uppercase tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-light-white">{project.longDescription}</p>

          {/* Completion Date */}
          <p className="text-sm text-light-white">
            Completed: {project.completionDate}
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {project.socialLinks.map((link, linkIndex) => (
              <a
                key={linkIndex}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-white hover:text-light-purple transition-colors"
              >
                {getSocialIcon(link.platform)}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Image Section (right side) */}
      {index % 2 === 0 ? (
        <div className="w-full md:w-1/4 h-full">
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      ) : null}
    </div>
  );
};

export default ProjectSection; 