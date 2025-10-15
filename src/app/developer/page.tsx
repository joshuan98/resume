"use client";

import NetflixProfileLayout, { NetflixRow } from "@/components/NetflixProfileLayout";
import projectsData from "@/data/projects.json";
import workData from "@/data/work.json";
import { createHero } from "@/lib/hero";
import { mapProjectItems, mapWorkItems } from "@/lib/contentMappers";
import React from "react";

const hero = createHero({
  cta: "Download résumé",
  ctaHref: "/assets/Resume_Joshua Nee.pdf",
  secondaryCta: "View GitHub",
  secondaryCtaHref: "https://github.com/joshuan98",
  background:
    "radial-gradient(circle at 22% 18%, rgba(66,214,180,0.45), transparent 55%), radial-gradient(circle at 78% 20%, rgba(43,181,153,0.4), transparent 48%), linear-gradient(135deg, rgba(6,24,18,0.96), rgba(12,38,26,0.94))",
});

const workAccents = [
  "linear-gradient(135deg, rgba(45,197,162,0.82), rgba(12,64,58,0.94))",
  "linear-gradient(135deg, rgba(61,214,174,0.8), rgba(14,59,50,0.92))",
  "linear-gradient(135deg, rgba(38,182,152,0.84), rgba(10,51,44,0.92))",
  "linear-gradient(135deg, rgba(24,138,110,0.82), rgba(6,42,34,0.92))",
  "linear-gradient(135deg, rgba(20,170,140,0.82), rgba(4,38,34,0.92))",
  "linear-gradient(135deg, rgba(15,150,120,0.82), rgba(3,32,29,0.92))",
];

const projectAccents = [
  "linear-gradient(135deg, rgba(66,214,180,0.8), rgba(16,60,50,0.9))",
  "linear-gradient(135deg, rgba(53,189,160,0.8), rgba(13,52,44,0.9))",
  "linear-gradient(135deg, rgba(42,173,148,0.78), rgba(9,46,40,0.9))",
  "linear-gradient(135deg, rgba(28,150,128,0.8), rgba(6,40,34,0.9))",
];

const hackathonAccents = [
  "linear-gradient(135deg, rgba(102,224,189,0.85), rgba(12,70,60,0.9))",
  "linear-gradient(135deg, rgba(72,206,180,0.82), rgba(18,68,70,0.9))",
  "linear-gradient(135deg, rgba(58,192,160,0.82), rgba(14,56,58,0.92))",
];

const workItems = mapWorkItems(workData.content, workAccents);

const projectItems = mapProjectItems(
  projectsData.content,
  projectAccents,
  (project) => (project.type ?? "").toLowerCase() !== "hackathon"
);

const hackathonItems = mapProjectItems(
  projectsData.content,
  hackathonAccents,
  (project) => (project.type ?? "").toLowerCase() === "hackathon"
);

const rows: NetflixRow[] = [
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
    <NetflixProfileLayout
      heading=""
      subheading=""
      navLabel="Developer"
      hero={hero}
      rows={rows}
    />
  );
};

export default DeveloperPage;
