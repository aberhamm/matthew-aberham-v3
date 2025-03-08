'use client';

// Inspired by Sam (https://twitter.com/samdape/status/1786077609110946056)
import { cn } from '@/lib/utils';
import { AnimationProps, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import ComponentWrapper from './component-wrapper';
import useMediaQuery from '@/lib/hooks/use-media-query';

const IMAGES = [
  'https://images.unsplash.com/photo-1715117022094-c65019842057?q=80&fm=jpg&w=1080&fit=max',
  'https://images.unsplash.com/photo-1715160441010-7d5050ec67a4?q=80&fm=jpg&w=1080&fit=max',
  'https://images.unsplash.com/photo-1715006020348-a4af9f36b664?q=80&fm=jpg&w=1080&fit=max',
];

const animationVariants: Record<string, AnimationProps['variants']> = {
  folderBack: {
    hover: {
      translateY: '0.5rem',
    },
  },
  folderFrontLeft: {
    hover: {
      skewX: '3deg',
      translateX: '-0.25rem',
      translateY: '2px',
    },
    clicked: {
      skewX: '0deg',
      translateX: '0rem',
      translateY: '0rem',
      transition: {
        delay: 0.15,
      },
    },
  },
  folderFrontRight: {
    hover: {
      skewX: '-3deg',
      translateX: '0.25rem',
      translateY: '2px',
    },
    clicked: {
      skewX: '0deg',
      translateX: '0rem',
      translateY: '0rem',
      transition: {
        delay: 0.15,
      },
    },
  },
  folderContent: {
    hover: {
      translateY: '-1.5rem',
      rotate: '-10deg',
    },
    rest: {
      translateY: '1.5rem',
    },
    clicked: {
      translateY: '0rem',
      scale: 1.4,
    },
  },
  folderContainer: {
    clicked: {
      translateY: '11rem',
      scale: 1.4,
      transition: {
        delay: 0.1,
        type: 'tween',
        ease: 'easeOut',
        duration: 0.25,
      },
    },
    rest: {
      translateY: '0rem',
      scale: 1,
    },
  },
  folderLabel: {
    hover: {
      translateY: '0.15rem',
    },
  },
};

function FolderFrontStrips() {
  return (
    <div className="mb-2 flex h-fit w-full flex-col gap-1 opacity-15">
      <hr className="z-40 h-[2px] w-full border-none bg-white select-none" />
      <hr className="z-40 h-[2px] w-full border-none bg-white select-none" />
    </div>
  );
}

export default function Folder() {
  const [animate, setAnimate] = useState<'clicked' | 'rest' | 'hover'>('rest');
  const { isDesktop } = useMediaQuery();

  return (
    <ComponentWrapper>
      <motion.button
        className="group relative h-24 w-32 cursor-pointer rounded-lg"
        whileHover={animate === 'rest' ? 'hover' : undefined}
        whileFocus={animate === 'rest' ? 'hover' : undefined}
        animate={animate}
        variants={animationVariants.folderContainer}
        onClick={() => {
          if (!isDesktop) {
            if (animate === 'rest') {
              setAnimate('hover');
            } else if (animate === 'hover') {
              setAnimate('clicked');
            } else {
              setAnimate('rest');
            }
          } else {
            setAnimate((prev) => (prev === 'rest' ? 'clicked' : 'rest'));
          }
        }}
      >
        {/* Folder Back */}
        <motion.div
          className="absolute top-2 bottom-0 h-2/3 w-full rounded-lg rounded-tl-none bg-linear-to-b from-[#218BCF] to-[#57ADDB]"
          variants={animationVariants.folderBack}
        />
        {/* Bumb on top */}
        <motion.div
          className="absolute top-0 left-0 h-3 w-12 rounded-tl-lg rounded-tr-lg bg-[#218BCF] [clip-path:polygon(0%_0%,50%_0%,100%_100%,50%_100%,0%_100%);]"
          variants={animationVariants.folderBack}
        />
        {/* Folder Front */}
        <div className="relative z-30 h-full w-full">
          <motion.div
            className="absolute bottom-0 flex h-[calc(90%-0.5rem)] w-3/4 flex-col-reverse overflow-hidden rounded-l-lg bg-linear-to-b from-[#73D7FF] to-[#6BCBF3]"
            variants={animationVariants.folderFrontLeft}
          >
            <FolderFrontStrips />
          </motion.div>
          <motion.div
            className="absolute right-0 bottom-0 flex h-[calc(90%-0.5rem)] w-3/4 flex-col-reverse overflow-hidden rounded-r-lg bg-linear-to-b from-[#73D7FF] to-[#6BCBF3]"
            variants={animationVariants.folderFrontRight}
          >
            <FolderFrontStrips />
          </motion.div>
        </div>

        {/* Shadow */}
        <div className="absolute top-[18px] bottom-0 z-20 w-full rounded-lg bg-none shadow-[rgba(0,0,15,0.4)_0px_-1px_10px_0px] shadow-black/15" />

        {/* Content */}
        <div
          className={cn(
            'absolute bottom-0 z-20 flex h-full w-fit items-start px-5 select-none'
          )}
        >
          {IMAGES.slice(0, 3).map((image, i) => (
            <motion.div
              key={`image-${i}`}
              style={{
                position: 'absolute',
                zIndex: 10 - i,
                width: 55,
                height: 70,
                rotate: `${(i === 0 ? -1 : i) * 2}deg`,
                translateX: `${(i + 1) * 4}px`,
                translateY: '1.3rem',
                scale: 0.5,
              }}
              variants={{
                hover: {
                  rotate: `${(i === 0 ? -1 : i) * 5}deg`,
                  translate: `${(i + 1) * 6}px`,
                  translateY: '-1rem',
                  scale: 1.3,
                },
                clicked: {
                  marginLeft: `15px`,
                  rotate: `${(i === 0 ? -1 : i) * 5}deg`,
                  translateX: `${
                    i % 2 === 0 ? -((i + 2) / 2) * 15 : ((i + 1) / 2) * 15
                  }px`,
                  translateY: `-${10 - i * 2}rem`,
                  transition: {
                    type: 'spring',
                    stiffness: 120,
                    damping: 15,
                    mass: 0.8,
                  },
                  scale: 1.3,
                },
              }}
              transition={{
                type: 'spring',
                stiffness: 125,
                damping: 13,
                mass: 0.8,
              }}
            >
              <Image
                src={image}
                alt="random"
                fill
                style={{ pointerEvents: 'none' }}
              />
            </motion.div>
          ))}
        </div>

        {/* Label */}
        <motion.div
          className="pt-2 text-sm leading-4 font-medium"
          variants={animationVariants.folderLabel}
        >
          Images
          <br />
          <span className="text-muted-foreground text-xs">3 items</span>
        </motion.div>
      </motion.button>
    </ComponentWrapper>
  );
}
