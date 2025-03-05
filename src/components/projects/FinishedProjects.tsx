import { FinishedProject } from './types';
import ProjectSection from './ProjectSection';

const FinishedProjects = () => {
  const projects: FinishedProject[] = [
    {
      title: "E-Commerce Platform",
      tagline: "Ran up the bag, stopped doing it cause its boring",
      description: "A modern e-commerce solution",
      longDescription: "A fully featured e-commerce platform built with React and Node.js. Includes features like user authentication, product management, cart functionality, and payment processing with Stripe.",
      completionDate: "February 2024",
      stats: [
        { label: "Revenue", value: "300K" },
        { label: "Views", value: "10M" },
        { label: "Videos Posted", value: "1K" },
        { label: "Products Sold", value: "50K" },
        { label: "Active Users", value: "5K" }
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
        { label: "Time Saved", value: "2000h" },
        { label: "Active Users", value: "5K" }
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

  return (
    <div className="w-full py-4 px-4">
      {/* Section Header */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-dark-purple">Finished Projects</h2>
        <p className="text-light-white mt-2">
          Projects I've completed and launched
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-16">
        {projects.map((project, index) => (
          <ProjectSection 
            key={project.title} 
            project={project} 
            index={index} 
          />
        ))}
      </div>
    </div>
  );
};

export default FinishedProjects;