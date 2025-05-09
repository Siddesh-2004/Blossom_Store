import React, { useEffect, useState } from "react";
import { backendUrl } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

const Login = ({ setToken, token}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [currentState, setCurrentState] = useState("Sign Up");
  useEffect(() => {
    console.log("currentState ", currentState);
  }, [currentState]);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const endpoint =
        currentState === "Login" ? "/api/user/login" : "/api/user/register";

      const payload =
        currentState === "Login"
          ? { email, password }
          : { name, email, password };
      console.log("SIDDESH");

      const response = await axios.post(backendUrl + endpoint, payload);

      if (response.data.success) {
        // Save token`
        console.log("response.data.token", response.data.token);
        setToken(response.data.token);
        toast.success(
          currentState === "Login"
            ? "Login successful."
            : "Registration successful."
        );
        // Optionally reset form or redirect user
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };
  const onLogout = () => {
    setToken("");
    localStorage.removeItem("token");
    toast.success("Logged out successfully.");
  }; 
  return (
  <div className="relative min-h-screen w-full flex items-center justify-center bg-white">
    {/* Opaque Blossom Text */}
    <div   
    className="absolute inset-0 flex items-center justify-center z-0">
      <h1 style={{ fontFamily: "'Dancing Script', cursive" }}
      className="select-none text-[12rem] sm:text-[23rem] text-[#3c5556] font-extrabold">
       Blossom
      </h1>
    </div>

    {/* Transparent Form Box */}
    <div className="relative z-10 w-full max-w-md px-6 py-10 bg-white bg-opacity-50 backdrop-blur-md rounded-xl shadow-xl">
      {token ? (
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-700 mb-4">🎉 Welcome!</h1>
          <p className="text-lg text-gray-700 mb-6">You are successfully logged in.</p>
          <p className="text-md text-gray-600 mb-8">Would you like to log out?</p>
          <button
            onClick={onLogout}
            className="bg-red-500 hover:bg-red-600 transition-colors duration-300 text-white font-medium px-6 py-3 rounded-full shadow-lg"
          >
            Log Out
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 mb-4">
            <p className="text-3xl font-semibold">{currentState}</p>
            <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
          </div>

          {currentState !== "Login" && (
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-800 rounded bg-white bg-opacity-10"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}

          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-800 rounded bg-white bg-opacity-10"
            placeholder="hello@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-800 rounded bg-white bg-opacity-10"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="flex justify-between text-sm text-gray-600">
            <p className="cursor-pointer">Forgot your password?</p>
            <p
              onClick={() =>
                setCurrentState(currentState === "Login" ? "Sign Up" : "Login")
              }
              className="cursor-pointer underline"
            >
              {currentState === "Login" ? "Create a new account" : "Login here"}
            </p>
          </div>

          <button className="select-none px-8 py-2 mt-2 text-white bg-black rounded hover:opacity-80">
            {currentState === "Login" ? "Sign In" : "Sign Up"}
          </button>
        </form>
      )}
    </div>
  </div>
);
  
};

export default Login;

//return (
//     <>
//       {token? (
//         <div className="flex items-center justify-center h-screen bg-gradient-to-br from-green-100 via-green-200 to-green-300">
//           <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-md text-center animate-fadeIn">
//             <h1 className="text-4xl font-extrabold text-green-700 mb-4">
//               🎉 Welcome!
//             </h1>
//             <p className="text-lg text-gray-700 mb-6">
//               You are successfully logged in.
//             </p>
//             <p className="text-md text-gray-600 mb-8">
//               Would you like to log out?
//             </p>
//             <button
//               onClick={onLogout}
//               className="bg-red-500 hover:bg-red-600 transition-colors duration-300 text-white font-medium px-6 py-3 rounded-full shadow-lg"
//             >
//               Log Out
//             </button>
//           </div>
//         </div>
//       ) : (
//         <form
//           onSubmit={onSubmitHandler}
//           className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
//         >
//           <div className="inline-flex items-center gap-2 mt-10 mb-2">
//             <p className="text-3xl prata-regular">{currentState}</p>
//             <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
//           </div>

//           {currentState !== "Login" && (
//             <input
//               type="text"
//               className="w-full px-3 py-2 border border-gray-800"
//               placeholder="John Doe"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           )}

//           <input
//             type="email"
//             className="w-full px-3 py-2 border border-gray-800"
//             placeholder="hello@gmail.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <input
//             type="password"
//             className="w-full px-3 py-2 border border-gray-800"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <div className="flex justify-between w-full text-sm mt-[-8px]">
//             <p className="cursor-pointer">Forgot your password?</p>
//             {currentState === "Login" ? (
//               <p
//                 onClick={() => setCurrentState("Sign Up")}
//                 className="cursor-pointer"
//               >
//                 Create a new account
//               </p>
//             ) : (
//               <p
//                 onClick={() => setCurrentState("Login")}
//                 className="cursor-pointer"
//               >
//                 Login here
//               </p>
//             )}
//           </div>

//           <button className="px-8 py-2 mt-4 font-light text-white bg-black">
//             {currentState === "Login" ? "Sign In" : "Sign Up"}
//           </button>
//         </form>
//       )}
//     </>
//   );


// import React, { useState } from "react";
// import { backendUrl } from "../App";
// import axios from "axios";

// import { toast } from "react-toastify";
// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [currentState, setCurrentState] = useState("Sign Up");

//   const onSubmitHandler = async (e) => {
//     try {
//       e.preventDefault();
//       const response = await axios.post(
//         backendUrl + "/api/user/register",
//         {
//           name,
//           email,
//           password,
//         }
//       );

//       if (response.data.success) {
//         setToken(response.data.token);
//         toast.success("Sign in successful.");
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Please try again later.");
//     }
//   };

//   return (
//     <form
//       onSubmit={onSubmitHandler}
//       className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
//     >
//       <div className="inline-flex items-center gap-2 mt-10 mb-2">
//         <p className="text-3xl prata-regular">{currentState}</p>
//         <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
//       </div>
//       {currentState === "Login" ? (
//         ""
//       ) : (
//         <input
//           type="text"
//           className="w-full px-3 py-2 border border-gray-800"
//           placeholder="John Doe"
//           required
//         />
//       )}
//       <input
//         type="email"
//         className="w-full px-3 py-2 border border-gray-800"
//         placeholder="hello@gmail.com"
//         required
//       />
//       <input
//         type="password"
//         className="w-full px-3 py-2 border border-gray-800"
//         placeholder="Password"
//         required
//       />
//       <div className="flex justify-between w-full text-sm mt-[-8px]">
//         <p className="cursor-pointer">Forgot your password?</p>
//         {currentState === "Login" ? (
//           <p
//             onClick={() => setCurrentState("Sign Up")}
//             className="cursor-pointer"
//           >
//             Create a new account
//           </p>
//         ) : (
//           <p
//             onClick={() => setCurrentState("Login")}
//             className="cursor-pointer"
//           >
//             Login here
//           </p>
//         )}
//       </div>
//       <button className="px-8 py-2 mt-4 font-light text-white bg-black">
//         {currentState === "Login" ? "Sign In" : "Sign Up"}
//       </button>
//     </form>
//   );
// };

// export default Login;
