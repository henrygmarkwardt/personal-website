export default function Contact() {
  return (
    <section id="contact" className="max-w-2xl mx-auto px-6 py-16 border-t border-gray-100">
      <h2 className="text-xl font-semibold text-gray-900 mb-2">Contact</h2>
      <p className="text-gray-500 text-sm mb-8">Get in touch.</p>
      <div className="flex flex-col gap-3 text-sm text-gray-600">
        <a href="mailto:henrygmarkwardt@gmail.com" className="hover:text-gray-900 transition-colors">
          henrygmarkwardt@gmail.com
        </a>
        <a href="https://linkedin.com/in/henry-markwardt" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
          linkedin.com/in/henry-markwardt
        </a>
        <a href="https://github.com/henrygmarkwardt" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
          github.com/henrygmarkwardt
        </a>
      </div>
    </section>
  );
}
