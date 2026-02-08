import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface NextCaseStudyProps {
  title: string;
  href: string;
  image: string;
}

const NextCaseStudy = ({ title, href, image }: NextCaseStudyProps) => {
  return (
    <section className="section-padding py-24 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <p className="cs-nav-text mb-4">Next Project</p>

        <Link
          href={href}
          className="group block"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <h3 className="cs-section-heading group-hover:text-accent transition-colors">
              {title}
            </h3>
            <ArrowRight className="w-8 h-8 text-foreground group-hover:text-accent group-hover:translate-x-2 transition-all" />
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl">
            <img
              src={image}
              alt={title}
              className="w-full h-64 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default NextCaseStudy;
