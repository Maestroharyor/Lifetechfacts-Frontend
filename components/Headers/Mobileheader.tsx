import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import { connect, useDispatch } from "react-redux";
import { setDarkModeTheme, setLightModeTheme } from "../../store/theme/action";
import { menuData } from "../../data/menu";
import {Switch} from "antd";
import {MdWbSunny} from "react-icons/md";
import {FaMoon} from "react-icons/fa";
// import MaterialUISwitch from "./Partials/MaterialUISwitch";

type Props = {};

const MobileHeader = (props: any) => {
  // console.log(props);
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  const [isLight, setIsLight] = useState<boolean>(props.theme.lightMode);

  useEffect(() => {
    setIsLight(props.theme.lightMode);
  }, [props.theme.lightMode]);

  const router = useRouter();
  const dispatch = useDispatch();

  const changeTheme = () => {
    if (props.theme.lightMode) {
      dispatch(setDarkModeTheme());
    } else {
      dispatch(setLightModeTheme());
    }
  };
  return (
    <header className="bg-light dark:bg-dark-background py-2 px-5 flex md:hidden justify-between items-center sticky z-[100] top-0 shadow-sm">
      <Link href="/">
        <a>
          <Image
            src={
              props.theme.lightMode
                ? "/img/logo/Life Tech Facts Logo Light.png"
                : "/img/logo/Life Tech Facts Logo Dark.png"
            }
            alt="Braandly"
            width={133.32}
            height={34.66}
            className="cursor-pointer mt-4"
          />
        </a>
      </Link>

      <div className="flex gap-3 items-center">
      <Switch
        aria-label="Switch Theme Button"
          checkedChildren={<MdWbSunny className="text-white dark:text-dark" />}
          unCheckedChildren={<FaMoon className="text-white dark:text-dark" />}
          defaultChecked={props.theme.lightMode}
          onChange={(checked) => {
            // console.log(checked)
            if (props.theme.lightMode) {
              dispatch(setDarkModeTheme());
            } else {
              dispatch(setLightModeTheme());
            }
          }}
          checked={props.theme.lightMode}
          className="bg-primary dark:bg-warning text-lg"
        />
        <button
          aria-label="Mobile Menu Navigation Button"
          className="text-2xl text-dark dark:text-white hover:text-primary dark:hover:text-warning transition ease-in-out duration-300"
          onClick={() => setShowMobileNav(true)}
        >
          <MdMenu />
        </button>
      </div>

      {showMobileNav && (
        <>
          <div
            className="fixed bg-dark w-full h-full top-0 left-0 opacity-50"
            onClick={() => setShowMobileNav(false)}
          ></div>

          <div className="fixed z-[1000] h-full bg-white top-0 left-0 dark:bg-dark shadow w-[calc(100%-40px)] sm:w-[calc(100%-100px)] text-white flex flex-col gap-4 py-10 px-5">
            <button
              className="text-danger hover:text-danger-hov dark:text-light hover:dark:text-warning absolute right-3 text-2xl top-2 transition duration-300 ease-in-out"
              onClick={() => setShowMobileNav(false)}
            >
              <MdClose />
            </button>
            {menuData.map((menu) => (
              <Link href={menu.link} key={menu.title}>
                <a
                  className={`text-xl sm:text-2xl transition duration-300 ease-in-out  ${
                    router.pathname === menu.link
                      ? "text-primary dark:text-warning"
                      : "text-dark hover:text-primary dark:text-white dark:hover:text-warning"
                  }`}
                >
                  {menu.title}
                </a>
              </Link>
            ))}
            <Link href="/#register" passHref><a className="text-center block px-5 py-2 rounded-full bg-primary hover:bg-primary-hov text-white shadow transition duration-300 ease-in-out text-xl font-bold">Register</a></Link>
          </div>
        </>
      )}
    </header>
  );
};

const mapStateToProps = (state: any) => {
  return state;
};

export default connect(mapStateToProps)(MobileHeader);
