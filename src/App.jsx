import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./context/AuthContext";
import ProtectecRoute from "./pages/ProtectecRoute";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <div className="bg-slate-300 h-screen  flex">
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectecRoute>
                <Home />
              </ProtectecRoute> }/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resetpassword" element={<ResetPassword/>}/>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
