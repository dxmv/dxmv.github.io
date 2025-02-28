import ProjectCard from './ProjectCard';
import { InDevelopmentProject } from './types';

const InDevelopment = () => {
  const projects: InDevelopmentProject[] = [
    {
      title: "AI Code Assistant",
      description: "An intelligent coding assistant that helps developers write better code faster using advanced AI models.",
      startDate: "March 2024",
      stats: [
        { label: "Beta Users", value: "500+" },
        { label: "Code Reviews", value: "2.5k" },
        { label: "Accuracy", value: "95%" }
      ],
      imageUrl: "/projects/ai-assistant.jpg"
    },
    {
      title: "CloudSync Platform",
      description: "A multi-cloud management platform that simplifies cloud infrastructure deployment and monitoring.",
      startDate: "January 2024",
      stats: [
        { label: "Active Users", value: "250" },
        { label: "Servers Managed", value: "1k+" },
        { label: "Uptime", value: "99.9%" }
      ],
      imageUrl: "/projects/cloud-sync.jpg"
    },
    {
      title: "DevMetrics Dashboard",
      description: "Real-time analytics dashboard for development teams to track performance metrics and project progress.",
      startDate: "February 2024",
      stats: [
        { label: "Teams Using", value: "25" },
        { label: "Daily Users", value: "300" },
        { label: "Data Points", value: "50k" }
      ],
      imageUrl: "/projects/dev-metrics.jpg"
    }
  ];

  return (
    <div className="w-full py-8 px-4">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-dark-purple">In Development</h2>
        <p className="text-light-white mt-2">
          Current projects I'm actively working on and building
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default InDevelopment;
