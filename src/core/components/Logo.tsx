import LogoSvg from '@core/components/Logo/LogoSvg';

interface Props {
  big?: boolean;
}

export default function Logo({
  big = false,
}: Props) {

  return (
    <button
      className={`
        flex align-middle
        font-bold text-transparent bg-clip-text bg-gradient-to-r transition-all
        from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700
        ${big ? 'text-3xl' : 'text-xl'}
      `}
    >
      <div className="hidden md:block"><LogoSvg width={100} /></div>
      <div className="md:hidden"><LogoSvg width={60} /></div>
      <div className="pl-3 self-center">Karol Nowakowski</div>

    </button>
  );
}
