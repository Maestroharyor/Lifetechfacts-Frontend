import { useState, useLayoutEffect } from "react";
import type { NextPage } from "next";
import { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import Link from "next/link";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import axios from "axios";
import { CourseData } from "../../data/courses";
import CourseCard from "../../components/Cards/CourseCard";
import { FaChevronLeft, FaTwitter } from "react-icons/fa";
import { ParsedUrlQuery } from "querystring";
import { baseUrl } from "../../server/index";
import { connect } from "react-redux";
import { userLocationDataType } from "../../data/dataTypes";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  const courses = await axios.get(`${baseUrl}/courses`);

  const paths = courses.data.courses.courses.map((course: CourseData) => {
    return { params: { slug: course.slug } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const courses = await axios.get(`${baseUrl}/courses`);

  const course: CourseData = courses.data.courses.courses.filter(
    (course: CourseData) => course.slug === slug
  )[0];

  return {
    props: {
      course,
    },
    revalidate: 1,
  };
};

type Props = {
  course: CourseData;
  userLocation: userLocationDataType;
};

const CourseDetailPage = ({ userLocation, course }: Props) => {
  const [relatedCourses, setRelatedCourses] = useState<CourseData[]>([]);

  const getOtherCourses = async () => {
    axios
      .get(`${baseUrl}/courses`)
      .then((response) => {
        setRelatedCourses(response.data.courses.courses);
      })
      .catch((error) => {});
  };
  useLayoutEffect(() => {
    getOtherCourses();
  }, []);
  return (
    <>
      <DefaultLayout title={course.title} desc={course.description}>
        <>
          <div className="py-20  bg-slate-900 dark:bg-gray-900  px-5">
            <div className="lg:max-w-[calc(100%-300px)] flex flex-col gap-5 justify-start lg:pl-14 px-5">
              <Link href={"/courses"}>
                <a className="inline-flex gap-3 text-white hover:text-blue-200 items-center text-lg">
                  <FaChevronLeft /> <span>Back to All Courses</span>
                </a>
              </Link>
              <h1 className="font-bold text-5xl text-white dark:text-warning">
                {course.title}
              </h1>
              <p className="text-lg text-white  dark:text-white">
                {course.description}
              </p>
              <div className="flex justify-start gap-5 flex-wrap py-3">
                {course.svgIconUrls.map((svg) => (
                  <Image key={svg} src={svg} alt="" width={50} height={50} />
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 px-5 mb-10 md:mb-5 lg:px-10 gap-10 pt-10 text-lg items-start">
            <div className="lg:col-span-8">
              <div className="mb-10 text-xl">{course.additionalDetails}</div>
              <div>
                <h2 className="text-center text-3xl font-bold text-primary dark:text-warning mb-8">
                  What you will learn
                </h2>
                <ul className="list-none my-4 grid grid-cols-1 md:grid-cols-2 gap-5">
                  {course.courseOutline.map((outline) => (
                    <li
                      key={outline}
                      className="text-lg rounded bg-light px-4 py-3 border border-light-border shadow-sm dark:bg-dark-background dark:text-light hover:shadow-lg hover:transform hover:scale-[1.01] cursor-pointer transition duration-300 ease-in-out"
                    >
                      ✔️ {outline}
                    </li>
                  ))}
                  <li
                    className={`text-lg rounded bg-light px-4 py-3 border border-light-border shadow-sm dark:bg-dark-background dark:text-light hover:shadow-lg hover:transform hover:scale-[1.01] cursor-pointer transition duration-300 ease-in-out ${
                      course.courseOutline.length % 2 === 0
                        ? "md:col-span-2"
                        : ""
                    } `}
                  >
                    ✔️ And Many More
                  </li>
                </ul>
              </div>
              <div className=" mt-8 mb-10 rounded-lg border-2 border-primary shadow-lg p-5 lg:p-10 dark:bg-dark-background/50 dark:border-warning flex flex-col gap-5">
                <h4 className="text-3xl font-bold text-primary dark:text-warning mb-8">
                    The best time to get started is NOW!
                </h4>
                <p className="text-xl">{`There's never a bad time to learn in-demand skills like this. But the sooner, the better. So take your first step today by enrolling for the ${course.title}. You'll have a clear roadmap to developing the skills to build your own projects, get hired, and advance your career.`}</p>

                {course.active ? (
                  <Link href={`/#register`}>
                    <a className="bg-primary text-white hover:bg-primary-hov hover:text-white dark:bg-warning dark:text-dark hover:dark:bg-warning-hov hover:dark:text-dark rounded-full px-5 py-4 transition duration-300 ease-in-out flex-1 text-center font-bold text-xl w-full text-center mt-4 sm:mt-0 block mb-5">
                      {"Start Learning Now"}
                    </a>
                  </Link>
                ) : (
                  <div className="bg-info text-white rounded-full px-5 py-4 transition duration-300 ease-in-out flex-1 text-center font-bold text-xl w-full text-center mt-4 sm:mt-0 block mb-5">
                    {"Coming Soon"}
                  </div>
                )}
              </div>
            </div>
            <div className="px-5 py-8 rounded shadow-lg lg:col-span-4 bg-white lg:-translate-y-[300px] lg:sticky lg:top-[400px] flex flex-col gap-6 dark:bg-dark-background">
              <Image
                src={course.featuredImage}
                alt={course.title}
                width={400}
                height={400}
              />
              <div className="text-center">
                <span className="text-6xl font-bold">
                  {userLocation.country.toLowerCase() === "nigeria"
                    ? `₦${course.salePrice.naira}`
                    : `$${course.salePrice.dollar}`}
                </span>{" "}
                <span className="text-xl opacity-90 line-through">
                  {userLocation.country.toLowerCase() === "nigeria"
                    ? `₦${course.regularPrice.naira}`
                    : `$${course.regularPrice.dollar}`}
                </span>
                <span
                  className={`pl-5 ${
                    userLocation.country.toLowerCase() === "nigeria"
                      ? "block"
                      : ""
                  }`}
                >
                  {userLocation.country.toLowerCase() === "nigeria"
                    ? `₦${Math.ceil(
                        (course.salePrice.naira / course.regularPrice.naira) *
                          100
                      )}`
                    : `$${Math.ceil(
                        (course.salePrice.dollar / course.regularPrice.dollar) *
                          100
                      )}`}
                  % off
                </span>
              </div>
              <p className="text-lg text-center font-medium bg-gray-700 text-white px-3 py-2 w-full">
                {course.category[0].toUpperCase()}
              </p>
              <div>
                {course.active ? (
                  <Link href={`/#register`}>
                    <a className="bg-primary text-white hover:bg-primary-hov hover:text-white dark:bg-warning dark:text-dark hover:dark:bg-warning-hov hover:dark:text-dark rounded-full px-5 py-4 transition duration-300 ease-in-out flex-1 text-center font-bold text-xl w-full text-center mt-4 sm:mt-0 block mb-5">
                      {"Start Learning Now"}
                    </a>
                  </Link>
                ) : (
                  <div className="bg-info text-white rounded-full px-5 py-4 transition duration-300 ease-in-out flex-1 text-center font-bold text-xl w-full text-center mt-4 sm:mt-0 block mb-5">
                    {"Coming Soon"}
                  </div>
                )}
                {course.prerequisites && (
                  <div>
                    <h3 className="text-center text-2xl font-bold text-primary dark:text-warning mb-3">
                      Prerequisites
                    </h3>
                    <ul className="list-disc list-inside">
                      {course.prerequisites.map((prerequisite) => (
                        <li key={prerequisite}>{prerequisite}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          {relatedCourses.length > 0 && (
            <div className="bg-blue-900 dark:bg-dark-background/70 py-16 px-5 md:px-10 ">
              <div className="max-w-[1200px] mx-auto ">
                <h4 className="text-4xl font-bold mb-8 text-white">
                  Other Courses
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16  dark:text-white  max-w-[1200px] mx-auto items-stretch">
                {relatedCourses
                  .filter((relatedCourse) => relatedCourse.slug !== course.slug)
                  .map((relatedCourse) => (
                    <CourseCard key={relatedCourse.id} course={relatedCourse} />
                  ))}
              </div>
            </div>
          )}
        </>
      </DefaultLayout>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return state;
};

export default connect<userLocationDataType>(mapStateToProps)(CourseDetailPage);
