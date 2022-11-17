import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import classes from './App.module.css';
import {createBrowserRouter, BrowserRouter as Routes, Route, RouterProvider} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
        <Header/>
        <Home/>
        </>
      )
    }, {
      path: "/checkout",
      element:(
        <>
        <Header/>
        <Checkout/>
      </> 
      )
    }
  ]);
  
  return (
    <div className={classes.app}>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
