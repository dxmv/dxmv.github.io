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
      imageUrl: null,
      socialLinks: [
        { platform: "github", url: "https://github.com/dxmv/nano_db" },
      ]
    },
    {
      title: "UFC Match Predictor",
      tagline: "Predict UFC matches with AI",
      longDescription: "An AI-powered tool that predicts the outcome of UFC matches. It uses a combination of data from past matches, fighter stats, and other relevant information to make predictions.",
      completionDate: "January 2025",
      stats: [
        { label: "Backend", value: "Flask" },
        { label: "Frontend", value: "React" },
        { label: "Accuracy", value: "70%" },
      ],
      imageUrl: null,
      socialLinks: [
        { platform: "github", url: "https://github.com/dxmv/ufc-match-predictor" },
      ]
    },
    {
      title: "HR Interview Simulator",
      tagline: "Simulate HR interviews with AI",
      longDescription: "A tool that simulates HR interviews with AI. It uses a combination of data from past interviews, interviewer stats, cv data and other relevant information to make predictions. During the development of this project, I learned a lot about AI and how it works. I also learned a lot about building a fast, efficient and scalable backend & frontend for the project.",
      completionDate: "March 2025",
      stats: [
        { label: "Backend", value: "Flask" },
        { label: "Frontend", value: "React" },
        { label: "Model", value: "Mistral" },
      ],
      imageUrl: null,
      socialLinks: [
        { platform: "github", url: "https://github.com/dxmv/hr-interview-simulator" },
      ]
    },
    {
      title: "Crypto-currency wallet manager",
      tagline: "Manage your crypto-currency wallets",
      longDescription: "A webapp that helps you track and manage your crypto-currency wallets. During the development of this project, I learned a lot about crypto-currency and how it works. I also learned a lot about using third party APIs to get data and use it in my project.",
      completionDate: "October 2024",
      stats: [
        { label: "Backend", value: "Spring Boot" },
        { label: "Frontend", value: "React" },
        { label: "Database", value: "PostgreSQL" },
      ],
      imageUrl: null,
      socialLinks: [
        { platform: "github", url: "https://github.com/dxmv/crypto-currency-wallet-manager" },
      ],

    },
    {
      title: "Fitness Tracker",
      tagline: "Track your workouts and routines",
      longDescription: "A mobile app that helps you track your workouts and routines. The app also helps you improve your form and technique by providing you with video tutorials of the correct movements and how to do them. Gave up on the app because of new profitable app ideas and college.",
      completionDate: "October 2024",
      stats: [
        { label: "Backend", value: "Spring Boot" },
        { label: "Frontend", value: "React Native" },
        { label: "Database", value: "PostgreSQL" },
      ],
      imageUrl: null,
      socialLinks: [
        { platform: "github", url: "https://github.com/dxmv/fitness-tracker" },
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