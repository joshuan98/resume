export type ProfileConfig = {
  id: string;
  name: string;
  accent: string;
  symbol: string;
  href: string;
  tagline: string;
};

export const PROFILES: ProfileConfig[] = [
  {
    id: "recruiter",
    name: "Recruiter",
    accent: "from-blue-500/80 via-blue-400/70 to-blue-600/60",
    symbol: "REC",
    href: "/recruiter",
    tagline: "Impact snapshots & hiring-ready context",
  },
  {
    id: "developer",
    name: "Developer",
    accent: "from-teal-400/80 via-emerald-400/70 to-teal-600/60",
    symbol: "DEV",
    href: "/developer",
    tagline: "Architecture notes, repos, and tooling",
  },
  {
    id: "stalker",
    name: "Stalker",
    accent: "from-amber-400/80 via-orange-500/70 to-red-500/60",
    symbol: "STK",
    href: "/stalker",
    tagline: "Backstory, socials, and deep cuts",
  },
];

export const PROFILE_MAP = PROFILES.reduce((acc, profile) => {
  acc[profile.id] = profile;
  return acc;
}, {} as Record<string, ProfileConfig>);
