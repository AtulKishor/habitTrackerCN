import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { habitSelector, setShowStatus } from "../Redux/Reducer/habitReducer";
import WeekStatus from "./WeekStatus";

const CalculateDayOfWeek = (date) => {
    // array storing all the dates and day
    var days = new Array();
    // storing values in asceding order of date
    for (var i = 6; i >= 0; i--){
        // store values in the form of string
        days[6-i] = new Date(date.getFullYear(), date.getMonth(), date.getDate() - i).toString();
        days[6-i] = `${days[6-i].slice(0,4)}, ${days[6-i].slice(4,15)}`;
    }
    // return the array of dates
    return days;
}

const HabitStatus = () => {
    const dispatch = useDispatch();
    const { habits, showStatus } = useSelector(habitSelector);
    const weekDays = CalculateDayOfWeek(new Date());

    // for hiding the weekly status section from screen
    const handleCloseClick = (e) => {
        e.preventDefault();
        // removing the value of selected item from variable on closing the section
        dispatch(setShowStatus(null));
    }
    return (
        <div className="w-100 md:w-66 h-100 ml-1 d-flex flex-column p-1">
            
            {/* a navbar to navigate to home page for adding a new habit to list */}
            <nav className="w-100 p-1">
                {/* link to homepage */}
                <NavLink to="/">
                    {/* button to redirect to homepage */}
                    <button className="btn btn-primary float-end">
                        New Habit
                    </button>
                </NavLink>
            </nav>
    
            {/* container of status section */}
            <div className="w-100 h-100 mt-1 p-1 rounded d-flex flex-column bg-fixed overflow-auto">
                    
                {/* show weekly status of a single habit when user click on habit in the list */}
                {/* hidden on screen below width "medium" */}
                <div className="d-none d-md-block w-100">
                    {   
                        // if user clicks on a habit
                        showStatus ?
                            // show weekly status of task 
                            // passing close section function, selected habit and week days as props
                            <WeekStatus handleCloseClick={handleCloseClick}
                                        showStatus={showStatus}
                                        weekDays={weekDays} />
                            :
                            <h4 className="text-center font-weight-semibold">
                            {habits.length !== 0 ?
                                // if list contains some items
                                'Select habit from list to know your weekly status'
                                :
                                // in case the habit list is empty
                                'Add some habits to see your progress'
                            }
                            </h4>
                    }
                </div>
    
                {/* visible only on screen below medium width */}
                {/* show list of all the habits along with their weekly status */}
                <div className="d-block d-md-none w-100 h-100">
                    {   
                        // if user's habit list is empty
                        habits.length === 0 ?
                            // show following message
                            <div className="w-100 text-center font-weight-semibold text-light">
                                Nothing in Your List
                            </div>
                        :
                        // if habit list contains some habits then render each one along with their weekly status
                        habits.map((habit, i) => <WeekStatus key={i}
                                                             habitIndex={i}
                                                             handleCloseClick={handleCloseClick}
                                                             showStatus={habit}
                                                             weekDays={weekDays} /> )
                    }
                </div>
            </div>            
        </div>
    );
}

export default HabitStatus;