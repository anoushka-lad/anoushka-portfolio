import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 font-serif text-6xl text-foreground">404</h1>
        <p className="mb-8 text-xl text-muted-foreground">
          Page not found
        </p>
        <Link
          href="/"
          className="text-foreground underline underline-offset-4 hover:text-accent transition-colors font-medium"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
