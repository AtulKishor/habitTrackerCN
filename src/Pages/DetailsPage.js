import { useEffect, useState } from "react";
// Components
import HabitList from "../Component/HabitList";
import HabitStatus from "../Component/HabitStatus";

const DetailsPage = () => {
    const [date,setDate] = useState('');
    useEffect(() => {
        const newDate =  new Date().toString();
        // store the current day and date in state
        setDate(`${newDate.slice(0,3)}, ${newDate.slice(3,15)}`);
    },[]);
    
    return(
    <div className="w-100 h-100 bg-fixed overflow-auto d-flex justify-content-center align-items-center">
        <div className="w-90 h-92 rounded shadow-sm d-flex flex-column justify-content-between p-2 align-items-center">
            <div className="w-100 h-12 rounded shadow bg-info p-1 px-2 m-2 d-flex justify-content-between align-items-center fs-4 text-white font-weight-semibold">           
                <div>
                    Hey Champ,
                </div>
                <div>
                    {date}
                </div>
            </div>
            <div className="w-100 h-90 rounded shadow d-block d-md-flex bg-info p-2 bg-fixed"> 
                {/* render the list of all the habits selected by a user on large screen only */}
                <HabitList />
                {/* to show status of a habit */}
                <HabitStatus />
            </div>
        </div>
    </div>    
    )
}

export default DetailsPage;