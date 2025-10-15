
interface Props {
  big?: boolean;
}

export default function Logo({
  big = false,
}: Props) {

  return (
    <button
      className={`
        font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transition-all
        ${big ? 'text-3xl' : 'text-xl'}
      `}
    >
      Karol Nowakowski
    </button>
  );
}
