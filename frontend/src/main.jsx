import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EventDetails from "./pages/EventDetails.jsx";
import About from "./pages/About.jsx";
import Events from "./pages/Events.jsx";


const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/events", element: <Events /> },
  { path: "/events/:eventId", element: <EventDetails /> },
  { path: "/about", element: <About /> },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
