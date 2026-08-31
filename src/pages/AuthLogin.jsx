import React, { useState } from 'react';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../data & services/firebase';

export default function AuthLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/cart';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate(from);
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogle() {
    setError(null);
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate(from);
    } catch (err) {
      setError(err.message || 'Google sign-in failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-[0_20px_60px_rgba(16,185,129,0.12)]">
        <div className="grid lg:grid-cols-[1.05fr_1.45fr]">
          
          <aside className="relative overflow-hidden bg-emerald-900 p-8 text-white sm:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.35),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.35),_transparent_35%)]" />
            <div className="relative z-10 flex h-full flex-col justify-center">
              <h1 className="max-w-sm text-4xl font-bold leading-tight">Welcome back</h1>
              <p className="mt-5 max-w-md text-sm leading-7 text-emerald-100/90">
                Sign in to access saved delivery details and faster checkout.
              </p>
            </div>
          </aside>

          <main className="p-6 sm:p-8 lg:p-10">
            <div className="mb-8">
              <h2 className="mt-2 text-3xl font-bold text-slate-900">Sign in</h2>
            </div>

            <div className="space-y-6">
              <button
                type="button"
                onClick={handleGoogle}
                disabled={loading}
                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:opacity-50"
              >
                Sign in with Google
              </button>

              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 border-t border-slate-200"></div>
                <span className="relative bg-white px-4 text-xs uppercase tracking-wider text-slate-400">
                  Or sign in with email
                </span>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email address</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="email@example.com"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">Password</label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Your password"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                    required
                  />
                </div>

                {error && (
                  <div className="rounded-xl bg-red-50 p-4 text-sm font-medium text-red-600 border border-red-100">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl bg-emerald-600 px-5 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-200 disabled:opacity-50"
                >
                  {loading ? 'Signing in...' : 'Sign in'}
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-slate-500">
                Don't have an account?{' '}
                <NavLink to="/signup" state={{ from }} className="font-semibold text-emerald-600 hover:text-emerald-700">
                  Create one
                </NavLink>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
