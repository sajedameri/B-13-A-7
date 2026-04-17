import { createBrowserRouter } from "react-router";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home";
import Timeline from "../pages/Timeline/Timeline";
import Stats from "../pages/stats/Stats";
import Errorpage from "../pages/errorpage/Errorpage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,

    
    errorElement: <Errorpage />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "timeline", 
        element: <Timeline />,
      },
      {
        path: "stats",
        element: <Stats />,
      },
    ],
  },
]);