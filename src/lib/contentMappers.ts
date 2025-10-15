import type { WorkEntry, ProjectEntry } from "@/types";

type AccentPalette = string[];

export const mapWorkItems = (
  entries: WorkEntry[],
  accents: AccentPalette
) =>
  entries.map((experience, index) => ({
    title: experience.position,
    meta: experience.dateRange,
    accent: accents[index % accents.length],
    imageSrc: experience.image?.src,
    imageAlt: experience.image?.alt,
    details: experience.description,
  }));

export const mapProjectItems = (
  entries: ProjectEntry[],
  accents: AccentPalette,
  filter: (item: ProjectEntry) => boolean
) =>
  entries
    .filter(filter)
    .map((project, index) => ({
      title: project.title,
      meta: project.type ?? "Project",
      accent: accents[index % accents.length],
      imageSrc: project.image?.src,
      imageAlt: project.image?.alt,
      details: project.description,
      links: project.links,
    }));

type WithBullets = {
  title?: string;
  organization?: string;
  role?: string;
  dateRange: string;
  bullets: string[];
  accent: string;
  image?: { src: string; alt: string };
};

export const mapBulletItems = (
  entries: WithBullets[],
  titleBuilder: (entry: WithBullets) => string
) =>
  entries.map((entry) => ({
    title: titleBuilder(entry),
    meta: entry.dateRange,
    accent: entry.accent,
    details: entry.bullets,
    imageSrc: entry.image?.src,
    imageAlt: entry.image?.alt,
  }));

type Category = {
  label: string;
  items: string[];
  accent: string;
  imageSrc?: string;
  imageAlt?: string;
};

export const mapCategoryItems = (categories: Category[]) =>
  categories.map((category) => ({
    title: category.label,
    accent: category.accent,
    details: [category.items.join(", ")],
    imageSrc: category.imageSrc,
    imageAlt: category.imageAlt,
  }));
