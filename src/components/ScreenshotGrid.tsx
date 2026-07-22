import { useState } from "react"
import type { ProjectScreenshot } from "../data/projects"
import MobileDeviceFrame from "./MobileDeviceFrame"

interface ScreenshotGridProps {
  screenshots: ProjectScreenshot[]
  variant?: "mobile" | "web"
  projectSlug?: string
  title?: string
  subtitle?: string
}

function ScreenshotPlaceholder({
  title,
  variant,
  useDeviceFrame,
}: {
  title: string
  variant: "mobile" | "web"
  useDeviceFrame: boolean
}) {
  if (variant === "mobile" && useDeviceFrame) {
    return (
      <div className="relative mx-auto w-full max-w-[340px] rounded-[2.75rem] bg-neutral-950 p-[10px] shadow-[0_18px_45px_rgba(15,23,42,0.18)] sm:max-w-[380px]">
        <div
          className="absolute top-4 left-1/2 z-20 h-7 w-28 -translate-x-1/2 rounded-full bg-black"
          aria-hidden="true"
        />
        <div className="flex aspect-[9/16] items-center justify-center overflow-hidden rounded-[2.25rem] bg-gradient-to-b from-[#f3f4f6] to-[#e8eaed] px-4 text-center">
          <div>
            <p className="text-xs font-medium tracking-wide text-text-secondary/70 uppercase">
              Screenshot
            </p>
            <p className="mt-1 text-sm font-medium text-text-primary/60">{title}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`mx-auto flex items-center justify-center rounded-2xl border border-border bg-gradient-to-b from-[#f3f4f6] to-[#e8eaed] px-4 text-center shadow-sm ${
        variant === "mobile"
          ? "aspect-[9/16] w-full max-w-[360px]"
          : "aspect-[16/10] w-full"
      }`}
    >
      <div>
        <p className="text-xs font-medium tracking-wide text-text-secondary/70 uppercase">
          Screenshot
        </p>
        <p className="mt-1 text-sm font-medium text-text-primary/60">{title}</p>
      </div>
    </div>
  )
}

function ScreenshotCard({
  shot,
  variant,
  useDeviceFrame,
}: {
  shot: ProjectScreenshot
  variant: "mobile" | "web"
  useDeviceFrame: boolean
}) {
  const [failed, setFailed] = useState(false)
  const hasImage = Boolean(shot.image?.trim()) && !failed

  return (
    <figure className="flex h-full flex-col">
      {hasImage ? (
        variant === "mobile" && useDeviceFrame ? (
          <MobileDeviceFrame
            src={shot.image}
            alt={shot.title}
            onError={() => setFailed(true)}
          />
        ) : variant === "mobile" ? (
          <img
            src={shot.image}
            alt={shot.title}
            className="mx-auto h-auto w-full max-w-[360px] rounded-2xl object-contain"
            onError={() => setFailed(true)}
          />
        ) : (
          <img
            src={shot.image}
            alt={shot.title}
            className="mx-auto block h-auto w-full rounded-2xl object-contain"
            onError={() => setFailed(true)}
          />
        )
      ) : (
        <ScreenshotPlaceholder
          title={shot.title}
          variant={variant}
          useDeviceFrame={useDeviceFrame}
        />
      )}

      <figcaption
        className={`mt-4 ${variant === "mobile" ? "text-center" : "text-left"}`}
      >
        <p className="text-sm font-medium text-text-primary sm:text-base">{shot.title}</p>
        {shot.description && (
          <p className="mt-1 text-sm text-text-secondary">{shot.description}</p>
        )}
      </figcaption>
    </figure>
  )
}

export default function ScreenshotGrid({
  screenshots,
  variant = "mobile",
  projectSlug,
  title = "Screenshots",
  subtitle = "A closer look at the main screens and user flows.",
}: ScreenshotGridProps) {
  if (screenshots.length === 0) return null

  const useDeviceFrame = variant === "mobile" && projectSlug !== "carshare"

  return (
    <div>
      <div className="mb-8">
        <h2 className="mb-2 text-xl font-semibold text-text-primary md:text-2xl">{title}</h2>
        <p className="text-base text-text-secondary">{subtitle}</p>
      </div>

      <div
        className={
          variant === "mobile"
            ? "grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
            : "grid grid-cols-1 gap-6 sm:grid-cols-2"
        }
      >
        {screenshots.map((shot) => (
          <ScreenshotCard
            key={shot.title}
            shot={shot}
            variant={variant}
            useDeviceFrame={useDeviceFrame}
          />
        ))}
      </div>
    </div>
  )
}
