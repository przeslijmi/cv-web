
interface Props {
  className: string;
  title: string;
  titleClass: string;
  children: React.ReactNode;
}

export default function Section({
  className,
  title,
  titleClass,
  children,
}: Props) {

  return (
    <section className={`p-8 rounded-2xl ${className}`}>
      <h2 className={`text-3xl font-bold mb-6 ${titleClass}`}>{title}</h2>
      {children}
    </section>
  );
}
