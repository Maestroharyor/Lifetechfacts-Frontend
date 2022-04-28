import { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import { connect, useDispatch } from "react-redux";
import { setDarkModeTheme, setLightModeTheme } from "../../store/theme/action";
import { themeChange, themeOSLoad } from "../../functions/theme";
// import Backtotop from "../Elements/Backtotop";

type Props = {};

const MasterLayout = (props: any) => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    themeChange(props);
  });

  useEffect(() => {
    themeOSLoad(props, dispatch, setDarkModeTheme, setLightModeTheme);
  }, []);
  return (
    <>
      {props.children}
      {/* <Backtotop /> */}

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-4J366QMVGZ"
      ></Script>
      <Script
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

      {/* <Script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-4J366QMVGZ');
</Script> */}
    </>
  );
};

const mapStateToProps = (state: any) => {
  return state;
};

export default connect(mapStateToProps)(MasterLayout);
