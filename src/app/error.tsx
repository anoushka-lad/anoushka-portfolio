"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 font-serif text-4xl text-foreground">
          Something went wrong
        </h1>
        <p className="mb-8 text-lg text-muted-foreground">
          An unexpected error occurred.
        </p>
        <button
          onClick={reset}
          className="text-foreground underline underline-offset-4 hover:text-accent transition-colors font-medium"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
