import { SuggestedHabit } from "../Data/SuggestedHabit";
import ListItem from "./ListItem";

const Suggestions = () => {
    return (
        <>  
            {/* navbar showing suggestion heading */}
            <nav className="w-100 h-55px text-lg text-primary 
                            font-weight-semibold shadow-sm p-2 d-flex justify-content-center 
                            align-items-center sticky-top bg-light">
                Suggestions
            </nav>
    
            {/* list container, containing list of the suggested habits */}
            <div className="w-100 d-flex flex-column p-2 overflow-auto">
    
                {/* map over the array of suggested habits to show all items one by one in the list */}
                {SuggestedHabit.map((habit, i) => <ListItem key={i} habit={habit} />)} 
            </div>
            
        </>
    );    
}

export default Suggestions;