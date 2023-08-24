import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the form submission

    // Perform authentication logic using the API
    // Example: Make a POST request to your login API endpoint with the username and password
    // axios
    //   .post("/api/login", { username, password })
    //   .then((response) => {})
    //   // if successful redirect to dashboard
    //     .then(() => router.push("/"))
    //   .catch((error) => {});

    // Check if the username and password are correct
    if (username === "tushardogra185@gmail.com" && password === "password") {
      window.location.href = "/";
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <>
      <div className="flex flex-row justify-center items-center px-4 pt-4 ">
        <h2 className="text-2xl font-bold text-gray-400">Login</h2>
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="border rounded-lg p-8">
          <h2 className="text-xl font-bold mb-4">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border rounded-lg px-3 py-2"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-lg px-3 py-2"
                required
              />
            </div>
            <div className="mb-4">
              <a href="#" className="text-sm text-blue-500">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
