import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { navIsOpen } from "../atoms/navIsOpen";
import { Header } from "../components/basic/Header";
import { SocialsLinks } from "../components/basic/SocialsLinks";
import { ContentContainer } from "../components/styledComponents/ContentContainer";
import { Heading } from "../components/styledComponents/Heading";
import { ContactLinkResponse } from "../models/responseModels";
import { getSoc } from "../services/requestService";
import Error from "next/error";
import { ToastContainer } from "react-toastify";
import router from "next/router";

interface HomeProps {
  res: ContactLinkResponse;
  errorCode: number;
}

export default function Home({ errorCode, res }: HomeProps) {
  const isOpen = useRecoilValue(navIsOpen);
  const [onIndex, setOnIndex] = useState(false);

  useEffect(() => {
    if (router.pathname === "/" && onIndex === false) {
      setOnIndex(true);
    }
  }, []);

  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <ContentContainer isOnIndex={onIndex} isOpen={isOpen}>
      <Header />
      <Heading
        isOpen={isOpen}
        css={{
          textAlign: "center",
          fontSize: "50px",
          "@bp1": { fontSize: "80px" },
          "@bp2": { fontSize: "70px" },
          "@bp3": {
            fontSize: "100px",
          },
        }}
      >
        SQUID ROE RECORDS
      </Heading>
      <SocialsLinks data={res} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      />
    </ContentContainer>
  );
}

export async function getServerSideProps() {
  try {
    const res = await getSoc(
      process.env.NEXT_PUBLIC_BASE_URL as string,
      process.env.NEXT_PUBLIC_API_KEY as string
    );

    return { props: { errorCode: NaN, res } };
  } catch (error: any) {
    console.log("ERRORESSS: ", error);
    if (error.response.status) {
      return { props: { errorCode: error.response.status } };
    }
    return { props: { errorCode: 500 } };
  }
}
