import FinishedProjects from "./FinishedProjects";
import InDevelopment from "./InDevelopment";
const Projects = () => {
    return (
        <div className="border-b border-light-white flex flex-col gap-4 p-20 text-light-white bg-dark-black">
            <FinishedProjects />
            <InDevelopment />
        </div>
    )
}   

export default Projects;