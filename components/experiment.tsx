import Image from 'next/image';
import Link from 'next/link';

interface ExperimentProps {
  image: string;
  path: string;
  index: number;
  decorative?: boolean;
}

export const Experiment = ({
  image,
  path,
  index,
  decorative = false,
}: ExperimentProps) => {
  const rotations = [-6, 0, 4, -4, 6, -2, 3];
  const rotation = rotations[index % rotations.length];

  const commonProps = {
    className: `select-none size-28 lg:size-36 bg-background border rounded-lg overflow-hidden ${
      index !== 0
        ? 'shadow-[-4px_0px_6px_rgba(0,0,0,0.04)]'
        : 'shadow-[-4px_0px_6px_rgba(0,0,0,0.04)] sm:shadow-transparent'
    } hover:shadow-[0_6px_12px_rgba(0,0,0,0.08)] transition-all duration-250 [transform:rotate(var(--rotation))] hover:[transform:rotate(var(--rotation))_translateY(-12px)]`,
    style: { '--rotation': `${rotation}deg` } as React.CSSProperties,
  };

  const imageProps = {
    src: image,
    alt: path,
    priority: true,
    fill: true,
    className: 'object-cover object-left',
    draggable: false,
    sizes: '(min-width: 500px) 144px, (min-width: 475px) 128px, 112px',
  };

  if (decorative) {
    return (
      <div {...commonProps} role="presentation">
        <Image {...imageProps} alt="" />
      </div>
    );
  }

  return (
    <Link href={path} {...commonProps}>
      <Image {...imageProps} />
    </Link>
  );
};
