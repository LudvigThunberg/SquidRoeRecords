import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { StaticBackgroundContainer } from "../components/basic/StaticBackgroundContainer";

export default function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <RecoilRoot>
      <StaticBackgroundContainer>
        <Component {...pageProps} />
      </StaticBackgroundContainer>
    </RecoilRoot>
  );
}
