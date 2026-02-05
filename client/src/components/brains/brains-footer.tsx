"use client";

import { useCallback } from "react";
import { OrganismsFooter } from "@/components/organisms/organisms-footer";

export const BrainsFooter = () => {
  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return <OrganismsFooter onScrollToTop={handleScrollToTop} />;
};
