import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
