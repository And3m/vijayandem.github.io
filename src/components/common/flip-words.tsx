"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

export const FlipWords = ({
    word,
    duration = 3000,
    className,
}: {
    word: string;
    duration?: number;
    className?: string;
}) => {
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const startAnimation = useCallback(() => {
        setIsAnimating(true);
    }, []);

    useEffect(() => {
        if (!isAnimating)
            setTimeout(() => {
                startAnimation();
            }, duration);
    }, [isAnimating, duration, startAnimation]);

    return (
        <AnimatePresence
            onExitComplete={() => {
                setIsAnimating(false);
            }}
        >
            <motion.div
                initial={{
                    opacity: 0,
                    y: 10,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                }}
                exit={{
                    opacity: 0,
                    y: -40,
                    x: 40,
                    filter: "blur(8px)",
                    scale: 2,
                    position: "absolute",
                }}
                className={cn(
                    "z-10 inline-block relative text-left text-primary/80 px-2",
                    className
                )}
                key={`flip-${word}`}
            >
                {word.split(" ").map((word, wordIndex) => (
                    <motion.span
                        key={word + wordIndex}
                        initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{
                            delay: wordIndex * 0.05,
                            duration: 0.3,
                        }}
                        className="inline-block whitespace-nowrap"
                    >
                        {word.split("").map((letter, letterIndex) => (
                            <motion.span
                                key={word + letterIndex}
                                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{
                                    delay: wordIndex * 0.05 + letterIndex * 0.01,
                                    duration: 0.2,
                                }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                        <span className="inline-block">&nbsp;</span>
                    </motion.span>
                ))}
            </motion.div>
        </AnimatePresence>
    );
};
