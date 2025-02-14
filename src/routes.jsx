import { BrowserRouter,Route,Routes } from "react-router-dom";
import {Home, Login, Signup ,Dashboard} from './pages/index';
import { Navbar,Footer } from "./components/index"
import PrivateRoutes from "./utilis/privateRoutes";


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