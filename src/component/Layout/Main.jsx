import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-[calc(100vh-124px)] mt-16">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;