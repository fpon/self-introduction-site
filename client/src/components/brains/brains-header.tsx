"use client";

import { usePathname } from "next/navigation";
import { OrganismsHeader } from "@/components/organisms/organisms-header";

export const BrainsHeader = () => {
  const pathname = usePathname();

  return <OrganismsHeader pathname={pathname} />;
};
