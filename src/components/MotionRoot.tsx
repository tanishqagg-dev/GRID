"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initLenis, refreshScroll } from "@/lib/motion";

export default function MotionRoot() {
  const pathname = usePathname();

  useEffect(() => {
    void initLenis();
  }, []);

  useEffect(() => {
    refreshScroll();
  }, [pathname]);

  return null;
}
