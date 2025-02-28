import FooterAbout from "./FooterAbout";
import FooterQuickLinks from "./FooterQuickLinks";
import FooterContact from "./FooterContact";
import FooterBottom from "./FooterBottom";

const Footer = () => {
    return (
        <footer className="bg-dark-black text-light-white">
            {/* Main footer content */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FooterAbout />
                    <FooterQuickLinks />
                    <FooterContact />
                </div>
            </div>
            <FooterBottom />
        </footer>
    );
}

export default Footer;