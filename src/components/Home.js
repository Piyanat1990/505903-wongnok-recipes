import home from "../images/home.jpg"
import { Link } from "react-router-dom"
import "./Home.css"
export default function Home() {

    return (

        <div className="container">
            <h2>ยินดีต้อนรับสู่ Wongnok Recipes เว็บไซต์สำหรับทุกคนที่ต้องการ โลกของอาหารไทยอันแสนวิเศษ! พวกเรามีความหลงใหลในการแบ่งปันรสชาติและเทคนิคการทำอาหารไทยแบบดั้งเดิม ไม่ว่าคุณจะเป็นเชฟผู้มากประสบการณ์หรือเพิ่งเริ่มต้นเส้นทางการทำอาหาร เรามุ่งมั่นที่จะมอบทรัพยากรและแรงบันดาลใจให้คุณได้สร้างสรรค์เมนูอาหารไทยแสนอร่อยที่บ้าน </h2>
            <Link to={`/foods`}>
                <img src={home} alt="home" />
            </Link>


        </div>
    )
}