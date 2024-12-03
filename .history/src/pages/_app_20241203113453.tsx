import type { AppProps } from "next/app";

// you can extend the theme and add custom colors, font styles, etc.
const colors = {
  greenDark: "#003d2d",
  greenLight: "#2f7d66",
  white: "#ffffff",
  offWhite: "#f8f8f8",
  darkGray: "#333333",
  black: "#000000",
};

const fontWeights = {
  normal: 400,
  medium: 600,
  bold: 800,
};



function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  );
}

export default MyApp;
