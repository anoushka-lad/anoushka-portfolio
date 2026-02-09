import { r } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => (
  <div className="mb-8">
    {/* Heading row — star is absolutely positioned in the gutter */}
    <div className="relative">
      <svg
        viewBox="0 0 40 40"
        className="absolute right-full mr-4 top-1/2 -translate-y-1/2 w-[30px] h-[30px] text-foreground"
        aria-hidden="true"
      >
        {[...Array(16)].map((_, i) => {
          const angle = (i * 22.5) * Math.PI / 180;
          return (
            <line
              key={i}
              x1={r(20 + Math.cos(angle) * 8)}
              y1={r(20 + Math.sin(angle) * 8)}
              x2={r(20 + Math.cos(angle) * 16)}
              y2={r(20 + Math.sin(angle) * 16)}
              stroke="currentColor"
              strokeWidth="1.5"
            />
          );
        })}
        <circle cx="20" cy="20" r="6" fill="currentColor" />
      </svg>
      <h2 className="cs-section-heading">{title}</h2>
    </div>
    {/* Rule — flush with the text column */}
    <div className="h-px mt-4" style={{ backgroundColor: '#C1BFBA' }} />
  </div>
);

export default SectionHeader;
