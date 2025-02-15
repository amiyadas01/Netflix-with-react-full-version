import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import AnimatedRoutes from "./AnimatedRoutes";

const AppRoutes = () => {
    return (
        <BrowserRouter>
        <Navbar />
           <AnimatedRoutes/>
            <Footer />
        </BrowserRouter>
    );
};
export default AppRoutes;