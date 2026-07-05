import { useEffect } from "react";
import { useMotionValue, useSpring, type MotionValue } from "framer-motion";

interface ParallaxValues {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

export function useMouseParallax(strength = 20): ParallaxValues {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const { innerWidth, innerHeight } = window;
      const offsetX = (e.clientX / innerWidth - 0.5) * strength;
      const offsetY = (e.clientY / innerHeight - 0.5) * strength;
      x.set(offsetX);
      y.set(offsetY);
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y, strength]);

  return { x: springX, y: springY };
}
