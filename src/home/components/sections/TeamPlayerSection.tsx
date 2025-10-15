import Section from '@home/components/Section';
import { Users } from 'lucide-react';

interface Props {}

export default function TeamPlayerSection({}: Props) {

  return (
    <Section
      id="team-player-section"
      className="dark:bg-gradient-to-br dark:from-blue-900 dark:via-cyan-900 dark:to-teal-900 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-500"
      icon={Users}
      iconClass="text-white"
      title="Team Player at Heart"
      titleClass="text-white"
      wider
      children={
        <div className="grid md:grid-cols-2 gap-8 text-white">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-semibold mb-4">Collaboration First</h3>
            <p className="text-lg leading-relaxed text-blue-50">
              I thrive in team environments where ideas flow freely and everyone contributes to building something greater than themselves. Whether it's pair programming, code reviews, or brainstorming sessions, I bring energy and openness to every collaboration.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-semibold mb-4">Communication & Empathy</h3>
            <p className="text-lg leading-relaxed text-blue-50">
              Great software is built by great teams. I value clear communication, active listening, and understanding different perspectives. I adapt my communication style to ensure everyone is on the same page, from developers to stakeholders.
            </p>
          </div>
        </div>
      }
    />
  );
}
