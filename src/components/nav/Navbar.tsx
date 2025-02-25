import { Menu, X } from "lucide-react";
import { useState } from "react";

/**
 * Main navigation component
 * @returns Navbar component
 */
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

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
                        <a href="/blog" className="hover:text-gray-300 transition-colors">
                            Blog
                        </a>
                        <a href="/about" className="hover:text-gray-300 transition-colors">
                            About
                        </a>
                        <a href="/contact" className="hover:text-gray-300 transition-colors">
                            Contact
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white hover:text-gray-300 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a
                                href="/"
                                className="block px-3 py-2 rounded-md hover:bg-gray-700 transition-colors"
                            >
                                Home
                            </a>
                            <a
                                href="/projects"
                                className="block px-3 py-2 rounded-md hover:bg-gray-700 transition-colors"
                            >
                                Projects
                            </a>
                            <a
                                href="/blog"
                                className="block px-3 py-2 rounded-md hover:bg-gray-700 transition-colors"
                            >
                                Blog
                            </a>
                            <a
                                href="/about"
                                className="block px-3 py-2 rounded-md hover:bg-gray-700 transition-colors"
                            >
                                About
                            </a>
                            <a
                                href="/contact"
                                className="block px-3 py-2 rounded-md hover:bg-gray-700 transition-colors"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;