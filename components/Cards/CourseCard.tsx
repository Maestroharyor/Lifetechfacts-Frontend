import Link from "next/link";
import Image from "next/image";
import { CourseData } from "../../data/courses";
import { connect } from "react-redux";
import { userLocationDataType } from "../../data/dataTypes";

type Props = {
  course: CourseData;
  userLocation?: userLocationDataType;
}

const CourseCard = ({userLocation, course }: Props) => {
  return (
    <div
      key={course.id}
      className="bg-white dark:bg-dark w-full px-5 py-8 rounded flex flex-col gap-10 dark:border dark:border-gray-400 dark:border-2 justify-between relative shadow-lg"
    >
      {!course.active && (
        <div className=" bg-danger absolute -right-[10px] sm:-right-[15px] top-2 pl-4 pr-3 py-1 text-white">
          <p>Coming Soon</p>
        </div>
      )}
      {course.featured && (
        <div className=" bg-success absolute -right-[10px] sm:-right-[15px] top-2 pl-4 pr-3 py-1 text-white">
          <p>Featured</p>
        </div>
      )}

      <Image
        src={course.featuredImage}
        width={120}
        height={120}
        alt={course.title}
      />
      <div className="flex flex-1 justify-between flex-col gap-3">
        <p className="text-[10px] font-medium bg-gray-700 text-white px-3 py-2 w-fit">
          {course.category[0].toUpperCase()}
        </p>
        <h3 className="text-primary dark:text-warning text-3xl font-bold dark:text-white">
          {course.title}
        </h3>
        <p className="text-lg">{course.description}</p>
        <div className="rounded px-3 py-2 inline-flex flex-col sm:flex-row flex-wrap items-center gap-3 divide-y sm:divide-y-0 sm:divide-x justify-between text-lg text-gray-600 dark:text-gray-300">
          <p className="text-center px-3 pt-3 sm:pt-0">4 Weeks</p>
          <p className="flex-1 text-left lg:text-center px-3 pt-3 sm:pt-0">
            Practical Projects
          </p>
        </div>
        <div className="flex justify-center sm:justify-start gap-5 flex-wrap mt-3 mb-3">
          {course.svgIconUrls.map((svg) => (
            <Image key={svg} src={svg} alt="" width={50} height={50} />
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-5">
          <div>
            <span className="text-4xl font-bold">
            {userLocation?.country.toLowerCase() === "nigeria" ? `₦${course.salePrice.naira}` : `$${course.salePrice.dollar}`}
            </span>{" "}
            <span className="text-lg opacity-90 line-through">
            {userLocation?.country.toLowerCase() === "nigeria" ? `₦${course.regularPrice.naira}` : `$${course.regularPrice.dollar}`}
            </span>
          </div>
          <Link href={`/course/${course.slug}`}>
            <a className="bg-primary text-white hover:bg-primary-hov hover:text-white dark:bg-warning dark:text-dark hover:dark:bg-warning-hov hover:dark:text-dark rounded px-5 py-3 transition duration-300 ease-in-out text-center font-bold text-md">
              {"View Course Details"}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};


const mapStateToProps = (state:any) => {
  return state;
};

export default connect<userLocationDataType>(mapStateToProps)(CourseCard);
