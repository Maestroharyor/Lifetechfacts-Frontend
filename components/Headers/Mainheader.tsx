import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { connect, useDispatch } from "react-redux";
import { setDarkModeTheme, setLightModeTheme } from "../../store/theme/action";
import { menuData } from "../../data/menu";
import {Switch} from "antd";
import {MdWbSunny} from "react-icons/md";
import {FaMoon} from "react-icons/fa";
// import { setTimeout } from "timers";
// import MaterialUISwitch from "./Partials/MaterialUISwitch";


type Props = {};

const MainHeader = (props: any) => {
  // console.log(props)
  const [isLight, setIsLight] = useState<boolean>(props.theme.lightMode);

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLight(props.theme.lightMode);
  },[props.theme.lightMode])


  return (
    <header className="bg-light dark:bg-dark-background py-2 px-5 hidden md:flex justify-between items-center sticky top-0 z-[100] shadow-sm">
      <Link href="/" passHref>
        <a>
          <Image
            src={props.theme.lightMode ? "/img/logo/Life Tech Facts Logo Light.png" : "/img/logo/Life Tech Facts Logo Dark.png"}
            alt="Braandly"
            width={133.32}
            height={34.66}
            className="cursor-pointer mt-4"
          />
        </a>
      </Link>

      <div className="flex gap-6 items-center">
        <div className="inline-flex items-center gap-5">
          {menuData.map((menu) => (
            <Link href={menu.link} key={menu.title}>
              <a
                className={`text-lg transition duration-300 ease-in-out ${
                  router.pathname === menu.link
                    ? "text-primary dark:text-warning hover:text-primary-hove dark:hover:text-warning-hov"
                    : "hover:text-primary dark:text-white dark:hover:text-warning"
                }`}
              >
                {menu.title}
              </a>
            </Link>
          ))}
          <Link href="/#register" passHref><a className="block px-10 py-2 rounded-full bg-primary hover:bg-primary-hov text-white shadow transition duration-300 ease-in-out font-bold text-xl">Register</a></Link>
        </div>
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
        {/* <MaterialUISwitch
          sx={{ m: 1 }}
          // defaultChecked={isLight}
          checked={isLight}
          // defaultChecked={isLight}
          // lightMode={props.theme.lightMode}
          onChange={() => {
            if (props.theme.lightMode) {
              dispatch(setDarkModeTheme());
            } else {
              dispatch(setLightModeTheme());
            }
          }}
        /> */}
      </div>
    </header>
  );
};

const mapStateToProps = (state: any) => {
  return state;
};

export default connect(mapStateToProps)(MainHeader);
