import { useState } from "react";

import "./Createx.css"
export default function Createx() {


    const [newfood, setNewfood] = useState([])
    const [title, setTitle] = useState("")
    const [ingredient, setIngredient] = useState("")
    const [cooking_time, setCooking_time] = useState("")
    const [difficulty_level, setDifficulty_level] = useState("")
    const [instructions, setInstructions] = useState("")


    function saveFood(e) {
        e.preventDefault();
        // console.log("save data")
        if (!title && !ingredient) {
            alert("Please fill your data")

        } else {
            const newFood = {
                id: Math.floor(Math.random() * 1000),
                title: title,
                image_url: "",
                ingredients: ingredient,
                instructions: instructions,
                cooking_time: cooking_time,
                difficulty_level: difficulty_level,

            }

            // console.log(newFood)
            setNewfood(newFood)

            console.log(newfood)
            setTitle("")
            setIngredient("")
            setCooking_time("")
            setDifficulty_level("")

        }
    }


    return (
        <>
            < h1 > Create Your Recipes </h1>
            <div className="con">
                <form onSubmit={saveFood} >
                    <div className="form-control" >
                        <label>รายการ</label>
                        <input type="text"
                            className="text-input"
                            value={title}
                            onChange={
                                (e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="form-control" >
                        <label>วัตถุดิบ</label>
                        <input type="text"
                            className="text-input"
                            value={ingredient}
                            onChange={
                                (e) => setIngredient(e.target.value)}
                        />
                    </div>
                    <div className="form-control" >
                        <label>ขั้นตอน</label>

                        <input type="text"
                            className="text-input"
                            value={instructions}
                            onChange={
                                (e) => setInstructions(e.target.value)}
                        />
                    </div>
                    <div className="form-control" >
                        <label>ระยะเวลาในการปรุง</label>
                        <input type="text"
                            className="text-input"
                            value={cooking_time}
                            onChange={
                                (e) => setCooking_time(e.target.value)}
                        />
                    </div>
                    <div className="form-control" >
                        <label>ความยากง่าย</label>
                        <input type="text"
                            className="text-input"
                            value={difficulty_level}
                            onChange={
                                (e) => setDifficulty_level(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="submit-btn" > Save</button>
                </form>
            </div>
            <section>
                <p className="title">รายการ:  {newfood.title}</p>
                <p className="title">วัตถุดิบ: {newfood.ingredients}</p>
                <p className="title">ขั้นตอน: {newfood.instructions}</p>
                <p className="title">ระยะเวลาในการปรุง:  {newfood.cooking_time}</p>
                <p className="title">ความยากง่าย: {newfood.difficulty_level}</p>
            </section>

        </>
    )
}