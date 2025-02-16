/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import { account } from "../appwrite/config"; 


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // Signup function
  const signup = async (email, password) => {
    try {
      await account.create("unique()", email, password);
      // return login(email, password); // Auto-login 
    } catch (error) {
      console.error("Signup Error:", error.message);
      throw error
     
    }
  };

  // Login function
  const login = async (email, password) => {
    try {
      await account.createEmailPasswordSession(
        email,
        password
      );
      return getCurrentUser();
    } catch (error) {
      console.error("Login Error:", error.message);
      throw error;
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);
    } catch (error) {
      console.error("Logout Error:", error.message);
      
    }
  };

  // Fetch current user
  const getCurrentUser = async () => {
    try {
      const response = await account.get();
      console.log("user found:", response);
      setUser(response);
      return response;
    } catch (error) {
      setUser(null);
        console.error("user not found:", error.message);
     
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 3500);
    }
  };

  // Fetch user on mount
  useEffect(() => {
    
    getCurrentUser();
  }, []);

  return (
     
    <AuthContext.Provider value={{ user, signup, login, logout, loading }}>
       {loading ? <div className=" flex items-center justify-center w-full h-screen"> <video className="w-full h-screen" loop muted autoPlay src="/loading.mp4"></video> </div> : children}
       {/* {error ? <div className=" flex items-center justify-center w-full text-wrap text-white h-screen text-4xl"><div className=" text-wrap w-70">{error}</div>  </div> : ""} */}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};