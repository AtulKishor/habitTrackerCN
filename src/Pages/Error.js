import { useEffect } from "react";
// react-route navigation hook
import { useNavigate } from "react-router-dom";

export const Error = () => {
    const navigate = useNavigate();
    // redirect to homepage after 3 second of mounting
    useEffect(()=>{
        setTimeout(()=>{
            navigate("/");
        },3000);
    },[]);

    return(
        // main page container
        <div className="vh-100 d-flex justify-content-center align-items-center bg-secondary">
            {/* div showing the error message */}
            <div className="w-90 h-90 text-lg">        
                {/* page heading */}
                <h1 className="display-4 font-weight-bold text-indigo-600 text-center">Error... Something went wrong!</h1>
                {/* message for redirecting back to homepage */}
                <p className="text-center mt-1 font-weight-semibold">Please Wait, Redirecting back to homepage...</p>        
            </div>            
        </div>        
    )
}
