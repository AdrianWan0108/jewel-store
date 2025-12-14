"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import Image from "next/image";
import ImageArrowButton from "@/components/ui/ImageArrowButton";

type ProductImageGalleryProps = {
    name: string;
    images: string[];
};

export default function ProductImageGallery({ name, images }: ProductImageGalleryProps) {
    const safeImages = useMemo(() => (images?.length ? images : []), [images]);
    const [activeIndex, setActiveIndex] = useState(0);

    const total = safeImages.length;
    const activeSrc = safeImages[activeIndex] ?? safeImages[0];

    // Zoom state (desktop hover)
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [origin, setOrigin] = useState({ x: 50, y: 50 }); // percent

    // Zoom modal (tap)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalZoomed, setIsModalZoomed] = useState(false);
    const [pan, setPan] = useState({ x: 0, y: 0 });
    const dragRef = useRef<{ startX: number; startY: number; baseX: number; baseY: number; dragging: boolean }>({
        startX: 0,
        startY: 0,
        baseX: 0,
        baseY: 0,
        dragging: false,
    });

    useEffect(() => {
        if (!isModalOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal();
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [isModalOpen]);


    const prev = () => setActiveIndex((i) => (i === 0 ? total - 1 : i - 1));
    const next = () => setActiveIndex((i) => (i === total - 1 ? 0 : i + 1));

    if (!safeImages.length) {
        return (
            <div className="aspect-square rounded-xl border border-dashed border-brand-purple/25 bg-brand-white/60" />
        );
    }

    // Mouse move to set transform origin
    const handleMouseMove = (e: React.MouseEvent) => {
        const el = containerRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        // clamp to [0, 100]
        setOrigin({
            x: Math.max(0, Math.min(100, x)),
            y: Math.max(0, Math.min(100, y)),
        });
    };

    // Modal helpers
    const openModal = () => {
        setIsModalOpen(true);
        setIsModalZoomed(false);
        setPan({ x: 0, y: 0 });
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsModalZoomed(false);
        setPan({ x: 0, y: 0 });
        document.body.style.overflow = "";
    };

    const toggleModalZoom = () => {
        setIsModalZoomed((z) => !z);
        setPan({ x: 0, y: 0 });
    };

    // Drag to pan (only when zoomed)
    const onPointerDown = (e: React.PointerEvent) => {
        if (!isModalZoomed) return;
        dragRef.current.dragging = true;
        dragRef.current.startX = e.clientX;
        dragRef.current.startY = e.clientY;
        dragRef.current.baseX = pan.x;
        dragRef.current.baseY = pan.y;
    };

    const onPointerMove = (e: React.PointerEvent) => {
        if (!dragRef.current.dragging || !isModalZoomed) return;
        const dx = e.clientX - dragRef.current.startX;
        const dy = e.clientY - dragRef.current.startY;
        setPan({
            x: dragRef.current.baseX + dx,
            y: dragRef.current.baseY + dy,
        });
    };

    const onPointerUp = () => {
        dragRef.current.dragging = false;
    };

    return (
        <div className="space-y-4">
            {/* Main image with hover zoom */}
            <div
                ref={containerRef}
                className="relative aspect-square overflow-hidden rounded-xl bg-brand-purple/5 group"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onMouseMove={handleMouseMove}
            >
                {/* This wrapper lets us scale smoothly */}
                <div
                    className="absolute inset-0 transition-transform duration-200 ease-out"
                    style={{
                        transformOrigin: `${origin.x}% ${origin.y}%`,
                        transform: isHovering ? "scale(1.7)" : "scale(1)",
                    }}
                >
                    <Image
                        src={activeSrc}
                        alt={`${name} — image ${activeIndex + 1}`}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>

                {/* subtle “zoom hint” */}
                <button
                    type="button"
                    onClick={openModal}
                    className="absolute bottom-3 right-3 rounded-full bg-white/80 backdrop-blur px-3 py-1.5 text-xs text-brand-purple/80 shadow-sm opacity-0 group-hover:opacity-100 transition"
                    aria-label="Open zoom view"
                >
                    Zoom
                </button>

                {/* Arrows (mobile always visible, desktop hover) */}
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
                            key={`${src}-${idx}`}
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

            {/* Full-screen zoom modal (tap) */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-[60] bg-black/70"
                    role="dialog"
                    aria-modal="true"
                    onClick={closeModal} // clicking backdrop closes
                >
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                        {/* Panel */}
                        <div
                            className="w-full max-w-4xl"
                            onClick={(e) => e.stopPropagation()} // prevent backdrop close when clicking panel
                        >
                            {/* top controls */}
                            <div className="mb-3 flex items-center justify-between">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15"
                                >
                                    Close
                                </button>

                                <button
                                    type="button"
                                    onClick={toggleModalZoom}
                                    className="rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15"
                                >
                                    {isModalZoomed ? "Reset" : "Zoom in"}
                                </button>
                            </div>

                            {/* image area */}
                            <div
                                className="relative aspect-square w-full overflow-hidden rounded-2xl bg-black"
                                onDoubleClick={toggleModalZoom}
                                onPointerDown={onPointerDown}
                                onPointerMove={onPointerMove}
                                onPointerUp={onPointerUp}
                                onPointerCancel={onPointerUp}
                            >
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        transform: `translate(${pan.x}px, ${pan.y}px) scale(${isModalZoomed ? 2 : 1
                                            })`,
                                        transformOrigin: "center",
                                        transition: dragRef.current.dragging
                                            ? "none"
                                            : "transform 180ms ease",
                                        cursor: isModalZoomed ? "grab" : "default",
                                    }}
                                >
                                    <Image
                                        src={activeSrc}
                                        alt={`${name} — zoomed`}
                                        fill
                                        sizes="100vw"
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            <p className="mt-3 text-center text-xs text-white/70">
                                Tip: double-click/double-tap to zoom. When zoomed, drag to pan.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
