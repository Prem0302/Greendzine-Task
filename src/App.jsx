import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import User from "./User";
import './App.css'

function App() {
  return (
    <div className="h-screen w-screen flex flex-col items-center relative text-white">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
