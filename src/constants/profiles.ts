import type { ProfileConfig } from "@/types";

export const PROFILES: readonly ProfileConfig[] = [
  {
    id: "recruiter",
    name: "Recruiter",
    accent: "from-blue-500/80 via-blue-400/70 to-blue-600/60",
    symbol: "REC",
    href: "/recruiter",
    tagline: "Hiring-focused impact snapshots & role-fit summaries",
  },
  {
    id: "developer",
    name: "Developer",
    accent: "from-teal-400/80 via-emerald-400/70 to-teal-600/60",
    symbol: "DEV",
    href: "/developer",
    tagline: "Deep technical notes, architecture & repos",
  },
  {
    id: "stalker",
    name: "Stalker",
    accent: "from-amber-400/80 via-orange-500/70 to-red-500/60",
    symbol: "STK",
    href: "/stalker",
    tagline: "Personal backstory, socials & curiosities",
  },
] as const;
