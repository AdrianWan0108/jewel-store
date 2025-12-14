"use client";

type Direction = "left" | "right";

interface ImageArrowButtonProps {
  direction: Direction;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

export default function ImageArrowButton({
  direction,
  onClick,
  className = "",
}: ImageArrowButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Show ${direction === "left" ? "previous" : "next"} image`}
      className={[
        "absolute top-1/2 -translate-y-1/2 z-10",
        "h-8 w-8 rounded-full",
        "bg-white/80 backdrop-blur",
        "flex items-center justify-center",
        "text-brand-purple/60 hover:text-brand-purple",
        "shadow-sm transition",
        className,
      ].join(" ")}
    >
      {direction === "left" ? (
        <svg viewBox="0 0 24 24" className="h-4 w-4">
          <path
            d="M15 18l-6-6 6-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-4 w-4">
          <path
            d="M9 6l6 6-6 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
