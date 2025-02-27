/**
 * Main navigation component
 * @returns Navbar component
 */
const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo and Brand */}
                    <div className="flex items-center">
                        {/* TODO: Add Logo */}
                        <a href="/" className="text-xl font-bold">
                            PattyBuilds
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="/" className="hover:text-gray-300 transition-colors">
                            Home
                        </a>
                        <a href="/projects" className="hover:text-gray-300 transition-colors">
                            Projects
                        </a>
                        <a href="/contact" className="hover:text-gray-300 transition-colors">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;