"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { OrganismsHeroSection } from "@/components/organisms/organisms-hero-section";

export const BrainsHeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <OrganismsHeroSection containerRef={containerRef} y={y} opacity={opacity} />
  );
};
