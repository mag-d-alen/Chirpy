import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function SvgPathLoader() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animateLoader = async () => {
      animate(
        [
          [".o", { pathLength: 1.1, pathOffset: 0 }],
          [".o", { pathLength: 0, pathOffset: 0 }],
        ],
        { duration: 2, repeat: Infinity, repeatDelay: 0.6 }
      );
    };
    animateLoader();
  }, []);

  return (
    <svg
      ref={scope}
      width="94.033241mm"
      height="29.361317mm"
      viewBox="0 0 93.033241 29.361316">
      <motion.path
        className="o"
        initial={{ pathLength: 1.1, pathOffset: 1 }}
        style={{ rotate: 90 }}
        d="m 67.214223,14.458425 q 0,-5.2095278 3.73313,-8.9488859 3.71754,-3.739355 8.93457,-3.739355 5.15454,0 8.84083,3.771317 3.7019,3.7713141 3.7019,9.0607469 0,5.321382 -3.71752,9.028772 -3.73315,3.7234 -9.01266,3.7234 -4.67035,0 -8.38787,-3.3079 -4.09238,-3.65944 -4.09238,-9.588095 z"
      />
    </svg>
  );
}
