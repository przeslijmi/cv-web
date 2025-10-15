import Section from '@home/components/Section';
import { RefreshCw } from 'lucide-react';

function Box({ title, text }: {
  title: string;
  text: string;
}) {
  return (
    <div className="p-6 rounded-xl bg-gray-700 shadow-lg">
      <h3 className="text-lg mb-1 text-cyan-300">{title}</h3>
      <p className="text-gray-300">{text}</p>
    </div>
  );
}

interface Props {}

export default function LegacyCodeSection({}: Props) {

  return (
    <Section
      className="bg-gradient-to-br from-slate-700 to-slate-900"
      icon={RefreshCw}
      iconClass="text-cyan-600"
      title="Legacy Application Rewriting"
      titleClass="text-white"
      text="Got a legacy system that's hard to maintain? I specialize in transforming outdated codebases into modern, efficient applications. Whether it's migrating backend, frontend, API or all of them. Whether it's refactoring monolithic code, spaghetti classes, or modernizing tech stack - I've got you covered."
      textClass="text-white/80"
      children={
        <div className="grid md:grid-cols-2 gap-6">
          <Box
            title="Zero Downtime"
            text="Your users won't notice a thing. The transition happens as seamlessly as possible in the background"
          />
          <Box
            title="Incremental Migrations"
            text="Module by module, feature by feature. Reduce rist and validate as you go."
          />
          <Box
            title="Modern Architecture"
            text="Transfor outdated code into clean, maintainable, and scalable system."
          />
          <Box
            title="Knowledge Transfer"
            text="I document everything and ensure your team can maintain the new system."
          />
        </div>
      }
    />
  );
}
