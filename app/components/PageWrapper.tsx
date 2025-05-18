'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(true);
  //   const timeout = setTimeout(() => {
  //     setLoading(false);
  //   }, 600); 

  //   return () => clearTimeout(timeout);
  // }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {/* {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6 }}
          className="w-full h-screen flex items-center justify-center"
        >
        </motion.div>
      ) : (
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full"
        >
          {children}
        </motion.div>
      )} */}
      
      <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full"
        >
          {children}
        </motion.div>
    </AnimatePresence>
  );
}
