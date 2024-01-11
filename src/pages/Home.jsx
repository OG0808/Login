import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


const Home = () => {
 const {user, logout}=useAuth()
 const navigate=useNavigate()

 const handleLogut = async()=> {
     await logout()
     navigate('/login')
 }

  return (
    <div className="w-full max-w-xs m-auto text-black">
     <div className="bg-white rounded shadow-md px-8 pt-6 pb-8">
     <h1 className="text-xl mb-4">
      Welcome {user.displayName || user?.email}
      </h1>
      <button className="bg-slate-200 transition
      hover:bg-slate-300 rounded py-2 px-4
      " onClick={handleLogut}>Logout</button>
     </div>
    </div>
  )
};

export default Home;
