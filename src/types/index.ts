export type ContentRowItemLink = {
  label: string;
  url: string;
};

export type ContentRowItem = {
  title: string;
  meta?: string;
  badge?: string;
  accent: string;
  imageSrc?: string;
  imageAlt?: string;
  details?: string[];
  links?: ContentRowItemLink[];
  skillBars?: { name: string; level: string }[];
};

export type ContentRow = {
  title: string;
  items: ContentRowItem[];
  withDialog?: boolean;
};

export type ProfileHero = {
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

export type WorkEntry = {
  position: string;
  dateRange: string;
  description: string[];
  image: { src: string; alt: string };
};

export type ProjectEntry = {
  title: string;
  type?: string;
  description: string[];
  image?: { src: string; alt: string };
  links?: { label: string; url: string }[];
};
