/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        mount: "url('/mount.jpg')",
        olx: "url('/olxx.jpg')",
        olx2: "url('/olx2.png')",
        vp: "url('/vpp.jpg')",
        vp2: "url('/vpp2.jpg')",
        ip: "url('/ipp.jpg')",
        ip2: "url('/ipp2.jpg')",
        sp: "url('/sp1.jpg')",
        sp2: "url('/sp2.jpg')",
        nx: "url('/nxx.jpg')",
        nx2: "url('/nxx2.jpg')",
        weather: "url('/weather.jpg')",
        weather2: "url('/weather2.jpg')",
        split: "url('/split.jpg')",
        finance: "url('/f1.jpg')",
        finance2: "url('/f2.jpg')",
      },
    },
  },
  plugins: [],
};
