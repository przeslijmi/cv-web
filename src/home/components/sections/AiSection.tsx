import IconedList from '@frame/components/IconedList';
import Section from '@home/components/Section';
import { Brain, Star, Zap } from 'lucide-react';

interface Props {}

export default function AiSection({}: Props) {

  return (
    <Section
      className="bg-white dark:bg-gray-800"
      icon={Brain}
      iconClass="text-blue-600 dark:text-blue-400"
      title="AI: Speed Meets Experience"
      titleClass="text-gray-900 dark:text-gray-100"
      children={
        <div className="p-10 rounded-2xl border-2 mb-8 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 dark:from-slate-700 dark:to-slate-800 dark:border-white/20">
          <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
            AI tools like GitHub Copilot and ChatGPT are revolutionizing software development. I leverage these tools to move faster, but my long years of experience ensures the architecture, security, and scalability are never compromised.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">AI Gives Me Speed</h3>
              <IconedList
                icon={Zap}
                list={[
                  'Rapid prototyping and iteration',
                  'Automated boilerplate generation',
                  'Quick exploration of solutions',
                ]}
                listClass="text-gray-700 dark:text-gray-300"
                iconClass="text-yellow-500 dark:text-yellow-400"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-600 dark:text-cyan-400">Experience Gives Me Quality</h3>
              <IconedList
                icon={Star}
                list={[
                  'Validated architecture decisions',
                  'Security and performance optimization',
                  'Catching edge cases AI might miss',
                ]}
                listClass="text-gray-700 dark:text-gray-300"
                iconClass="text-cyan-500 dark:text-cyan-400"
              />
            </div>
          </div>
        </div>
      }
    />
  );
}
