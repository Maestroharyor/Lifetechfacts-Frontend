import type { NextPage } from "next";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import DefaultLayout from "../components/Layouts/DefaultLayout";
// import RegistrationForm from "../components/Partials/RegistrationForm";
import Courses from "../components/Partials/Courses";
import HomeHero from "../components/Home/HomeHero";
// import HomeFaqSection from "../components/Home/HomeFaqSection";
import axios from "axios";
import { CourseData } from "../data/courses";
// import HomeWhyUs from "../components/Home/HomeWhyUs";
import {baseUrl} from "../server/index";

const HomeWhyUs = dynamic(
  () => import("../components/Home/HomeWhyUs"),
  { ssr: false }
)

const RegistrationForm = dynamic(
  () => import("../components/Home/HomeFaqSection"),
  { ssr: false }
)

const HomeFaqSection = dynamic(
  () => import("../components/Partials/RegistrationForm"),
  { ssr: false }
)

export const getStaticProps: GetStaticProps = async () => {


  const courses = await axios.get(`${baseUrl}/courses`);

  return {
    props: {
      courses: courses.data.courses.courses,
    },
    revalidate: 1,
  };
};

type Props = {
  courses: CourseData[];
}

const Home = ({courses}: Props) => {
  return (
    <>
      <DefaultLayout
        title="Welcome to Lifetechfacts GIT"
        desc="The best tech/coding mentorship program for you"
      >
        <>
          <HomeHero />
          <Courses courses={courses} />
          <HomeWhyUs />
          <HomeFaqSection />

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
