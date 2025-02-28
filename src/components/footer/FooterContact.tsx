import SocialMediaLinks from "../reusable/SocialMediaLinks";
import { Link } from "react-router";
/**
 * The contact section of the footer, with the social media links
 * @returns FooterContact component
 */
const FooterContact = () => {
    return (
        <div>
            <Link to="/contact" className="text-xl font-bold text-light-purple hover:underline mb-4">
                Contact Me
            </Link>
            <SocialMediaLinks />
        </div>
    );
};

export default FooterContact; 