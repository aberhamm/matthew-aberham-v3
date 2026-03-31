import { notFound } from 'next/navigation';
import { allProjects } from 'contentlayer/generated';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { MDXContent } from '@/components/mdx-content';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-5 py-20 sm:px-10">
      <Link
        href="/"
        className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>

      <article>
        <h1 className="mb-4 text-3xl font-bold">{project.title}</h1>
        <div className="mb-8 flex flex-wrap gap-1.5">
          {project.technologies?.map((tech) => (
            <span
              key={tech}
              className="bg-muted text-muted-foreground rounded-md px-1.5 py-0.5 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        <MDXContent code={project.body.code} />
      </article>
    </div>
  );
}
