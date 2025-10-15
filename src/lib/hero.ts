import aboutData from "@/data/about.json";
import type { NetflixHero } from "@/components/NetflixProfileLayout";

type HeroOverrides = Partial<NetflixHero>;

export const createHero = (overrides: HeroOverrides): NetflixHero => {
  const base: NetflixHero = {
    eyebrow: aboutData.title,
    title: aboutData.description[0],
    typewriterSequence: aboutData.typewriterDescriptions.flatMap((entry) => [
      entry,
      1800,
    ]),
    description: aboutData.description.slice(1).join(" "),
    cta: "",
    ctaHref: undefined,
    secondaryCta: undefined,
    secondaryCtaHref: undefined,
    tertiaryCta: undefined,
    imageSrc: "/assets/photo.jpeg",
    imageAlt: "Joshua Nee",
    imageShadow: true,
    background:
      "radial-gradient(circle at 20% 18%, rgba(96,165,250,0.55), transparent 60%), radial-gradient(circle at 76% 16%, rgba(37,99,235,0.4), transparent 55%), linear-gradient(135deg, rgba(6,18,46,0.96), rgba(10,25,60,0.98))",
  };

  return {
    ...base,
    ...overrides,
  };
};
