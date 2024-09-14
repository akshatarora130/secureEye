"use client";
import React from "react";
import { AnimatedTooltip } from "../../components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
    "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?bg=fff&crop=faces&dpr=1&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
        "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?bg=fff&crop=faces&dpr=1&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
        "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?bg=fff&crop=faces&dpr=1&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
