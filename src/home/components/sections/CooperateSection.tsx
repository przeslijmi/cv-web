import IconedList from '@frame/components/IconedList';
import Section from '@home/components/Section';
import { Handshake, Target, Zap } from 'lucide-react';

interface Props {}

export default function CooperateSection({}: Props) {

  return (
    <Section
      className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-gray-700 dark:to-gray-900"
      icon={Handshake}
      iconClass="text-amber-600 dark:text-amber-400"
      title="How We Could Cooperate"
      titleClass="text-gray-900 dark:text-gray-100"
      text="I believe in a flexible cooperation that works for your needs. Whether you need help with a specific challenge or a long-term partnership, I'm here to help you succeed."
      textClass="text-gray-600 dark:text-gray-300"
      wider
      children={
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          <div className="bg-gradient-to-br from-slate-50 to-bg-slate-200 dark:from-gray-700/50 dark:to-slate-500/80 backdrop-blur-sm p-6 rounded-xl border border-amber-400/50 dark:border-gray-700">
            <div className="flex items-center justify-center mb-3">
              <div className="rounded-full bg-amber-400/40 dark:bg-white/40 p-3 inline-flex items-center justify-center text-amber-600 dark:text-white">
                <Zap size={40} />
              </div>
            </div>
            <h4 className="text-xl text-center font-bold mb-5 dark:text-white">Let's Try</h4>
            <p className="text-gray-800 dark:text-white mb-5 leading-6">Start with a single issue or feature. No long-term commitment required. Perfect for testing waters and solving specific challenges.</p>
            <IconedList
              list={[
                'Per-issue or per-feature basis',
                'No formal contracts or commitments',
                'Flexible scope and timeline',
                'Quick onboarding and fast results',
              ]}
              listClass="text-gray-800 dark:text-white"
            />
          </div>
          <div className="bg-gradient-to-br from-blue-700 to-cyan-600 dark:from-gray-700/50 dark:to-slate-500/80 backdrop-blur-sm p-8 rounded-xl border border-white/20 dark:border-gray-700">
            <div className="flex items-center justify-center mb-3">
              <div className="rounded-full bg-white/40 p-3 inline-flex items-center justify-center text-white">
                <Target size={40} />
              </div>
            </div>
            <h4 className="text-xl text-center font-bold mb-5 text-white">Let's Get It All Done</h4>
            <p className="text-blue-50 mb-5 leading-6">Part-time or full-time collbaration for an ongoing projects. Build a lasting partnership and achieve your long-term goals together.</p>
            <IconedList
              list={[
                'Part-time or full-time availability',
                'Long-term strategic partnership',
                'Deep integration with your team',
                'Consistent support and reliability',
              ]}
              listClass="text-blue-50"
            />
          </div>
        </div>
      }
    />
  );
}
