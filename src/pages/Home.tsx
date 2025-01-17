import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Hello World</h1>
        <Button variant="default">Click Me</Button>
      </motion.div>
    </div>
  );
}
