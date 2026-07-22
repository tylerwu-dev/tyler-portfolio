import { motion } from "framer-motion"
import { SITE } from "../data/projects"
import SectionWrapper from "./SectionWrapper"
import { fadeUp } from "./SectionWrapper"

export default function ResumeCTA() {
  return (
    <SectionWrapper>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 border-y border-border py-10 text-center md:flex-row md:justify-between md:gap-8 md:text-left"
        >
          <div className="max-w-xl">
            <h2 className="mb-1.5 text-lg font-semibold text-text-primary md:text-xl">
              Need more details?
            </h2>
            <p className="text-sm leading-relaxed text-text-secondary md:text-base">
              My resume includes my experience, education, and technical background.
            </p>
          </div>
          <a
            href={SITE.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
