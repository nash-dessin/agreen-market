import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      console.log("Login submitted", formData);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-emerald-100 bg-white shadow-[0_24px_80px_rgba(15,118,110,0.12)]">
        <div className="grid min-h-[720px] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-lime-700 p-8 text-white sm:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),transparent_38%)]" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-lime-300" />
                  AgriMarket
                </div>

                <div className="max-w-md">
                  <p className="mb-3 text-sm uppercase tracking-[0.2em] text-emerald-100">Welcome back</p>
                  <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                    Sign in to continue your farm-to-door shopping.
                  </h1>
                </div>
              </div>

              <div className="space-y-5">
                <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-200/20 text-lg">
                      ✓
                    </div>
                    <div>
                      <p className="text-lg font-semibold">Saved checkout details</p>
                    </div>
                  </div>
                  <p className="text-sm leading-6 text-emerald-50/85">
                    Your shipping, billing, and payment preferences stay ready, so you can check out in seconds.
                  </p>
                </div>

                <ul className="space-y-3 text-sm text-emerald-50/90">
                  {[
                    "Fast access to your order history",
                    "Quick refill of saved delivery addresses",
                    "Secure, one-tap purchases with your preferred methods",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-300 text-xs font-bold text-emerald-900">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center bg-white p-6 sm:p-8 lg:p-12">
            <div className="w-full max-w-md">
              <div className="mb-8">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-700">Account access</p>
                <h2 className="mt-3 text-3xl font-bold text-slate-900">Sign in</h2>
                <p className="mt-2 text-sm text-slate-500">
                  Use your registered account to keep your checkout information ready.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                    required
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                      Password
                    </label>
                    <button type="button" className="text-sm font-medium text-emerald-700 transition hover:text-emerald-800">
                      Forgot password?
                    </button>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                    required
                  />
                </div>

                <div className="flex items-center justify-between gap-3 text-sm text-slate-600">
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="remember"
                      checked={formData.remember}
                      onChange={handleChange}
                      className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    Keep me signed in
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center rounded-2xl bg-emerald-600 px-4 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-emerald-400"
                >
                  {isSubmitting ? "Signing in..." : "Sign in securely"}
                </button>
              </form>

              <div className="mt-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-slate-200" />
                <span className="text-xs uppercase tracking-[0.18em] text-slate-400">or</span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              <button
                type="button"
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-700">
                  G
                </span>
                Continue with Google
              </button>

              <p className="mt-8 text-center text-sm text-slate-500">
                New customer?{" "}
                <button type="button" className="font-semibold text-emerald-700 transition hover:text-emerald-800">
                  Create an account
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
