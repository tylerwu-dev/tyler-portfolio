import { motion } from "framer-motion"
import { SITE } from "../data/projects"
import SectionWrapper from "./SectionWrapper"
import { fadeUp } from "./SectionWrapper"

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-2 text-sm font-medium tracking-wide text-accent uppercase">Contact</p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            Let&apos;s connect
          </h2>
          <p className="mb-8 text-base leading-relaxed text-text-secondary md:text-lg">
            I&apos;m open to entry-level developer roles, internships, and junior full-stack
            opportunities.
          </p>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Email Me
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
