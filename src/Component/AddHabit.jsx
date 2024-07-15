import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// habitReducer actions and state
import { addHabit, habitSelector, setSuggestionSelected } from "../Redux/Reducer/habitReducer";

// for toast notifications
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddHabit = () => {
    const dispatch = useDispatch();
    // state for getting list of all the habits and to know if user clicked on a habit in suggestion list
    const { habits, suggestionSelected } = useSelector(habitSelector);
    // component level state
    const [habitName,setHabitName] = useState('');
    const [newId, setNewId] = useState(0);

    // if there is a suggestion selected by user from the list
    useEffect(() => { 
        if(suggestionSelected){
            setHabitName(suggestionSelected.habit);
        }
    },[suggestionSelected]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // check if habit already added
        for (const habit of habits) {
            if (habit.name===habitName){
                dispatch(setSuggestionSelected(null));
                setHabitName('');
                toast.error('Habit is already Added !!');
                return;
            }            
        }
        
        // generate new Id:
        setNewId(prev=>prev+1);

        // getting current date to store the creation date
        const newDate =  new Date().toString().slice(4,15);

        // create an array representing seven days of weeks
        // initialize all the value with null  ( pending status of habit on each day )
        const weekStatus = Array(7).fill(null);

        // structure of data to be store inside the habit list
        const data = {
            id:newId,
            name:habitName,
            // count of days on which the habit is completed
            completedDays:0,
            createdOn:`${newDate}`,
            // url of icon related to the selected habit
            // if habit is selected from the suggestion list then store that icon , else provide a default habit icon
            url: suggestionSelected ? `${suggestionSelected.url}` : 'https://freeiconshop.com/wp-content/uploads/edd/task-done-flat.png',
            // weekly status to track status on all the days of week
            weekStatus
        };

        // call action to add the habit to habit list array
        dispatch(addHabit(data));
        // set the selected suggestion to null so that user can selected new suggestion for adding new habit
        dispatch(setSuggestionSelected(null));
        // set input tag's value ''
        setHabitName('');
        // toast notification 
        toast.success('New Habit is Added !!');
    }

    return(
        <div className="w-100 lg:w-80 bg-light rounded shadow-sm d-flex flex-column p-2 justify-self-end">
            <h1 className="text-primary text-lg font-weight-semibold text-center mt-1">
                Add Habit
            </h1>
            {/* form container to get user's data */}
            <div className="w-80 mx-auto border-top border-primary">
                <form onSubmit={handleSubmit}>
                    {/* label of input tag */}
                    <label htmlFor="habit-name" className="font-weight-semibold">
                        Habit:
                    </label>
                    <br />
                    <input type="text" placeholder="Enter habit name..." 
                        id="habit-name" value={habitName}
                        className="w-100 h-8 rounded my-2 px-1 font-weight-semibold text-primary"
                        onChange={(e) => setHabitName(e.target.value)} required />
                    <br />
                    <button type="submit" className="btn btn-primary mt-2 float-right">
                        ADD HABIT
                    </button>
                </form>
            </div>            
        </div>
    )
}

// export the component 
export default AddHabit;