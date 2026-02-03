export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()} Your Name
        </p>
      </div>
    </footer>
  );
}
