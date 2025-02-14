import { AuthProvider } from "./context/AuthContext"
import AppRoutes from "./routes"


function App() {
  

  return (
    <div className=" overflow-auto scrollbar-hide">
      <AuthProvider>
     <AppRoutes />
      </AuthProvider>
    </div>
  )
}

export default App
