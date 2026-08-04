import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaEye,
  FaEyeSlash,
  FaGithub,
  FaArrowRight,
   FaArrowLeft,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password =
        "Password must be at least 8 characters long.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    setTimeout(() => {
      console.log(formData);

      setLoading(false);

      setFormData({
        email: "",
        password: "",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-yellow-950 flex items-center justify-center p-5">
      <div className="relative w-full max-w-md rounded-3xl bg-zinc-900/80 backdrop-blur-xl border border-yellow-500/20 p-8 shadow-2xl shadow-yellow-500/10">
        <div className="text-center mb-8">
          <Link
  to="/products"
  className="absolute top-2 left-4 flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition"
>
  <FaArrowLeft />
  <span className="text-sm font-medium">Back</span>
</Link>
          <h1 className="text-4xl font-black text-yellow-400">
            Welcome Back 👋
          </h1>

          <p className="text-zinc-400 mt-2">
            Login to your account
          </p>
        </div>

        <form
          onSubmit={handleFormSubmit}
          className="space-y-5"
        >
          <div>
            <label className="block mb-2 font-medium text-yellow-400">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full text-gray-100 rounded-2xl bg-zinc-800 px-5 py-4 pr-14 outline-none transition ${
                errors.email
                  ? "border border-red-500"
                  : "border border-zinc-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400"
              }`}
            />

            {errors.email && (
              <p className="mt-2 text-sm text-red-500">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2 font-medium text-yellow-400">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full text-gray-100 rounded-2xl bg-zinc-800 px-5 py-4 pr-14 outline-none transition ${
                  errors.password
                    ? "border border-red-500"
                    : "border border-zinc-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400"
                }`}
              />

              {errors.password && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.password}
                </p>
              )}
                            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-yellow-400 transition"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-zinc-400">
              <input
                type="checkbox"
                className="accent-yellow-400"
              />
              Remember me
            </label>

            <Link
              to="/auth/forgot-password"
              className="text-yellow-400 hover:text-yellow-300 transition"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-yellow-500 text-black py-3 font-bold transition hover:bg-yellow-400 shadow-lg shadow-yellow-500/20 disabled:opacity-60"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-zinc-700"></div>

            <span className="mx-3 text-zinc-500 text-sm">
              OR
            </span>

            <div className="flex-1 h-px bg-zinc-700"></div>
          </div>

          <button
            type="button"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 py-3 flex items-center justify-center gap-3 text-white hover:border-yellow-400 hover:bg-zinc-700 transition"
          >
            <FcGoogle className="text-2xl" />
            Continue with Google
          </button>

          <button
            type="button"
            className="w-full rounded-2xl bg-zinc-800 border border-zinc-700 py-4 flex items-center justify-center gap-3 text-white hover:bg-zinc-700 hover:border-yellow-400 transition"
          >
            <FaGithub className="text-2xl text-white" />
            Continue with GitHub
          </button>

          <div className="text-center mt-6 text-zinc-400">
            Don't have an account?{" "}

            <Link
              to="/auth/register"
              className="font-semibold text-yellow-400 hover:text-yellow-300 hover:underline inline-flex items-center gap-2"
            >
              Sign Up
              <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}