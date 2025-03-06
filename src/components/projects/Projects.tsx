import FinishedProjects from "./FinishedProjects";
import InDevelopment from "./InDevelopment";
const Projects = () => {
    return (
        <div className="border-b border-light-white flex flex-col gap-4 p-20 text-light-white" style={{
            background: `linear-gradient(180deg,var(--color-dark-black) 0%, var(--color-blue) 30%, var(--color-dark-black) 60%)`
        }}>
            <FinishedProjects />
            <InDevelopment />
        </div>
    )
}   

export default Projects;