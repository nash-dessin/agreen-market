import React from 'react';

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Account created successfully. Your delivery details have been saved.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-[0_20px_60px_rgba(16,185,129,0.12)]">
        <div className="grid lg:grid-cols-[1.05fr_1.45fr]">
          <aside className="relative overflow-hidden bg-emerald-900 p-8 text-white sm:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.35),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.35),_transparent_35%)]" />
            <div className="relative z-10">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-100">
                AgriMarket
              </div>

              <h1 className="max-w-sm text-4xl font-bold leading-tight">
                Save your details for quick, stress-free deliveries.
              </h1>

              <p className="mt-5 max-w-md text-sm leading-7 text-emerald-100/90">
                Create your account to securely store your shipping address, billing information,
                and preferred payment method for all future orders.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  'Fast checkout on every order',
                  'Saved shipping and billing info',
                  'Secure payment preferences',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-sm font-bold text-emerald-950">
                      ✓
                    </span>
                    <span className="text-sm text-emerald-50">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <main className="p-6 sm:p-8 lg:p-10">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-600">
                  Welcome
                </p>
                <h2 className="mt-2 text-3xl font-bold text-slate-900">Create account</h2>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                New customer
              </span>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block text-sm font-medium text-slate-700">
                  Full name
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                    required
                  />
                </label>

                <label className="block text-sm font-medium text-slate-700">
                  Email address
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                    required
                  />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="block text-sm font-medium text-slate-700">
                  Password
                  <input
                    type="password"
                    placeholder="Create a password"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                    required
                  />
                </label>

                <label className="block text-sm font-medium text-slate-700">
                  Phone number
                  <input
                    type="tel"
                    placeholder="+254 712 345 678"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                    required
                  />
                </label>
              </div>

              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4">
                <p className="mb-3 text-sm font-semibold text-emerald-800">Delivery details</p>
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block text-sm font-medium text-slate-700 md:col-span-2">
                    Street address
                    <input
                      type="text"
                      placeholder="123 Farm Road, Nairobi"
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                      required
                    />
                  </label>

                  <label className="block text-sm font-medium text-slate-700">
                    City
                    <input
                      type="text"
                      placeholder="Nairobi"
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                      required
                    />
                  </label>

                  <label className="block text-sm font-medium text-slate-700">
                    Postal code
                    <input
                      type="text"
                      placeholder="00100"
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                      required
                    />
                  </label>
                </div>
              </div>

              <div className="rounded-2xl border border-amber-100 bg-amber-50/70 p-4">
                <p className="mb-3 text-sm font-semibold text-amber-800">Payment information</p>
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block text-sm font-medium text-slate-700 md:col-span-2">
                    Card number
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                      required
                    />
                  </label>

                  <label className="block text-sm font-medium text-slate-700">
                    Expiry date
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                      required
                    />
                  </label>

                  <label className="block text-sm font-medium text-slate-700">
                    CVV
                    <input
                      type="password"
                      placeholder="123"
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                      required
                    />
                  </label>
                </div>
              </div>

              <label className="flex items-start gap-3 text-sm text-slate-600">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" required />
                <span>
                  I agree to store my billing, shipping, and payment information for faster future
                  deliveries and secure checkout.
                </span>
              </label>

              <button
                type="submit"
                className="w-full rounded-2xl bg-emerald-600 px-5 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-200"
              >
                Create account
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-500">
              Already have an account?{' '}
              <a href="#" className="font-semibold text-emerald-600 hover:text-emerald-700">
                Sign in
              </a>
            </p>
          </main>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
