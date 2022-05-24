import Image from "next/image";

type Props = {};

type reasonDatatype = {
    title: string;
    description: string;
    image: string;
}

const reasons:reasonDatatype[] = [
    {
        title: "Beginner Friendly",
        description: "Our programs are very simple and easy to follow. We believe that you can learn anything you want to learn in a short amount of time.",
        image: "/svg/friendly.svg"
    },
    {
        title: "Super Affordable",
        description: "One of the goals of our program is to it affordable enough for anyone who is willing and ready to learn.",
        image: "/svg/money.svg"
    },
    {
        title: "Lifetime Access",
        description: "Once you are done with the any course in the program, you can still access it anytime, anywhere, on any device.",
        image: "/svg/loop.svg"
    },
    {
        title: "Mentorship Access",
        description: "We aren't just selling online courses here. We want to provide you with the best mentorship to help you succeeed.",
        image: "/svg/user-people.svg"
    },
]

function HomeWhyUs({}: Props) {
  return (
    <div className="bg-slate-900 py-20 dark:bg-dark-background/50">
      <div className="px-5 md:px-0 ">
        <div className="text-center max-w-[900px] mx-auto">
          <p className="text-light text-lg dark:text-warning mb-2 italic">
            Wondering why you should enroll for one of our programs?
          </p>
          <h3 className="text-warning font-bold text-5xl mb-3 dark:text-white leading-[3.5rem]">
            {"Benefits of joining Lifetechfacts' Mentorship Program"}
          </h3>
          <p className="text-xl text-white">
            There are lots of reasons why you should sign up for one of our programs. Here are a few of them:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16  dark:text-white  mx-auto items-stretch pt-16 pb-8 text-white max-w-[1100px] mx-auto">
            {reasons.map((reason, index) => (<div key={reason.title} className="flex flex-col md:flex-row items-center gap-7">
                <Image alt={reason.title} width={150} height={150} src={reason.image} />
                <div>
                    <p className="text-3xl font-bold mb-2 text-gray-100">{reason.title}</p>
                    <p className="text-lg">{reason.description}</p>
                </div>
            </div>))}
        </div>
      </div>
    </div>
  );
}

export default HomeWhyUs;
