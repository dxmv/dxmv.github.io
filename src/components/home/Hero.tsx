import { Linkedin, Github, Twitter, Instagram, Youtube } from "lucide-react"

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
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Name and tagline */}
      <h1 className="text-4xl font-bold">Hello, I'm Dimitrije Stepanović</h1>
      <h2>I like to build cool things</h2>
      <div className="flex flex-wrap gap-2 mt-8">
        {tags.map((tag) => (
          <div key={tag} className="bg-gray-200 px-4 py-2 rounded-full">
            {tag}
          </div>
        ))}
      </div>
      {/* Social media links */}
      <SocialMediaLinks />
    </div>
  )
}

export default Hero

/**
 * Component for social media links
 * @returns Social media links component
 */
const SocialMediaLinks = () => {
  return <div className="flex flex-row gap-2 mt-4">
    <div><Linkedin /></div>
    <div><Github /></div>
    <div><Twitter /></div>
    <div><Instagram /></div>
    <div><Youtube /></div>
  </div>
}