import Footer from '@frame/components/Footer';
import Header from '@frame/components/Header';

interface Props {
  children: React.ReactNode;
}

export default function Layout({
  children,
}: Props) {

  return (
    <div>
      <Header />

      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
}
