import { CourseData } from "../../data/dataTypes";
import CourseCard from "../Cards/CourseCard";
import FeaturedCourse from "./FeaturedCourse";

type Props = {
  courses: CourseData[];
};

function Courses({ courses }: Props) {
  const [featuredCourse] = courses.filter((course) => course.featured);
  return (
    <div>
      <FeaturedCourse course={featuredCourse} />

      <div className="bg-blue-900 dark:bg-dark-background/70 py-16 px-5 md:px-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16  dark:text-white  max-w-[1200px] mx-auto items-stretch">
          {courses
            .filter((course) => !course.featured)
            .map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
