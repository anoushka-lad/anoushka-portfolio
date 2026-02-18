"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const caseStudies = [
  { path: "/case-study-1" },
  { path: "/case-study-2" },
  { path: "/case-study-3" },
  { path: "/case-study-4" },
];

const ChevronLeft = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 2 L6 12 L16 22 L14 22 L4 12 L14 2 Z" />
  </svg>
);

const ChevronRight = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 2 L18 12 L8 22 L10 22 L20 12 L10 2 Z" />
  </svg>
);

const CaseStudyPagination = () => {
  const currentPage = usePathname();
  const currentIndex = caseStudies.findIndex((cs) => cs.path === currentPage);

  const prev = caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <nav className="section-padding pb-8">
      <div className="case-column">
        <div className="flex items-center justify-center gap-5">
          <Link
            href={prev.path}
            className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-60"
            style={{ color: "#343434" }}
          >
            <span
              className="font-body"
              style={{ fontSize: "14px", color: "#343434" }}
            >
              prev
            </span>
            <ChevronLeft />
          </Link>

          <Link
            href={next.path}
            className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-60"
            style={{ color: "#343434" }}
          >
            <ChevronRight />
            <span
              className="font-body"
              style={{ fontSize: "14px", color: "#343434" }}
            >
              next
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default CaseStudyPagination;
