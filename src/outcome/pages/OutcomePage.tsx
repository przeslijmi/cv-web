import IconedList from '@core/components/IconedList';
import Section from '@core/components/Section';
import SubLayout from '@core/layouts/SubLayout';
import { Target, Zap } from 'lucide-react';

export default function OutcomePage() {

  return (
    <SubLayout title="What I Can Do">

      <Section
        className="bg-gradient-to-r from-gray-900 to-gray-800"
        title="Legacy Code Rewriting"
        titleClass="text-white"
      >
        <p className="text-lg mb-6 text-gray-200">
          Transforming outdated, unmaintainable code into modern, efficient, and scalable solutions.
        </p>
        <IconedList
          listClass="text-white/80"
          list={[
            'Migrate legacy applications (PHP, JS, jQuery or any other custom solution) to modern, scalable frameworks',
            'Refactor monolithic codebases into modular, scalable, testable components',
            'Improve performance, security, and maintainability',
            'Zero downtime deployments and seamless migrations',
          ]}
        />
      </Section>

      <Section
        className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-gray-700 dark:to-gray-800"
        title="Debugging & Bug Fixing"
        titleClass="text-red-600 dark:text-red-400"
      >
        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
          I hunt down bugs with precision and fix them for good. Every bug fixed improves user experience and boosts your NPS.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-white dark:bg-gray-700 text-center">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">Fewer Bugs</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Happier Users</div>
          </div>
          <div className="p-4 rounded-lg bg-white dark:bg-gray-700 text-center">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">Higher NPS</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Better Retention</div>
          </div>
          <div className="p-4 rounded-lg bg-white dark:bg-gray-700 text-center">
            <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">More Trust</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Brand Loyalty</div>
          </div>
        </div>
      </Section>

      <Section
        className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-green-900/80 dark:to-emerald-800/80"
        title="New Creations"
        titleClass="text-cyan-600 dark:text-cyan-400"
      >
        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
          Building modern applications from scratch with the latest technologies and best practices.
        </p>
        <IconedList
          listClass="text-gray-700 dark:text-gray-300"
          list={[
            'Full-stack web applications with React or VUE on frontend and node.js or Laravel (PHP) on backend',
            'Mobile apps with React Native',
            'RESTful APIs and GraphQL backends',
            'Real-time features with WebSockets',
            'Integrations with Stripe (payment services)',
          ]}
        />
      </Section>

      <Section
        className="bg-gradient-to-br from-blue-600 to-cyan-600 dark:from-blue-900 dark:to-cyan-900"
        title="AI-Powered Development"
        titleClass="text-white"
      >
        <p className="text-xl text-blue-50 mb-6">
          AI tools like GitHub Copilot and ChatGPT are game-changers for speed. But my 20 years of experience ensures quality, architecture, and the big picture are never compromised.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white">
            <Zap className="w-8 h-8 mb-3" />
            <h3 className="text-xl font-bold mb-2">AI for Speed</h3>
            <p className="text-blue-50">2-3x faster development, quick prototyping, and automated boilerplate</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white">
            <Target className="w-8 h-8 mb-3" />
            <h3 className="text-xl font-bold mb-2">Experience for Quality</h3>
            <p className="text-blue-50">Validated architecture, security, scalability, and catching edge cases</p>
          </div>
        </div>
      </Section>


    </SubLayout>
  );
}
