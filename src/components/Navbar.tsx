export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-neutral-50/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-base font-semibold tracking-tight">
          Melita
        </a>

        <div className="flex items-center gap-6 text-sm text-neutral-600">
          <a href="#about" className="transition hover:text-black">
            About
          </a>
          <a href="#projects" className="transition hover:text-black">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-black">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}