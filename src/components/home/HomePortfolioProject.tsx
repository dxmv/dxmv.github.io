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
  return <div className="bg-gray-200 p-4 rounded-lg w-full">
    <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-4" />
    <div className="flex flex-row items-center justify-between w-full mb-2">
      <h3 className="text-lg font-bold">{project.title}</h3>
      <p className="text-sm text-gray-500">In progress</p>
    </div>
    <p>{project.description}</p>
  </div>
}

export default HomePortfolioProject
