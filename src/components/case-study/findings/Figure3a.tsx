import { motion } from "framer-motion";
import { 
  AvidViewerIcon, 
  PlatformSurferIcon, 
  BingeWatcherIcon, 
  BackgroundStreamerIcon, 
  RewatcherIcon, 
  SocialStreamerIcon,
  PersonaMedallion
} from "../icons/PersonaIcons";

// Bar data: [startPercent, endPercent] relative to time axis (0-100%)
// Time axis: Morning(0-20), Working(20-40), Afternoon(40-60), Evening(60-80), Night(80-100)
interface PersonaBar {
  name: string;
  Icon: React.ComponentType<{ size?: number; animate?: boolean }>;
  start: number;
  end: number;
}

const Figure3a = () => {
  const timeLabels = ["Morning", "Working", "Afternoon", "Evening", "Night"];
  
  // Bar data - adjusted per user feedback
  const personas: PersonaBar[] = [
    { name: "Platform\nSurfer", Icon: PlatformSurferIcon, start: 60, end: 100 },
    { name: "Binge\nWatcher", Icon: BingeWatcherIcon, start: 60, end: 100 },
    { name: "Avid\nViewer", Icon: AvidViewerIcon, start: 80, end: 95 }, // Starts where Night starts
    { name: "Background\nStreamer", Icon: BackgroundStreamerIcon, start: 0, end: 100 },
    { name: "Social\nStreamer", Icon: SocialStreamerIcon, start: 52, end: 78 },
    { name: "Rewatcher", Icon: RewatcherIcon, start: 80, end: 100 }, // Starts where Night starts, longer
  ];

  return (
    <div className="w-full py-4 md:py-6">
      <div className="flex flex-col">
        {/* Chart rows */}
        <div className="flex flex-col gap-3 md:gap-4">
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 md:gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              {/* Persona label */}
              <div className="w-20 md:w-24 shrink-0 text-right pr-1">
                <span 
                  className="font-serif italic font-bold text-xs md:text-sm whitespace-pre-line leading-tight"
                  style={{ color: 'hsl(35 18% 25%)' }}
                >
                  {persona.name}
                </span>
              </div>
              
              {/* Persona icon with medallion - bigger */}
              <div className="shrink-0">
                <PersonaMedallion size={56}>
                  <persona.Icon size={34} animate={false} />
                </PersonaMedallion>
              </div>
              
              {/* Bar container - relative to time axis */}
              <div className="flex-1 h-9 md:h-10 relative">
                {/* The bar - positioned by start/end percentages */}
                <motion.div
                  className="absolute h-full"
                  style={{
                    left: `${persona.start}%`,
                    width: `${persona.end - persona.start}%`,
                    backgroundColor: 'hsl(35 15% 20%)',
                    transformOrigin: 'left center',
                  }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ opacity: 0.85 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* X-Axis - Time labels */}
        <div className="mt-3 md:mt-4" style={{ marginLeft: 'calc(5rem + 56px + 0.75rem)', paddingLeft: '0.5rem' }}>
          {/* Axis line */}
          <div 
            className="w-full mb-2"
            style={{ borderTop: '1.5px solid hsl(35 18% 30% / 0.6)' }}
          />
          
          {/* Time labels - evenly distributed */}
          <div className="flex">
            {timeLabels.map((label, i) => (
              <span
                key={i}
                className="flex-1 font-serif italic font-bold text-xs md:text-sm text-center"
                style={{ color: 'hsl(35 18% 28%)' }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Figure3a;
