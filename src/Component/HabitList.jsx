import { useSelector } from "react-redux";
import { habitSelector } from "../Redux/Reducer/habitReducer";

// components
import HabitListItem from "./HabitListItem";

const HabitList = () => {
    const { habits } = useSelector(habitSelector);
    return (
        // main container hidden on screen below the "medium width"
        <div className="d-none d-md-block bg-fixed border border-2 border-primary shadow rounded">
            {/* navbar in the list showing heading */}
            <nav className="w-100 h-50px fs-4 font-weight-semibold p-2 sticky-top bg-primary">
                {habits.length === 0 ? 'Nothing in your habit list' : 'Your Habit List'}
            </nav>
    
            <div className="w-100 h-fill d-flex flex-column p-2 overflow-auto">
                { habits.map((habit, i) => <HabitListItem key={i} habit={habit} />)}
            </div>    
        </div>
    );    
}

export default HabitList;