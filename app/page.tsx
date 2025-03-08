import Experience from '@/components/experience';
import Project from '@/components/project';
import { Section } from '@/components/section';
import { Experiment } from '@/components/experiment';
import Social from '@/components/social';
import Link from 'next/link';
import { Footer } from '@/components/footer';
import { getProjects, getExperiences, getCrafts } from '@/lib/content';

export default function Home() {
  const projects = getProjects();
  const experiences = getExperiences();
  const crafts = getCrafts();

  return (
    <>
      <div className="mx-auto grid h-full min-h-[100dvh] w-full max-w-(--breakpoint-md) grid-rows-[20px_1fr_20px] items-center justify-items-center p-5 text-sm sm:p-10 md:p-20">
        <header className="flex w-full flex-row flex-wrap items-start justify-between gap-2">
          <Link href="/">
            <h1 className="text-xl font-semibold">Matthew Aberham</h1>
          </Link>
        </header>
        <main className="mt-20 mb-2 flex h-full w-full flex-col gap-12 sm:mb-0">
          {/* About */}
          <p className="space-y-4">
            <span className="relative block">
              I am a Solutions Architect and Full-Stack Engineer specializing in
              AI-powered applications and scalable web platforms.
            </span>

            <span className="block">
              Currently, I work as a Solutions Architect where I focus on
              architecting high-performance applications, optimizing front-end
              experiences, and integrating AI-driven solutions for large-scale
              platforms.
            </span>

            <span className="block">
              Outside of work, I enjoy learning about emerging AI technologies,
              optimizing web performance, and contributing to open-source
              projects.
            </span>
          </p>

          {/* Experience */}
          <Section title="Experience">
            {experiences.map((exp) => (
              <Experience
                key={exp.slug}
                name={exp.company}
                period={{
                  start: new Date(exp.startDate).getFullYear().toString(),
                  end: exp.current
                    ? 'Present'
                    : new Date(exp.endDate!).getFullYear().toString(),
                }}
                description={exp.description}
              />
            ))}
          </Section>

          {/* Projects */}
          <Section title="Projects">
            {projects.map((project) => (
              <Project
                key={project.slug}
                name={project.title}
                description={project.description}
                slug={project.slug}
              />
            ))}
          </Section>

          {/* Experiments */}
          <Section title="">
            <div className="relative mt-2 -ml-2.5 w-full sm:ml-0 md:h-[150px]">
              <div className="flex flex-wrap justify-center gap-4 gap-x-0 -space-x-4 md:absolute md:left-1/2 md:-translate-x-1/2 md:flex-nowrap md:gap-0!">
                {crafts.map((craft, index) => (
                  <Experiment
                    key={craft.slug}
                    index={index}
                    image={`/crafts/${craft.slug}.png`}
                    path={`/crafts/${craft.slug}`}
                    decorative={true}
                  />
                ))}
              </div>
            </div>
          </Section>

          {/* Contact */}
          <Section
            title="Contact"
            className="flex flex-row items-center justify-start gap-2"
          >
            <Social name="Email" url="mailto:contact@matthewaberham.com" />
            <Social name="GitHub" url="https://github.com/aberhamm" />
            <Social
              name="LinkedIn"
              url="https://linkedin.com/in/matthew-aberham"
            />
          </Section>
        </main>
        <Footer />
      </div>
    </>
  );
}
