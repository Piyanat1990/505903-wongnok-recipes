import about from "../images/about.jpg"
import "./About.css"
export default function About() {
    return (

        <div className="container">
             <h2 className="title">ทีมงานของเรา Wongnok Recipes มุ่งเน้นไปที่ :	
</h2>

<ul>
    <li>การจัดหาส่วนผสมอาหารไทยคุณภาพสูง นำเสนอสสูตรอาหารที่ทำตามได้ง่ายพร้อมคำแนะนำที่ชัดเจน </li>
    <li>การให้เคล็ดลับและเทคนิคเพื่อช่วยให้คุณเชี่ยวชาญเทคนิคการทำอาหารไทย </li>
    <li>สร้างชุมชนออนไลน์ที่อบอุ่นและน่าดึงดูดสำหรับผู้ที่ชื่นชอบอาหารไทย </li>
    <li>เราเชื่อว่าอาหารมีพลังในการเชื่อมโยงผู้คนและวัฒนธรรม เชื่อมโยงผ่านเว็บไซต์ของเรา เราหวังว่าจะได้แบ่งปันรสชาติของประเทศไทยให้คุณและนำความพิเศษของรสชาติแบบแปลกใหม่มาสู่ครัวของคุณ </li>
</ul>
            <img src={about} alt="about" />
           
        </div>

    )
}
