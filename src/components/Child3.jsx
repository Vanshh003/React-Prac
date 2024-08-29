import { useContext } from "react"
import { Count } from "../ContextAPI";

const Child3 = () => {
    const value = useContext(Count);    
    return (
        <div>
            <h1>Child Three</h1>
            <p>{value}</p>
        </div>
    )
};

export default Child3