import { useDispatch } from "react-redux";
import { toggleHabitStatus } from "../Redux/Reducer/habitReducer";
import SingleDayStatus from "./SingleDayStatus";
import { toast } from "react-toastify";

/* getting value of { habitIndex = index of habit inside the habit array, 
    handleClose function to hide the component, showStatus = to show status of a habit, 
    weekDays = array of all the days in the week }  from the props*/
const WeekStatus = ({habitIndex,handleCloseClick,showStatus,weekDays}) => {
    const dispatch = useDispatch();
    // change the status of a habit on a single day {done, not done, pending}
    const toggleStatus = (dayIndex,status) => {
        // calling action by passing the 
        // {index of habit in the list, index of day in the week, status of the work}
        dispatch(toggleHabitStatus({habitIndex,dayIndex,status}));
        // if the status of task is changed to done
        if(status){
            // show toast notification that the follwing task is done on 'day'
            toast.success(`${showStatus.name} done on ${weekDays[dayIndex]}`);
        }
    }
    
    return (
        <div className="w-100 p-1 h-100 border-bottom-2 border-primary md:border-0">            
            {/* button to hide the section */}
            {/* hidden on smaller screen */}
            <button className="d-none d-md-block float-start bg-danger text-white px-2 rounded" onClick={handleCloseClick}>
                X
            </button>    
            {/* heading showing name of Habit */}
            <h1 className="text-center text-2xl text-primary font-weight-semibold">
                <span className="text-dark">Habit:</span> {showStatus.name}
            </h1>
            <div className="text-md font-weight-semibold text-dark-subtle fs-6">                
                {/* number of days on which the task is completed */}
                {/* hidden on screen above medium */}
                <span className="float-start">Days Completed : {showStatus.completedDays} / 7</span>                
                {/* to show date of habit creation */}
                <span className="float-end">Added On: {showStatus.createdOn}</span> 
            </div>
    
            {/* container showing weekly status of a task */}
            <div className="w-100 h-100 mt-5% overflow-auto">
                <h2 className="w-100 text-center text-lg font-weight-semibold">Your Weekly Progress:</h2>                
                {/* section containing cards of each day */}
                <div className="w-100 p-2 d-flex flex-wrap justify-content-around align-items-center mt-2%">
                    {weekDays.map((day,i) =>  <SingleDayStatus key={i}
                                                            day={day}
                                                            i={i}
                                                            status={showStatus.weekStatus[i]}
                                                            toggleStatus={toggleStatus} />)}
                </div>
            </div>
        </div>
    )
}

export default WeekStatus;