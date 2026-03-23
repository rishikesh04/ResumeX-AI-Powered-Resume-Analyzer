import { Link } from "react-router"
const navbar = () => {
  return (
   <nav className="navbar">
       <Link to="/">
           <p className="text-2xl font-bold text-gradient">ResumeX</p>
   
       </Link>
       <Link to="/">
       <p className="primary-button w-fit">Upload Resume</p>
       </Link>
   </nav>
  )
}

export default navbar