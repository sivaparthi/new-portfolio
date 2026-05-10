import React, { useEffect, useState } from 'react';

/**
 * Typewriter
 * Types through a list of segments sequentially, preserving per-segment styling.
 *
 * props:
 *   segments: Array<{ text: string, className?: string }>
 *   speed:    ms per character (default 70)
 *   startDelay: ms before typing begins (default 200)
 *   onDone:   optional callback once all segments finish typing
 */
export default function Typewriter({
  segments,
  speed = 70,
  startDelay = 200,
  onDone,
}) {
  const [segIndex, setSegIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [started, setStarted] = useState(false);

  // Honour reduced-motion preference: render the full text immediately.
  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (reduceMotion) return;
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay, reduceMotion]);

  useEffect(() => {
    if (reduceMotion || !started) return;
    if (segIndex >= segments.length) {
      onDone && onDone();
      return;
    }
    const current = segments[segIndex].text;
    if (charCount < current.length) {
      const t = setTimeout(() => setCharCount((c) => c + 1), speed);
      return () => clearTimeout(t);
    }
    // Move to the next segment.
    const t = setTimeout(() => {
      setSegIndex((i) => i + 1);
      setCharCount(0);
    }, speed);
    return () => clearTimeout(t);
  }, [started, charCount, segIndex, segments, speed, onDone, reduceMotion]);

  const done = segIndex >= segments.length;

  return (
    <>
      {segments.map((seg, i) => {
        let visible;
        if (reduceMotion || i < segIndex) visible = seg.text;
        else if (i === segIndex) visible = seg.text.slice(0, charCount);
        else visible = '';
        if (!visible) return null;
        return (
          <span key={i} className={seg.className}>
            {visible}
          </span>
        );
      })}
      <span
        className={`typewriter__caret ${done ? 'typewriter__caret--blink' : ''}`}
        aria-hidden="true"
      />
    </>
  );
}
