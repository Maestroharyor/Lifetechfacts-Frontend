import Link from "next/link";
import Image from "next/image";
import { MdAppRegistration } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

type Props = {};

function HomeHero({}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-10 py-16 px-5 md:px-16 items-center">
      <div className="md:col-span-6 flex flex-col gap-5">
        <h1 className="text-primary dark:text-white text-5xl md:text-7xl font-bold">
          Best Coding/Tech Mentorship Program is Here
        </h1>
        <div>
          <p className="text-xl font-medium mb-3">
            Learn new skills, begin or upgrade your tech/coding career by
            choosing one of our beginner-friendly, affordable and simplified
            courses.
          </p>
          <p className="text-xl font-medium">
            Everything with the best mentoring hands to rightly guide you.
          </p>
        </div>

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
            src={"/svg/pair-programming.svg"}
            alt="programmer"
            width={526}
            height={433.5}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
