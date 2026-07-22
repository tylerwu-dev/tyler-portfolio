import { motion } from "framer-motion"
import { skillCategories } from "../data/projects"
import SectionWrapper from "./SectionWrapper"
import { staggerContainer, fadeUp } from "./SectionWrapper"

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-surface">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div variants={fadeUp} className="mb-12 md:mb-16">
            <p className="mb-2 text-sm font-medium tracking-wide text-accent uppercase">
              Expertise
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
              Skills & Tech Stack
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-md hover:shadow-black/5"
              >
                <h3 className="mb-4 text-lg font-semibold text-text-primary">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-text-secondary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
