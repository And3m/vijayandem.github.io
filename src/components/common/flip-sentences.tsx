"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export function FlipSentences({
    className,
    sentences,
}: {
    className?: string;
    sentences: string[];
}) {
    const [currentSentence, setCurrentSentence] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startAnimation = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
            setCurrentSentence((prev) => (prev + 1) % sentences.length);
        }, 3000); // Increased from 2500 to 3000ms to reduce CPU usage
    }, [sentences.length]);

    useEffect(() => {
        if (sentences.length === 0) return;

        startAnimation();

        const handleVisibilityChange = () => {
            if (document.visibilityState !== "visible" && intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            } else if (document.visibilityState === "visible" && !intervalRef.current) {
                // Only restart if not already running
                startAnimation();
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, [sentences.length, startAnimation]);

    // Don't render anything if no sentences
    if (sentences.length === 0) {
        return null;
    }

    return (
        <div className={cn("relative", className)}>
            <AnimatePresence mode="wait" initial={false}>
                <motion.p
                    key={currentSentence}
                    className={`
                        font-mono text-md text-balance text-muted-foreground select-none inset-0 flex items-center 
                        ${className}
                    `}
                    initial={{
                        y: 8, // Reduced from 12 to 8
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                    }}
                    exit={{
                        y: -8, // Reduced from -12 to -8
                        opacity: 0,
                    }}
                    transition={{
                        duration: 0.3, // Reduced from 0.4 to 0.3 for faster transitions
                        ease: [0.25, 0.1, 0.25, 1],
                    }}
                >
                    {sentences[currentSentence]}
                </motion.p>
            </AnimatePresence>
        </div>
    );
}