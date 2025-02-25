/**
 * The about section of the footer, with the logo and the about me text
 * @returns FooterAbout component
 */
const FooterAbout = () => {
    return (
        <div>
            {/* TODO : LOGO HERE */}
            <h3 className="text-xl font-bold mb-4">About Me</h3>
            <p className="text-gray-300">
                PattyBuilds is dedicated to creating innovative web solutions
                and sharing knowledge with the developer community. We focus
                on quality, performance, and user experience.
            </p>
        </div>
    );
};

export default FooterAbout; 