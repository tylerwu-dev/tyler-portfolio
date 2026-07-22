import { motion } from "framer-motion"
import SectionWrapper from "./SectionWrapper"
import { fadeUp } from "./SectionWrapper"

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl"
        >
          <p className="mb-2 text-sm font-medium tracking-wide text-accent uppercase">About</p>
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            A bit about me
          </h2>
          <div className="space-y-6 text-base leading-relaxed text-text-secondary md:text-lg">
            <p>
              I&apos;m a full-stack developer with a background in design, media, and marketing. I
              enjoy turning ideas into usable products, from planning user flows and designing
              interfaces to building working web and mobile applications.
            </p>
            <p>
              My recent work includes marketplace apps, AI-powered web tools, and mobile products
              using Firebase, Stripe, React Native, SwiftUI, and Kotlin.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
