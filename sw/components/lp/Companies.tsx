"use client";

import React from "react";
import { MovingLogos } from "@/components/ui/moving-logos";

export function Companies() {
  return (
    <div className="h-fit w-screen rounded-md flex flex-col antialiased opacity-60 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <MovingLogos items={logos} direction="right" speed="slow" />
    </div>
  );
}

const logos = [
  {
    src: "/landingpage/logos/adobe.svg",
    alt: "Adobe",
  },
  {
    src: "/landingpage/logos/github.svg",
    alt: "GitHub",
  },
  {
    src: "/landingpage/logos/microsoft.svg",
    alt: "Microsoft",
  },
  {
    src: "/landingpage/logos/shopify.svg",
    alt: "Shopify",
  },
  {
    src: "/landingpage/logos/slack.svg",
    alt: "Slack",
  },
  {
    src: "/landingpage/logos/stripe.svg",
    alt: "Stripe",
  },
];
