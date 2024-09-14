"use client"

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../utils/cn";
import image1 from '../../public/Rectangle 25.jpg';
import image2 from '../../public/Rectangle 25 (1).jpg';
import image3 from '../../public/Rectangle 25 (2).jpg';
import image4 from '../../public/Rectangle 25 (3).jpg';
import image5 from '../../public/Rectangle 25 (4).jpg';
import image6 from '../../public/Rectangle 25 (5).jpg';
import { StaticImageData } from "next/image";

const images = [image1, image2, image3, image4, image5, image6];



export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card image={images[idx % images.length]}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  image,
}: {
  className?: string;
  children: React.ReactNode;
  image: StaticImageData;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl  w-full p-3 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 h-80",
        className
      )}
    >
      <div
        className="image-div"
        style={{
          backgroundImage: `url("${image.src}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height:'60%',

        }}
      ></div>
      <div className="relative z-50">
        <div className="p-1">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-3 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};