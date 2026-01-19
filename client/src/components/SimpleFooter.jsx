export default function SimpleFooter() {
  return (
    <footer className="mx-auto max-w-5xl px-4 py-10">
      <div className="text-xs text-zinc-500">
        © {new Date().getFullYear()} Simple Shop — minimal starter.
      </div>
    </footer>
  );
}
