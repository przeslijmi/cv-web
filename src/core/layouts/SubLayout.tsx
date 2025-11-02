
import Layout from '@core/layouts/Layout';

interface Props {
  title: string;
  children: React.ReactNode;
  contact?: boolean;
}

export default function SubLayout({
  title,
  children,
  contact = true,
}: Props) {

  return (
    <Layout contact={contact}>
      <div className="max-w-5xl mx-auto py-12 px-4 space-y-12">
        <h1 className="text-4xl text-gray-700 dark:text-gray-300">{title}</h1>
        {children}
      </div>
    </Layout>
  );
}
