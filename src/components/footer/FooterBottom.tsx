/**
 * The bottom of the footer
 * @returns FooterBottom component
 */
const FooterBottom = () => {
    return (
        <div className="border-t border-gray-700">
            <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} Dimitrije Stepanovic. All rights reserved.</p>
                    <p>Building innovative solutions and sharing knowledge</p>
                </div>
            </div>
        </div>
    );
};

export default FooterBottom; 