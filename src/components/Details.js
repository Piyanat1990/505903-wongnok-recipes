import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Manus from "../data/manu"
import "./Details.css"


export default function Details() {
    const { id } = useParams()
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const [cooking_time, setCooking_time] = useState("");
    const [difficulty_level, setDifficulty_level] = useState("");

    useEffect(() => {
        const result = Manus.find((item) => item.id === parseInt(id))
        // console.log(result)
        setTitle(result.title)
        setImage(result.image_url)
        setIngredients(result.ingredients)
        setInstructions(result.instructions)
        setCooking_time(result.cooking_time)
        setDifficulty_level(result.difficulty_level)
        // eslint-disable-next-line
    }, [])

    return (
        <div className="contenter">
            <h2 className="title">{title}</h2>
            <img src={image} alt={title} className="foods-image" />
            <div className="food-detail">
                <h3><span>วัตถุดิบ</span><br /> {ingredients}</h3>
                <hr />
                <h3><span>ขั้นตอน</span><br />  {instructions}</h3>
                <hr />
                <h3><span>ระยะเวลาในการปรุง:</span> {cooking_time} นาที</h3>
                <hr />
                <h3><span>ความยากง่าย:</span> {difficulty_level}</h3>
                <hr />

            </div>
        </div >
    )
}