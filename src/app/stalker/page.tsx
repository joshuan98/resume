"use client";

import NetflixProfileLayout, { NetflixRow } from "@/components/NetflixProfileLayout";
import { createHero } from "@/lib/hero";
import {
  mapBulletItems,
  mapCategoryItems,
} from "@/lib/contentMappers";
import extracurriculars from "@/data/stalker/extracurriculars.json";
import interests from "@/data/stalker/interests.json";
import volunteering from "@/data/stalker/volunteering.json";
import React from "react";

const emojiDataUri = (emoji: string) => {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='18' fill='rgba(255,255,255,0.08)'/><text x='50%' y='58%' dominant-baseline='middle' text-anchor='middle' font-size='60'>${emoji}</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const hero = createHero({
  cta: "LinkedIn",
  ctaHref: "https://www.linkedin.com/in/joshua-nee",
  secondaryCta: "Twitter",
  secondaryCtaHref: "https://x.com/dZhei98",
  tertiaryCta: [{ label: "GitHub", href: "https://github.com/joshuan98" }],
  background:
    "radial-gradient(circle at 15% 18%, rgba(248,113,113,0.45), transparent 55%), radial-gradient(circle at 80% 18%, rgba(220,38,38,0.38), transparent 50%), linear-gradient(135deg, rgba(32,6,10,0.95), rgba(45,8,12,0.92))",
});

const extracurricularItems = mapBulletItems(
  extracurriculars.items,
  (entry) => entry.organization ?? ""
);

const volunteeringItems = mapBulletItems(
  volunteering.items,
  (entry) => `${entry.role ?? ""}${entry.role ? " · " : ""}${entry.organization ?? ""}`
);

const interestCategories = interests.categories.map((category, index) => ({
  label: category.label,
  items: category.items,
  accent: `linear-gradient(135deg, rgba(220,38,38,${0.75 + index * 0.03}), rgba(70,12,14,0.92))`,
  imageSrc: emojiDataUri(category.emoji ?? "✨"),
  imageAlt: `${category.emoji ?? ""} ${category.label}`.trim(),
}));

const interestItems = mapCategoryItems(interestCategories);

const rows: NetflixRow[] = [
  {
    title: extracurriculars.title,
    items: extracurricularItems,
    withDialog: true,
  },
  {
    title: volunteering.title,
    items: volunteeringItems,
    withDialog: true,
  },
  {
    title: interests.title,
    items: interestItems,
    withDialog: true,
  },
];

const StalkerPage: React.FC = () => {
  return (
    <NetflixProfileLayout
      heading=""
      subheading=""
      navLabel="Stalker"
      hero={hero}
      rows={rows}
    />
  );
};

export default StalkerPage;
