import { useRouteError } from "react-router-dom";


const Error=()=>{
    const err=useRouteError();
    return(
        <div>
          <h1>Bye Bye</h1>  
          <h1>{err.status}:{err.statusText}</h1>
            </div>
    )
}
export default Error;