import FinishedProjects from "./FinishedProjects";
import InDevelopment from "./InDevelopment";
const Projects = () => {
    return (
        <div className="flex flex-col gap-4 p-4">
            <FinishedProjects />
            <InDevelopment />
        </div>
    )
}   

export default Projects;