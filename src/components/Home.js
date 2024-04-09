import home from "../images/home.svg"
import { Link } from "react-router-dom"
export default function Home() {

    return (

        <div className="container">
            <h2 className="title">Home</h2>
            <Link to={`/foods`}>
                <img src={home} alt="home" />
            </Link>


        </div>
    )
}