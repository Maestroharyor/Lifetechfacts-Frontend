import { useEffect, useLayoutEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import { connect, useDispatch } from "react-redux";
import { setDarkModeTheme, setLightModeTheme } from "../../store/theme/action";
import { setUserLocation } from "../../store/userLocation/action";
import { themeChange, themeOSLoad } from "../../functions/theme";
import axios from "axios"
// import Backtotop from "../Elements/Backtotop";

type Props = {};

const MasterLayout = (props: any) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const getUserLocation = async () => {
    axios.get("https://extreme-ip-lookup.com/json/?key=A00l3ZIhZ81QUTOcfs9h")
    .then(response => {
      dispatch(setUserLocation(response.data));
    })
    .catch(error => {
      // console.log(error)
    })
  }

  useLayoutEffect(()=> {
    getUserLocation()
  }, [])



  useLayoutEffect(() => {
    themeChange(props);
  });

  useLayoutEffect(() => {
    themeOSLoad(props, dispatch, setDarkModeTheme, setLightModeTheme);
  }, []);
  return (
    <>
      {props.children}
      {/* <Backtotop /> */}

      <Script
        id="google-tagmanager-link"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-4J366QMVGZ"
      ></Script>
      <Script
        id="google-tag-code"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-4J366QMVGZ');
  `,
        }}
      />
      <Script
        id="facebookpixelcode"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '2039385669579451');
          fbq('track', 'PageView');
  `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1164101177701692&ev=PageView&noscript=1"
        />
      </noscript>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return state;
};

export default connect(mapStateToProps)(MasterLayout);
