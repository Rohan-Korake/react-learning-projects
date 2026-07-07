import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      username: "",
      password: "",
    };

    if (!username.trim()) {
      newErrors.username = "Username is required.";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);

    // Stop if there are validation errors
    if (newErrors.username || newErrors.password) return;

    setUser({ username, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Username */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Username
        </label>

        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setErrors((prev) => ({ ...prev, username: "" }));
          }}
          className={`w-full rounded-lg border px-4 py-3 bg-slate-800 text-white outline-none transition ${
            errors.username
              ? "border-red-500 focus:ring-red-500/20"
              : "border-slate-700 focus:border-blue-500 focus:ring-blue-500/20"
          }`}
        />

        {errors.username && (
          <p className="mt-1 text-sm text-red-500">{errors.username}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Password
        </label>

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrors((prev) => ({ ...prev, password: "" }));
          }}
          className={`w-full rounded-lg border px-4 py-3 bg-slate-800 text-white outline-none transition ${
            errors.password
              ? "border-red-500 focus:ring-red-500/20"
              : "border-slate-700 focus:border-blue-500 focus:ring-blue-500/20"
          }`}
        />

        {errors.password && (
          <p className="mt-1 text-sm text-red-500">{errors.password}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
