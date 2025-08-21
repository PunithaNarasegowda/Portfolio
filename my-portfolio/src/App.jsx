import About from "./components/About";
function App() {
  return (
    <div className="bg-gradient-to-b from-black via-[#1a1a1a] to-[#0d0d0d] text-white min-h-screen flex flex-col font-sans">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-black bg-opacity-80 backdrop-blur-lg shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-red-500">Punitha</h1>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-red-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-red-400 transition">About Me</a></li>
            <li><a href="#projects" className="hover:text-red-400 transition">Projects</a></li>
            <li><a href="#experience" className="hover:text-red-400 transition">Experience</a></li>
            <li><a href="#contact" className="hover:text-red-400 transition">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Sections */}
      <main className="flex-grow">
        <section id="home" className="h-screen flex items-center justify-center text-center">
          <h2 className="text-5xl font-extrabold text-red-500">Welcome to My Portfolio</h2>
        </section>

        <section id="about" className="py-20 px-6 text-center">
          <h2 className="text-3xl font-bold text-red-400 mb-4">About Me</h2>
          <p className="max-w-2xl mx-auto">
            I’m a UI/UX and frontend enthusiast with experience in React, Figma, and full-stack projects. 
            I enjoy creating elegant designs with smooth user experience.
          </p>
        </section>
        <section id="projects" className="py-20 px-6 text-center bg-[#111]">
          <h2 className="text-3xl font-bold text-red-400 mb-4">Projects</h2>
          <p>✨ Project showcase will go here (cards, Figma embeds, etc.).</p>
        </section>

        <section id="experience" className="py-20 px-6 text-center">
          <h2 className="text-3xl font-bold text-red-400 mb-4">Experience</h2>
          <p>💼 Internship and work experience details.</p>
        </section>
        <section id=>
      <About />
    </section>

        <section id="contact" className="py-20 px-6 text-center bg-[#111]">
          <h2 className="text-3xl font-bold text-red-400 mb-4">Contact</h2>
          <p>📩 Contact form or Tally form can be embedded here.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black py-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Punitha. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
