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
    <Link href={study.path} className="block cursor-pointer">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.025 }}
      >
        {/* Image with parchment background — matches FigureWrapper treatment */}
        <div className="relative rounded-sm overflow-hidden aspect-[3/2]">
          <div
            className="absolute inset-0 figure-parchment-bg"
            style={{
              backgroundImage: "url('/images/rustic-paper-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative z-10 flex items-center justify-center p-6 md:p-8 h-full">
            <Image
              src={study.heroImage}
              alt={study.heroAlt}
              width={400}
              height={267}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Title — directly on page background, tight to image */}
        <p className="cs-caption mt-2.5">{study.title}</p>
      </motion.div>
    </Link>
  );
}
