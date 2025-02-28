import { Link } from "react-router";

/**
 * The quick links section of the footer, with the links to the home, projects, blog and about pages
 * @returns FooterQuickLinks component
 */
const FooterQuickLinks = () => {
    return (
        <div className="border-r border-light-white flex flex-col">
            <h3 className="text-xl font-bold mb-4 text-light-purple">Quick Links</h3>
            <Link to="/" className="hover:text-blue hover:underline mb-2">Home</Link>
            <Link to="/projects" className="hover:text-blue hover:underline mb-2">Projects</Link>
            <Link to="/contact" className="hover:text-blue hover:underline mb-2">Contact</Link>
        </div>
    );
};


export default FooterQuickLinks; 