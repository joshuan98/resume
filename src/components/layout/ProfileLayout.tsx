"use client";

import { useDialog, useScrollState, useSkillBars } from "@/hooks/useProfileLayout";
import type { ContentRowItem, ContentRow as ContentRowType, ProfileHero } from "@/types";
import React, { useEffect } from "react";
import ContentRow from "../profile/ContentRow";
import HeroSection from "../profile/HeroSection";
import ItemDialog from "../profile/ItemDialog";
import ProfileNav from "./ProfileNav";

type ActiveItem = {
  rowTitle: string;
  item: ContentRowItem;
};

type ProfileLayoutProps = {
  heading: string;
  subheading: string;
  navLabel?: string;
  hero: ProfileHero;
  rows: ContentRowType[];
};

const ProfileLayout: React.FC<ProfileLayoutProps> = ({
  heading,
  subheading,
  navLabel,
  hero,
  rows,
}) => {
  const { scrollState, rowRefs, updateRowState, scrollRow } = useScrollState();
  const { activeItem, openDialog, closeDialog } = useDialog<ActiveItem>();
  const barsReady = useSkillBars();

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
    <div className="min-h-screen text-white">
      <ProfileNav activeLabel={navLabel ?? heading} />
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

        <HeroSection hero={hero} />

        <section className="space-y-14">
          {rows.map((row) => (
            <ContentRow
              key={row.title}
              row={row}
              scrollState={scrollState[row.title] || { canScrollLeft: false, canScrollRight: false }}
              rowRef={(el) => {
                if (!el) {
                  delete rowRefs.current[row.title];
                  return;
                }
                rowRefs.current[row.title] = el;
                updateRowState(row.title);
              }}
              onScroll={() => updateRowState(row.title)}
              onScrollClick={(direction) => scrollRow(row.title, direction)}
              onItemClick={(item) => openDialog({ rowTitle: row.title, item })}
            />
          ))}
        </section>
      </div>

      <ItemDialog
        activeItem={activeItem}
        barsReady={barsReady}
        onClose={closeDialog}
      />
    </div>
  );
};

export default ProfileLayout;
