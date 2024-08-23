import User from "./User";
import UserContext from "../../utils/UserContext";
import { useContext } from "react";

const About=()=>{
    const {loggedInUser}=useContext(UserContext);
    return(
        <div>
            <h1>About</h1>
            <h1 className="text-xl font-bold">{loggedInUser}</h1>
            <h2>This is a Food Order App</h2>
             <User/>
        </div>
    )
}
export default About;