import { projects } from "../data/projects"
import SectionWrapper from "./SectionWrapper"
import ProjectCard from "./ProjectCard"
import { motion } from "framer-motion"
import { staggerContainer, fadeUp } from "./SectionWrapper"

/** Homepage Selected Projects display order */
const HOMEPAGE_ORDER = [
  "bookapro",
  "ask-mirra",
  "easyrent",
  "carshare",
  "snowball",
] as const

export default function Projects() {
  const orderedProjects = HOMEPAGE_ORDER.map((slug) =>
    projects.find((project) => project.slug === slug),
  ).filter((project): project is (typeof projects)[number] => project != null)

  return (
    <SectionWrapper id="projects">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div variants={fadeUp} className="mb-12 md:mb-16">
            <p className="mb-2 text-sm font-medium tracking-wide text-accent uppercase">
              Portfolio
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
              Selected Projects
            </h2>
            <p className="mt-4 max-w-2xl text-text-secondary">
              A selection of full-stack and mobile projects showcasing my work across web, iOS,
              Android, and design.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {orderedProjects.map((project) => (
              <motion.div key={project.id} variants={fadeUp}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
