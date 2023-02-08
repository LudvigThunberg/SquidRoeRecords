import React, { useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { StaticBackgroundContainer } from "../components/basic/StaticBackgroundContainer";
import { AnimatePresence } from "framer-motion";

import { Layout } from "../components/basic/Layout";
import { useRouter } from "next/router";

import * as gtag from "../utils/gtag";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <RecoilRoot>
      <StaticBackgroundContainer>
        <Layout>
          <AnimatePresence mode="popLayout">
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </StaticBackgroundContainer>
    </RecoilRoot>
  );
}
