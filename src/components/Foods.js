import Manus from "../data/manu";
import "./Foods.css"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Foods(props) {
    const [search, setSearch] = useState("")
    const [filterFoods, setFilterFoods] = useState([])

    useEffect(() => {
        const result = Manus.filter((item) => item.title.includes(search) || item.cooking_time.includes(search) || item.difficulty_level.includes(search));
        console.log(result)
        setFilterFoods(result)
    }, [search])

    return ( <
        div className = "manu-container" >
        <
        div className = "search-container" >
        <
        input type = "text"
        className = "search-input"
        placeholder = "Search"
        value = { search }
        onChange = {
            (e) => setSearch(e.target.value) }
        /> <
        p > Ex. //ค้นหา :ชื่ออาหาร:"<span>ต้มยำกุ้ง...</span>" / ระยะเวลาในการปรุง: <span>45</span>(นาที) / ระดับความยากง่าย:"<span>ง่าย, ปานกลาง, ยาก"</span></p>
        <
        /div> <
        article > {
            filterFoods.map((item) => ( <
                Link to = { `/foods/${item.id}` }
                key = { item.id } >
                <
                div className = "card" >
                <
                h3 > { item.title } < /h3> <
                /div> <
                hr className = "seperate" / >
                <
                /Link>
            ))
        } <
        /article> <
        /div>
    )
}