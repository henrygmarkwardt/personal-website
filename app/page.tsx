import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Workflows from "./components/Workflows";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Workflows />
      </main>
      <footer className="px-8 py-8 border-t border-gray-100">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Henry Markwardt
        </p>
      </footer>
    </>
  );
}
