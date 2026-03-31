import Experience from '@/components/experience';
import Project from '@/components/project';
import { Section } from '@/components/section';
import Social from '@/components/social';
import Link from 'next/link';
import { Footer } from '@/components/footer';
import { getProjects, getExperiences, getPosts } from '@/lib/content';

export default function Home() {
  const projects = getProjects();
  const experiences = getExperiences();
  const posts = getPosts();

  return (
    <>
      <div className="mx-auto grid h-full min-h-[100dvh] w-full max-w-(--breakpoint-md) grid-rows-[20px_1fr_20px] items-center justify-items-center p-5 text-sm sm:p-10 md:p-20">
        <header className="flex w-full flex-row flex-wrap items-start justify-between gap-2">
          <Link href="/">
            <h1 className="text-xl font-semibold">Matthew Aberham</h1>
          </Link>
          <nav>
            <Link
              href="/blog"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Blog
            </Link>
          </nav>
        </header>
        <main className="mt-20 mb-2 flex h-full w-full flex-col gap-12 sm:mb-0">
          {/* About */}
          <p className="space-y-4">
            <span className="relative block">
              Hi, I&apos;m Matt. I&apos;m a Solutions Architect and Full-Stack
              Engineer who has been building for the web since 2013.
            </span>

            <span className="block">
              I specialize in architecting high-performance applications,
              crafting polished front-end experiences, and integrating AI-driven
              solutions for platforms that serve millions of users.
            </span>

            <span className="block">
              The &quot;right&quot; way to solve a problem is constantly
              evolving. There are always new techniques to discover and new
              voices to learn from. Taking pride in my work has committed me to
              the philosophy of life-long learning.
            </span>
          </p>

          {/* Experience */}
          <Section title="Experience">
            {experiences.map((exp) => (
              <Experience
                key={exp.slug}
                name={exp.company}
                role={exp.role}
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

          {/* Blog */}
          <Section title="Blog">
            {posts.length > 0 ? (
              <>
                {posts.slice(0, 3).map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="relative w-fit text-sm font-medium transition-colors after:absolute after:bottom-[2px] after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-accent-pop after:transition-transform after:duration-150 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:text-accent-pop hover:after:origin-bottom-left hover:after:scale-x-100"
                  >
                    {post.title}
                  </Link>
                ))}
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-accent-pop text-sm transition-colors"
                >
                  View all {posts.length}{' '}
                  {posts.length === 1 ? 'article' : 'articles'}
                </Link>
              </>
            ) : (
              <p className="text-muted-foreground">Coming soon.</p>
            )}
          </Section>

          {/* Contact */}
          <Section
            title="Contact"
            className="flex flex-row items-center justify-start gap-4"
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
