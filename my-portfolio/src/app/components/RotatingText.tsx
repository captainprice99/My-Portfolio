"use client";

import { useEffect, useRef, useState } from "react";

export default function RotatingText({
  items,
  interval = 2000,
  className = ""
}: {
  items: string[];
  interval?: number;
  className?: string;
}) {
  // Typewriter state
  const [index, setIndex] = useState(0); // which word
  const [display, setDisplay] = useState(""); // visible substring
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  // Speeds (ms)
  const typeSpeed = 70; // typing per character
  const deleteSpeed = 45; // deleting per character
  const endPause = interval; // pause when a word finishes typing
  const startPause = 500; // small pause before typing the next word

  useEffect(() => {
    if (!items || items.length === 0) return;

    const current = items[index % items.length];
    const isComplete = display === current;
    const isCleared = display.length === 0;

    let delay = typeSpeed;

    if (isDeleting) {
      // deleting
      delay = deleteSpeed;
      if (!isCleared) {
        timeoutRef.current = window.setTimeout(() => {
          setDisplay((d) => d.slice(0, -1));
        }, delay);
      } else {
        // move to next word after deletion
        timeoutRef.current = window.setTimeout(() => {
          setIsDeleting(false);
          setIndex((i) => (i + 1) % items.length);
        }, startPause);
      }
    } else {
      // typing
      if (!isComplete) {
        timeoutRef.current = window.setTimeout(() => {
          setDisplay(current.slice(0, display.length + 1));
        }, delay);
      } else {
        // once full word is typed, pause, then start deleting
        timeoutRef.current = window.setTimeout(() => {
          setIsDeleting(true);
        }, endPause);
      }
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [display, isDeleting, index, items, interval]);

  if (!items || items.length === 0) return null;

  return (
    <span className={className} aria-live="polite">
      <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
        {display}
        <span className="ml-0.5 inline-block w-[1px] h-[1em] align-[-0.15em] bg-pink-300 animate-pulse" aria-hidden>
          
        </span>
      </span>
    </span>
  );
}
