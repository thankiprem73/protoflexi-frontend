export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-sm">
        <div className="flex items-center gap-2 font-bold text-lg">
          <span className="text-blue-600 text-xl">⚡</span>
          PROTOFLEXI
        </div>
        <div className="text-gray-600 hover:text-black cursor-pointer">
          Contact
        </div>
      </nav>

      {/* HERO */}
      <section
        className="relative flex items-center"
        style={{
          height: "640px",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581091870627-3a2c9c5c2e9c')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/55"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 grid md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT TEXT */}
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Prototype. Test. Launch.
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8">
              PCB Prototyping & BOM Sourcing for Australia & New Zealand
            </p>

            {/* FEATURES */}
            <div className="flex flex-wrap gap-8 text-sm md:text-base text-gray-200">
              <span className="flex items-center gap-2">
                ✔ Fast turnaround
              </span>
              <span className="flex items-center gap-2">
                ✔ Full BOM sourcing
              </span>
              <span className="flex items-center gap-2">
                ✔ Local support
              </span>
            </div>
          </div>

          {/* RIGHT FORM CARD */}
          <div className="bg-white/95 backdrop-blur-xl p-8 rounded-3xl shadow-2xl max-w-md w-full ml-auto">
            
            <h2 className="text-2xl font-semibold mb-2">
              Request a Quote
            </h2>

            <p className="text-gray-500 mb-6 text-sm">
              Upload your Gerber & BOM files. We’ll get you a quote within 24 hours.
            </p>

            {/* INPUTS */}
            <div className="space-y-4">
              <input
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                placeholder="Quantity"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* FILE UPLOADS */}
              <div>
                <label className="text-sm text-gray-600 block mb-1">
                  Upload Gerber
                </label>
                <input
                  type="file"
                  className="w-full text-sm border rounded-lg p-2 bg-gray-50"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 block mb-1">
                  Upload BOM
                </label>
                <input
                  type="file"
                  className="w-full text-sm border rounded-lg p-2 bg-gray-50"
                />
              </div>

              {/* CTA BUTTON */}
              <button className="w-full py-3 rounded-xl text-white font-semibold text-lg 
                bg-gradient-to-r from-blue-500 to-blue-700 
                hover:from-blue-600 hover:to-blue-800 
                transition duration-200 shadow-lg">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM STRIP */}
      <div className="bg-white py-6 border-t">
        <div className="max-w-6xl mx-auto flex justify-center gap-10 text-gray-600 text-sm">
          <span>✔ Fast turnaround</span>
          <span>✔ Full BOM sourcing</span>
          <span>✔ Local support</span>
        </div>
      </div>
    </div>
  );
}
