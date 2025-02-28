import HomePortfolioProject from "./HomePortfolioProject"
const projects = [
  {
    title: "Project 1",
    description: "Description of project 1",
    image: "https://via.placeholder.com/150",
    link: "https://www.google.com",
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    image: "https://via.placeholder.com/150",
    link: "https://www.google.com",
  },
  {
    title: "Project 3",
    description: "Description of project 3",
    image: "https://via.placeholder.com/150",
    link: "https://www.google.com",
  },
  {
    title: "Project 4",
    description: "Description of project 4",
    image: "https://via.placeholder.com/150",
    link: "https://www.google.com",
  },
  
]

/**
 * Shows the portfolio section of the home page
 * @returns Portfolio component
 */
const HomePortfolio = () => {
  return (
    <div className="w-full h-screen px-20">
      {/* Title and description */}
      <h2 className="text-2xl font-bold text-dark-purple">Things I've worked on</h2>
      <h4 className="text-lg mb-4 text-light-white">Explore my projects</h4>

      {/* Projects */}
      <div className="grid grid-cols-2 gap-4">
        {projects.map((project) => (
          <HomePortfolioProject key={project.title} project={project} />
        ))}
      </div>
    </div>
  )
}

export default HomePortfolio
