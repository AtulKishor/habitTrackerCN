import { useState } from "react";
import { useDispatch } from "react-redux";
import { setShowStatus } from "../Redux/Reducer/habitReducer";

const HabitListItem = (props) => {
    const dispatch = useDispatch();
    const [habitColor, setHabitColor] = useState(false);

    // getting values of habit from the props
    const {name,completedDays,url} = props.habit;
    // if user click on a list item, show that item's weekly status
    const handleClick = () => {
        dispatch(setShowStatus(props.habit));
    }    
    return (
        <div className="row w-100 font-weight-semibold my-1 mx-0 rounded p-1 cursor-pointer"
            style={{ backgroundColor: habitColor ? "cornflowerblue" : "lightblue", transition: "background-color 0.2s ease-in-out" }}
             onClick={handleClick}
             onMouseOver={()=>setHabitColor(true)}
             onMouseOut={()=>setHabitColor(false)} >
            {/* showing name of habit and number of days on which the habit is completed in a week */}
            <div className="col-10 fs-5 d-flex align-items-center justify-content-between">
                <p>{name}</p>
                <sub>{completedDays}/7 Days</sub>
            </div>
            {/* showing an icon related to the habit */}
            <div className="col-2">
                <img src={url} alt="icon" className="img-fluid p-lg-1 float-end"/>    
            </div>
        </div>
    );    
}

export default HabitListItem;