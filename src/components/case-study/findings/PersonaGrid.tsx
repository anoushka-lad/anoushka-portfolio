"use client";

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
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-10">
        {personas.map((persona) => (
          <div key={persona.number} className="flex flex-col items-center">
            <PersonaCard
              title={persona.title}
              number={persona.number}
              onClick={() => setSelectedPersona(persona.number)}
            />
            <button
              onClick={() => setSelectedPersona(persona.number)}
              className="mt-1.5 font-body text-xs md:text-sm tracking-wide px-10 py-1 border-2 rounded-[2px]
                bg-[#343434] text-[#FCF9F3] border-[#343434]
                transition-all duration-200 ease-out
                hover:bg-[#4f4f4f] hover:border-[#4f4f4f]
                active:scale-[0.97] active:bg-[#2a2a2a] active:border-[#2a2a2a]"
            >
              Read More
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
