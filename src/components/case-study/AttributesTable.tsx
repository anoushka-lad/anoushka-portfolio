import { r } from "@/lib/utils";

const PersonaIcon = ({ type }: { type: number }) => {
  const icons = [
    // Moon over waves
    <svg key={0} viewBox="0 0 40 40" className="w-10 h-10">
      <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-foreground" />
      <path d="M12 18 Q15 15, 18 18 Q21 21, 24 18 Q27 15, 30 18" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground" />
      <path d="M10 22 Q15 19, 20 22 Q25 25, 30 22" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground" />
      <path d="M22 8 A6 6 0 1 0 22 16 A4 4 0 1 1 22 8" fill="currentColor" className="text-foreground" />
    </svg>,
    // TV/Screen
    <svg key={1} viewBox="0 0 40 40" className="w-10 h-10">
      <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-foreground" />
      <rect x="10" y="12" width="20" height="14" rx="1" fill="currentColor" className="text-foreground" />
      <line x1="12" y1="15" x2="28" y2="15" stroke="currentColor" strokeWidth="1" className="text-background" />
      <line x1="12" y1="18" x2="28" y2="18" stroke="currentColor" strokeWidth="1" className="text-background" />
      <line x1="12" y1="21" x2="28" y2="21" stroke="currentColor" strokeWidth="1" className="text-background" />
      <line x1="12" y1="24" x2="28" y2="24" stroke="currentColor" strokeWidth="1" className="text-background" />
    </svg>,
    // Eye
    <svg key={2} viewBox="0 0 40 40" className="w-10 h-10">
      <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-foreground" />
      <ellipse cx="20" cy="20" rx="12" ry="7" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground" />
      <circle cx="20" cy="20" r="5" fill="currentColor" className="text-foreground" />
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45 - 90) * Math.PI / 180;
        const x = r(20 + Math.cos(angle) * 9);
        const y = r(20 + Math.sin(angle) * 5);
        return <circle key={i} cx={x} cy={y} r="0.5" fill="currentColor" className="text-foreground" />;
      })}
    </svg>,
    // Coffee cup
    <svg key={3} viewBox="0 0 40 40" className="w-10 h-10">
      <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-foreground" />
      <ellipse cx="20" cy="24" rx="8" ry="3" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground" />
      <path d="M14 10 Q14 8, 15 9 Q16 10, 16 8" fill="none" stroke="currentColor" strokeWidth="1" className="text-foreground" />
      <path d="M19 10 Q19 8, 20 9 Q21 10, 21 8" fill="none" stroke="currentColor" strokeWidth="1" className="text-foreground" />
      <path d="M24 10 Q24 8, 25 9 Q26 10, 26 8" fill="none" stroke="currentColor" strokeWidth="1" className="text-foreground" />
    </svg>,
    // Venn diagram
    <svg key={4} viewBox="0 0 40 40" className="w-10 h-10">
      <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-foreground" />
      <circle cx="16" cy="20" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground" />
      <circle cx="24" cy="20" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground" />
    </svg>,
    // Hourglass/symbol
    <svg key={5} viewBox="0 0 40 40" className="w-10 h-10">
      <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-foreground" />
      <circle cx="20" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground" />
      <line x1="20" y1="12" x2="20" y2="28" stroke="currentColor" strokeWidth="1" className="text-foreground" />
      <circle cx="20" cy="14" r="2" fill="currentColor" className="text-foreground" />
    </svg>,
  ];
  return icons[type] || icons[0];
};

const StarIcon = ({ variant }: { variant: number }) => {
  const variants = [
    // 8-point star filled
    <svg key={0} viewBox="0 0 20 20" className="w-5 h-5">
      <polygon points="10,0 12,7 20,7 14,12 16,20 10,15 4,20 6,12 0,7 8,7" fill="currentColor" className="text-foreground" />
    </svg>,
    // 6-point star
    <svg key={1} viewBox="0 0 20 20" className="w-5 h-5">
      <polygon points="10,0 12,6 18,3 14,10 18,17 12,14 10,20 8,14 2,17 6,10 2,3 8,6" fill="currentColor" className="text-foreground" />
    </svg>,
    // Asterisk style
    <svg key={2} viewBox="0 0 20 20" className="w-5 h-5">
      <path d="M10 0v20M0 10h20M2 2l16 16M18 2L2 18" stroke="currentColor" strokeWidth="2" fill="none" className="text-foreground" />
    </svg>,
    // Sunburst
    <svg key={3} viewBox="0 0 20 20" className="w-5 h-5">
      <circle cx="10" cy="10" r="4" fill="currentColor" className="text-foreground" />
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30) * Math.PI / 180;
        const x1 = r(10 + Math.cos(angle) * 5);
        const y1 = r(10 + Math.sin(angle) * 5);
        const x2 = r(10 + Math.cos(angle) * 9);
        const y2 = r(10 + Math.sin(angle) * 9);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1.5" className="text-foreground" />;
      })}
    </svg>,
  ];
  return variants[variant % 4] || variants[0];
};

const AttributesTable = () => {
  const attributes = [
    "Time of Day",
    "Viewing Content", 
    "Primary Device",
    "Ad Tolerance",
    "Content Type",
  ];

  // Random-ish star variants for each cell
  const starMatrix = [
    [0, 1, 2, 3, 0, 1],
    [1, 0, 2, 1, 0, 3],
    [2, 1, 0, 2, 1, 0],
    [3, 0, 1, 0, 2, 1],
    [1, 2, 3, 1, 0, 3],
  ];

  return (
    <div className="w-full overflow-x-auto py-8">
      <table className="w-full">
        <thead>
          <tr>
            <th className="w-32"></th>
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <th key={i} className="px-4 py-4">
                <PersonaIcon type={i} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {attributes.map((attr, rowIndex) => (
            <tr key={attr} className={rowIndex % 2 === 0 ? "bg-secondary/50" : ""}>
              <td className="py-3 px-4 font-semibold text-sm text-foreground">{attr}</td>
              {[0, 1, 2, 3, 4, 5].map((colIndex) => (
                <td key={colIndex} className="py-3 px-4 text-center">
                  <div className="flex justify-center">
                    <StarIcon variant={starMatrix[rowIndex][colIndex]} />
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttributesTable;
