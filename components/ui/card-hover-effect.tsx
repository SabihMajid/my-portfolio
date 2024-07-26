import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface Product {
  text: string;
  Icon: React.ComponentType<any>; // Add <any> to fix the error
}

interface HoverEffectProps {
  products: Product[]; // Rename to `products` to follow convention
  className?: string;
}

const HoverEffect: React.FC<HoverEffectProps> = ({ products, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2 lg:grid-cols-3 py-10",
        className || ""
      )}
    >
      {products.map((product, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-lg"
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
          <div className="rounded-md w-full p-4 overflow-hidden bg-black group-hover:ring-2 ring-green-500 relative z-20 transition-all duration-500 cursor-pointer">
            <div className="py-10 z-50 relative space-y-5">
              <product.Icon className="w-8 h-8 m-auto" />
              <p className="text-2xl font-bold text-center text-gray-300">
                {product.text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HoverEffect;