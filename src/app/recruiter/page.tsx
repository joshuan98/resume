"use client";

import NetflixProfileLayout, { NetflixRow } from "@/components/NetflixProfileLayout";
import academicsData from "@/data/academics.json";
import projectsData from "@/data/projects.json";
import toolkitIndex from "@/data/skills.json";
import backend from "@/data/skills/backend.json";
import database from "@/data/skills/database.json";
import devops from "@/data/skills/devops.json";
import frontend from "@/data/skills/frontend.json";
import ml from "@/data/skills/ml.json";
import programming from "@/data/skills/programming.json";
import workData from "@/data/work.json";
import { createHero } from "@/lib/hero";
import {
  mapBulletItems,
  mapProjectItems,
  mapWorkItems,
} from "@/lib/contentMappers";
import React from "react";

const hero = createHero({
  cta: "Download résumé",
  ctaHref: "/assets/Resume_Joshua Nee.pdf",
  secondaryCta: "View LinkedIn",
  secondaryCtaHref: "https://www.linkedin.com/in/joshua-nee",
  background:
    "radial-gradient(circle at 20% 18%, rgba(96,165,250,0.55), transparent 60%), radial-gradient(circle at 76% 16%, rgba(37,99,235,0.4), transparent 55%), linear-gradient(135deg, rgba(6,18,46,0.96), rgba(10,25,60,0.98))",
});

const workAccents = [
  "linear-gradient(135deg, rgba(59,130,246,0.82), rgba(21,62,128,0.94))",
  "linear-gradient(135deg, rgba(29,78,216,0.78), rgba(14,37,110,0.9))",
  "linear-gradient(135deg, rgba(125,211,252,0.78), rgba(18,42,92,0.9))",
  "linear-gradient(135deg, rgba(37,99,235,0.75), rgba(16,46,112,0.92))",
  "linear-gradient(135deg, rgba(56,189,248,0.8), rgba(14,42,94,0.9))",
  "linear-gradient(135deg, rgba(30,64,175,0.78), rgba(12,30,72,0.92))",
];

const projectAccents = [
  "linear-gradient(135deg, rgba(56,189,248,0.78), rgba(12,42,82,0.92))",
  "linear-gradient(135deg, rgba(37,99,235,0.72), rgba(10,32,84,0.9))",
  "linear-gradient(135deg, rgba(96,165,250,0.8), rgba(14,40,84,0.92))",
  "linear-gradient(135deg, rgba(30,64,175,0.8), rgba(12,28,68,0.92))",
];

const academicsAccents = [
  "linear-gradient(135deg, rgba(14,116,233,0.82), rgba(15,23,42,0.95))",
  "linear-gradient(135deg, rgba(37,99,235,0.78), rgba(17,24,39,0.92))",
  "linear-gradient(135deg, rgba(59,130,246,0.8), rgba(17,24,49,0.94))",
];

const workItems = mapWorkItems(workData.content, workAccents);

const projectItems = mapProjectItems(
  projectsData.content.slice(0, 4),
  projectAccents,
  () => true
);

const academicsEntries = academicsData.content.map((entry, index) => ({
  organization: entry.institution,
  dateRange: entry.dateRange,
  bullets: entry.description.flatMap((item) => {
    if (typeof item === "string") {
      return [item];
    }
    if (
      item &&
      typeof item === "object" &&
      "title" in item &&
      Array.isArray(item.description)
    ) {
      return [`${item.title} ${item.description.join(", ")}`];
    }
    return [];
  }),
  accent: academicsAccents[index % academicsAccents.length],
  image: entry.image,
}));

const academicsItems = mapBulletItems(academicsEntries, (entry) => entry.organization ?? "");

const toolkitAccents = [
  "linear-gradient(135deg, rgba(147,197,253,0.9), rgba(29,78,216,0.95))",
  "linear-gradient(135deg, rgba(191,219,254,0.82), rgba(30,64,175,0.96))",
  "linear-gradient(135deg, rgba(147,197,253,0.8), rgba(37,99,235,0.92))",
  "linear-gradient(135deg, rgba(125,211,252,0.84), rgba(14,70,160,0.94))",
  "linear-gradient(135deg, rgba(96,165,250,0.86), rgba(28,78,216,0.96))",
  "linear-gradient(135deg, rgba(59,130,246,0.85), rgba(22,63,170,0.95))",
];

const toolkitDataMap: Record<string, { skills: { name: string; level: string }[] } & {
  description?: string;
}> = {
  "skills/programming.json": programming,
  "skills/frontend.json": frontend,
  "skills/backend.json": backend,
  "skills/devops.json": devops,
  "skills/database.json": database,
  "skills/ml.json": ml,
};

const toolkitItems = toolkitIndex.sections
  .map((section, index) => {
    const data = toolkitDataMap[section.dataFile];
    if (!data) {
      return null;
    }

    const summary = section.tagline ?? data.description ?? "";

    return {
      title: section.name,
      meta: `${data.skills.length} tools`,
      accent: toolkitAccents[index % toolkitAccents.length],
      details: summary ? [summary] : [],
      skillBars: data.skills,
      imageSrc: section.image?.src,
      imageAlt: section.image?.alt,
    };
  })
  .filter(Boolean) as NetflixRow["items"];

const rows: NetflixRow[] = [
  {
    title: "Experience Spotlight",
    items: workItems,
    withDialog: true,
  },
  {
    title: "Academic Journey",
    items: academicsItems,
    withDialog: true,
  },
  {
    title: "Flagship Projects",
    items: projectItems,
    withDialog: true,
  },
  {
    title: "Toolkit Snapshot",
    items: toolkitItems,
    withDialog: true,
  },
];

const RecruiterPage: React.FC = () => {
  return (
    <NetflixProfileLayout
      heading=""
      subheading=""
      navLabel="Recruiter"
      hero={hero}
      rows={rows}
    />
  );
};

export default RecruiterPage;
