"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SplitTextProps {
  text: string;
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: 'chars' | 'words' | 'lines';
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  tag = "p",
  text = "",
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    if (!containerRef.current || !text) return;

    const container = containerRef.current;
    elementsRef.current = [];

    // Clear previous content
    container.innerHTML = "";

    // Split text based on splitType
    let splitElements: HTMLElement[] = [];

    if (splitType === "chars") {
      const chars = text.split("");
      chars.forEach((char, index) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char; // Non-breaking space
        span.style.display = "inline-block";
        span.style.opacity = "0";
        container.appendChild(span);
        splitElements.push(span);
      });
    } else if (splitType === "words") {
      const words = text.split(" ");
      words.forEach((word, index) => {
        const span = document.createElement("span");
        span.textContent = word;
        span.style.display = "inline-block";
        span.style.opacity = "0";
        if (index < words.length - 1) {
          span.style.marginRight = "0.25em";
        }
        container.appendChild(span);
        splitElements.push(span);
      });
    } else if (splitType === "lines") {
      const lines = text.split("\n");
      lines.forEach((line, index) => {
        const div = document.createElement("div");
        div.textContent = line;
        div.style.opacity = "0";
        container.appendChild(div);
        splitElements.push(div);
      });
    }

    elementsRef.current = splitElements;

    // Set initial state
    gsap.set(splitElements, from);

    // Create ScrollTrigger animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
      },
      onComplete: onLetterAnimationComplete,
    });

    // Animate elements with stagger
    tl.to(splitElements, {
      ...to,
      duration: duration,
      ease: ease,
      stagger: delay / 1000, // Convert ms to seconds
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, [text, delay, duration, ease, splitType, from, to, threshold, rootMargin, onLetterAnimationComplete]);

  const Tag = (tag as keyof JSX.IntrinsicElements) as any;

  return (
    <Tag
      ref={containerRef as any}
      className={`split-text ${className}`}
      style={{
        textAlign: textAlign,
      }}
    />
  );
};

export default SplitText;