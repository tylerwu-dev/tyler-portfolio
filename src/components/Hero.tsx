import { motion } from "framer-motion"
import { SITE } from "../data/projects"
import { fadeUp, staggerContainer } from "./SectionWrapper"

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2 md:gap-16">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.h1
            variants={fadeUp}
            className="mb-4 text-4xl leading-tight font-bold tracking-tight text-text-primary md:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m {SITE.name}.
            <span className="mt-2 block text-2xl font-semibold tracking-tight text-text-secondary md:text-3xl lg:text-4xl">
              Full-stack developer based in {SITE.location}.
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mb-8 max-w-lg text-base leading-relaxed text-text-secondary md:text-lg"
          >
            I build responsive web and mobile applications using React, React Native, SwiftUI,
            Kotlin, Firebase, and modern full-stack tools.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo("#projects")}
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              View Projects
            </button>
            <a
              href={SITE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:border-accent/30 hover:bg-accent/5"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="mx-auto w-full max-w-sm md:mx-0 md:max-w-md md:justify-self-end"
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
            <img
              src="/images/profile.jpg"
              alt="Tyler Wu portrait"
              className="aspect-[3/4] w-full object-cover object-[center_20%] md:aspect-[2/3] md:object-[center_18%]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
