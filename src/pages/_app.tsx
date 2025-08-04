import type { AppProps } from "next/app";
import "../index.css";
import { LanguageProvider } from "../hooks/use-language";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Component {...pageProps} />
        <Toaster />
      </LanguageProvider>
    </QueryClientProvider>
  );
}
