import Link from "next/link";
import Image from "next/image";
import { connect } from "react-redux";
import { MdStar } from "react-icons/md";
import { CourseData } from "../../data/courses";
import { userLocationDataType } from "../../data/dataTypes";

type Props = {
    course: CourseData;
    userLocation?: userLocationDataType;
}


const FeaturedCourse = ({course, userLocation}: Props) => {
  console.log(userLocation);
  return (
    <div className="bg-light dark:bg-dark-background/50 px-5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-16 gap-y-10  items-center  max-w-[1200px] mx-auto py-16 ">
          <div className="md:col-span-5 flex flex-col gap-7">
            <Image
              alt={course.title}
              src={course.featuredImage}
              width={400}
              height={400}
            />
          </div>
          <div className="md:col-span-7 flex flex-col gap-7">
            <div className="flex flex-1 justify-between flex-col gap-3">
              <p className="px-5 py-2 rounded bg-primary text-white dark:bg-warning dark:text-dark w-fit inline-flex justify-center items-center gap-5">
                <MdStar className="inline-block" />
                <span>Featured Course</span>
              </p>
              <h2 className="text-primary dark:text-warning text-6xl font-bold dark:text-white">
                {course.title}
              </h2>
              <p className="text-lg">{course.additionalDetails}</p>
              <div>
                <ul className="list-none my-4 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-x-10">
                  {course.courseOutline.slice(0, 5).map((outline) => (
                    <li
                      key={outline}
                      className="text-lg rounded bg-light px-4 py-3 border border-light-border shadow-sm dark:bg-dark-background dark:text-light hover:shadow-lg hover:transform hover:scale-[1.02] cursor-pointer transition duration-300 ease-in-out"
                    >
                      ✔️ {outline}
                    </li>
                  ))}
                  <li className="text-lg rounded bg-light px-4 py-3 border border-light-border shadow-sm dark:bg-dark-background dark:text-light hover:shadow-lg hover:transform hover:scale-[1.02] cursor-pointer transition duration-300 ease-in-out">
                    ✔️ {course.courseOutline.length - 4}+ more outlines
                  </li>
                </ul>
              </div>
              <div className="rounded px-3 py-2 inline-flex flex-col sm:flex-row flex-wrap items-center gap-3 divide-y sm:divide-y-0 sm:divide-x justify-between text-lg">
                <p className="flex-1 text-center px-3 pt-3 sm:pt-0">4 Weeks</p>
                <p className="flex-1 text-center px-3 pt-3 sm:pt-0">
                  5+ Practical Projects
                </p>
                <p className="flex-1 text-center px-3 pt-3 sm:pt-0">
                  Beginner Friendly
                </p>
              </div>
              <div className="flex justify-between gap-5 flex-wrap mb-3">
                {course.svgIconUrls.map((svg) => (
                  <Image key={svg} src={svg} alt="" width={50} height={50} />
                ))}
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-center gap-5 mt-4">
                <div className="inline-flex gap-3 items-end">
                  <span className="text-6xl font-bold">
                    {userLocation?.country.toLowerCase() === "nigeria" ? `₦${course.salePrice.naira}` : `$${course.salePrice.dollar}`}
                  </span>{" "}
                  <span className="text-lg opacity-90 line-through">
                  {userLocation?.country.toLowerCase() === "nigeria" ? `₦${course.regularPrice.naira}` : `$${course.regularPrice.dollar}`}
                  </span>
                </div>
                <Link href={`/course/${course.slug}`}>
                  <a className="bg-primary text-white hover:bg-primary-hov hover:text-white dark:bg-warning dark:text-dark hover:dark:bg-warning-hov hover:dark:text-dark rounded px-5 py-3 transition duration-300 ease-in-out flex-1 text-center font-bold text-lg mt-4 sm:mt-0">
                    {"View Course Details"}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

const mapStateToProps = (state:any) => {
  return state;
};

export default connect<userLocationDataType>(mapStateToProps)(FeaturedCourse);