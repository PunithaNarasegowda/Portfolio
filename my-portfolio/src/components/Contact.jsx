function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-400 mb-6">Let’s collaborate on something amazing 🚀</p>
      <form
        action="https://tally.so/r/mZk6X1" // 👈 replace with your tally form
        method="POST"
        target="_blank"
        className="max-w-lg mx-auto flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="p-3 rounded bg-gray-800 text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="p-3 rounded bg-gray-800 text-white"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="p-3 rounded bg-gray-800 text-white"
        />
        <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
