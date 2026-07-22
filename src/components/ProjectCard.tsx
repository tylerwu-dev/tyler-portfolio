import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import type { Project } from "../data/projects"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasImage = !project.imageGradient

  return (
    <motion.article
      className={`group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-shadow hover:shadow-lg hover:shadow-black/5 ${
        project.isDesignProject ? "md:col-span-1" : ""
      }`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        {hasImage ? (
          <motion.img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.4 }}
          />
        ) : (
          <motion.div
            className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${project.imageGradient}`}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-2xl font-bold text-white/90">{project.title}</span>
          </motion.div>
        )}
        {project.isDesignProject && (
          <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-text-secondary backdrop-blur-sm">
            Design
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="mb-1 text-xs font-medium tracking-wide text-accent uppercase">
          {project.type}
        </p>
        <h3 className="mb-3 text-xl font-semibold text-text-primary">{project.title}</h3>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-background px-2.5 py-1 text-xs font-medium text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mb-6 flex-1 text-sm leading-relaxed text-text-secondary">
          {project.description}
        </p>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <Link
            to={project.links.caseStudy}
            className="text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-accent"
          >
            View case study&nbsp;→
          </Link>
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-accent"
            >
              {project.isDesignProject ? "Prototype" : "Live site"}&nbsp;↗
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
