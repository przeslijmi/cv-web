import { LucideIcon } from 'lucide-react';

interface Props {
  className: string;
  title: string;
  titleClass: string;
  children: React.ReactNode;
  wider?: boolean;
  id?: string;
  text?: string;
  textClass?: string;
  icon?: LucideIcon;
  iconClass?: string;
}

export default function HomeSection({
  className,
  title,
  titleClass,
  children,
  wider,
  id,
  text,
  textClass,
  icon,
  iconClass,
}: Props) {
  const Icon = icon ? icon : undefined;

  return (
    <section id={id} className={`py-20 px-4 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {Icon && (<div className="flex items-center justify-center mb-8">
          <Icon className={`w-16 h-16 ${iconClass}`} />
        </div>)}
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-8 ${titleClass}`}>
          {title}
        </h2>
        <div className={`mx-auto ${wider ? 'max-w-5xl' : 'max-w-4xl'}`}>

          {text && (<p className={`text-lg leading-relaxed text-gray-600 dark:text-gray-300 text-center mb-8 ${textClass}`}>
            {text}
          </p>)}

          {children}
        </div>
      </div>
    </section>
  );
}
