interface MobileDeviceFrameProps {
  src: string
  alt: string
  onError?: () => void
}

export default function MobileDeviceFrame({ src, alt, onError }: MobileDeviceFrameProps) {
  return (
    <div className="relative mx-auto w-full max-w-[340px] rounded-[2.75rem] bg-neutral-950 p-[10px] shadow-[0_18px_45px_rgba(15,23,42,0.18)] sm:max-w-[380px]">
      <div
        className="absolute top-4 left-1/2 z-20 h-7 w-28 -translate-x-1/2 rounded-full bg-black"
        aria-hidden="true"
      />
      <div className="overflow-hidden rounded-[2.25rem] bg-white">
        <img
          src={src}
          alt={alt}
          className="block h-auto w-full object-contain"
          onError={onError}
        />
      </div>
    </div>
  )
}
