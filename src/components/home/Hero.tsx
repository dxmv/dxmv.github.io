import SocialMediaLinks from "../reusable/SocialMediaLinks"

// tags that describe me
const tags = [
  "Software Engineer",
  "Full Stack Developer",
  "Web Developer",
]

/**
 * Shows the hero section of the home page
 * @returns Hero component
 */
const Hero = () => {
  return (
    <div className="flex flex-col items-start justify-center h-screen p-20">
      {/* Name and tagline */}
      <h1 className="text-4xl font-bold text-dark-purple mb-2">Hello, I'm Dimitrije Stepanović</h1>
      <h2 className="text-xl text-light-white mb-4">I like to build cool things</h2>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <HeroTag key={tag} tag={tag} />
        ))}
      </div>
      {/* Social media links */}
      <SocialMediaLinks />
    </div>
  )
}

const HeroTag = ({ tag }: { tag: string }) => {
  return (
    <div key={tag} className="bg-light-purple px-4 py-2 rounded-lg text-dark-black hover:bg-dark-purple hover:text-light-white transition-colors">
      {tag}
    </div>
  )
}

export default Hero

