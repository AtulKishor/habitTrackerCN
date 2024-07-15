import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store';

// for toast notification
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import Navbar from "./Component/Navbar";
// pages
import Homepage from "./Pages/Homepage";
import DetailsPage from "./Pages/DetailsPage";
import { Error } from "./Pages/Error";

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Navbar />,
      errorElement: <Error />,
      children:[
        // default home page
        {index:true, element: <Homepage />}, 
        // detail day wise view for habits
        {path:"/detailspage", element: <DetailsPage />},
      ]
    }
  ]);

  return (
    <div className="App">
      <Provider store={store}>
        <ToastContainer 
          position="top-right"
          autoClose={1000}/>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
