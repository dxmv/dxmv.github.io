import { Github, Linkedin, Twitter } from "lucide-react";

/**
 * The contact section of the footer, with the social media links
 * @returns FooterContact component
 */
const FooterContact = () => {
    return (
        <div>
            <h3 className="text-xl font-bold mb-4">Contact Me</h3>
            <div className="flex space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-300 hover:text-white">
                    <Github size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                   className="text-gray-300 hover:text-white">
                    <Linkedin size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                   className="text-gray-300 hover:text-white">
                    <Twitter size={24} />
                </a>
            </div>
        </div>
    );
};

export default FooterContact; 