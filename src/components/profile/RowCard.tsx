"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import type { ContentRowItem } from "@/types";

type RowCardProps = {
  item: ContentRowItem;
  rowTitle: string;
  interactive: boolean;
  onClick: () => void;
};

const RowCard: React.FC<RowCardProps> = ({
  item,
  rowTitle,
  interactive,
  onClick,
}) => {
  return (
    <motion.div
      key={`${rowTitle}-${item.title}`}
      className="snap-start"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <button
        type="button"
        onClick={onClick}
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
            <h4 className="text-xl font-semibold text-white">{item.title}</h4>
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
};

export default RowCard;
