import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
  name: "",
  surname: "",
  email: "",
  password: "",
  confirmPassword: "",
});



const [errors, setErrors] = useState({});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });

  setErrors({
    ...errors,
    [e.target.name]: "",
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  
  const newErrors = {};

  if (!formData.name.trim()) {
    newErrors.name = "Name is required.";
  }

  if (!formData.surname.trim()) {
    newErrors.surname = "Surname is required.";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = "Please enter a valid email address.";
  }

  if (!formData.password.trim()) {
    newErrors.password = "Password is required.";
  } else if (formData.password.length < 8) {
    newErrors.password = "Password must be at least 8 characters long.";
  }

  if (!formData.confirmPassword.trim()) {
    newErrors.confirmPassword = "Please confirm your password.";
  } else if (formData.password !== formData.confirmPassword) {
    newErrors.confirmPassword = "Passwords do not match.";
  }

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  setErrors({});

  console.log(formData);

localStorage.setItem(
  "user",
  JSON.stringify(formData)
);

  setFormData({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  navigate("/auth/login");
};
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b0b0d] px-4 py-6">
   <div className="absolute -right-40 top-0 h-[700px] w-[500px] rounded-full bg-yellow-400/20 blur-[180px]"></div>

        <div className="relative z-10 w-full max-w-sm rounded-3xl border border-yellow-500/20 bg-[#16161a] p-6 shadow-[0_0_35px_rgba(255,193,7,0.12)]">
        {/* Title */}
        <h1 className="text-3xl font-extrabold text-center text-yellow-400">
          Create Account ✨
        </h1>

        <p className="mt-2 mb-5 text-center text-sm text-gray-400">
          Create your new account
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name & Surname */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-sm font-semibold text-yellow-400">
                Name
              </label>

              <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Name"
  className={`h-11 w-full rounded-xl px-3 text-white bg-[#2a2a2f] outline-none ${
    errors.name
      ? "border border-red-500"
      : "border border-gray-700 focus:border-yellow-400"
  }`}
/>

{errors.name && (
  <p className="mt-1 text-xs text-red-500">{errors.name}</p>
)}
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-yellow-400">
                Surname
              </label>

              <input
  type="text"
  name="surname"
  value={formData.surname}
  onChange={handleChange}
  placeholder="Surname"
  className={`h-11 w-full rounded-xl px-3 text-white bg-[#2a2a2f] outline-none ${
    errors.surname
      ? "border border-red-500"
      : "border border-gray-700 focus:border-yellow-400"
  }`}
/>

{errors.surname && (
  <p className="mt-1 text-xs text-red-500">{errors.surname}</p>
)}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="mb-1 block text-sm font-semibold text-yellow-400">
              Email
            </label>

            <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Enter your email"
  className={`h-11 w-full rounded-xl px-4 text-white bg-[#2a2a2f] outline-none ${
    errors.email
      ? "border border-red-500"
      : "border border-gray-700 focus:border-yellow-400"
  }`}
/>

{errors.email && (
  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
)}
          </div>

          {/* Password */}
          <div>
            <label className="mb-1 block text-sm font-semibold text-yellow-400">
              Password
            </label>

            <input
  type="password"
  name="password"
  value={formData.password}
  onChange={handleChange}
  placeholder="Enter your password"
  className={`h-11 w-full rounded-xl px-4 text-white bg-[#2a2a2f] outline-none ${
    errors.password
      ? "border border-red-500"
      : "border border-gray-700 focus:border-yellow-400"
  }`}
/>

{errors.password && (
  <p className="mt-1 text-xs text-red-500">{errors.password}</p>
)}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="mb-1 block text-sm font-semibold text-yellow-400">
              Confirm Password
            </label>

            <input
  type="password"
  name="confirmPassword"
  value={formData.confirmPassword}
  onChange={handleChange}
  placeholder="Confirm password"
  className={`h-11 w-full rounded-xl px-4 text-white bg-[#2a2a2f] outline-none ${
    errors.confirmPassword
      ? "border border-red-500"
      : "border border-gray-700 focus:border-yellow-400"
  }`}
/>

{errors.confirmPassword && (
  <p className="mt-1 text-xs text-red-500">
    {errors.confirmPassword}
  </p>
)}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="h-11 w-full rounded-xl bg-yellow-400 font-bold text-black transition hover:bg-yellow-300"
          >
            Sign Up
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-700"></div>
            <span className="text-sm text-gray-500">OR</span>
            <div className="h-px flex-1 bg-gray-700"></div>
          </div>

          {/* Google */}
          <button
            type="button"
            className="flex h-11 w-full items-center justify-center gap-3 rounded-xl border border-gray-700 bg-[#2a2a2f] text-white transition hover:border-yellow-400"
          >
            <FaGoogle className="text-red-500" />
            Continue with Google
          </button>

          {/* Github */}
          <button
            type="button"
            className="flex h-11 w-full items-center justify-center gap-3 rounded-xl border border-gray-700 text-white transition hover:border-yellow-400"
          >
            <FaGithub />
            Continue with GitHub
          </button>

          {/* Login */}
          <p className="pt-2 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="font-semibold text-yellow-400 hover:underline"
            >
              Sign In →
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
} 