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
    <div className="w-full h-screen px-4 bg-blue py-8">
      <h2>Skills</h2>
      <div className="flex flex-row gap-4">
      </div>
    </div>
  )
}

export default HomePortfolio
