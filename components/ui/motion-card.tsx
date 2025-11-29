'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

// Get the type of props that Card accepts
type CardProps = React.ComponentProps<typeof Card>;

export const MotionCard = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    return (
      <motion.div
        whileHover={{ 
          y: -8, // Moves the card up
          scale: 1.02, // Scales it up slightly
          transition: { duration: 0.2, type: "spring", stiffness: 300 } 
        }}
        className="h-full"
      >
        <Card
          ref={ref}
          // Combine your existing classes with a stronger shadow on hover
          className={cn(
            'h-full transition-shadow duration-300 hover:shadow-2xl dark:hover:shadow-emerald-900/20', 
            className
          )}
          {...props}
        />
      </motion.div>
    );
  }
);
MotionCard.displayName = 'MotionCard';