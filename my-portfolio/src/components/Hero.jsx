function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl font-bold text-red-500">こんにちは, I'm Punitha</h1>
      <p className="mt-4 text-xl text-gray-400">Frontend Developer | UI/UX Designer</p>
      <a
        href="#projects"
        className="mt-6 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        View My Work
      </a>
    </section>
  );
}

export default Hero;
