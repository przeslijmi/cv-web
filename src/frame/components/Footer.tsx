import GetInTouchSection from '@frame/components/Footer/GetInTouchSection';
import LowestFooter from '@frame/components/Footer/LowestFooter';

interface Props {
  contact?: boolean;
}

export default function Footer({
  contact = true,
}: Props) {

  return (
    <>
      {contact && (<GetInTouchSection />)}
      <LowestFooter />
    </>
  );
}
