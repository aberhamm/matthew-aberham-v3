'use client';

import { cn } from '@/lib/utils';
import ComponentWrapper from './component-wrapper';
import { AnimationProps, motion } from 'framer-motion';
import { useState } from 'react';

export default function DynamicInputLabel() {
  const [value, setValue] = useState<string>('');
  const [animate, setAnimate] = useState<'rest' | 'focus'>('rest');

  const variants: Record<string, AnimationProps['variants']> = {
    label: {
      rest: {
        opacity: 1,
        left: 0,
        top: 0,
        color: 'hsl(var(--muted-foreground))',
      },
      focus: {
        opacity: 1,
        left: -10,
        top: -32,
        color: 'hsl(var(--secondary-foreground))',
      },
    },
    placeholder: {
      initial: {
        opacity: 0,
      },
      rest: (value: string) => ({
        opacity: 0,
        transition: {
          duration: value ? 0.05 : 0.15,
        },
      }),
      focus: {
        opacity: 1,
        transition: {
          duration: 0.2,
          delay: 0.05,
        },
      },
    },
  };

  return (
    <ComponentWrapper>
      <div className="relative h-9 w-full max-w-60 text-sm">
        {/* Input */}
        <input
          className={cn(
            'placeholder:text-muted-foreground focus-visible:ring-ring ring-offset-background bg-secondary border-input text-secondary-foreground h-full w-full max-w-60 rounded-xl border pl-2.5 text-sm ring-offset-1 outline-hidden transition-all focus-visible:ring-1 focus-visible:outline-hidden'
          )}
          type="email"
          onFocus={() => setAnimate('focus')}
          onBlur={() => setAnimate('rest')}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        {/* Label & Placeholder */}
        <motion.span
          className="text-muted-foreground pointer-events-none absolute top-0 left-0 flex h-full items-center pl-2.5"
          variants={variants.label}
          animate={animate === 'rest' ? (value ? 'focus' : 'rest') : 'focus'}
          transition={{
            duration: 0.2,
          }}
        >
          Email
        </motion.span>
        <motion.span
          className="text-muted-foreground pointer-events-none absolute top-0 left-0 flex h-full items-center pl-2.5"
          variants={variants.placeholder}
          animate={animate === 'rest' ? 'rest' : value ? 'rest' : 'focus'}
          initial="initial"
          custom={value}
        >
          example@gmail.com
        </motion.span>
      </div>
    </ComponentWrapper>
  );
}
