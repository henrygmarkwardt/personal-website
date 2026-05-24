export default function Nav() {
  return (
    <nav className="sticky top-0 bg-white border-b border-gray-100 z-10">
      <div className="px-8 py-4 flex items-center justify-between">
        <span className="font-semibold text-base text-gray-900">Henry Markwardt</span>
        <div className="flex gap-6 text-base text-gray-500">
          <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#automations" className="hover:text-gray-900 transition-colors">Automations</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">Resume</a>
        </div>
      </div>
    </nav>
  );
}
