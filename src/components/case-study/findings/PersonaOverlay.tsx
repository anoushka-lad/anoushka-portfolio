import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { personaData, PersonaData } from "./personaData";

const rusticPaperBg = "/images/rustic-paper-bg.jpg";

interface PersonaOverlayProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  personaNumber: number;
}

const PersonaOverlay = ({ open, onOpenChange, personaNumber }: PersonaOverlayProps) => {
  const persona = personaData.find(p => p.number === personaNumber);
  
  if (!persona) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto p-0 border-0"
        style={{
          backgroundImage: `url(${rusticPaperBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <VisuallyHidden>
          <DialogTitle>{persona.title} Persona</DialogTitle>
        </VisuallyHidden>
        
        {/* Decorative Frame */}
        <div className="absolute inset-2 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none">
            {/* Outer frame */}
            <rect x="0" y="0" width="100%" height="100%" fill="none" stroke="hsl(35 18% 30%)" strokeWidth="2" rx="4" />
            {/* Inner dashed frame */}
            <rect x="8" y="8" width="calc(100% - 16px)" height="calc(100% - 16px)" fill="none" stroke="hsl(35 18% 45%)" strokeWidth="1" strokeDasharray="6 3" rx="2" />
          </svg>
        </div>

        {/* Corner flourishes */}
        <svg className="absolute top-3 left-3 w-8 h-8 pointer-events-none" viewBox="0 0 32 32">
          <path d="M 4 20 Q 4 4 20 4" fill="none" stroke="hsl(35 18% 30%)" strokeWidth="2" />
          <path d="M 8 24 Q 8 8 24 8" fill="none" stroke="hsl(35 18% 45%)" strokeWidth="1" />
        </svg>
        <svg className="absolute top-3 right-3 w-8 h-8 pointer-events-none" viewBox="0 0 32 32">
          <path d="M 12 4 Q 28 4 28 20" fill="none" stroke="hsl(35 18% 30%)" strokeWidth="2" />
          <path d="M 8 8 Q 24 8 24 24" fill="none" stroke="hsl(35 18% 45%)" strokeWidth="1" />
        </svg>
        <svg className="absolute bottom-3 left-3 w-8 h-8 pointer-events-none" viewBox="0 0 32 32">
          <path d="M 20 28 Q 4 28 4 12" fill="none" stroke="hsl(35 18% 30%)" strokeWidth="2" />
          <path d="M 24 24 Q 8 24 8 8" fill="none" stroke="hsl(35 18% 45%)" strokeWidth="1" />
        </svg>
        <svg className="absolute bottom-3 right-3 w-8 h-8 pointer-events-none" viewBox="0 0 32 32">
          <path d="M 28 12 Q 28 28 12 28" fill="none" stroke="hsl(35 18% 30%)" strokeWidth="2" />
          <path d="M 24 8 Q 24 24 8 24" fill="none" stroke="hsl(35 18% 45%)" strokeWidth="1" />
        </svg>

        <div className="relative z-10 p-6 md:p-10">
          {/* Top Section: Icon + Description */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-8">
            {/* Left: Icon and Title */}
            <div className="flex flex-col items-center md:w-1/4 flex-shrink-0">
              {/* Icon with decorative border */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 mb-3">
                {/* Outer dashed circle */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="hsl(35 18% 40%)" strokeWidth="1" strokeDasharray="3 2" />
                  <circle cx="50" cy="50" r="44" fill="none" stroke="hsl(35 18% 25%)" strokeWidth="2" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(35 18% 40%)" strokeWidth="0.5" strokeDasharray="2 2" />
                </svg>
                <img 
                  src={persona.icon} 
                  alt={persona.title}
                  className="absolute inset-0 w-full h-full object-contain p-4"
                />
              </div>
              
              {/* Title */}
              <h3
                className="font-body text-base md:text-lg font-black text-center tracking-wide uppercase leading-tight"
                style={{ color: '#343434' }}
              >
                {persona.titleLines.map((line, idx) => (
                  <span key={idx}>
                    {line}
                    {idx < persona.titleLines.length - 1 && <br />}
                  </span>
                ))}
              </h3>
            </div>

            {/* Right: Description */}
            <div className="md:w-3/4">
              <p
                className="font-body text-sm md:text-base leading-relaxed text-justify"
                style={{ color: '#343434' }}
              >
                {persona.description}
              </p>
            </div>
          </div>

          {/* Movie Posters Row - only show if posters exist */}
          {persona.posters.length > 0 && (
            <div className="flex justify-center gap-3 md:gap-4 mb-8">
              {persona.posters.map((poster, idx) => (
                <div 
                  key={idx} 
                  className="w-20 h-28 md:w-28 md:h-40 overflow-hidden rounded-sm shadow-md"
                  style={{ border: '2px solid hsl(35 18% 35%)' }}
                >
                  <img 
                    src={poster} 
                    alt="Movie poster" 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Placeholder for missing posters */}
          {persona.posters.length === 0 && (
            <div className="flex justify-center gap-3 md:gap-4 mb-8">
              {[1, 2, 3, 4].map((idx) => (
                <div 
                  key={idx} 
                  className="w-20 h-28 md:w-28 md:h-40 overflow-hidden rounded-sm shadow-md flex items-center justify-center"
                  style={{ 
                    border: '2px solid hsl(35 18% 35%)',
                    backgroundColor: 'hsl(35 18% 85%)'
                  }}
                >
                  <span
                    className="font-body text-xs text-center px-2"
                    style={{ color: '#343434' }}
                  >
                    Poster {idx}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Pain Points & Goals */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 mb-8">
            {/* Pain Points */}
            <div className="md:w-1/2">
              <h4
                className="font-body text-sm md:text-base font-bold mb-3 flex items-center gap-2"
                style={{ color: '#343434' }}
              >
                Pain Points
                <svg viewBox="0 0 16 16" className="w-3 h-3">
                  <circle cx="8" cy="8" r="4" fill="hsl(320 60% 50%)" />
                </svg>
              </h4>
              <ul className="list-disc list-inside space-y-2 font-body text-xs md:text-sm" style={{ color: '#343434' }}>
                {persona.painPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Goals */}
            <div className="md:w-1/2">
              <h4
                className="font-body text-sm md:text-base font-bold mb-3"
                style={{ color: '#343434' }}
              >
                Goals
              </h4>
              <ul className="list-disc list-inside space-y-2 font-body text-xs md:text-sm" style={{ color: '#343434' }}>
                {persona.goals.map((goal, idx) => (
                  <li key={idx}>{goal}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* User Journey */}
          <div>
            <h4
              className="font-body text-sm md:text-base font-bold mb-4 text-center"
              style={{ color: '#343434' }}
            >
              User Journey
            </h4>
            
            {/* Journey Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-4 left-8 right-8 h-px" style={{ backgroundColor: 'hsl(35 18% 30%)' }} />
              
              {/* Journey stages */}
              <div className="flex justify-between items-start relative px-4">
                {persona.journey.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center w-1/4">
                    {/* Star marker */}
                    <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-8 md:h-8 mb-2" style={{ color: '#343434' }}>
                      <path 
                        d="M12 2 L14 8 L12 6 L10 8 Z M12 22 L14 16 L12 18 L10 16 Z M2 12 L8 10 L6 12 L8 14 Z M22 12 L16 10 L18 12 L16 14 Z" 
                        fill="currentColor"
                      />
                      <circle cx="12" cy="12" r="3" fill="currentColor" />
                    </svg>
                    
                    {/* Stage name */}
                    <span
                      className="font-body text-xs md:text-sm font-semibold mb-1"
                      style={{ color: '#343434' }}
                    >
                      {item.stage}
                    </span>
                    
                    {/* Description */}
                    <span
                      className="font-body text-[10px] md:text-xs leading-tight"
                      style={{ color: '#343434' }}
                    >
                      {item.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PersonaOverlay;
