import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import ShowDetails from './Components/ShowDetails/ShowDetails';
import BookNow from './Components/BookNow/BookNow';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "watch",
    element: <ShowDetails />,
  },
  {
    path:"booking",
    element:<BookNow />
  }
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
