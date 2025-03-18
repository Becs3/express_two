import { createBrowserRouter } from "react-router"
import { Layout } from "../pages/layout"
import { NotFound } from "../pages/notFound"
import { ShowMember } from "../pages/showMember"
import { AddMember } from "../pages/addMember"
import { LogMember } from "../pages/logMember"
import { Home } from "../pages/home"

export const Router = createBrowserRouter ([
    {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/members",
            element: <ShowMember />
        },{
            path: "/logMember",
            element: <LogMember />
        },{
            path: "/addMember",
            element: <AddMember />
        }
        
    ]
    }

])