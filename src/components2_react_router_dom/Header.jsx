import { Link, useNavigate } from "react-router-dom"

const Header = () => {
    let navigate = useNavigate()  

    return (
        <div style={{border: "1px solid black"}}>
            <Link style={{paddingRight:"5px"}} to="/">Home</Link>
            <Link to="/about" >About</Link>

            <button onClick={()=>navigate("/contact")}>Contact</button>
        </div>
    )
}

export default Header