import { Badge } from "@/components/ui/badge";

interface CaseStudyHeroProps {
  title: string;
  subtitle: string;
  tags: string[];
  year: string;
  heroImage: string;
  bgColor?: string;
}

const CaseStudyHero = ({ 
  title, 
  subtitle, 
  tags, 
  year, 
  heroImage,
  bgColor = "bg-secondary" 
}: CaseStudyHeroProps) => {
  return (
    <section className="pt-24">
      {/* Hero Content */}
      <div className="section-padding py-16 max-w-7xl mx-auto">
        <div className="animate-slide-up">
          <div className="flex items-center gap-3 mb-6">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs font-sans">
                {tag}
              </Badge>
            ))}
            <span className="text-sm text-muted-foreground">{year}</span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 max-w-4xl text-balance">
            {title}
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
      
      {/* Hero Image */}
      <div className={`${bgColor} section-padding py-16`}>
        <div className="max-w-6xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <img 
            src={heroImage} 
            alt={title}
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHero;
