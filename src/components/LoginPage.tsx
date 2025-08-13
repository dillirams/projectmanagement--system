import React from "react";

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#eaf5ff] flex flex-col">
      {/* Header */}
      <div className="flex items-start p-8">
        <img
          src="/src/assets/logo1.png"
          alt="Thimphu TechPark Logo"
          className="w-28 h-28 mr-6"
        />
        <div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold text-black">Thimphu</span>
            <span className="text-3xl font-light text-black">TechPark</span>
          </div>
          <div className="flex items-center space-x-1 mt-1">
            <span className="text-[#2e7bcf] italic font-serif text-xl">dhi</span>
            <span className="text-sm font-bold text-black">Company</span>
          </div>
          <div className="text-lg font-serif text-black mt-2">BHUTAN’S FIRST IT PARK</div>
        </div>
      </div>
      {/* Login Form */}
      <div className="flex flex-1 justify-center items-center">
        <div className="relative">
          <div className="absolute top-6 left-6 w-full h-full bg-[#1976d2] rounded z-0" style={{height: "100%", width: "100%"}}></div>
          <div className="relative bg-white rounded px-12 py-10 w-[420px] shadow z-10">
            <h2 className="text-3xl font-bold text-[#1976d2] mb-2 text-center">Login</h2>
            <p className="text-[#1976d2] text-sm text-center mb-6">Sign in to your account</p>
            <form>
              <div className="mb-4">
                <div className="flex items-center bg-[#eaf5ff] rounded px-4 py-3 shadow text-[#1976d2]">
                  <span className="mr-2">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M16 21v-2a4 4 0 0 0-8 0v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </span>
                  <input
                    type="text"
                    placeholder="Username"
                    className="bg-transparent outline-none w-full text-[#1976d2] placeholder-[#1976d2] text-lg"
                  />
                </div>
              </div>
              <div className="mb-4">
                <div className="flex items-center bg-[#eaf5ff] rounded px-4 py-3 shadow text-[#1976d2]">
                  <span className="mr-2">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M12 17a2 2 0 0 0 2-2v-2a2 2 0 0 0-4 0v2a2 2 0 0 0 2 2z"></path>
                      <rect x="6" y="8" width="12" height="8" rx="4"></rect>
                    </svg>
                  </span>
                  <input
                    type="password"
                    placeholder="Password"
                    className="bg-transparent outline-none w-full text-[#1976d2] placeholder-[#1976d2] text-lg"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <label className="flex items-center text-[#1976d2] text-sm">
                  <input type="checkbox" className="mr-2 accent-[#1976d2]" />
                  Remember Me!
                </label>
                <a href="#" className="text-[#1976d2] text-sm hover:underline">
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-[#0070d2] text-white font-bold text-2xl py-3 rounded shadow hover:bg-[#125ea7] transition"
              >
                Login
              </button>
            </form>
            <div className="text-center mt-4 text-[#1976d2] text-sm">
              Don't have an account?{" "}
              <a href="#" className="font-bold hover:underline">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
