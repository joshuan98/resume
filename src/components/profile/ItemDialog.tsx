"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import React from "react";
import type { ContentRowItem } from "@/types";

type ActiveItem = {
  rowTitle: string;
  item: ContentRowItem;
};

type ItemDialogProps = {
  activeItem: ActiveItem | null;
  barsReady: boolean;
  onClose: () => void;
};

const ItemDialog: React.FC<ItemDialogProps> = ({
  activeItem,
  barsReady,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {activeItem && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
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
              onClick={onClose}
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
                          <div
                            key={`${skill.name}-${skill.level}`}
                            className="space-y-1"
                          >
                            <div className="flex items-center justify-between text-xs uppercase tracking-wide text-neutral-300">
                              <span>{skill.name}</span>
                              <span>{skill.level}</span>
                            </div>
                            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 transition-all duration-700 ease-out"
                                style={{
                                  width: `${(barsReady ? fill : 0) * 100}%`,
                                }}
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
  );
};

export default ItemDialog;
