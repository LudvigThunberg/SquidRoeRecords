import React from "react";
import { BackgroundBox } from "../styledComponents/BackgroundBox";

type StaticBackgroundContainerProps = {
  children: React.ReactNode;
};

export const StaticBackgroundContainer = ({
  children,
}: StaticBackgroundContainerProps) => {
  return <BackgroundBox>{children}</BackgroundBox>;
};
