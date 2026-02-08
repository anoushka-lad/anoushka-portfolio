import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="font-serif text-6xl font-medium text-foreground mb-4">404</h1>
        <p className="font-sans text-lg text-muted-foreground mb-8">
          This page could not be found.
        </p>
        <Link
          href="/"
          className="font-sans text-sm underline underline-offset-4 text-foreground hover:text-accent transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
