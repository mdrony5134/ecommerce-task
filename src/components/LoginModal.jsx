/* eslint-disable react/prop-types */
import { useState } from "react";

const LoginModal = ({ onClose, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => {
    // Here you can implement your login logic
    // For simplicity, let's assume any non-empty email and password is valid
    if (email && password) {
      setUser({ email }); // Update user state with the logged-in user's information
      onClose(); // Close the modal
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  const handleSignup = () => {
    // Here you can implement your signup logic
    // For simplicity, let's assume any non-empty email and password is valid for signup
    if (email && password) {
      setUser({ email }); // Update user state with the signed-up user's information
      onClose(); // Close the modal
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[50%]">
        <span className="absolute top-4 right-4 cursor-pointer" onClick={onClose}>
          &times;
        </span>
        <h2 className="text-2xl font-bold mb-6 align-middle">{isLogin ? "Login" : "Signup"}</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-2 border border-gray-300 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isLogin ? (
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleLogin}
          >
            Login
          </button>
        ) : (
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSignup}
          >
            Signup
          </button>
        )}
        <p className="mt-4 text-center cursor-pointer text-blue-500" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Don't have an account? Signup" : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
