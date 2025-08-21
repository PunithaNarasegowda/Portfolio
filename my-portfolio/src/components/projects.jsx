function Projects() {
  const projects = [
    { title: "Dukiya Real Estate Platform", desc: "Frontend design and prototype" },
    { title: "Neelkanth Polymers Website", desc: "UI/UX + frontend work" },
    { title: "Smart Glasses for Alzheimer’s Patients", desc: "AI + IoT integration" },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="p-6 bg-gray-900 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-gray-400">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
