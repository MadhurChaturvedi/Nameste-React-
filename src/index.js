import ReactDOM from "react-dom/client";
// import App from "./App";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Header from "./Components/Header.js";
import Body from "./Body.js";
import Footer from "./Components/Footer.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Error from "./pages/Error.js";
import Follow from "./pages/Follow.js";
import Restaurantmenu from "./Components/Restaurantmenu.js";

function AppLayout() {
    return (
        <div className="App">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/follow",
                element: <Follow />
            },
            {
                path: "/restaurant/:ID",
                element: <Restaurantmenu />
            },
        ],
        errorElement: <Error />
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
