import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import Home from "./pages/home/page";
import Candidates from "./pages/candidates/page";
import Registry from "./pages/registry/page";
import Candidate from "./pages/candidates/[id]/page";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"registry",
                element:<Registry/>
            },
            {
                path:"candidates",
                element:<Candidates/>
            },
            {
                path:"candidates/:id",
                element:<Candidate/>
            }
        ]
    }
])

export default router;