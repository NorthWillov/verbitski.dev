import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "../styles/index.css";
import Transition from "../components/transition";
import { useEffect, useState } from "react";
import LoadingPage from "../components/loading-page";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isFaded, setIsFaded] = useState(false);

  useEffect(() => {
    const handler = () => {
      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => {
          setIsFaded(true);
        }, 1000);
      }, 300);
    };

    if (document.readyState === "complete") {
      handler();
    } else {
      window.addEventListener("load", handler);
      return () => removeEventListener("load", handler);
    }
  }, []);

  return (
    <>
      <LoadingPage isLoading={isLoading} isFaded={isFaded} />
      <Transition>
        <Component {...pageProps} />
      </Transition>
    </>
  );
}
