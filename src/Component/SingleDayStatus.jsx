import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleXmark, faEllipsis } from '@fortawesome/free-solid-svg-icons'

const SingleDayStatus = ({day,i,status,toggleStatus}) => {
    /* getting value of the day, index of habit in the habit list, status of habit {done, not done, pending}
        function to change the status of habit from the props */
    return (
        <div className="w-auto bg-light m-1 mt-2% p-1 h-20 d-flex flex-column justify-content-between rounded shadow-sm">
                {i===6 && <div className='text-center bg-success text-white rounded'>Today</div>}
            <div className="p-1 text-center w-100 h-2/5 border-bottom font-weight-semibold border-primary">
                {day}
            </div>
            
            {/* three buttons of status ( done, not done, pending ) */}
            <div className="w-100 text-center h-3/5 d-flex align-items-center justify-content-between">                
                {/* first button for task done */}
                <button className={`mx-1 p-1 border border-0 ${status ? `text-success` : `text-secondary`} fs-3`}
                        onClick={() => toggleStatus(i,true)}>
                        <FontAwesomeIcon icon={faCircleCheck} />
                </button>
                {/* second button for not done */}
                <button className={`mx-1 p-1 border border-0 ${status === false ? `text-danger` : `text-secondary`} fs-3`}
                        onClick={() => toggleStatus(i,false)}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                </button> 
                {/* third button for pending status (by default selected) */}
                <button className={`mx-1 p-1 border border-0 ${status === null ? `text-primary` : `text-secondary`} fs-3`}
                        onClick={() => toggleStatus(i,null)}>
                        <FontAwesomeIcon icon={faEllipsis} />
                </button> 
            </div>    
        </div>
    );        
}

export default SingleDayStatus;