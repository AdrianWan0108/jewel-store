"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import ImageArrowButton from "@/components/ui/ImageArrowButton";

type ProductImageGalleryProps = {
    name: string;
    images: string[]; // expects at least 1
};

export default function ProductImageGallery({
    name,
    images,
}: ProductImageGalleryProps) {
    const safeImages = useMemo(() => (images?.length ? images : []), [images]);
    const [activeIndex, setActiveIndex] = useState(0);

    const activeSrc = safeImages[activeIndex] ?? safeImages[0];

    const total = safeImages.length;

    const prev = () => setActiveIndex((i) => (i === 0 ? total - 1 : i - 1));
    const next = () => setActiveIndex((i) => (i === total - 1 ? 0 : i + 1));


    if (!safeImages.length) {
        return (
            <div className="aspect-square rounded-xl border border-dashed border-brand-purple/25 bg-brand-white/60" />
        );
    }

    return (
        <div className="space-y-4">
            {/* Main image */}
            <div className="relative aspect-square overflow-hidden rounded-xl bg-brand-purple/5 group">
                <Image
                    src={activeSrc}
                    alt={`${name} — image ${activeIndex + 1}`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                />

                {total > 1 && (
                    <>
                        <ImageArrowButton
                            direction="left"
                            onClick={prev}
                            className="left-3 opacity-100 md:opacity-0 md:group-hover:opacity-100"
                        />
                        <ImageArrowButton
                            direction="right"
                            onClick={next}
                            className="right-3 opacity-100 md:opacity-0 md:group-hover:opacity-100"
                        />
                    </>
                )}
            </div>



            {/* Thumbnails */}
            <div className="flex gap-3">
                {safeImages.map((src, idx) => {
                    const isActive = idx === activeIndex;

                    return (
                        <button
                            key={src}
                            type="button"
                            onClick={() => setActiveIndex(idx)}
                            className={[
                                "relative h-20 w-20 overflow-hidden rounded-lg",
                                "bg-brand-purple/5",
                                "border transition",
                                isActive
                                    ? "border-brand-gold"
                                    : "border-brand-purple/15 hover:border-brand-gold/70",
                            ].join(" ")}
                            aria-label={`View image ${idx + 1} of ${name}`}
                            aria-pressed={isActive}
                        >
                            <Image
                                src={src}
                                alt={`${name} thumbnail ${idx + 1}`}
                                fill
                                sizes="80px"
                                className="object-cover"
                            />
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
