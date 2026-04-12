export default function Dashboard() {
  const projects = [
    { name: "PCB v1", status: "Quoted" },
    { name: "Sensor Board", status: "Reviewing" },
  ];

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid gap-4">
        {projects.map((p, i) => (
          <div
            key={i}
            className="p-4 bg-white rounded-xl shadow flex justify-between"
          >
            <span>{p.name}</span>
            <span className="text-sm text-gray-500">{p.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
