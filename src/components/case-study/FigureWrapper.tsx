import { cn } from "@/lib/utils";

const rusticPaperBg = "/images/rustic-paper-bg.jpg";

interface FigureWrapperProps {
  children: React.ReactNode;
  caption: string;
  figureNumber: string;
  frameClassName?: string;
}

const FigureWrapper = ({ children, caption, figureNumber, frameClassName }: FigureWrapperProps) => {
  return (
    <div className="my-6">
      <div className={cn("relative p-8 md:p-12 rounded-sm overflow-hidden", frameClassName)}>
        {/* Parchment texture — adjust filter values here to tune color tone */}
        <div
          className="absolute inset-0 figure-parchment-bg"
          style={{
            backgroundImage: `url(${rusticPaperBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
      
      {/* Caption */}
      <p className="cs-caption text-center mt-3">
        <strong>{figureNumber}:</strong> {caption}
      </p>
    </div>
  );
};

export default FigureWrapper;
