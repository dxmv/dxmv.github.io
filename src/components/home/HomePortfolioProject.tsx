type HomePortfolioProjectProps = {      
  project: {
    title: string
    description: string
    image: string
    link: string
  }
}

/**
 * Shows a project in the portfolio section of the home page
 * @param project - The project to display
 * @returns The project component
 */
const HomePortfolioProject = ({ project }: HomePortfolioProjectProps) => {
  return <div className="bg-dark-purple p-4 rounded-lg w-full hover:bg-blue">
    <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-4" />
    <div className="flex flex-row items-center justify-between w-full mb-2">
      <h3 className="text-lg font-bold text-light-white">{project.title}</h3>
      <p className="text-sm text-light-purple">In progress</p>
    </div>
    <p className="text-light-white">{project.description}</p>
  </div>
}

export default HomePortfolioProject
