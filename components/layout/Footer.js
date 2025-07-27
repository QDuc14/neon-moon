export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-30 text-center py-4 border-t border-purple-800 bg-midnight text-purple-400 backdrop-blur-md">
      <p>&copy; {new Date().getFullYear()} Neon Moon Studio</p>
    </footer>
  );
}
