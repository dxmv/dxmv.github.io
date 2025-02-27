import { FinishedProject } from './types';
import { Github, Globe, Twitter } from 'lucide-react';

const FinishedProjects = () => {
  const projects: FinishedProject[] = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution",
      longDescription: "A fully featured e-commerce platform built with React and Node.js. Includes features like user authentication, product management, cart functionality, and payment processing with Stripe.",
      completionDate: "February 2024",
      stats: [
        { label: "Total Sales", value: "$50k+" },
        { label: "Active Users", value: "5k" },
        { label: "Countries", value: "25" }
      ],
      imageUrl: "/projects/ecommerce.jpg",
      socialLinks: [
        { platform: "github", url: "https://github.com/username/ecommerce" },
        { platform: "website", url: "https://ecommerce-demo.com" },
        { platform: "twitter", url: "https://twitter.com/ecommerce" }
      ]
    },
    {
      title: "Task Management App",
      description: "Smart task organization tool",
      longDescription: "An intuitive task management application that helps teams collaborate effectively. Features include real-time updates, task delegation, progress tracking, and detailed analytics.",
      completionDate: "December 2023",
      stats: [
        { label: "Teams", value: "100+" },
        { label: "Tasks Completed", value: "50k" },
        { label: "Time Saved", value: "2000h" }
      ],
      imageUrl: "/projects/task-app.jpg",
      socialLinks: [
        { platform: "github", url: "https://github.com/username/taskapp" },
        { platform: "website", url: "https://taskapp.com" }
      ]
    },
    {
      title: "Social Media Analytics",
      description: "Advanced social media metrics",
      longDescription: "A comprehensive analytics platform for social media managers. Provides detailed insights, engagement metrics, and AI-powered recommendations for content strategy.",
      completionDate: "October 2023",
      stats: [
        { label: "Processed Posts", value: "1M+" },
        { label: "Business Users", value: "2k" },
        { label: "ROI Increase", value: "40%" }
      ],
      imageUrl: "/projects/social-analytics.jpg",
      socialLinks: [
        { platform: "github", url: "https://github.com/username/social-analytics" },
        { platform: "website", url: "https://social-metrics.com" },
        { platform: "twitter", url: "https://twitter.com/socialmetrics" }
      ]
    }
  ];

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
    <div className="max-w-6xl mx-auto py-8 px-4">
      {/* Section Header */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Finished Projects</h2>
        <p className="text-gray-600 mt-2">
          Projects I've completed and launched
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-16">
        {projects.map((project, index) => (
          <div 
            key={project.title}
            className="flex flex-col md:flex-row gap-8 items-center"
          >
            {/* Image Section */}
            {index % 2 === 0 ? null : (
              <div className="w-full md:w-1/2">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            )}

            {/* Content Section - Added border and padding */}
            <div className="w-full md:w-1/2">
              <div className="space-y-4 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                
                {/* Stats */}
                <div className="flex gap-6">
                  {project.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="flex flex-col">
                      <span className="text-sm text-gray-500">{stat.label}</span>
                      <span className="font-semibold">{stat.value}</span>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-600">{project.longDescription}</p>

                {/* Completion Date */}
                <p className="text-sm text-gray-500">
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
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {getSocialIcon(link.platform)}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Image Section (right side) */}
            {index % 2 === 0 ? (
              <div className="w-full md:w-1/2">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinishedProjects;
