"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { OrganismsAboutSection } from "@/components/organisms/organisms-about-section";

export const BrainsAboutSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return <OrganismsAboutSection containerRef={containerRef} x={x} />;
};
