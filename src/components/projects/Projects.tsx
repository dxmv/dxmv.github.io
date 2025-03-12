import FinishedProjects from "./FinishedProjects";
import InDevelopment from "./InDevelopment";
const Projects = () => {
    return (
        <div className="border-b border-light-white flex flex-col gap-4 p-20 text-light-white" style={{
            background: `radial-gradient(circle, var(--color-blue) 20%,var(--color-dark-black) 65%)`
        }}>
            <FinishedProjects />
            <InDevelopment />
        </div>
    )
}   

export default Projects;