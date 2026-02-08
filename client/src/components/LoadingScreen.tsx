"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const LOADING_SHOWN_KEY = "loadingShown";

export const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      sessionStorage.getItem(LOADING_SHOWN_KEY)
    )
      return;

    setIsLoading(true);
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 15;
        if (next >= 100) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem(LOADING_SHOWN_KEY, "true");
          }, 500);
          return 100;
        }
        return next;
      });
    }, 100);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[13px] text-foreground/70">LOADING...</p>
              <p className="mt-2 text-[48px] font-medium tabular-nums">
                {Math.min(100, Math.floor(progress))}%
              </p>
            </motion.div>
            <motion.div
              className="mx-auto mt-8 h-px w-48 bg-border"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2 }}
              style={{ originX: 0 }}
            >
              <motion.div
                className="h-full bg-foreground"
                style={{ width: `${Math.min(100, progress)}%` }}
                transition={{ duration: 0.1 }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
