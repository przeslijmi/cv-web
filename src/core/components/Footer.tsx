import GetInTouchSection from '@core/components/Footer/GetInTouchSection';
import LowestFooter from '@core/components/Footer/LowestFooter';

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
