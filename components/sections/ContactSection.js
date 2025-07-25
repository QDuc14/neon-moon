export default function ContactSection() {
  return (
    <section className="text-center mb-20 px-6" id="contact">
      <h3 className="text-2xl text-purple-300 mb-4">Let’s Create Together</h3>
      <p className="text-purple-400 mb-4">Reach out and tell us about your next vision.</p>
      <a
        href="mailto:hello@neonmoon.studio"
        className="inline-block px-6 py-3 rounded-full border border-purple-500 text-purple-300 hover:bg-purple-800 transition"
      >
        Contact Us
      </a>
    </section>
  );
}
