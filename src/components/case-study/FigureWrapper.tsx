const rusticPaperBg = "/images/rustic-paper-bg.jpg";

interface FigureWrapperProps {
  children: React.ReactNode;
  caption: string;
  figureNumber: string;
}

const FigureWrapper = ({ children, caption, figureNumber }: FigureWrapperProps) => {
  return (
    <div className="my-8">
      <div 
        className="relative p-8 md:p-12 rounded-sm overflow-hidden"
        style={{
          backgroundImage: `url(${rusticPaperBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
      
      {/* Caption */}
      <p className="cs-caption text-center mt-4">
        <strong>{figureNumber}:</strong> {caption}
      </p>
    </div>
  );
};

export default FigureWrapper;
