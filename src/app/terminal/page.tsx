"use client";

import ProfileLayout from "@/components/layout/ProfileLayout";
import { createHero } from "@/lib/hero";
import React from "react";
const hero = createHero({
  cta: "Back",
  ctaHref: "/stalker",
  background:
    "radial-gradient(circle at 20% 18%, rgba(56,189,248,0.2), transparent 60%), radial-gradient(circle at 76% 16%, rgba(99,102,241,0.18), transparent 55%), linear-gradient(135deg, rgba(6,18,46,0.96), rgba(10,25,60,0.98))",
});

const TerminalPage: React.FC = () => {
  return (
    <ProfileLayout
      heading=""
      subheading="Terminal"
      navLabel="Terminal"
      hero={hero}
      rows={[]}
    />
  );
};

export default TerminalPage;
