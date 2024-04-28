import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../components/Home'
import EventList from '../components/EventList'
import NotFoundPage from '../components/NotFoundPage'
import Layout from '../layout'


const router = createBrowserRouter([
  {
    id: "AppLayout",
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        id: "home",
        path: `/`,
        element: <Home />,
      },
      {
        id: "events",
        path: `events/:unit`,
        element: <EventList />,
      },
    ]
  },
])


export default router

