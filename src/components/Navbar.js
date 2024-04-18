import { Link } from "react-router-dom"
import "./Navbar.css"
export default function Navbar() {
    return (
        <nav>
            <Link to="/foods" className="logo">
                <h3>Wongnok Recipes</h3>
            </Link>
            <Link to="/">Home</Link>
            <Link to="/foods">Foods</Link>
            <Link to="/create">Create</Link>
            <Link to="/about">About Us</Link>
            <Link to="/login">Login</Link>

        </nav>
    )

}