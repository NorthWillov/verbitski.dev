import { ReactNode } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useRouter } from "next/router";

type Props = {
  children: ReactNode;
};

const variants: Variants = {
  inactive: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
  in: {
    opacity: 0,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};

const Transition = ({ children }: Props) => {
  const { asPath } = useRouter();

  return (
    <div className="effect-2">
      <AnimatePresence
        onExitComplete={() => window.scrollTo(0, 0)}
        initial={false}
        mode="wait"
      >
        <motion.div
          key={asPath}
          variants={variants}
          initial="in"
          animate="inactive"
          exit="out"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Transition;
