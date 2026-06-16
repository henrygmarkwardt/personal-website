export default function Hero() {
  return (
    <section id="about" className="px-8 pt-8 pb-8">
      {/* Name + contact links on one line */}
      <div className="flex items-baseline flex-wrap gap-x-6 gap-y-1 mb-5">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900">
          Henry Markwardt
        </h1>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-base text-gray-500">
          <a href="mailto:henrygmarkwardt@gmail.com" className="hover:text-gray-900 transition-colors">
            henrygmarkwardt@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/henry-markwardt-4233b12a1/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com/henrygmarkwardt" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
            GitHub
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
            Resume
          </a>
        </div>
      </div>

      {/* Two paragraphs side by side, full width */}
      <div className="flex gap-10">
        <p className="flex-1 text-base text-gray-600 leading-relaxed">
          I graduated Kenyon College (Class of &apos;26) as an Economics major with minors in Statistics and French. I build AI automation systems and workflows that save time and money for real organizations. I&apos;m currently looking for a full-time AI / automation engineering role starting fall 2026 — open to remote or relocation. The best way to see how I work is the systems below.
        </p>
        <p className="flex-1 text-base text-gray-600 leading-relaxed">
          Currently an AI Engineering Intern at{" "}
          <a href="https://www.langartech.com/" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-300 hover:decoration-gray-600 transition-colors">
            Langar Technology
          </a>
          , a Fintech firm that caters to RIAs, where I design and ship workflows and pipelines end-to-end. Last summer I was a Research Assistant in Kenyon&apos;s Economics department where I used AI tools to construct inflation metrics from large-scale scanner data.
        </p>
      </div>
    </section>
  );
}
