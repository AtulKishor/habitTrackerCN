import { useSelector } from "react-redux";
import { habitSelector } from "../Redux/Reducer/habitReducer";

const Quote = () => {
    const {quote} = useSelector(habitSelector);
    return (
        // container
        <div className="w-100 lg:w-80 h-auto mt-5 shadow-sm rounded bg-primary-subtle text-dark p-3">
            
            {/* heading on left side of section */}
            <div className="fs-5 bg-secondary text-light">
                Quote of the day:
            </div>
    
            {/* quote in the center of screen */}
            <div className="w-100 fs-3 text-center font-weight-bold">
                {quote.text}
            </div>
    
            {/* author name at the right side of section */}
            <h5 className="float-end font-weight-semibold text-dark">
                - <i className="fs-6">{quote.author}</i>
            </h5>         
        </div>
    );    
}

export default Quote;