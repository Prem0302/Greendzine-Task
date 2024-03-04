import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { employee } from './Data';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

   
    const user = employee.find((emp) => emp.email === email);
    console.log(user);
   
    if (user && user.pass === password) {
      console.log('Logged in');
      navigate('/Dashboard'); 
    } else {
      setError('Invalid email or password'); 
      setEmail(''); 
      setPassword(''); 
    }
  };
  return (
    <>
      <div className="pt-8 items-center">
        <img
          src="/login_logo.png"
          alt="Moptro Logo"
          className="w-24 h-24 mx-auto mt-8 mb-4"
        />

        <div className="block max-w-sm p-4 text-md text-primary rounded-2xl text-center">
          We are electric
        </div>
        <form className="flex flex-col space-y-4" autoComplete="no" onSubmit={handleSubmit}>
          <input
            type="email"
            id="email_address"
            className="bg-[#111211] shadow shadow-slate-500 text-white text-sm rounded-2xl focus:outline-none block w-full p-2.5"
            placeholder="E-mail"
            required
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input
            type="password"
            id="password"
            className="bg-[#111211] shadow shadow-slate-500 text-white text-sm rounded-2xl focus:outline-none block w-full p-2.5"
            placeholder="Password"
            required
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button
            type="submit"
            style={{
              background: `transparent linear-gradient(180deg, #00ff2580 0%, #000000 100%, #36a54680 100%) 0% 0%`,
            }}
            className="bg-primary rounded-3xl p-2.5 border border-[#8CFF0026] font-black opacity-90"
          >
            <span className="text-white opacity-40">Login</span>
          </button>
          
          <div className="text-center text-primary">
            <a href="#">Forgot Password?</a>
          </div>
        </form>

        {error && <div className="text-red-500">{error}</div>}
      </div>
    </>
  );
}
