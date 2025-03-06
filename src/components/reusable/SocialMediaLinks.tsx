import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

import { Github } from "lucide-react"

/**
 * Component for social media links
 * @returns Social media links component
 */
const SocialMediaLinks = () => {
    return <div className="flex flex-row gap-2 mt-4">
      <SocialMediaLink icon={<Linkedin size={20} color="black" />} href="https://www.linkedin.com/in/dimitrije-stepanovic/" />
      <SocialMediaLink icon={<Github size={20} color="black" />} href="https://github.com/dimitrije-stepanovic" />
      <SocialMediaLink icon={<Twitter size={20} color="black" />} href="https://twitter.com/dimitrije_step" />
      <SocialMediaLink icon={<Instagram size={20} color="black" />} href="https://www.instagram.com/dimitrije_step" />
      <SocialMediaLink icon={<Youtube size={20} color="black" />} href="https://www.youtube.com/@dimitrije_step" />
    </div>
}

const SocialMediaLink = ({ icon, href }: { icon: React.ReactNode, href: string }) => {
    return <a href={href} target="_blank" rel="noopener noreferrer" className="text-light-white rounded-full p-2 bg-light-white hover:bg-dark-purple transition-colors">
        {icon}
    </a>
}

export default SocialMediaLinks