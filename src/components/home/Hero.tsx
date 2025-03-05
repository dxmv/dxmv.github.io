import SocialMediaLinks from "../reusable/SocialMediaLinks"
import { FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaAws } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiPostgresql, SiMongodb, SiJest } from 'react-icons/si'

// tags that describe me
const tags = [
  "Software Engineer",
  "Full Stack Developer",
  "Web Developer",
]

const technologies = [
  { icon: <FaReact className="w-12 h-12" />, name: "React" },
  { icon: <FaNodeJs className="w-12 h-12" />, name: "Node.js" },
  { icon: <SiTypescript className="w-12 h-12" />, name: "TypeScript" },
  { icon: <FaPython className="w-12 h-12" />, name: "Python" },
  { icon: <SiTailwindcss className="w-12 h-12" />, name: "Tailwind CSS" },
  { icon: <SiPostgresql className="w-12 h-12" />, name: "PostgreSQL" },
  { icon: <SiMongodb className="w-12 h-12" />, name: "MongoDB" },
  { icon: <FaDocker className="w-12 h-12" />, name: "Docker" },
  { icon: <FaGitAlt className="w-12 h-12" />, name: "Git" },
  { icon: <FaAws className="w-12 h-12" />, name: "AWS" },
  { icon: <SiJest className="w-12 h-12" />, name: "Jest" },
]

const heroBackground = "https://cdn.midjourney.com/0af8f9c1-af89-4f64-b038-2b453f18690a/0_1.png"

/**
 * Shows the hero section of the home page
 * @returns Hero component
 */
const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen px-4 w-screen relative">
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex w-full items-center justify-center">
        {/* Left column - Text content */}
        <div className="flex-1 max-w-2xl">
          <span className="text-l text-light-white">Hello, my name is</span>
          <h1 className="font-bold text-5xl text-dark-purple">Dimitrije Stepanović</h1>
          <h2 className="text-xl text-blue mb-6 mt-1">I like to build cool things</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag) => (
              <HeroTag key={tag} tag={tag} />
            ))}
          </div>
          <SocialMediaLinks />
        </div>

        {/* Right column - Technology icons */}
        <div className="flex-1 flex flex-wrap justify-center gap-8">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center group">
              <div className="text-light-white hover:text-dark-purple transition-colors">
                {tech.icon}
              </div>
              <span className="text-sm text-light-white mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const HeroTag = ({ tag }: { tag: string }) => {
  return (
    <div key={tag} className="bg-light-purple px-4 py-2 rounded-lg text-dark-black hover:bg-dark-purple hover:text-light-white hover:cursor-pointer transition-colors">
      {tag}
    </div>
  )
}

export default Hero

