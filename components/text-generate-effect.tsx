'use client';
import { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'motion/react';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type ChunkBy = 'word' | { words: number } | 'sentence' | 'comma';

export const TextGenerateEffect = ({
  words,
  children,
  className,
  filter = true,
  duration = 0.5,
  delay = 0,
  chunkBy = 'word',
}: {
  words?: string;
  children?: ReactNode;
  className?: string;
  filter?: boolean;
  duration?: number;
  delay?: number;
  chunkBy?: ChunkBy;
}) => {
  const [scope, animate] = useAnimate();

  const getChunks = (text: string) => {
    if (chunkBy === 'word') {
      return text.split(' ');
    } else if (chunkBy === 'sentence') {
      // Split by sentence endings (.!?) but keep the punctuation with the sentence
      return text.match(/[^.!?]+[.!?]+/g) || [text];
    } else if (chunkBy === 'comma') {
      // Split by commas and preserve the comma and space
      return text
        .split(/,\s*/)
        .map((chunk, i, arr) => (i < arr.length - 1 ? chunk + ', ' : chunk));
    } else if (typeof chunkBy === 'object' && 'words' in chunkBy) {
      const words = text.split(' ');
      const chunks = [];
      for (let i = 0; i < words.length; i += chunkBy.words) {
        chunks.push(words.slice(i, i + chunkBy.words).join(' '));
      }
      return chunks;
    }
    return [text];
  };

  useEffect(() => {
    if (children) {
      // Animate the entire block
      animate(
        scope.current,
        {
          opacity: 1,
          filter: filter ? 'blur(0px)' : 'none',
        },
        {
          duration,
          delay,
        }
      );
    } else if (words) {
      // Animate word chunks
      const chunks = getChunks(words);
      const staggerDelay = duration / (chunks.length || 1);

      animate(
        'span',
        {
          opacity: 1,
          filter: filter ? 'blur(0px)' : 'none',
        },
        {
          duration: staggerDelay,
          delay: stagger(staggerDelay, { startDelay: delay }),
        }
      );
    }
  }, [scope.current, duration, delay, filter, animate, words, children]);

  if (children) {
    return (
      <motion.div
        ref={scope}
        className={cn('opacity-0', className)}
        style={{
          filter: filter ? 'blur(10px)' : 'none',
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.span ref={scope}>
      {words &&
        getChunks(words).map((chunk, idx) => (
          <motion.span
            key={chunk + idx}
            className={cn('opacity-0 dark:text-white', className)}
            style={{
              filter: filter ? 'blur(10px)' : 'none',
            }}
          >
            {chunk}
            {/* Add space after chunk unless it's the last one or ends with punctuation */}
            {idx < getChunks(words).length - 1 &&
              !/[.!?]$/.test(chunk) &&
              !chunk.endsWith(', ') &&
              ' '}
          </motion.span>
        ))}
    </motion.span>
  );
};
