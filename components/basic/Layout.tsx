import { useEffect, useState } from "react";
import { ContentContainer } from "../styledComponents/ContentContainer";
import router from "next/router";
import { Header } from "./Header";
import { useRecoilValue } from "recoil";
import { navIsOpen } from "../../atoms/navIsOpen";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const isOpen = useRecoilValue(navIsOpen);
  const [onIndex, setOnIndex] = useState(false);

  useEffect(() => {
    if (
      router.pathname === "/" ||
      (router.pathname === "/contact" && onIndex === false)
    ) {
      setOnIndex(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ContentContainer isOnIndex={onIndex} isOpen={isOpen}>
      <Header />
      {children}
    </ContentContainer>
  );
};
