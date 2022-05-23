import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";
import Faqs from "../../components/Partials/Faqs";

type Props = {}

function HomeFaqSection({}: Props) {
  return (
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
  )
}

export default HomeFaqSection