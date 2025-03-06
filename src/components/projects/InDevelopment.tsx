import ProjectCard from './ProjectCard';
import { InDevelopmentProject } from './types';

const InDevelopment = () => {
  const projects: InDevelopmentProject[] = [
    {
      title: "DreamGPT",
      description: "Mobile app that analyzes your dreams and provides insights and interpretations.",
      startDate: "April 2025",
      stats: [
        { label: "Front-end", value: "React Native" },
        { label: "Back-end", value: "Go" },
        { label: "Database", value: "Supabase" }
      ],
      imageUrl: ""
    },
    {
      title: "Marketing helper",
      description: "An app that helps you save the videos, notes and summaries of videos that will help you with your marketing.",
      startDate: "May 2025",
      stats: [
        { label: "Front-end", value: "React Native" },
        { label: "Back-end", value: "Go" },
        { label: "Database", value: "Supabase" }
      ],
      imageUrl: ""
    },
    {
      title: "NFT collection on Solana",
      description: "An NFT collection on Solana.",
      startDate: "April 2025",
      stats: [
        { label: "Followers", value: "5000" },
        { label: "Volumne", value: "? SOL" },
        { label: "Impressions", value: "5M+" }
      ],
      imageUrl: ""
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
