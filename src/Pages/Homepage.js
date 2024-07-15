import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// actions from habitReducer
import { habitSelector, quoteFetchThunk, setSuggestionSelected } from "../Redux/Reducer/habitReducer";

// Components
import AddHabit from "../Component/AddHabit";
// a new quote on each render 
import Quote from "../Component/Quote";
// list of suggested habits
import Suggestions from "../Component/Suggestions";
 
const Homepage = () => {
    const dispatch = useDispatch();
    // state variable from habitReducer , to show image on homepage, to know if user clicked on a habit in suggestion list
    const { displayImageUrl,suggestionSelected } = useSelector(habitSelector);
    // whether to show / hide the input section to "Add Habit"
    const [showAddHabit,setShowAddHabit] = useState(false);

    // fetch a quote from api on first render of the page
    useEffect(() => {
        dispatch(quoteFetchThunk());
    },[dispatch]);

    // if user click on a suggestion in suggestion list, show the "Add Habit" form
    useEffect(() => {
        if(suggestionSelected){
            setShowAddHabit(true);
        }
    },[suggestionSelected]);

    // to show or hide the "Add Habit"
    const toggleAddHabit = (e) => {
        e.preventDefault();
        setShowAddHabit(prev => !prev);

        // if user hide the "Add Habit" form, then reset the value of suggestion selected to null (if there was some value in it)
        if(!showAddHabit){
            dispatch(setSuggestionSelected(null));
        }
    }

    return(
        <div className="w-100 d-flex h-100 justify-content-center my-1 overflow-auto bg-fixed">
            {/* container containing all the different sections on the home page */}
            <div className="w-90 d-flex h-fill">
                {/* container showing quote, "Add Habit" form, and "image" */}
                <div className="w-100 h-fit d-flex flex-column align-items-center justify-content-between bg-light md:w-66 p-2 mr-1 rounded shadow-sm">
                    <div className="w-100 h-70 d-flex flex-column">
                        {/* rendering quote on screen */}
                        <Quote />
                        <div className="w-100 lg:w-80 mb-1 text-center p-2">
                            <button className="btn btn-primary text-md"
                                    onClick={toggleAddHabit}>
                                {/* value of button on different condition */}
                                {!showAddHabit ? "Add Habit" : "Cancel"}
                            </button>
                        </div>
                    </div>
                    {
                        // if user clicked on the 'Add Habit' button
                        showAddHabit ?
                            <div className="w-100 d-flex justify-content-center">
                                {/* show the "Add Habit" component */}
                                <AddHabit />
                            </div>
                        :
                            // else show an image on screen { new image on each render }
                            <img src={displayImageUrl} alt=""
                                className="d-none d-md-block w-100 lg:w-80 md:h-100 lg:h-66 mb-2 opacity-90" />
                    }
                    {/* in case of screen width smaller than 'md' */}
                    {/* show the suggestion list of habits in the same section */}
                    <div className="d-md-none w-100 h-fill rounded bg-light shadow-sm ml-1 bg-fixed overflow-hidden">
                        {/* render the suggestion list */}
                        <Suggestions />
                    </div>
                </div>
                {/* if the screen width is "md and above" */}
                {/* show suggestion list in different section */}
                <div className="d-none d-md-block w-33 h-100 rounded bg-light shadow-sm ml-1 bg-fixed overflow-auto">
                    {/* render the suggestion list */}
                    <Suggestions />
                </div>
            </div>
        </div>    
    )
}

export default Homepage;