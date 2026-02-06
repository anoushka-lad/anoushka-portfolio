const InterviewDiagram = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto py-8">
      <svg viewBox="0 0 500 300" className="w-full h-auto">
        {/* Connection lines with arrows */}
        <line x1="100" y1="80" x2="230" y2="200" stroke="currentColor" strokeWidth="1" className="text-foreground" />
        <line x1="270" y1="200" x2="400" y2="80" stroke="currentColor" strokeWidth="1" className="text-foreground" />
        
        {/* Arrow heads on lines */}
        <polygon points="165,140 155,148 163,152" fill="currentColor" className="text-foreground" />
        <polygon points="335,140 345,148 337,152" fill="currentColor" className="text-foreground" />
        
        {/* Node 1 - Star burst */}
        <g transform="translate(100, 80)">
          <polygon 
            points="0,-25 7,-8 25,-8 11,3 17,22 0,12 -17,22 -11,3 -25,-8 -7,-8" 
            fill="currentColor" 
            className="text-foreground"
          />
          <text y="-35" textAnchor="middle" className="text-sm font-serif fill-foreground">User Demographics</text>
          <text y="-22" textAnchor="middle" className="text-sm font-serif fill-foreground">and Viewing Habits</text>
          <text y="5" textAnchor="middle" className="text-xs font-bold fill-background">1</text>
        </g>
        
        {/* Node 2 - Star burst */}
        <g transform="translate(250, 200)">
          <polygon 
            points="0,-20 5,-7 18,-12 10,0 18,12 5,7 0,20 -5,7 -18,12 -10,0 -18,-12 -5,-7" 
            fill="currentColor" 
            className="text-foreground"
          />
          <text y="40" textAnchor="middle" className="text-lg font-serif fill-foreground">Engaging in Content</text>
          <text y="2" textAnchor="middle" className="text-xs font-bold fill-background">2</text>
        </g>
        
        {/* Node 3 - Sunburst */}
        <g transform="translate(400, 80)">
          {/* Outer rays */}
          {[...Array(16)].map((_, i) => {
            const angle = (i * 22.5) * Math.PI / 180;
            const x1 = Math.cos(angle) * 12;
            const y1 = Math.sin(angle) * 12;
            const x2 = Math.cos(angle) * 22;
            const y2 = Math.sin(angle) * 22;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2" className="text-foreground" />;
          })}
          <circle r="12" fill="currentColor" className="text-foreground" />
          <text y="-35" textAnchor="middle" className="text-sm font-serif fill-foreground">Aggregated Watch</text>
          <text y="-22" textAnchor="middle" className="text-sm font-serif fill-foreground">Experiences</text>
          <text y="4" textAnchor="middle" className="text-xs font-bold fill-background">3</text>
        </g>
      </svg>
    </div>
  );
};

export default InterviewDiagram;
