import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type SiteImageProps = {
  src: string;
  /** Full image-generation prompt; used verbatim as the alt text. */
  prompt: string;
  className?: string;
  /** Tailwind sizing class for the frame, e.g. "aspect-[4/5]" or "h-full". */
  ratio?: string;
  label?: string;
};

/**
 * Renders a local /images/*.png asset. If the file is not present yet, the
 * container keeps its proportions and shows a quiet placeholder frame so the
 * layout never collapses.
 */
export function SiteImage({
  src,
  prompt,
  className,
  ratio = "aspect-[4/3]",
  label,
}: SiteImageProps) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, [src]);

  return (
    <div className={cn("relative w-full overflow-hidden bg-muted", ratio, className)}>
      {!failed ? (
        <img
          ref={ref}
          src={src}
          alt={prompt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover text-[0px]"
        />
      ) : (
        <div className="absolute inset-0 flex items-end justify-between gap-4 border border-border/80 p-5">
          <span className="font-serif text-sm italic text-muted-foreground">
            {label ?? "Image"}
          </span>
          <span className="h-px w-10 shrink-0 self-end bg-border" aria-hidden="true" />
        </div>
      )}
    </div>
  );
}
