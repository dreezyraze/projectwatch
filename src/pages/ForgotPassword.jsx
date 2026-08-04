import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaArrowLeft,
  FaCheckCircle,
} from "react-icons/fa";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      console.log({
        email,
      });

      setLoading(false);
      setSuccess(true);
      setEmail("");
    }, 1800);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b0b0d] px-4">

      <div className="absolute -right-40 top-0 h-[700px] w-[500px] rounded-full bg-yellow-400/20 blur-[180px]"></div>

      <div className="absolute right-10 bottom-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-[120px]"></div>

      <div className="relative z-10 w-full max-w-sm rounded-3xl border border-yellow-500/20 bg-[#16161a] p-6 shadow-[0_0_35px_rgba(255,193,7,0.12)]">

        {!success ? (
          <>
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400/20">
              <FaEnvelope className="text-2xl text-yellow-400" />
            </div>

            <h1 className="text-center text-3xl font-bold text-yellow-400">
              Forgot Password
            </h1>

            <p className="mt-2 text-center text-sm text-gray-400">
              Enter your email and we'll send you a password reset link.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">

              <div>
                <label className="mb-2 block text-sm font-semibold text-yellow-400">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  className={`h-11 w-full rounded-xl px-4 text-white bg-[#2a2a2f] outline-none transition ${
                    error
                      ? "border border-red-500"
                      : "border border-gray-700 focus:border-yellow-400"
                  }`}
                />

                {error && (
                  <p className="mt-2 text-sm text-red-500">
                    {error}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="h-11 w-full rounded-xl bg-yellow-400 font-bold text-black transition hover:bg-yellow-300 disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Reset Link"}
              </button>

            </form>
          </>
        ) : (
          <div className="text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
              <FaCheckCircle className="text-4xl text-green-400" />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-yellow-400">
              Email Sent!
            </h2>

            <p className="mt-3 text-sm text-gray-400">
              If an account exists with this email,
              we've sent a password reset link.
            </p>

          </div>
        )}

        <Link
          to="/auth/login"
          className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-yellow-400 transition hover:text-yellow-300"
        >
          <FaArrowLeft />
          Back to Login
        </Link>

      </div>
    </div>
  );
}