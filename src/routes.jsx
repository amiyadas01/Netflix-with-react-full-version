import { BrowserRouter,Route,Routes } from "react-router-dom";
import {Home, Login, Signup ,Dashboard} from './pages/index';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import PrivateRoutes from "./utilis/PrivateRoutes";


const AppRoutes = () => {
    return (
        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                element={<PrivateRoutes />}>
                <Route path="/dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};
export default AppRoutes;