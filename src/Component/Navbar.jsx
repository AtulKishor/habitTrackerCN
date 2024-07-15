// react-router components to navigate to a link or to show children component of page
import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartColumn} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return(
    <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <NavLink to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <FontAwesomeIcon className="bi fs-1 mx-2" icon={faChartColumn} />
            <h1 className="fs-4">Habit tracker</h1>
          </NavLink>
    
          <ul className="nav nav-pills">
            <li className="nav-item">
                <NavLink style={({ isActive }) => (isActive ? { color: "#fff" } : undefined)} className="nav-link" aria-current="page"
                        to='/'>
                    Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink style={({ isActive }) => (isActive ? { color: "#fff" } : undefined)} className="nav-link" aria-current="page"
                        to='/detailspage'>
                    Your Habits
                </NavLink>
            </li>
          </ul>
        </header>
            {/* for render the children route pages */}
            <Outlet />
        </div>
    )
}

export default Navbar;