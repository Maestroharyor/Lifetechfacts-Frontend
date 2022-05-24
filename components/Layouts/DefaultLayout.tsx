import React, { useEffect } from "react";
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
import SidebarSocial from "../Partials/SidebarSocial";

type Props = {
  title: string;
  desc: string;
  children: JSX.Element;
};

const DefaultLayout = (props: Props) => {
  const router = useRouter();

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
        {!router.query.slug && <SidebarSocial />}
      </div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
