import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ConstellationDiagram from "@/components/home/ConstellationDiagram";
import NavigationCard from "@/components/home/NavigationCard";
import DecorativeElements from "@/components/home/DecorativeElements";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative compass elements */}
      <DecorativeElements />

      <Header />

      {/* Main content */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-foreground mb-4 tracking-tight text-balance">
            Anoushka Lad
          </h1>
          <p className="font-sans text-sm md:text-base text-muted-foreground tracking-widest uppercase">
            UX Research & Design
          </p>
        </div>

        {/* Constellation + Navigation */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-24 w-full max-w-5xl justify-center">
          {/* Constellation diagram */}
          <div className="flex-shrink-0">
            <ConstellationDiagram />
          </div>

          {/* Navigation accordion */}
          <div className="flex-shrink-0">
            <NavigationCard />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
