import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";
import Faqs from "../../components/Partials/Faqs";

type Props = {};

type reasonDatatype = {
    title: string;
    description: string;
    image: string;
}

const reasons:reasonDatatype[] = [
    {
        title: "Beginner Friendly",
        description: "",
        image: ""
    },
    {
        title: "Super Affordable",
        description: "",
        image: ""
    },
    {
        title: "Lifetime Access",
        description: "",
        image: ""
    },
    {
        title: "Mentorship Access",
        description: "",
        image: ""
    },
]

function HomeWhyUs({}: Props) {
  return (
    <div className="bg-slate-900 py-20 dark:bg-dark-background/50">
      <div className="px-5 md:px-0 max-w-[900px] mx-auto">
        <div className="text-center">
          <p className="text-light text-lg dark:text-warning mb-2">
            Thinking about why enroll for one of our programs?
          </p>
          <h3 className="text-white font-bold text-5xl mb-3 dark:text-white leading-[3.5rem]">
            {"Benefits of joining Lifetechfacts' Mentorship Program"}
          </h3>
          <p className="text-xl text-white">
            There are lots of reasons why you should sign up for one of our programs. Here are a few of them:
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeWhyUs;
