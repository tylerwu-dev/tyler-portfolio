import { Link, useParams, Navigate } from "react-router-dom"
import { motion } from "framer-motion"
import { getProjectBySlug, getAdjacentProjects } from "../data/projects"
import { fadeUp } from "../components/SectionWrapper"
import Footer from "../components/Footer"
import ScreenshotGrid from "../components/ScreenshotGrid"
import { assetPath } from "../utils/assetPath"

function CaseStudySection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <motion.section
      className="mb-12"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      <h2 className="mb-4 text-xl font-semibold text-text-primary md:text-2xl">{title}</h2>
      <div className="text-base leading-relaxed text-text-secondary">{children}</div>
    </motion.section>
  )
}

function Paragraphs({ text }: { text: string | string[] }) {
  const parts = Array.isArray(text) ? text : [text]
  return (
    <div className="space-y-4">
      {parts.map((part) => (
        <p key={part.slice(0, 48)}>{part}</p>
      ))}
    </div>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return <Navigate to="/" replace />
  }

  const { prev, next } = getAdjacentProjects(project.slug)
  const cs = project.caseStudy
  const hasImage = !project.imageGradient

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-surface/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link
            to="/"
            className="text-sm font-medium text-text-secondary transition-colors hover:text-accent"
          >
            ← Back to Home
          </Link>
          <span className="text-sm font-medium text-text-primary">{project.title}</span>
        </div>
      </header>

      <motion.main
        className="mx-auto max-w-4xl px-6 py-12 md:py-16"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Project Hero */}
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium tracking-wide text-accent uppercase">
            {project.type}
          </p>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-text-primary md:text-5xl">
            {project.title}
          </h1>
          <div className="mb-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-text-secondary border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mb-8 aspect-[16/9] overflow-hidden rounded-2xl border border-border shadow-sm">
            {hasImage ? (
              <img
                src={assetPath(project.image)}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div
                className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${project.imageGradient}`}
              >
                <span className="text-3xl font-bold text-white/90">{project.title}</span>
              </div>
            )}
          </div>
          <div className="flex flex-wrap gap-4">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-accent hover:text-accent-hover"
              >
                GitHub →
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-accent hover:text-accent-hover"
              >
                {project.isDesignProject ? "Prototype →" : "Live Site →"}
              </a>
            )}
          </div>
        </div>

        <CaseStudySection title="Project Overview">
          <Paragraphs text={cs.overview} />
        </CaseStudySection>

        {cs.problem && (
          <CaseStudySection title="Problem">
            <p>{cs.problem}</p>
          </CaseStudySection>
        )}

        <CaseStudySection title="Key Features">
          <ul className="list-inside list-disc space-y-2">
            {cs.keyFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection title={project.isDesignProject ? "Tools" : "Tech Stack"}>
          <div className="flex flex-wrap gap-2">
            {cs.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection title="My Role">
          <Paragraphs text={cs.role} />
        </CaseStudySection>

        <CaseStudySection
          title={project.isDesignProject ? "Design Decisions" : "Technical Decisions"}
        >
          <ul className="list-inside list-disc space-y-2">
            {cs.technicalDecisions.map((decision) => (
              <li key={decision}>{decision}</li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Challenges & Solutions">
          <div className="space-y-6">
            {cs.challenges.map((item) => (
              <div
                key={item.title ?? item.challenge}
                className="rounded-xl border border-border bg-surface p-5"
              >
                {item.title && (
                  <p className="mb-3 font-semibold text-text-primary">{item.title}</p>
                )}
                <p className="mb-2 text-sm font-medium text-text-primary">Challenge</p>
                <p className="mb-4">{item.challenge}</p>
                <p className="mb-2 text-sm font-medium text-text-primary">Solution</p>
                <p>{item.solution}</p>
              </div>
            ))}
          </div>
        </CaseStudySection>

        <motion.section
          className="mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          <ScreenshotGrid
            screenshots={project.screenshots}
            variant={project.screenshotVariant ?? "mobile"}
            projectSlug={project.slug}
            title={project.isDesignProject ? "Key UI Flows" : "Screenshots"}
            subtitle={
              project.isDesignProject
                ? "A closer look at the main prototype screens and user flows."
                : "A closer look at the main screens and user flows."
            }
          />
        </motion.section>

        <CaseStudySection title="Project Outcome">
          <Paragraphs text={cs.finalResult} />
        </CaseStudySection>

        {/* Navigation */}
        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:justify-between">
          {prev ? (
            <Link
              to={prev.links.caseStudy}
              className="group rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent/30"
            >
              <span className="text-xs text-text-secondary">Previous</span>
              <p className="font-medium text-text-primary group-hover:text-accent">
                ← {prev.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          <Link
            to="/"
            className="self-center text-sm font-medium text-accent hover:text-accent-hover"
          >
            All Projects
          </Link>
          {next ? (
            <Link
              to={next.links.caseStudy}
              className="group rounded-xl border border-border bg-surface p-4 text-right transition-colors hover:border-accent/30"
            >
              <span className="text-xs text-text-secondary">Next</span>
              <p className="font-medium text-text-primary group-hover:text-accent">
                {next.title} →
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </motion.main>

      <Footer />
    </div>
  )
}
