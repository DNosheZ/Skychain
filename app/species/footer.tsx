"use client";

export default function Footer() {
  return (
    <footer className="relative bottom-0 left-0 w-full bg-blue3_1 text-white text-center py-3 border-t border-gray-700 ">
      <p className="text-sm">© {new Date().getFullYear()} SkyChain. Todos los derechos reservados.</p>
    </footer>
  );
}
