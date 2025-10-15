"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { TypeAnimation } from "react-type-animation";
import { IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5";
import NetflixNav from "./NetflixNav";

export type NetflixRowItemLink = {
  label: string;
  url: string;
};

export type NetflixRowItem = {
  title: string;
  meta?: string;
  badge?: string;
  accent: string;
  imageSrc?: string;
  imageAlt?: string;
  details?: string[];
  links?: NetflixRowItemLink[];
  skillBars?: { name: string; level: string }[];
};

export type NetflixRow = {
  title: string;
  items: NetflixRowItem[];
  withDialog?: boolean;
};

export type NetflixHero = {
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  ctaHref?: string;
  secondaryCta?: string;
  secondaryCtaHref?: string;
  tertiaryCta?: { label: string; href: string }[];
  imageSrc?: string;
  imageAlt?: string;
  imageShadow?: boolean;
  typewriterSequence?: (string | number)[];
  badge?: string;
  background: string;
};

type NetflixProfileLayoutProps = {
  heading: string;
  subheading: string;
  navLabel?: string;
  hero: NetflixHero;
  rows: NetflixRow[];
};

type ActiveItem = {
  rowTitle: string;
  item: NetflixRowItem;
};

const NetflixProfileLayout: React.FC<NetflixProfileLayoutProps> = ({
  heading,
  subheading,
  navLabel,
  hero,
  rows,
}) => {
  const [activeItem, setActiveItem] = useState<ActiveItem | null>(null);
  const [barsReady, setBarsReady] = useState(false);
  const [scrollState, setScrollState] = useState<
    Record<string, { canScrollLeft: boolean; canScrollRight: boolean }>
  >({});
  const rowRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const closeDialog = useCallback(() => setActiveItem(null), []);

  useEffect(() => {
    setBarsReady(true);
  }, []);

  const updateRowState = useCallback(
    (title: string) => {
      const el = rowRefs.current[title];
      if (!el) {
        return;
      }

      const { scrollLeft, scrollWidth, clientWidth } = el;
      const canScrollLeft = scrollLeft > 8;
      const canScrollRight = scrollLeft + clientWidth < scrollWidth - 8;

      setScrollState((prev) => {
        const prevState = prev[title];
        if (
          prevState &&
          prevState.canScrollLeft === canScrollLeft &&
          prevState.canScrollRight === canScrollRight
        ) {
          return prev;
        }

        return {
          ...prev,
          [title]: { canScrollLeft, canScrollRight },
        };
      });
    },
    []
  );

  const scrollRow = useCallback((title: string, direction: "left" | "right") => {
    const el = rowRefs.current[title];
    if (!el) {
      return;
    }

    const distance = Math.max(el.clientWidth * 0.85, 320);
    const delta = direction === "left" ? -distance : distance;
    el.scrollBy({ left: delta, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (!activeItem) {
      return;
    }

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeDialog();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeItem, closeDialog]);

  const isDialogOpen = useMemo(() => Boolean(activeItem), [activeItem]);

  useEffect(() => {
    if (isDialogOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isDialogOpen]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      rows.forEach((row) => updateRowState(row.title));
    });
    return () => cancelAnimationFrame(frame);
  }, [rows, updateRowState]);

  useEffect(() => {
    const handleResize = () =>
      rows.forEach((row) => updateRowState(row.title));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [rows, updateRowState]);

  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <NetflixNav activeLabel={navLabel ?? heading} />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-16 pt-24">
        {heading || subheading ? (
          <header className="space-y-3">
            {heading && (
              <p className="text-sm uppercase tracking-[0.5rem] text-red-500/80">
                {heading}
              </p>
            )}
            {subheading && (
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {subheading}
              </h1>
            )}
          </header>
        ) : null}

        <section className="relative overflow-hidden rounded-3xl border border-white/5 bg-black/40">
          <div
            className="absolute inset-0 origin-center scale-100 blur-sm"
            style={{ background: hero.background }}
            aria-hidden
          />
          {hero.imageSrc && (
            <>
              <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
                <div className="relative flex h-full w-full justify-end">
                  <Image
                    src={hero.imageSrc}
                    alt={hero.imageAlt ?? "Profile"}
                    height={720}
                    width={540}
                    className={`h-full w-auto object-contain object-right ${hero.imageShadow ? "opacity-95" : ""}`}
                    priority
                    style={{
                      maskImage:
                        "linear-gradient(95deg, rgba(0,0,0,0) 18%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0) 92%)",
                      WebkitMaskImage:
                        "linear-gradient(95deg, rgba(0,0,0,0) 18%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0) 92%)",
                    }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-black/12 to-black/28" />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/62 via-black/48 to-black/36" aria-hidden />
            </>
          )}
          <div className="relative flex flex-col gap-6 rounded-3xl bg-gradient-to-b from-black/70 via-black/30 to-black/85 px-8 py-12 sm:px-12 sm:py-16">
            <div className="flex flex-col gap-6 sm:max-w-2xl">
              <div className="flex flex-col gap-4 sm:max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-[0.4rem] text-red-400">
                  {hero.eyebrow}
                </span>
                {Array.isArray(hero.typewriterSequence) && hero.typewriterSequence.length > 0 ? (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl font-bold sm:text-5xl"
                  >
                    <TypeAnimation
                      sequence={hero.typewriterSequence}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                      cursor
                    />
                  </motion.div>
                ) : (
                  <motion.h2
                    className="text-4xl font-bold sm:text-5xl"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    {hero.title}
                  </motion.h2>
                )}
              <motion.p
                className="text-base text-neutral-200 sm:text-lg"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                >
                  {hero.description}
                </motion.p>
              </div>

              <motion.div
                className="flex flex-wrap items-center gap-4"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
              {hero.cta && hero.ctaHref && (
                <a
                  href={hero.ctaHref}
                  target={hero.ctaHref.startsWith("/") ? "_self" : "_blank"}
                  rel={hero.ctaHref.startsWith("/") ? undefined : "noopener noreferrer"}
                  className="rounded bg-white px-6 py-2 text-sm font-semibold text-black transition hover:bg-neutral-200"
                >
                  {hero.cta}
                </a>
              )}
              {hero.secondaryCta && hero.secondaryCtaHref && (
                <a
                  href={hero.secondaryCtaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded border border-white/40 px-6 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
                >
                  {hero.secondaryCta}
                </a>
              )}
              {hero.tertiaryCta?.map((cta) => (
                <a
                  key={cta.href}
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded border border-white/40 px-6 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
                >
                  {cta.label}
                </a>
              ))}
              {hero.badge && (
                <span className="rounded-full border border-white/30 px-4 py-1 text-xs uppercase tracking-wide text-neutral-200">
                  {hero.badge}
                </span>
              )}
            </motion.div>
            </div>

          </div>
        </section>

        <section className="space-y-14">
          {rows.map((row) => (
            <article key={row.title} className="space-y-6">
              <div className="flex items-end justify-between">
                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {row.title}
                </h3>
              </div>
              <div className="relative">
                {scrollState[row.title]?.canScrollLeft && (
                  <button
                    type="button"
                    onClick={() => scrollRow(row.title, "left")}
                    className="absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white shadow-lg transition hover:bg-black/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:flex"
                    aria-label={`Scroll ${row.title} left`}
                  >
                    <IoChevronBack className="h-6 w-6" />
                  </button>
                )}

                {scrollState[row.title]?.canScrollRight && (
                  <button
                    type="button"
                    onClick={() => scrollRow(row.title, "right")}
                    className="absolute right-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white shadow-lg transition hover:bg-black/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:flex"
                    aria-label={`Scroll ${row.title} right`}
                  >
                    <IoChevronForward className="h-6 w-6" />
                  </button>
                )}

                <div
                  ref={(el) => {
                    if (!el) {
                      delete rowRefs.current[row.title];
                      return;
                    }
                    rowRefs.current[row.title] = el;
                    updateRowState(row.title);
                  }}
                  onScroll={() => updateRowState(row.title)}
                  className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
                >
                  {row.items.map((item) => {
                    const interactive =
                      row.withDialog &&
                      Boolean(
                        (item.details && item.details.length > 0) ||
                          (item.links && item.links.length > 0)
                    );

                    return (
                      <motion.div
                        key={`${row.title}-${item.title}`}
                      className="snap-start"
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          interactive &&
                          setActiveItem({ rowTitle: row.title, item })
                        }
                        className={`group relative flex h-48 min-w-[16rem] max-w-[18rem] flex-col overflow-hidden rounded-2xl border border-white/10 text-left shadow-[0_20px_40px_rgba(0,0,0,0.45)] transition-transform duration-300 sm:h-52 sm:min-w-[18rem] sm:max-w-[20rem] ${
                          interactive
                            ? "hover:-translate-y-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
                            : ""
                        }`}
                        style={{ background: item.accent }}
                      >
                        <div className="absolute inset-0">
                          {item.imageSrc ? (
                            <Image
                              src={item.imageSrc}
                              alt={item.imageAlt ?? item.title}
                              fill
                              className="object-cover object-center opacity-90 transition duration-300 group-hover:scale-105"
                              sizes="(max-width: 640px) 16rem, (max-width: 1024px) 18rem, 20rem"
                              style={{ objectPosition: "center" }}
                            />
                          ) : (
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
                          )}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                        <div className="absolute inset-0 flex flex-col justify-end p-4">
                          <div className="space-y-2">
                            <h4 className="text-xl font-semibold text-white">
                              {item.title}
                            </h4>
                            {item.meta && (
                              <span className="text-xs uppercase tracking-wide text-neutral-200">
                                {item.meta}
                              </span>
                            )}
                          </div>
                        </div>
                      </button>
                    </motion.div>
                  );
                  })}
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          onClick={closeDialog}
        >
          <motion.div
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#0f1115]"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
          >
              <button
                type="button"
                onClick={closeDialog}
                className="absolute right-5 top-5 z-10 rounded-full bg-black/60 p-2 text-white transition hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Close dialog"
              >
                <IoClose className="h-5 w-5" />
              </button>

              <div className="grid gap-6 sm:grid-cols-[minmax(0,260px)_1fr]">
                <div className="relative h-64 sm:h-full">
                  <div
                    className="absolute inset-0"
                    style={{ background: activeItem.item.accent }}
                  />
                  {activeItem.item.imageSrc ? (
                    <Image
                      src={activeItem.item.imageSrc}
                      alt={activeItem.item.imageAlt ?? activeItem.item.title}
                      fill
                      className="object-cover object-center opacity-90"
                      sizes="(max-width: 640px) 100vw, 320px"
                      style={{ objectPosition: "center" }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs uppercase tracking-wide text-neutral-200">
                      {activeItem.rowTitle}
                    </span>
                    <h3 className="mt-1 text-2xl font-semibold text-white">
                      {activeItem.item.title}
                    </h3>
                    {activeItem.item.meta && (
                      <p className="text-sm text-neutral-300">
                        {activeItem.item.meta}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-6 px-6 py-8">
                  {activeItem.item.details?.length ? (
                    <div className="space-y-3 text-sm text-neutral-200">
                      {activeItem.item.details.map((detail) => (
                        <p key={detail} className="leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                  ) : null}

                  {activeItem.item.skillBars?.length ? (
                    <div className="space-y-4">
                      <p className="text-xs uppercase tracking-wide text-neutral-400">
                        Proficiency
                      </p>
                      <div className="space-y-3">
                        {activeItem.item.skillBars.map((skill) => {
                          const normalized = skill.level.toLowerCase();
                          const fill =
                            normalized === "proficient"
                              ? 1
                              : normalized === "experienced"
                              ? 0.75
                              : normalized === "intermediate"
                              ? 0.5
                              : 0.35;

                          return (
                            <div key={`${skill.name}-${skill.level}`} className="space-y-1">
                              <div className="flex items-center justify-between text-xs uppercase tracking-wide text-neutral-300">
                                <span>{skill.name}</span>
                                <span>{skill.level}</span>
                              </div>
                              <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                                <div
                                  className="h-full rounded-full bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 transition-all duration-700 ease-out"
                                  style={{ width: `${(barsReady ? fill : 0) * 100}%` }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : null}

                  {activeItem.item.links?.length ? (
                    <div className="space-y-3">
                      <p className="text-xs uppercase tracking-wide text-neutral-400">
                        Links
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {activeItem.item.links.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:border-white/50 hover:bg-white/10"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NetflixProfileLayout;
