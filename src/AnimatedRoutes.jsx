import { useLocation,Route,Routes } from "react-router-dom";
import {Home, Login, Signup ,Dashboard} from './pages/index';
import PrivateRoutes from "./utilis/PrivateRoutes";
import { AnimatePresence, motion } from "framer-motion";


const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  
  const AnimatedRoutes = () => {
    const location = useLocation();
  
    return (
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route
            path="/"
            element={<motion.div {...pageVariants}><Home /></motion.div>}
          />
          <Route
            path="/login"
            element={<motion.div {...pageVariants}><Login /></motion.div>}
          />
          <Route
            path="/signup"
            element={<motion.div {...pageVariants}><Signup /></motion.div>}
          />
          <Route element={<PrivateRoutes />}>
            <Route
              path="/dashboard"
              element={<motion.div {...pageVariants}><Dashboard /></motion.div>}
            />
          </Route>
        </Routes>
      </AnimatePresence>
    );
  };
  
  export default AnimatedRoutes;