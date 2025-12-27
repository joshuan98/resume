import type { AccentPalette, ProfileType } from "@/types";

/**
 * Accent color gradients used throughout the application
 * These are organized by theme/profile type for consistency
 */

export const WORK_ACCENTS: Record<
  Exclude<ProfileType, "stalker">,
  AccentPalette
> = {
  developer: [
    "linear-gradient(135deg, rgba(45,197,162,0.82), rgba(12,64,58,0.94))",
    "linear-gradient(135deg, rgba(61,214,174,0.8), rgba(14,59,50,0.92))",
    "linear-gradient(135deg, rgba(38,182,152,0.84), rgba(10,51,44,0.92))",
    "linear-gradient(135deg, rgba(24,138,110,0.82), rgba(6,42,34,0.92))",
    "linear-gradient(135deg, rgba(20,170,140,0.82), rgba(4,38,34,0.92))",
    "linear-gradient(135deg, rgba(15,150,120,0.82), rgba(3,32,29,0.92))",
  ],
  recruiter: [
    "linear-gradient(135deg, rgba(59,130,246,0.82), rgba(21,62,128,0.94))",
    "linear-gradient(135deg, rgba(29,78,216,0.78), rgba(14,37,110,0.9))",
    "linear-gradient(135deg, rgba(125,211,252,0.78), rgba(18,42,92,0.9))",
    "linear-gradient(135deg, rgba(37,99,235,0.75), rgba(16,46,112,0.92))",
    "linear-gradient(135deg, rgba(56,189,248,0.8), rgba(14,42,94,0.9))",
    "linear-gradient(135deg, rgba(30,64,175,0.78), rgba(12,30,72,0.92))",
  ],
} as const;

export const PROJECT_ACCENTS: Record<
  Exclude<ProfileType, "stalker">,
  AccentPalette
> = {
  developer: [
    "linear-gradient(135deg, rgba(66,214,180,0.8), rgba(16,60,50,0.9))",
    "linear-gradient(135deg, rgba(53,189,160,0.8), rgba(13,52,44,0.9))",
    "linear-gradient(135deg, rgba(42,173,148,0.78), rgba(9,46,40,0.9))",
    "linear-gradient(135deg, rgba(28,150,128,0.8), rgba(6,40,34,0.9))",
  ],
  recruiter: [
    "linear-gradient(135deg, rgba(56,189,248,0.78), rgba(12,42,82,0.92))",
    "linear-gradient(135deg, rgba(37,99,235,0.72), rgba(10,32,84,0.9))",
    "linear-gradient(135deg, rgba(96,165,250,0.8), rgba(14,40,84,0.92))",
    "linear-gradient(135deg, rgba(30,64,175,0.8), rgba(12,28,68,0.92))",
  ],
} as const;

export const HACKATHON_ACCENTS: AccentPalette = [
  "linear-gradient(135deg, rgba(102,224,189,0.85), rgba(12,70,60,0.9))",
  "linear-gradient(135deg, rgba(72,206,180,0.82), rgba(18,68,70,0.9))",
  "linear-gradient(135deg, rgba(58,192,160,0.82), rgba(14,56,58,0.92))",
] as const;

export const ACADEMICS_ACCENTS: AccentPalette = [
  "linear-gradient(135deg, rgba(14,116,233,0.82), rgba(15,23,42,0.95))",
  "linear-gradient(135deg, rgba(37,99,235,0.78), rgba(17,24,39,0.92))",
  "linear-gradient(135deg, rgba(59,130,246,0.8), rgba(17,24,49,0.94))",
] as const;

export const TOOLKIT_ACCENTS: AccentPalette = [
  "linear-gradient(135deg, rgba(147,197,253,0.9), rgba(29,78,216,0.95))",
  "linear-gradient(135deg, rgba(191,219,254,0.82), rgba(30,64,175,0.96))",
  "linear-gradient(135deg, rgba(147,197,253,0.8), rgba(37,99,235,0.92))",
  "linear-gradient(135deg, rgba(125,211,252,0.84), rgba(14,70,160,0.94))",
  "linear-gradient(135deg, rgba(96,165,250,0.86), rgba(28,78,216,0.96))",
  "linear-gradient(135deg, rgba(59,130,246,0.85), rgba(22,63,170,0.95))",
] as const;

/**
 * Generates extracurricular accents with incrementing opacity
 */
export const generateExtracurricularAccents = (count: number): string[] => {
  return Array.from(
    { length: count },
    (_, index) =>
      `linear-gradient(135deg, rgba(220,38,38,${
        0.75 + index * 0.03
      }), rgba(70,12,14,0.92))`
  );
};

/**
 * Helper function to get work accents by profile type
 */
export const getWorkAccents = (
  profileType: Exclude<ProfileType, "stalker">
): AccentPalette => WORK_ACCENTS[profileType];

/**
 * Helper function to get project accents by profile type
 */
export const getProjectAccents = (
  profileType: Exclude<ProfileType, "stalker">
): AccentPalette => PROJECT_ACCENTS[profileType];
