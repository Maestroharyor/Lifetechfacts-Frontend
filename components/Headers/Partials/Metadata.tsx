import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

type Props = {
  title?: string;
  metadescription?: string;
  imageUrl?: string;
};

const Metadata = ({ title, metadescription, imageUrl }: Props) => {
  const router = useRouter();
  let titleView, description, previewImage;
  if (title) {
    titleView = `${title} | ${process.env.title}`;
  } else {
    titleView = `${process.env.title}`;
  }

  if (metadescription) {
    description = metadescription;
  } else {
    description = process.env.titleDescription;
  }

  previewImage = imageUrl ? imageUrl : "/img/general/Life Tech Facts Cover.jpg";
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maxiumum-scale=1"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content={`${description}`} />
      <title>{titleView}</title>
      {/* Twitter */}
      <meta name="twitter:card" content="summary" key="twcard" />
      <meta name="twitter:creator" content={"maestroharyor"} key="twhandle" />

      {/* Open Graph */}
      <meta property="og:url" content={router.pathname} key="ogurl" />
      <meta property="og:image" content={previewImage} key="ogimage" />
      <meta
        property="og:site_name"
        content={"Lifetechfacts Mentorship Program"}
        key="ogsitename"
      />
      <meta property="og:title" content={titleView} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      <link rel="icon" href="/img/logo/favicon.png" />
    </Head>
  );
};

export default Metadata;
