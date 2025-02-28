import { NavLink } from "react-router";

/**
 * Main navigation component
 * @returns Navbar component
 */
const Navbar = () => {
    
    return (
        <nav className="bg-dark-black text-light-white sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo and Brand */}
                    <div className="flex items-center">
                        {/* TODO: Add Logo */}
                        <NavLink to="/" className="text-xl font-bold">
                            PattyBuilds
                        </NavLink>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => 
                                `transition-colors ${isActive ? 'text-light-purple underline' : 'hover:text-dark-purple'}`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to="/projects" 
                            className={({ isActive }) => 
                                `transition-colors ${isActive ? 'text-light-purple underline' : 'hover:text-dark-purple'}`
                            }
                        >
                            Projects
                        </NavLink>
                        <NavLink 
                            to="/contact" 
                            className={({ isActive }) => 
                                `transition-colors ${isActive ? 'text-light-purple underline' : 'hover:text-dark-purple'}`
                            }
                        >
                            Contact
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;