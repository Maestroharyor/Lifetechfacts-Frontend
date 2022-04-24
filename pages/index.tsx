import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import DefaultLayout from "../components/Layouts/DefaultLayout";
import { MdAppRegistration, MdArrowRightAlt } from "react-icons/md";
import { FaUsers, FaCode } from "react-icons/fa";
import Faqs from "../components/Partials/Faqs";
import RegistrationForm from "../components/Partials/RegistrationForm";

const Home: NextPage = () => {
  return (
    <>
      <DefaultLayout
        title="Welcome to Lifetechfacts GIT"
        desc="The best tech/coding mentorship program for you"
      >
        <>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-10 py-16 px-5 md:px-16 items-center">
            <div className="md:col-span-6 flex flex-col gap-5">
              <h1 className="text-primary dark:text-white text-5xl md:text-7xl font-bold">
                Best Coding Mentorship Program is Here
              </h1>
              <p className="text-xl font-medium">
                Learn to build meaningful programs/applications with the best
                mentoring hands.
              </p>
              <div className="inline-flex flex-col sm:flex-row gap-5 justify-start">
                <Link href="/#register">
                  <a className="flex items-center gap-5 px-5 lg:px-20 py-2 rounded-full bg-primary hover:bg-primary-hov text-white shadow transition duration-300 ease-in-out text-lg md:animate-pulse justify-center dark:ring dark:ring-white">
                    <span>Register</span> <MdAppRegistration />
                  </a>
                </Link>
                <Link href="/community">
                  <a className="flex items-center gap-5 px-5 py-2 text-dark dark:text-white ring rounded-full transition duration-300 ease-in-out text-lg justify-center">
                    <span>Join Community</span> <FaUsers />
                  </a>
                </Link>
              </div>
            </div>
            <div className="md:col-span-6 flex items-center justify-center">
              <div className="hidden md:block">
                <Image
                  src={"/img/general/Lifetechfacts Code.png"}
                  alt="programmer"
                  width={526}
                  height={433.5}
                />
              </div>
            </div>
          </div>

          <div className="bg-blue-900 dark:bg-dark-background/70 py-16 px-5 md:px-10 ">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-16 gap-y-10  items-center text-white  max-w-[1200px] mx-auto ">
              <div className="md:col-span-7 flex flex-col gap-7">
                <h2
                  className="leading-[5rem] text-blue-50 text-5xl md:text-7xl font-bold dark:text-white"
                  style={{ lineHeight: "5.5rem" }}
                >
                  Registration is Currently Ongoing for PHASE 1
                </h2>
                <p className="text-xl font-medium">
                  The unique program to become a CODING EXPERT with little or no
                  previous coding experience. Learn the top skills necessary to
                  begin a career in desired coding field.
                </p>
              </div>
              <div className="md:col-span-5 flex items-center justify-center">
                <div className="flex flex-col gap-5 shadow p-10 rounded bg-white dark:bg-dark-background text-dark dark:ring-4 dark:text-white relative">
                  <div className=" bg-danger absolute -right-[10px] sm:-right-[15px] top-2 pl-4 pr-3 py-1 text-white">
                    <p>Ongoing</p>
                  </div>
                  <div className=" bg-success absolute -right-[10px] sm:-right-[15px] top-[50px] pl-4 pr-3 py-1 text-white">
                    <p>Discounted</p>
                  </div>
                  <div className="">
                    {/* <FaCode /> */}
                    <p className="text-primary text-7xl font-bold">
                      $5{" "}
                      <span className="text-dark dark:text-white text-lg">
                        only
                      </span>
                    </p>
                  </div>
                  <h3 className="text-3xl font-bold dark:text-white">
                    Front-end Web Development
                  </h3>
                  <p>
                    This program deals with learning how to build the front-end
                    of a web application/website. A front-end developer will be
                    able to correctly interpret a given design to the user
                    interface.
                  </p>
                  <div className="rounded bg-blue-900 px-3 py-2 inline-flex items-center gap-3 divide-x justify-between">
                    <p className="flex-1 text-center px-3 text-white">
                      3 Weeks
                    </p>
                    <p className="flex-1 text-center px-3 text-white">
                      Pratical Projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" py-20">
            <div className="px-5 md:px-0 max-w-[800px] mx-auto">
              <div className="text-center">
                <p className="text-primary dark:text-warning mb-2">
                  Got Questions?
                </p>
                <h3 className="font-bold text-5xl mb-10 dark:text-white">
                  Frequently Asked Questions
                </h3>
              </div>
              <Faqs />
              <div className="flex flex-col gap-3 mt-8 justify-center items-center">
                <p>Still have questions? No problem</p>
                <Link href="/contact" passHref>
                  <a className="flex items-center gap-5 px-5 py-1.5 rounded-full bg-success hover:bg-success-hov text-white shadow transition duration-300 ease-in-out text-lg  justify-center">
                    <span>Contact Lifetechfacts</span>{" "}
                    <MdArrowRightAlt size={40} />
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div
            className="bg-white dark:bg-dark-background/70 py-16 px-5 md:px-10"
            id="register"
          >
            <div className=" gap-x-16 gap-y-10  items-center text-dark  max-w-[500px] mx-auto">
              <RegistrationForm />
            </div>
          </div>
        </>
      </DefaultLayout>
    </>
  );
};

export default Home;
