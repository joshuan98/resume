"use client";

import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import React from "react";
import RowCard from "./RowCard";
import type { ContentRow, ContentRowItem } from "@/types";

type ContentRowProps = {
  row: ContentRow;
  scrollState: {
    canScrollLeft: boolean;
    canScrollRight: boolean;
  };
  rowRef: (el: HTMLDivElement | null) => void;
  onScroll: () => void;
  onScrollClick: (direction: "left" | "right") => void;
  onItemClick: (item: ContentRowItem) => void;
};

const ContentRow: React.FC<ContentRowProps> = ({
  row,
  scrollState,
  rowRef,
  onScroll,
  onScrollClick,
  onItemClick,
}) => {
  return (
    <article className="space-y-6">
      <div className="flex items-end justify-between">
        <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {row.title}
        </h3>
      </div>
      <div className="relative">
        {scrollState.canScrollLeft && (
          <button
            type="button"
            onClick={() => onScrollClick("left")}
            className="absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white shadow-lg transition hover:bg-black/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:flex"
            aria-label={`Scroll ${row.title} left`}
          >
            <IoChevronBack className="h-6 w-6" />
          </button>
        )}

        {scrollState.canScrollRight && (
          <button
            type="button"
            onClick={() => onScrollClick("right")}
            className="absolute right-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white shadow-lg transition hover:bg-black/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:flex"
            aria-label={`Scroll ${row.title} right`}
          >
            <IoChevronForward className="h-6 w-6" />
          </button>
        )}

        <div
          ref={rowRef}
          onScroll={onScroll}
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
              <RowCard
                key={`${row.title}-${item.title}`}
                item={item}
                rowTitle={row.title}
                interactive={interactive || false}
                onClick={() => interactive && onItemClick(item)}
              />
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default ContentRow;
