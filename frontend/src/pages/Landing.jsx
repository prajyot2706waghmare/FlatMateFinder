import React from "react";
import Chatbot from "../components/Chatbot";
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white flex flex-col">
      {/* NAVBAR */}
      <header className="w-full bg-white/70 backdrop-blur-sm shadow-sm">
        {/* <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">M</div>
            <span className="text-xl font-semibold text-sky-700">MyApp</span>
          </div>

          <nav className="flex items-center gap-3">
            <a
              href="/login"
              className="px-4 py-2 rounded-md text-sm font-medium border border-slate-200 hover:bg-slate-50"
            >
              Login
            </a>
            <a
              href="/register"
              className="px-4 py-2 rounded-md text-sm font-medium bg-sky-600 text-white hover:bg-sky-700"
            >
              Sign up
            </a>
          </nav>
        </div> */}
      </header>
          <Chatbot/>
      {/* HERO */}
      <main className="flex-1 flex items-center justify-center px-6">
        <section className="max-w-5xl w-full grid md:grid-cols-2 gap-8 items-center py-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Welcome to <span className="text-sky-600">MyApp</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Simplify your workflow, collaborate with your team, and get more done. Beautiful UI,
              powerful tools, and enterprise-grade security — all in one place.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="/register"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-sky-600 text-white font-semibold hover:bg-sky-700"
              >
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-slate-200 font-medium hover:bg-slate-50"
              >
                Learn more
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <div className="w-full max-w-md rounded-2xl shadow-xl p-6 bg-white">
              <h3 className="text-lg font-semibold text-slate-800">Quick tour</h3>
              <p className="mt-2 text-sm text-slate-600">A few highlights to get you started.</p>

              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-md bg-sky-50 flex items-center justify-center text-sky-600">✓</div>
                  <div>
                    <div className="font-medium text-slate-800">Secure by default</div>
                    <div className="text-sm text-slate-600">Role-based access and data encryption.</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-md bg-sky-50 flex items-center justify-center text-sky-600">⚡</div>
                  <div>
                    <div className="font-medium text-slate-800">Fast & reliable</div>
                    <div className="text-sm text-slate-600">Optimised performance and caching.</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-md bg-sky-50 flex items-center justify-center text-sky-600">🤝</div>
                  <div>
                    <div className="font-medium text-slate-800">Collaborate with teams</div>
                    <div className="text-sm text-slate-600">Shared projects, comments and mentions.</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* FEATURES */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <div className="text-3xl">🔒</div>
            <h4 className="mt-4 font-semibold text-slate-800">Enterprise security</h4>
            <p className="mt-2 text-sm text-slate-600">Encryption, SSO and audit logs out of the box.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <div className="text-3xl">⚙️</div>
            <h4 className="mt-4 font-semibold text-slate-800">Customizable</h4>
            <p className="mt-2 text-sm text-slate-600">Flexible settings and integrations to fit your stack.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <div className="text-3xl">📈</div>
            <h4 className="mt-4 font-semibold text-slate-800">Analytics</h4>
            <p className="mt-2 text-sm text-slate-600">Built-in dashboards to track usage and growth.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      {/* <footer className="w-full border-t bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-sm text-slate-600">© {new Date().getFullYear()} MyApp. All rights reserved.</div>
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <a href="/terms" className="hover:underline">Terms</a>
            <a href="/privacy" className="hover:underline">Privacy</a>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
