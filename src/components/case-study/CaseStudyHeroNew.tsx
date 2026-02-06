import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import compassIllustration from "@/assets/compass-illustration.png";

interface TitlePart {
  text: string;
  style: "normal" | "italic" | "bold";
}

interface CaseStudyHeroNewProps {
  titleParts: TitlePart[];
  avatarImage?: string;
}

const CaseStudyHeroNew = ({ titleParts, avatarImage }: CaseStudyHeroNewProps) => {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Header */}
      <header className="relative z-10 section-padding py-6">
        <div className="relative flex items-center justify-between">
          <Link 
            to="/" 
            className="font-serif text-lg font-medium text-foreground hover:text-accent transition-colors"
          >
            Anoushka Lad
          </Link>
          
          {/* Centered Home Icon */}
          <Link 
            to="/"
            className="absolute left-1/2 -translate-x-1/2 p-2 rounded-full transition-all duration-300 hover:bg-foreground/10"
            style={{ color: 'hsl(35 18% 25%)' }}
          >
            <Home size={20} strokeWidth={1.5} />
          </Link>
          
          <span className="font-sans text-sm tracking-wider text-muted-foreground">
            EST 2018
          </span>
        </div>
        
        {/* Header divider line */}
        <div 
          className="w-full h-px mt-4"
          style={{ backgroundColor: 'hsl(35 18% 35%)' }}
        />
      </header>

      {/* Main Content */}
      <div className="relative z-10 px-6 pt-16 pb-8 flex flex-col items-center">
        {/* Compass Illustration */}
        <motion.div
          initial={{ y: -20, opacity: 0, rotate: -5 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10"
        >
          <motion.img 
            src={compassIllustration}
            alt="Compass illustration"
            className="w-40 h-auto md:w-52 lg:w-60"
            animate={{ 
              y: [0, -6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Title with Avatar */}
        <div className="relative w-full flex justify-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-center max-w-4xl leading-tight"
          >
            {titleParts.map((part, index) => {
              let className = "text-foreground";
              if (part.style === "italic") {
                className = "italic text-foreground";
              } else if (part.style === "bold") {
                className = "font-semibold text-foreground";
              }
              return (
                <span key={index} className={className}>
                  {part.text}
                </span>
              );
            })}
          </motion.h1>

          {/* Avatar - positioned to the right of title */}
          {avatarImage && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute right-0 md:right-[5%] lg:right-[10%] bottom-0"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full ring-[3px] ring-[hsl(var(--decorative-blue))] overflow-hidden shadow-lg">
                <img 
                  src={avatarImage} 
                  alt="Author"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHeroNew;
