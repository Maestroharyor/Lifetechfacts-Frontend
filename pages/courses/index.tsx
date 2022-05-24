import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Image from "next/image";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import axios from "axios";
import { CourseData } from "../../data/courses";
import CourseCard from "../../components/Cards/CourseCard";
import { FaTwitter } from "react-icons/fa";
import {baseUrl} from "../../server/index"

export const getStaticProps: GetStaticProps = async () => {
  const courses = await axios.get(
    `${baseUrl}/courses`
  );

  return {
    props: {
      courses: courses.data.courses.courses,
    },
    revalidate: 1,
  };
};

type Props = {
  courses: CourseData[];
};

const CoursesPage = ({ courses }: Props) => {
  return (
    <>
      <DefaultLayout
        title="All Courses"
        desc="Learn new skills or begin your tech/coding career by choosing one of our beginner-friendly, affordable and simplified courses"
      >
        <>
          <div className="py-20  bg-primary dark:bg-dark-background  px-5">
            <div className="max-w-[700px] mx-auto flex flex-col gap-5 items-center justify-center">
              <h1 className="font-bold text-5xl text-white dark:text-warning">
                Our Courses
              </h1>
              <p className="text-lg text-center text-white  dark:text-white">
                Learn new skills or begin your tech/coding career by choosing
                one of our beginner-friendly, affordable and simplified courses.
              </p>
            </div>
          </div>

          <div className="px-5 md:px-10 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16  dark:text-white  max-w-[1200px] mx-auto items-stretch">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
            <div className=" dark:bg-dark w-full px-5 py-8 rounded flex flex-col gap-10 border border-dashed border-4 border-gray-600 dark:border-gray-400 dark:border-2 justify-between relative">
              <Image
                src={"/svg/search.svg"}
                width={120}
                height={120}
                alt={"Coming soon"}
              />
              <div className="flex flex-1 justify-between flex-col items-center justify-center gap-3">
                <h3 className="text-primary dark:text-warning text-3xl font-bold dark:text-white">
                  {"Can't find the course you need?"}
                </h3>
                <p className="text-lg">{"Don't worry, It's Coming Soon..."}</p>
                <p className="text-lg text-center">{"Have a specific course request in mind?"}</p>
                <a
                  href="https://www.twitter.com/maestroharyor"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-5 px-5 py-2 rounded-full bg-[#4267B2] hover:bg-primary-hov hover:text-white text-white shadow transition duration-300 ease-in-out text-lg justify-center dark:ring dark:ring-white max-w-[500px]"
                >
                  <FaTwitter />
                  <span className="flex-1">Message Maestro</span>
                </a>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-5"></div>
              </div>
            </div>
          </div>
        </>
      </DefaultLayout>
    </>
  );
};

export default CoursesPage;
