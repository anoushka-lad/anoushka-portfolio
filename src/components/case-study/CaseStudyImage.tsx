interface CaseStudyImageProps {
  src: string;
  alt: string;
  caption?: string;
  fullWidth?: boolean;
  className?: string;
}

const CaseStudyImage = ({ 
  src, 
  alt, 
  caption, 
  fullWidth = false,
  className = "" 
}: CaseStudyImageProps) => {
  return (
    <figure className={`${fullWidth ? 'section-padding' : ''} ${className}`}>
      <div className={`${fullWidth ? 'max-w-7xl mx-auto' : ''}`}>
        <img 
          src={src} 
          alt={alt}
          className="w-full h-auto rounded-xl"
        />
        {caption && (
          <figcaption className="mt-4 text-sm text-muted-foreground text-center">
            {caption}
          </figcaption>
        )}
      </div>
    </figure>
  );
};

export default CaseStudyImage;
