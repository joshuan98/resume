"use client";

import ProfileLayout from "@/components/layout/ProfileLayout";
import type { ContentRow } from "@/types";
import projectsData from "@/data/professional/projects.json";
import workData from "@/data/professional/work.json";
import { createHero } from "@/lib/hero";
import { mapProjectItems, mapWorkItems } from "@/lib/contentMappers";
import {
  getWorkAccents,
  getProjectAccents,
  HACKATHON_ACCENTS,
} from "@/constants/accentColors";
import { getGitHubUrl } from "@/lib/links";
import React from "react";

const hero = createHero({
  cta: "Download résumé",
  ctaHref: "/assets/Resume_Joshua Nee.pdf",
  secondaryCta: "View GitHub",
  secondaryCtaHref: getGitHubUrl(),
  background:
    "radial-gradient(circle at 22% 18%, rgba(66,214,180,0.45), transparent 55%), radial-gradient(circle at 78% 20%, rgba(43,181,153,0.4), transparent 48%), linear-gradient(135deg, rgba(6,24,18,0.96), rgba(12,38,26,0.94))",
});

const workItems = mapWorkItems(workData.content, getWorkAccents("developer"));

const projectItems = mapProjectItems(
  projectsData.content,
  getProjectAccents("developer"),
  (project) => (project.type ?? "").toLowerCase() !== "hackathon"
);

const hackathonItems = mapProjectItems(
  projectsData.content,
  HACKATHON_ACCENTS,
  (project) => (project.type ?? "").toLowerCase() === "hackathon"
);

const rows: ContentRow[] = [
  {
    title: "Experience Spotlight",
    items: workItems,
    withDialog: true,
  },
  {
    title: "Featured Projects",
    items: projectItems,
    withDialog: true,
  },
  {
    title: "Hackathon Highlights",
    items: hackathonItems,
    withDialog: true,
  },
];

const DeveloperPage: React.FC = () => {
  return (
    <ProfileLayout
      heading=""
      subheading=""
      navLabel="Developer"
      hero={hero}
      rows={rows}
    />
  );
};

export default DeveloperPage;
