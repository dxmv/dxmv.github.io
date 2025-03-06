import { FinishedProject } from './types';
import ProjectSection from './ProjectSection';

const FinishedProjects = () => {
  const projects: FinishedProject[] = [
    {
      title: "NanoDB",
      tagline: "A simple, fast, and efficient database, written in C++.",
      longDescription: "Developed a simple, fast, and efficient database, in C++. Inspired by SQLite, it is a single file database that is easy to use and integrate into any project. It's used in the same way as SQLite, and you can do everything that you can do with SQLite. During the development of this project, I learned a lot about databases and how they work. I also learned a lot about C++ and how to use it to build fast and efficient applications.",
      completionDate: "March 2025",
      stats: [
        { label: "Language", value: "C++" },
        { label: "Platform", value: "Linux" },
        { label: "Inspired by", value: "SQLite" },
      ],
      imageUrl: "/projects/nanodb.png",
      socialLinks: [
        { platform: "github", url: "https://github.com/dxmv/nano_db" },
      ]
    },
    {
      title: "Task Management App",
      tagline: "Smart task organization tool",
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
      tagline: "Advanced social media metrics",
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