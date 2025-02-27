import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

import { Github } from "lucide-react"

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

export default SocialMediaLinks