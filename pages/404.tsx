import type { NextPage } from "next";
import Image from "next/image";
import DefaultLayout from "../components/Layouts/DefaultLayout";

const NotFound: NextPage = () => {
  return (
    <>
      <DefaultLayout
        title="Page Not Found"
        desc="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
      >
        <div className="max-w-[700px] px-5 md:px-0 mx-auto flex flex-col gap-10 justify-center items-center h-[calc(100vh-118px)]">
          <Image
            src="/img/general/404_page_not_found.png"
            alt="404 - Page Not Found"
            width={420}
            height={229}
          />
          <div className="text-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-6">Oops. Page Not Found!!!</h1>
            <p className="text-lg font-medium">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default NotFound;
