export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-BcjdbyKWquw?q=80&w=2400&auto=format&fit=crop')",
          backgroundPosition: "center 40%",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0f172a]/80" />

      {/* Content */}
      <div className="relative z-10">
        <button className="px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg hover:shadow-purple-500/50 hover:bg-white/20 hover:border-purple-500/50 transition-all duration-300 text-xl font-semibold text-white hover:scale-105">
          For The Plot
        </button>
      </div>
    </main>
  );
}
