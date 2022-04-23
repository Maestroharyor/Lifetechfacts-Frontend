import React, { useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
const MainHeader = dynamic(
  () => import("../Headers/Mainheader"),
  // { ssr: false }
)
const Mobileheader = dynamic(
  () => import("../Headers/Mobileheader"),
  // { ssr: false }
)
const Footer = dynamic(
  () => import("../Footers/Footer"),
  // { ssr: false }
)
import Metadata from "../Headers/Partials/Metadata";
import { connect, useDispatch } from "react-redux";

type Props = {
  title: string;
  desc: string;
  children: JSX.Element;
};

const DefaultLayout = (props: Props) => {

  return (
    <>
      <Metadata
        title={props.title}
        metadescription={props.desc}
      />
      <MainHeader />
      <Mobileheader />
      <div className="h-full bg-gray-100 dark:bg-dark dark:text-light">
        {props.children}
      </div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
