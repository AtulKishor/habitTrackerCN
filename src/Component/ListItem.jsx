import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSuggestionSelected } from "../Redux/Reducer/habitReducer";

const ListItem = (props) => {
    const [habitColor, setHabitColor] = useState(false);
    const dispatch = useDispatch();
    const {habit,url} = props.habit;

    // if user click on any list item store the habit data inside the state variable of habitReducer
    const handleClick = () => {
        dispatch(setSuggestionSelected(props.habit));
    }
    return (
        // container
        <div className="row w-90 d-flex align-items-center font-weight-semibold rounded m-1 cursor-pointer"
        style={{ backgroundColor: habitColor ? "cornflowerblue" : "lightblue", transition: "background-color 0.2s ease-in-out" }}
             onClick={handleClick}
             onMouseOver={()=>setHabitColor(true)}
             onMouseOut={()=>setHabitColor(false)}>
            
            {/* showing name of habit */}
            <div className="col-10">
                {habit}
            </div>
    
            {/* showing habit icon in the right side of list item */}
            <div className="col-2">
                <img src={url} alt="icon" className="img-fluid float-end p-md-1"/>
            </div>
            
        </div>
    );    
}

export default ListItem;