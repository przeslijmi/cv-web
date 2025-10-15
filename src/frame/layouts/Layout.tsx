import Footer from '@frame/components/Footer';
import Header from '@frame/components/Header';

interface Props {
  children: React.ReactNode;
  contact?: boolean;
}

export default function Layout({
  children,
  contact = true,
}: Props) {

  return (
    <div className={`
      min-h-screen flex flex-col transition-colors duration-300
      bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50
      dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
    `}>
      <Header />

      <main className="flex-grow">
        {children}
      </main>

      <Footer contact={contact} />
    </div>
  );
}
