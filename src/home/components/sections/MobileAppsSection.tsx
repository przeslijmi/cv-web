import Section from '@home/components/Section';
import { Smartphone } from 'lucide-react';

interface Props {}

export default function MobileAppsSection({}: Props) {

  return (
    <Section
      className="dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-700 bg-gradient-to-br from-slate-50 to-slate-300 text-white"
      icon={Smartphone}
      iconClass="text-red-800 dark:text-purple-400"
      title="Mobile App Development"
      titleClass="text-red-800 dark:text-purple-400"
      text="Building cross-platform mobile applications with React Native that deliver native performance and user experience."
      textClass="text-gray-600 dark:text-gray-300"
      children={
        <>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/90 dark:bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-slate-300 dark:border-white/10">
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-3 text-red-800 dark:text-purple-400">
                <Smartphone className="w-8 h-8" />
                iOS Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Native iOS experience with React Native, deployed to App Store.</p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>App Store deployment and optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>iOS-specific features and integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>Apple Human Interface Guidelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>Push notifications and background tasks</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/90 dark:bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-slate-300 dark:border-white/10">
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-3 text-red-800 dark:text-purple-400">
                <Smartphone className="w-8 h-8" />
                Android Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Native Android experience with React Native, deployed to Google Play.</p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>Google Play Store deployment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>Android-specific features and permissions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>Material Design implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>Device compatibility optimization</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white/90 dark:bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-slate-300 dark:border-white/10 mt-8">
            <h4 className="text-xl font-bold mb-3 text-center text-red-800 dark:text-purple-400">Why React Native?</h4>
            <p className="text-gray-600 dark:text-gray-300 text-center">Single codebase for both platforms, faster development, easier maintenance, and 90% code reuse between iOS and Android.</p>
          </div>
        </>
      }
    />
  );
}
