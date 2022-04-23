import Tooltip from '@mui/material/Tooltip';
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";

type Props = {};



function SidebarSocial({}: Props) {
  return (
    <div className="hidden fixed top-[50%] left-0 md:flex flex-col">
        
        <Tooltip placement="right" title={"Follow on Facebook"} arrow className='transition duration-300 ease-in-out'>
        <a
          href="https://www.facebook.com/lifetechfactsofficial"
          target="_blank"
          rel="noreferrer"
          className="social-floating-button flex items-center justify-center text-xl  bg-[#4267B2] hover:bg-primary-hov text-white"
          
        >
          <FaFacebook />
        </a>
        </Tooltip>
        <Tooltip placement="right" title={"Follow on Instagram"} arrow className='transition duration-300 ease-in-out'>
        <a
          href="https://www.instagram.com/lifetechfacts"
          target="_blank"
          rel="noreferrer"
          className="social-floating-button flex items-center justify-center text-xl  text-white bg-gradient-to-r from-[#f09433] to-[#bc1888] hover:bg-gradient-to-r shadow"
          
        >
          <FaInstagram />
        </a>
        </Tooltip>
        <Tooltip placement="right" title={"Join YouTube Community"} arrow className='transition duration-300 ease-in-out'>
        <a
          href="https://www.youtube.com/channel/UC3F9OKsRWvnnaMJ2XoS4GVw"
          target="_blank"
          rel="noreferrer"
          className="social-floating-button flex items-center justify-center text-xl  bg-[#c4302b] hover:bg-red-700 text-white"
          
        >
          <FaYoutube />
        </a>
        </Tooltip>
        <Tooltip placement="right" title={"Join WhatsApp Community"} arrow className='transition duration-300 ease-in-out'>
        <a
          href="https://chat.whatsapp.com/Fgr6l2dKWeYDEEkvd0xNJM"
          target="_blank"
          rel="noreferrer"
          className="social-floating-button flex items-center justify-center text-xl bg-[#128C7E] hover:bg-blue-900 text-white"
          
        >
          <FaWhatsapp />
        </a>
        </Tooltip>
        <Tooltip placement="right" title={"Join Telegram Community"} arrow className='transition duration-300 ease-in-out'>
        <a
          href="https://t.me/lifetechfactsofficial"
          target="_blank"
          rel="noreferrer"
          className="social-floating-button flex items-center justify-center text-xl  bg-[#0088cc] hover:bg-blue-900 text-white"
          
        >
          <FaTelegram />
        </a>
        </Tooltip>
        
    </div>
  );
}

export default SidebarSocial;
