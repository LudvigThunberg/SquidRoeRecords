import React from "react";
import { BackgroundBox } from "../styledComponents/BackgroundBox";

type StaticBackgroundContainerProps = {
  children: React.ReactNode;
};

export const StaticBackgroundContainer = ({
  children,
}: StaticBackgroundContainerProps) => {
  return (
    <BackgroundBox>
      <BackgroundBox
        css={{
          backgroundColor: "unset",
          backgroundImage: "url(/assets/BackgroundSquidarms.png)",
        }}
      >
        {children}
      </BackgroundBox>
    </BackgroundBox>
  );
};
