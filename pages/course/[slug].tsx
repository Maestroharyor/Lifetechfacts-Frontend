import {useState, useEffect} from "react";
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
import {baseUrl} from "../../server/index"

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  const courses = await axios.get(
    `${baseUrl}/courses`
  );

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
  const courses = await axios.get(
    `${baseUrl}/courses`
  );

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
};

const CourseDetailPage = ({ course }: Props) => {
  const [courses, getCourses] = useState<CourseData[]>([]);

  useEffect(()=> {

  }, [])
  return (
    <>
      <DefaultLayout title={course.title} desc={course.description}>
        <>
          <div className="py-20  bg-slate-900 dark:bg-gray-900  px-5">
            <div className="lg:max-w-[calc(100%-300px)] flex flex-col gap-5 justify-start lg:pl-14">
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
          <div className="grid grid-cols-1 lg:grid-cols-12 px-10 gap-10 py-10 text-lg">
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
                  <li className="text-lg rounded bg-light px-4 py-3 border border-light-border shadow-sm dark:bg-dark-background dark:text-light hover:shadow-lg hover:transform hover:scale-[1.01] cursor-pointer transition duration-300 ease-in-out md:col-span-2">
                    ✔️ And Many More
                  </li>
                </ul>
              </div>
            </div>
            <div className="px-5 py-8 rounded shadow-lg lg:col-span-4 bg-white lg:-translate-y-[300px] lg:sticky lg:top-[0px] flex flex-col gap-6 dark:bg-dark-background">
              <Image
                src={course.featuredImage}
                alt={course.title}
                width={400}
                height={400}
              />
              <div className="text-center">
                <span className="text-6xl font-bold">
                  ${course.salePrice.dollar}
                </span>{" "}
                <span className="text-xl opacity-90 line-through">
                  ${course.regularPrice.dollar}
                </span>
                <span className="pl-5">
                  {Math.ceil((100- (course.salePrice.dollar / course.regularPrice.dollar)) * 100)}
                  % off
                </span>
              </div>
              <p className="text-lg text-center font-medium bg-gray-700 text-white px-3 py-2 w-full">
                {course.category[0].toUpperCase()}
              </p>
              <div>
                <Link href={`/#register`}>
                  <a className="bg-primary text-white hover:bg-primary-hov hover:text-white dark:bg-warning dark:text-dark hover:dark:bg-warning-hov hover:dark:text-dark rounded-full px-5 py-4 transition duration-300 ease-in-out flex-1 text-center font-bold text-xl w-full text-center mt-4 sm:mt-0 block mb-5">
                    {"Start Learning Now"}
                  </a>
                </Link>
                {course.prerequisites && (
                <div>
                  <h3 className="text-center text-2xl font-bold text-primary dark:text-warning mb-3">Prerequisites</h3>
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
        </>
      </DefaultLayout>
    </>
  );
};

export default CourseDetailPage;
