import { useState } from "react";
import PersonaCard from "./PersonaCard";
import PersonaOverlay from "./PersonaOverlay";

const PersonaGrid = () => {
  const [selectedPersona, setSelectedPersona] = useState<number | null>(null);

  const personas = [
    { title: "The Platform Surfer", number: 1 },
    { title: "The Binge Watcher", number: 2 },
    { title: "The Avid Viewer", number: 3 },
    { title: "The Background Streamer", number: 4 },
    { title: "The Social Streamer", number: 5 },
    { title: "The Rewatcher", number: 6 },
  ];

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
        {personas.map((persona) => (
          <div key={persona.number} className="flex flex-col items-center">
            <PersonaCard
              title={persona.title}
              number={persona.number}
              onClick={() => setSelectedPersona(persona.number)}
            />
            <button
              onClick={() => setSelectedPersona(persona.number)}
              className="mt-3 font-serif text-xs md:text-sm px-4 py-1.5 border-2 rounded-sm transition-all duration-300 hover:shadow-md"
              style={{ 
                color: 'hsl(35 18% 25%)',
                borderColor: 'hsl(35 18% 35%)',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'hsl(35 18% 25%)';
                e.currentTarget.style.color = 'hsl(35 25% 90%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'hsl(35 18% 25%)';
              }}
            >
              Read more
            </button>
          </div>
        ))}
      </div>

      {/* Overlay for all personas */}
      <PersonaOverlay 
        open={selectedPersona !== null}
        onOpenChange={(open) => !open && setSelectedPersona(null)}
        personaNumber={selectedPersona ?? 0}
      />
    </>
  );
};

export default PersonaGrid;
