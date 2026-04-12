// app/page.js

export default function Home() {
  return (
    <div>
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
        <div className="font-bold text-lg">PROTOFLEXI</div>
        <div className="text-gray-600">Contact</div>
      </nav>

      {/* HERO */}
      <section
        className="relative h-[600px] flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581091870627-3a2c9c5c2e9c')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 px-6">
          
          {/* LEFT TEXT */}
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">
              Prototype. Test. Launch.
            </h1>
            <p className="text-lg mb-6">
              PCB Prototyping & BOM Sourcing for Australia & New Zealand
            </p>

            <div className="flex gap-6 text-sm">
              <span>✔ Fast turnaround</span>
              <span>✔ Full BOM sourcing</span>
              <span>✔ Local support</span>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl">
            <h2 className="text-xl font-semibold mb-2">
              Request a Quote
            </h2>
            <p className="text-gray-600 mb-4 text-sm">
              Upload your Gerber & BOM files. We'll get you a quote within 24 hours.
            </p>

            <input
              placeholder="Your Name"
              className="w-full p-2 mb-3 border rounded"
            />
            <input
              placeholder="Your Email"
              className="w-full p-2 mb-3 border rounded"
            />
            <input
              placeholder="Quantity"
              className="w-full p-2 mb-3 border rounded"
            />

            <label className="text-sm">Upload Gerber</label>
            <input type="file" className="w-full mb-3" />

            <label className="text-sm">Upload BOM</label>
            <input type="file" className="w-full mb-4" />

            <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700">
              Get Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
