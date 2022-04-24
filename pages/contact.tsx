import type { NextPage } from "next";
import Image from "next/image";
import { FaTwitter, FaEnvelope } from "react-icons/fa";
import DefaultLayout from "../components/Layouts/DefaultLayout";

const Community: NextPage = () => {
  return (
    <>
      <DefaultLayout
        title="Have a question or enquiry?"
        desc="The best tech/coding mentorship program for you"
      >
        <div className="max-w-[700px] px-5 md:px-0 mx-auto flex flex-col gap-10 justify-center items-center h-[calc(100vh-118px)]">
          <Image
            src="/svg/contact-us.svg"
            alt="404 - Page Not Found"
            width={420}
            height={229}
          />
          <div className="text-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 dark:text-white">
              Have a question or enquiry?
            </h1>
            <div className="inline-flex flex-col sm:flex-row gap-5 justify-start">
              <a
                href="https://www.twitter.com/maestroharyor"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 px-5 lg:px-20 py-2 rounded-full bg-[#4267B2] hover:bg-primary-hov text-white shadow transition duration-300 ease-in-out text-lg justify-center dark:ring dark:ring-white max-w-[500px]"
              >
                <FaTwitter />
                <span>Message on Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default Community;
