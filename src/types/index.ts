/**
 * Core type definitions for the portfolio application
 */

export interface ContentRowItem {
  readonly title: string;
  readonly meta?: string;
  readonly badge?: string;
  readonly accent: string;
  readonly imageSrc?: string;
  readonly imageAlt?: string;
  readonly details?: readonly string[];
  readonly links?: readonly { label: string; url: string }[];
  readonly skillBars?: readonly { name: string; level: string }[];
}

export interface ContentRow {
  readonly title: string;
  readonly items: readonly ContentRowItem[];
  readonly withDialog?: boolean;
}

export interface ProfileHero {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly cta: string;
  readonly ctaHref?: string;
  readonly ctaIcon?: string;
  readonly secondaryCta?: readonly { label: string; href: string }[];
  readonly imageSrc?: string;
  readonly imageAlt?: string;
  readonly imageShadow?: boolean;
  readonly typewriterSequence?: readonly (string | number)[];
  readonly badge?: string;
  readonly background: string;
}

export interface WorkEntry {
  readonly position: string;
  readonly dateRange: string;
  readonly description: readonly string[];
  readonly image?: { src: string; alt: string };
}

export interface ProjectEntry {
  readonly title: string;
  readonly type?: string;
  readonly description: readonly string[];
  readonly image?: { src: string; alt: string };
  readonly links?: readonly { label: string; url: string }[];
}

export interface ProfileConfig {
  readonly id: string;
  readonly name: string;
  readonly accent: string;
  readonly symbol: string;
  readonly href: string;
  readonly tagline: string;
}

export type AccentPalette = readonly string[];

export type ProfileType = "developer" | "recruiter" | "stalker";
