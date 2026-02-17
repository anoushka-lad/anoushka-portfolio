"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const zodiacWheel = "/images/zodiac-wheel-light.png";
const aboutAvatar = "/images/about-avatar.png";
const iconLinkedin = "/images/icon-linkedin.png";
const iconResume = "/images/icon-resume.png";
const iconEmail = "/images/icon-email.png";
const aboutProject1 = "/images/about-project-1.png";
const aboutProject2 = "/images/about-project-2.png";
const aboutProject3 = "/images/about-project-3.png";
const caseStudy4Illustration = "/images/cs4-hero-icon.png";
const rusticPaperBg = "/images/rustic-paper-bg.jpg";
const whitePaperBg = "/images/white-paper-bg.jpg";

const projects = [
  {
    title: "On Developing Personas\nFor A Multi-Brand Hub",
    image: aboutProject1,
    href: "/case-study-1",
    number: "1",
  },
  {
    title: "On Building An Accessible Usability\nBenchmarking System For A Streaming Service",
    image: aboutProject2,
    href: "/case-study-2",
    number: "2",
  },
  {
    title: "On Redesigning Ad Experiences\nFor Business News",
    image: aboutProject3,
    href: "/case-study-3",
    number: "3",
  },
  {
    title: "On Prototyping A Speech-Affirming\nVideo Conferencing Software",
    image: caseStudy4Illustration,
    href: "/case-study-4",
    number: "4",
  },
];

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const DecorativeDivider = () => (
  <div className="flex items-center justify-center gap-3 py-8">
    <div className="h-px flex-1 max-w-[80px]" style={{ backgroundColor: 'hsl(35 18% 40%)' }} />
    <motion.svg
      viewBox="0 0 24 24"
      className="w-5 h-5"
      style={{ color: 'hsl(35 18% 35%)' }}
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      <path
        d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z"
        fill="currentColor"
      />
    </motion.svg>
    <div className="h-px flex-1 max-w-[80px]" style={{ backgroundColor: 'hsl(35 18% 40%)' }} />
  </div>
);

const AboutContent = () => {
  return (
    <div className="min-h-screen">
      {/* Dark Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center py-8 px-6 overflow-hidden"
        style={{ backgroundColor: 'hsl(30 15% 8%)' }}
      >
        <motion.img
          src={zodiacWheel}
          alt="Zodiac wheel illustration"
          className="w-40 md:w-52 lg:w-64 h-auto mb-4"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1, rotate: -360 }}
          transition={{
            opacity: { duration: 1 },
            scale: { duration: 1 },
            rotate: { duration: 60, repeat: Infinity, ease: "linear" }
          }}
          whileHover={{ scale: 1.05 }}
        />
        <motion.h1
          className="font-serif text-2xl sm:text-3xl md:text-5xl font-medium tracking-wide"
          style={{ color: 'hsl(35 20% 88%)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Anoushka Lad
        </motion.h1>
      </section>

      {/* My Projects Section */}
      <section
        className="py-16 px-6 md:px-16 lg:px-24"
        style={{
          backgroundImage: `url(${whitePaperBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <motion.h2
          className="font-serif text-2xl md:text-3xl font-semibold mb-10"
          style={{ color: 'hsl(35 18% 20%)' }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, i) => (
            <motion.div key={i} variants={fadeUp}>
              <Link href={project.href} className="group block">
                <motion.div
                  className="relative overflow-hidden rounded-lg"
                  style={{
                    backgroundImage: `url(${rusticPaperBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  whileHover={{ y: -4, boxShadow: '0 8px 24px -8px hsl(30 10% 15% / 0.2)' }}
                  transition={{ duration: 0.3 }}
                >
                  {/* SVG Frame like NavigationCard */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 288 400" preserveAspectRatio="xMidYMid meet">
                    <rect x="3" y="3" width="282" height="394" fill="none" stroke="hsl(35 18% 35%)" strokeWidth="3" rx="8" />
                    <rect x="8" y="8" width="272" height="384" fill="none" stroke="hsl(35 18% 45%)" strokeWidth="1" strokeDasharray="4 2" rx="6" />
                    <rect x="12" y="12" width="264" height="376" fill="none" stroke="hsl(35 18% 50%)" strokeWidth="1" rx="4" />
                    <path d="M 18 34 Q 18 18 34 18" fill="none" stroke="hsl(35 18% 35%)" strokeWidth="1.5" />
                    <path d="M 22 40 Q 22 22 40 22" fill="none" stroke="hsl(35 18% 45%)" strokeWidth="1" />
                    <path d="M 254 18 Q 270 18 270 34" fill="none" stroke="hsl(35 18% 35%)" strokeWidth="1.5" />
                    <path d="M 248 22 Q 266 22 266 40" fill="none" stroke="hsl(35 18% 45%)" strokeWidth="1" />
                    <path d="M 34 382 Q 18 382 18 366" fill="none" stroke="hsl(35 18% 35%)" strokeWidth="1.5" />
                    <path d="M 40 378 Q 22 378 22 360" fill="none" stroke="hsl(35 18% 45%)" strokeWidth="1" />
                    <path d="M 270 366 Q 270 382 254 382" fill="none" stroke="hsl(35 18% 35%)" strokeWidth="1.5" />
                    <path d="M 266 360 Q 266 378 248 378" fill="none" stroke="hsl(35 18% 45%)" strokeWidth="1" />
                  </svg>

                  {/* Content */}
                  <div className="relative z-10 p-5">
                    {/* Title */}
                    <div className="text-center py-2 px-2 h-20 flex items-center justify-center">
                      <p
                        className="font-serif text-[11px] md:text-xs italic leading-snug whitespace-pre-line font-bold"
                        style={{ color: 'hsl(35 18% 25%)' }}
                      >
                        {project.title}
                      </p>
                    </div>

                    {/* Decorative sun with lines */}
                    <div className="flex items-center justify-center gap-2 py-2 px-2">
                      <div className="flex-1 max-w-[80px] h-px" style={{ backgroundColor: 'hsl(35 18% 40%)' }} />
                      <motion.svg
                        viewBox="0 0 24 24"
                        className="w-4 h-4 flex-shrink-0"
                        style={{ color: 'hsl(35 18% 35%)' }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      >
                        <circle cx="12" cy="12" r="4" fill="currentColor" />
                        {[...Array(8)].map((_, j) => {
                          const angle = (j * 45) * (Math.PI / 180);
                          const x1 = 12 + Math.cos(angle) * 6;
                          const y1 = 12 + Math.sin(angle) * 6;
                          const x2 = 12 + Math.cos(angle) * 10;
                          const y2 = 12 + Math.sin(angle) * 10;
                          return <line key={j} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1.5" />;
                        })}
                      </motion.svg>
                      <div className="flex-1 max-w-[80px] h-px" style={{ backgroundColor: 'hsl(35 18% 40%)' }} />
                    </div>

                    {/* Illustration image */}
                    <div className="flex items-center justify-center h-40 px-4">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="max-w-full max-h-full object-contain"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const, delay: i * 0.5 }}
                          whileHover={{ scale: 1.05 }}
                        />
                      </div>

                    {/* Number */}
                    <div
                      className="text-center py-2 font-serif text-sm"
                      style={{ color: 'hsl(35 18% 45%)' }}
                    >
                      {project.number}
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* My Story Section */}
      <section
        className="py-16 px-6 md:px-16 lg:px-24"
        style={{
          backgroundImage: `url(${rusticPaperBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <motion.h2
          className="font-serif text-2xl md:text-3xl font-semibold mb-10"
          style={{ color: 'hsl(35 18% 20%)' }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Story
        </motion.h2>

        <motion.div
          className="flex flex-col md:flex-row gap-8 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Avatar + Social Icons */}
          <div className="flex flex-col items-center gap-4 flex-shrink-0">
            <motion.div
              className="w-28 h-28 rounded-full overflow-hidden border-2"
              style={{ borderColor: 'hsl(35 18% 40%)' }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={aboutAvatar}
                alt="Anoushka Lad"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <motion.a
                href="https://www.linkedin.com/in/anoushkalad/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8"
                whileHover={{ scale: 1.15, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <img src={iconLinkedin} alt="LinkedIn" className="w-full h-full object-contain" />
              </motion.a>
              <motion.a
                href="/resume"
                className="w-8 h-8"
                whileHover={{ scale: 1.15, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <img src={iconResume} alt="Resume" className="w-full h-full object-contain" />
              </motion.a>
              <motion.a
                href="mailto:hello@anoushka.design"
                className="w-9 h-8"
                whileHover={{ scale: 1.15, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <img src={iconEmail} alt="Email" className="w-full h-full object-contain" />
              </motion.a>
            </div>
          </div>

          {/* Bio text */}
          <div className="space-y-4">
            <p
              className="font-serif text-sm md:text-base leading-relaxed"
              style={{ color: 'hsl(35 18% 22%)' }}
            >
              Hi! My name is Anoushka Lad, and among other things, I&apos;m a Product Researcher.
            </p>
            <p
              className="font-serif text-sm md:text-base leading-relaxed"
              style={{ color: 'hsl(35 18% 22%)' }}
            >
              As a bona fide research enthusiast, I&apos;m always on the lookout for opportunities to understand user behaviors and create digital experiences that balance business priorities with real human needs. I&apos;ve had the chance to work across academic institutions and at media conglomerates, meaning I&apos;m well-verse with rigorous, theory-driven inquiry on one side, and fast-moving, real-world product questions on the other.
            </p>
            <p
              className="font-serif text-sm md:text-base leading-relaxed"
              style={{ color: 'hsl(35 18% 22%)' }}
            >
              Outside of this, you can find me neck deep in pop culture. From music and movies to TV shows and books, I am always consuming the latest and greatest. I enjoy analyzing and critiquing the media I consume, and love discussing the social and cultural implications of popular culture. I&apos;m also a big fan of Chitra Banerjee Divakaruni&apos;s &ldquo;Palace of Illusions,&rdquo; so if you&apos;re looking for a great read, that&apos;s my recommendation!
            </p>
            <p
              className="font-serif text-sm md:text-base leading-relaxed"
              style={{ color: 'hsl(35 18% 22%)' }}
            >
              If you&apos;d like to learn more about my work or just want to chat, feel free to reach out. I&apos;m excited about product research roles where I can combine qualitative depth with strategic thinking, helping teams build experiences that feel intuitive and worth coming back to.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <section
        className="pb-12 px-6 md:px-16 lg:px-24"
        style={{
          backgroundImage: `url(${rusticPaperBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <DecorativeDivider />

        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <Link
            href="/"
            className="font-serif text-sm hover:underline underline-offset-4 transition-colors"
            style={{ color: 'hsl(35 18% 30%)' }}
          >
            My Projects
          </Link>
          <a
            href="mailto:hello@anoushka.design"
            className="font-serif text-sm hover:underline underline-offset-4 transition-colors"
            style={{ color: 'hsl(35 18% 30%)' }}
          >
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutContent;
