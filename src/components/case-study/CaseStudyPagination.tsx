"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const CaseStudyPagination = () => {
  const currentPage = usePathname();

  const pages = [
    { number: 1, path: "/case-study-1" },
    { number: 2, path: "/case-study-2" },
    { number: 3, path: "/case-study-3" },
  ];

  return (
    <div className="section-padding py-8">
      <div className="max-w-4xl mx-auto">
        {/* Divider line */}
        <div
          className="w-full h-px mb-8"
          style={{ backgroundColor: 'hsl(35 18% 35%)' }}
        />

        {/* Pagination buttons */}
        <div className="flex justify-center items-center gap-4">
          {pages.map((page) => {
            const isActive = currentPage === page.path;
            return (
              <Link
                key={page.number}
                href={page.path}
                className={`
                  w-10 h-10 flex items-center justify-center
                  font-serif text-lg border-2 rounded-sm
                  transition-all duration-300
                  ${isActive
                    ? 'shadow-md'
                    : 'hover:shadow-md'
                  }
                `}
                style={{
                  color: isActive ? 'hsl(35 25% 90%)' : 'hsl(35 18% 25%)',
                  borderColor: 'hsl(35 18% 35%)',
                  backgroundColor: isActive ? 'hsl(35 18% 25%)' : 'transparent'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'hsl(35 18% 25%)';
                    e.currentTarget.style.color = 'hsl(35 25% 90%)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'hsl(35 18% 25%)';
                  }
                }}
              >
                {page.number}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPagination;
