export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-6">
      <div className="flex items-center justify-between">
        <p className="text-[11px] text-muted">
          &copy; {new Date().getFullYear()} Your Name
        </p>
        <p className="text-[11px] text-muted">Software Engineer Portfolio</p>
      </div>
    </footer>
  );
}
