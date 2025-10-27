export default function Home() {
  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Column - Background Image */}
      <div className="relative min-h-[400px] lg:min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/background.jpg')",
            backgroundPosition: "center 40%",
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0f172a]/40" />
      </div>

      {/* Right Column - Opt-in Form */}
      <div className="bg-[#0f172a] flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-md">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            For The Plot
          </h1>
          <p className="text-white/70 mb-8 text-lg">
            Join the story. Sign up to stay in the loop.
          </p>

          <form className="space-y-4">
            {/* First Name */}
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-500/50 focus:bg-white/20 transition-all duration-300"
              />
            </div>

            {/* Last Name */}
            <div>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-500/50 focus:bg-white/20 transition-all duration-300"
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-500/50 focus:bg-white/20 transition-all duration-300"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-8 py-4 bg-purple-500 hover:bg-purple-600 border border-purple-500/50 rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all duration-300 text-xl font-semibold text-white hover:scale-105"
            >
              Join Now
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
