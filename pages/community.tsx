import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import DefaultLayout from "../components/Layouts/DefaultLayout";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";

const Community: NextPage = () => {
  return (
    <>
      <DefaultLayout
        title="Join Our Online Communities"
        desc="The best tech/coding mentorship program for you"
      >
        <div className="">
          <div className="max-w-[900px] mx-auto px-5 md:px-0 py-20 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary dark:text-warning mb-8">
              Join Our Lifetechfacts Community
            </h1>
            <p className="text-lg font-medium mb-16 max-w-[600px] mx-auto">
              Learn, connect and collaborate with thousands of other developers
              and Tech enthusiasts like you.
            </p>
            <div className="max-w-[610px] mx-auto shadow-md shadow-dark/40 hover:-translate-y-3 transition duration-300 ease-in-out">
              <Image
                src="/img/general/facebook mockup.png"
                alt="Join our community"
                width={610}
                height={352}
              />
            </div>
            <div className="mt-10 inline-flex flex-col sm:flex-row gap-5 justify-start">
              <a
                href="https://www.facebook.com/lifetechfactsofficial"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 px-5 lg:px-20 py-2 rounded-full bg-[#4267B2] hover:bg-primary-hov text-white shadow transition duration-300 ease-in-out text-lg justify-center dark:ring dark:ring-white"
              >
                <span>Follow Our Page</span>
                <FaFacebook />
              </a>
              <a
                href="https://www.youtube.com/channel/UC3F9OKsRWvnnaMJ2XoS4GVw"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 px-5 py-2  ring ring-warning rounded-full transition duration-300 ease-in-out text-lg justify-center bg-[#c4302b] hover:bg-red-700 text-white"
              >
                <span>Subscribe on YouTube</span>
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="bg-blue-900 dark:bg-dark-background/70 pt-16 pb-20 px-5 md:px-10">
            <div className="max-w-[900px] mx-auto text-center">
            <p className="text-white dark:text-warning text-lg font-medium mb-1 max-w-[600px] mx-auto">
              Want to join a more immersed community?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-warning mb-10">
              Join us on our other platforms 
            </h2>
            
            </div>
            <div className="grid grid-cols-3 gap-x-5 gap-y-10  items-center text-white  max-w-[400px] mx-auto">
              <div className="flex items-center justify-center ">
                <a
                  href="https://www.facebook.com/lifetechfactsofficial"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 flex items-center justify-center text-6xl  bg-gradient-to-r from-[#f09433] to-[#bc1888] hover:scale-[1.1] text-white transition duration-300 ease-in-out rounded w-[80px] h-[80px] mx-auto ring ring-white"
                >
                  <FaInstagram />
                </a>
              </div>

              <div className="flex items-center justify-center ">
                <a
                  href="https://chat.whatsapp.com/Fgr6l2dKWeYDEEkvd0xNJM"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 flex items-center justify-center text-6xl  bg-[#128C7E] hover:scale-[1.1] text-white transition duration-300 ease-in-out rounded w-[80px] h-[80px] mx-auto ring ring-white"
                >
                  <FaWhatsapp />
                </a>
              </div>

              <div className="flex items-center justify-center ">
                <a
                  href="https://t.me/lifetechfactsofficial"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 flex items-center justify-center text-6xl  bg-[#0088cc] hover:scale-[1.1] text-white transition duration-300 ease-in-out rounded w-[80px] h-[80px] mx-auto ring ring-white"
                >
                  <FaTelegram />
                </a>
              </div>

            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default Community;
