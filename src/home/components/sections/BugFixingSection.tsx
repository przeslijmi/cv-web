import HomeSection from '@home/components/HomeSection';
import { TrendingUp } from 'lucide-react';

interface Props {}

export default function BugFixingSection({}: Props) {

  return (
    <HomeSection
      className="dark:bg-gray-800 bg-white"
      icon={TrendingUp}
      iconClass="dark:text-blue-400 text-blue-600"
      title="NPS & Bug Fixing"
      titleClass="dark:text-gray-100 text-gray-900"
      children={
        <div className="p-10 rounded-2xl border-2 mb-8 dark:bg-gradient-to-br dark:from-blue-900 dark:to-cyan-900 dark:border-blue-700 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
          <p className="text-xl leading-relaxed mb-6 dark:text-gray-300 text-gray-700">
            There's a direct correlation between bug-free software and customer satisfaction. Every bug fixed is a step toward a better user experience and a higher NPS score. I don't just see bugs as technical issues; I see them as opportunities to improve the product and delight users.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 dark:text-blue-400 text-blue-600">Fewer Bugs</div>
              <div className="text-sm dark:text-gray-400 text-gray-600">Happier Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 dark:text-orange-400 text-orange-600">Higher NPS</div>
              <div className="text-sm dark:text-gray-400 text-gray-600">Better Retention</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 dark:text-cyan-400 text-cyan-600">More Trust</div>
              <div className="text-sm dark:text-gray-400 text-gray-600">Brand Loyalty</div>
            </div>
          </div>
        </div>
      }
    />
  );
}
