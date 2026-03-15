"use client";

import CountUp from "react-countup";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({ end, suffix = "", duration = 2.5 }: AnimatedCounterProps) {
  return (
    <CountUp
      end={end}
      duration={duration}
      suffix={suffix}
      enableScrollSpy
      scrollSpyOnce
    />
  );
}
