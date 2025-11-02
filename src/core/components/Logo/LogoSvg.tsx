import { useTheme } from '@core/hooks/useTheme';
import { useEffect, useState } from 'react';

interface ColorScheme {
  primary: string; // frames of screens
  secondary: string; // second frames of screens
  accent: string; // heart and chart
  screenBackground: string; // white
};

const darkScheme:ColorScheme = {
  primary: '#62748e',
  secondary: '#0f172b',
  accent: '#1d71db',
  screenBackground: '#1e2939',
};
const lightScheme:ColorScheme = {
  primary: '#1885e2',
  secondary: '#eeeeee',
  accent: '#ea580c',
  screenBackground: 'white',
};

interface Props {
  width?: number;
};

export default function LogoSvg({
  width = 400,
}: Props) {
  const { isDark } = useTheme();
  const [ height, setHeight ] = useState<number>(30);
  const [ colors, setColors ] = useState<ColorScheme>(lightScheme);
  const prop = 299/175;

  useEffect(() => setHeight(width / prop), [ width ]);
  useEffect(() => setColors(isDark() ? darkScheme : lightScheme), [ isDark ]);

  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox={`55 55 299 175`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="80" y="70" width="90" height="160" rx="8" fill={colors.primary} />
        <rect x="86" y="82" width="78" height="126" rx="4" fill={colors.secondary} />
        <circle cx="125" cy="218" r="6" fill={colors.secondary} />

        <rect x="92" y="88" width="66" height="113" rx="2" fill={colors.screenBackground} />

        <path d="M116 110 C116 106 119 104 121 104 C122.5 104 123.5 104.5 125 106 C126.5 104.5 127.5 104 129 104 C131 104 134 106 134 110 C134 114 125 121 125 121 C125 121 116 114 116 110 Z" fill={colors.accent} />
        <path d="M116 140 C116 136 119 134 121 134 C122.5 134 123.5 134.5 125 136 C126.5 134.5 127.5 134 129 134 C131 134 134 136 134 140 C134 144 125 151 125 151 C125 151 116 144 116 140 Z" fill={colors.accent} />
        <path d="M116 170 C116 166 119 164 121 164 C122.5 164 123.5 164.5 125 166 C126.5 164.5 127.5 164 129 164 C131 164 134 166 134 170 C134 174 125 181 125 181 C125 181 116 174 116 170 Z" fill={colors.accent} />

        <rect x="145" y="90" width="140" height="100" rx="6" fill={colors.primary} />
        <rect x="153" y="98" width="124" height="76" rx="3" fill={colors.secondary} />
        <rect x="197" y="190" width="36" height="10" rx="2" fill={colors.primary} />
        <rect x="179" y="200" width="72" height="5" rx="2" fill={colors.primary} />

        <rect x="159" y="104" width="112" height="64" rx="2" fill={colors.screenBackground} />

        <rect x="191" y="141" width="14" height="13" rx="2" fill={colors.accent} />
        <rect x="209" y="130" width="14" height="24" rx="2" fill={colors.accent} />
        <rect x="227" y="119" width="14" height="35" rx="2" fill={colors.accent} />

        <circle cx="60" cy="60" r="5" fill={colors.accent} />
        <circle cx="330" cy="70" r="6" fill={colors.primary} />
        <circle cx="350" cy="220" r="4" fill={colors.accent} />
      </svg>
    </>
  );
}
