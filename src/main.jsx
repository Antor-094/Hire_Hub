import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Statistics from './components/Statistics';
import AppliedJobs from './components/AppliedJobs';
import Blog from './components/Blog';
import JobDetails from './components/Jobdetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=> fetch('/public/featuredJobs.json')
      },
      {
        path:'/job/:id',
        element:<JobDetails></JobDetails>,
        loader:()=> fetch('/public/featuredJobs.json')
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/applied-jobs',
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
