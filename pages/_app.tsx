import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { StaticBackgroundContainer } from "../components/basic/StaticBackgroundContainer";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const router = useRouter();
  return (
    <RecoilRoot>
      <StaticBackgroundContainer>
        <AnimatePresence mode="wait">
          <motion.div
            key={router.route}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{ duration: 0.3 }}
            variants={{
              initialState: { opacity: 0, x: 60 },
              animateState: { opacity: 1, x: 0 },
              exitState: { opacity: 0 },
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </StaticBackgroundContainer>
    </RecoilRoot>
  );
}
