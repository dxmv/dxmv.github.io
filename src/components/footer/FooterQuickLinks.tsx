/**
 * The quick links section of the footer, with the links to the home, projects, blog and about pages
 * @returns FooterQuickLinks component
 */
const FooterQuickLinks = () => {
    return (
        <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
                <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
                <li><a href="/projects" className="text-gray-300 hover:text-white">Projects</a></li>
                <li><a href="/blog" className="text-gray-300 hover:text-white">Blog</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
            </ul>
        </div>
    );
};

export default FooterQuickLinks; 