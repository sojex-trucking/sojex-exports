import type { Config } from "tailwindcss";
export default { content:["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"],theme:{extend:{colors:{navy:"#0B1623",warm:"#F7F7F5",orange:"#FF5A1F",graphite:"#20252B",soft:"#E9ECEF"},fontFamily:{sans:["var(--font-inter)"],display:["var(--font-oswald)"]}}},plugins:[]} satisfies Config;
