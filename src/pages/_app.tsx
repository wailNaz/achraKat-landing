import type { AppProps } from "next/app";
import "../index.css";
import { LanguageProvider } from "../hooks/use-language";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}
