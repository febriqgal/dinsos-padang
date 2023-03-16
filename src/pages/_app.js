import "@/styles/globals.css";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import { useSSR } from "@nextui-org/react";

export default function App({ Component, pageProps }) {
  const { isBrowser } = useSSR();
  const theme = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
      colors: {
        primary: "#0C4A6E",
        secondary: "#F9CB80",
        error: "#FCC5D8",
      },
    },
  });
  return (
    isBrowser && (
      <NextUIProvider theme={theme}>
        <Component {...pageProps} />
      </NextUIProvider>
    )
  );
}
