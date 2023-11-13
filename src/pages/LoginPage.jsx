import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <h1 className="text-5xl font-bold ml-6 mt-10">Log In</h1>
      <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-md p-6 ">
          <form>
            <div className="mb-4">
              <label
                className="block text-secondary text-md font-bold mb-4 ml-8"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="border-b-4 border-secondary w-full py-2 text-secondary leading-tight focus:outline-none focus:border-secondary"
                id="username"
                type="text"
                value={username}
                onChange={handleUsernameChange}
                required
                placeholder="Enter your username"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 space-x-2">
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-gray-500 hover:text-blue-500 cursor-pointer"
                  size="lg"
                />
              </span>
            </div>

            <div className="mb-6">
              <label
                className="block text-secondary text-md font-bold mb-4 mt-6 ml-8"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="border-b-4 border-secondary w-full py-2  text-secondary leading-tight focus:outline-none focus:border-secondary"
                id="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required
                placeholder="Enter your password"
              />

              <span className="absolute inset-y-2 right-0 flex items-center pr-2 space-x-2">
                <FontAwesomeIcon
                  icon={faLock}
                  className="text-gray-500 hover:text-blue-500 cursor-pointer"
                  size="lg"
                />
              </span>
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-white border-4 border-secondary hover:bg-blue-700 text-secondary font-bold py-4 px-[10rem] rounded-full focus:outline-none focus:shadow-outline"
                type="button"
              >
                LOG IN
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
