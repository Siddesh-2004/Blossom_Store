import React, { useEffect, useState } from "react";
import { backendUrl } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

const Login = ({ setToken }) => {
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

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mt-10 mb-2">
        <p className="text-3xl prata-regular">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {currentState !== "Login" && (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      )}

      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="hello@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <div className="flex justify-between w-full text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer"
          >
            Create a new account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Login here
          </p>
        )}
      </div>

      <button className="px-8 py-2 mt-4 font-light text-white bg-black">
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;

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
