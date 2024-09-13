import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Main = () => {
    return (
        <div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;