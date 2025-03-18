import { createBrowserRouter } from "react-router"
import { Layout } from "../pages/layout"
import { NotFound } from "../pages/notFound"
import { ShowMember } from "../pages/showMember"
import { AddMember } from "../pages/addMember"
import { LogMember } from "../pages/logMember"

export const Router = createBrowserRouter ([
    {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
        {
            path: "/",
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