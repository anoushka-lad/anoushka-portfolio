"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { CaseStudyCardItem } from "./caseStudyCardData";

interface CaseStudyCardProps {
  study: CaseStudyCardItem;
}

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <Link href={study.path} className="block group cursor-pointer">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Image area with parchment background */}
        <div className="relative rounded-sm overflow-hidden">
          <div
            className="absolute inset-0 figure-parchment-bg"
            style={{
              backgroundImage: "url('/images/rustic-paper-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative z-10 flex items-center justify-center p-8 md:p-10">
            <Image
              src={study.heroImage}
              alt={study.heroAlt}
              width={400}
              height={300}
              className="w-full h-auto max-h-[260px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Title caption */}
        <p className="cs-body mt-3 transition-colors duration-300 group-hover:text-[#1a1a1a]">
          {study.title}
        </p>
      </motion.div>
    </Link>
  );
}
