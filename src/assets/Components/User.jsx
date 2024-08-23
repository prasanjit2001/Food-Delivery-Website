import{useState} from "react";


const User=()=>{
    const[count]=useState(0);
    return(
        <div className="user-name m-4 p-4 bg-gray-50 rounded-lg">
            <h1>Count={count}</h1>
            <h2>Name:</h2>
            <h2>Location:</h2>
            <h2>Contact:</h2>

        </div>
    );
}
export default User;