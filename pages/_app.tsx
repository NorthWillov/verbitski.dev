import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "../styles/index.css";
import { useEffect, useState } from "react";
import LoadingPage from "../components/loading-page";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isFaded, setIsFaded] = useState(false);

  useEffect(() => {
    window.onload = () => {
      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => {
          setIsFaded(true);
        }, 1000);
      }, 1000);
    };
  }, []);

  return (
    <ThemeProvider attribute="class">
      <LoadingPage isLoading={isLoading} isFaded={isFaded} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
