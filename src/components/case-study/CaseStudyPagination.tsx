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
          className="w-full h-px mb-8 cs-divider"
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
                  cs-nav-text border-2 rounded-sm
                  transition-all duration-300
                  ${isActive
                    ? 'shadow-md'
                    : 'hover:shadow-md'
                  }
                `}
                style={{
                  color: isActive ? '#FCF9F3' : '#343434',
                  borderColor: '#343434',
                  backgroundColor: isActive ? '#343434' : 'transparent'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = '#343434';
                    e.currentTarget.style.color = '#FCF9F3';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#343434';
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
