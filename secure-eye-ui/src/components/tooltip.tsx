"use client";
import React from "react";
import { AnimatedTooltip } from "../../components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Akshat Arora",
    designation: "Full Stack Engineer",
    image: "https://i.ibb.co/vxZSw7P/PXL-20240716-175340590-NIGHT.jpg",
  },
  {
    id: 2,
    name: "Dhananjay Pundir",
    designation: "Full Stack Engineer",
    image: "https://i.ibb.co/2YyqKdw/IMG-1546.jpg",
  },
  {
    id: 3,
    name: "Ishav ",
    designation: "Full Stack Engineer",
    image: "https://i.ibb.co/XJs1cCp/Screenshot-2024-07-31-at-11-07-43-AM.png",
  },
  {
    id: 4,
    name: "Sparsh Gupta",
    designation: "Full Stack Engineer",
    image: "https://i.ibb.co/g6fn1Sv/Untitled-design.jpg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
