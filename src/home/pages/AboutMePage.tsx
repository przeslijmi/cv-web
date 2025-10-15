import Section from '@frame/components/Section';
import SubLayout from '@frame/layouts/SubLayout';

export default function AboutMePage() {

  return (
    <SubLayout title="About Me">

      <Section
        title="My Values"
        className="bg-blue-50 dark:bg-gray-800"
        titleClass="text-blue-900 dark:text-blue-400"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-white dark:bg-gray-700">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Quality Over Speed</h3>
            <p className="text-gray-700 dark:text-gray-300">
              I believe in doing things right the first time. While speed matters, quality code that's maintainable and scalable is always my priority.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-gray-700">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Continuous Learning</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Technology evolves rapidly. I stay current with the latest trends and best practices to deliver modern, efficient solutions.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-gray-700">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">User-Centric Approach</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Every line of code I write serves an end user. I focus on creating experiences that are intuitive, fast, and delightful.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-gray-700">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Team Collaboration</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Great software is built by great teams. I thrive in collaborative environments where ideas are shared and everyone grows together.
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="My Perspective"
        className="bg-cyan-50 dark:bg-gray-800"
        titleClass="text-cyan-900 dark:text-cyan-400"
      >
        <div className="space-y-4">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            With 20 years of experience in software development, I've seen technologies come and go, but the fundamentals remain the same: clean code, solid architecture, and a focus on solving real problems.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I approach every project with curiosity and humility. There's always something new to learn, a better way to solve a problem, or a perspective I haven't considered yet.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            AI tools have revolutionized how we work, but they're tools—not replacements for experience and wisdom. I leverage AI to move faster while ensuring quality and the big picture are never compromised.
          </p>
        </div>
      </Section>

      <Section
        title="Bio"
        className="bg-orange-50 dark:bg-gray-800"
        titleClass="text-orange-900 dark:text-orange-400"
      >
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          I'm a full-stack developer who loves building things that matter. My journey in tech started over 20 years ago, and I've worked on everything from small startups to enterprise applications. I specialize in PHP, Laravel, Vue, React, and React Native, but I'm always exploring new technologies.
        </p>
        <p className="text-lg leading-relaxed mt-4 text-gray-700 dark:text-gray-300">
          When I'm not coding, you'll find me mentoring junior developers, writing technical documentation, or thinking about how to improve user experiences. I believe in giving back to the community that has given me so much.
        </p>
      </Section>

    </SubLayout>
  );
}
