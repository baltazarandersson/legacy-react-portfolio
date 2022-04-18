import { HiOutlineLocationMarker } from "react-icons/hi";

export function AboutMe() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start py-16 md:py-36 gap-16">
      <div className="h-auto flex flex-col gap-8">
        <div className=" flex w-full items-center justify-center gap-8">
          <h1 className="text-3xl sm:text-4xl font-medium">About me</h1>
        </div>
        <div className="relative">
          <p className="text-xl sm:text-2xl">
            I am
            <span className="font-semibold text-indigo">
              {" "}
              Baltazar Andersson
            </span>
            , a 19 yo <span className="font-semibold">Frontend Developer </span>
            which always have been into the tech world, first I started making
            some games for fun as a child, then I began learning Python,
            followed by{" "}
            <span className="font-semibold text-gray-800 px-2 rounded-xl bg-[#f7df1e]">
              JavaScript
            </span>{" "}
            and Web Development since the past year.
          </p>
          <div className="hidden sm:flex items-center gap-2 absolute right-0 text-indigo-500">
            <HiOutlineLocationMarker size="24px" />
            <p className="text-xl font-medium">Uruguay</p>
          </div>
        </div>
      </div>
      <div className="flex w-full items-start">
        <div className="flex flex-col gap-8">
          <div className="w-full text-center">
            <h1 className="text-3xl sm:text-4xl font-medium">Technologies</h1>
          </div>
          <div className="flex gap-4 w-full flex-wrap justify-between md:justify-start">
            <img
              className="h-10 w-12 lg:h-12 lg:w-12"
              alt="js"
              src="https://www.svgrepo.com/show/353925/javascript.svg"
            />
            <img
              className="h-10 w-12 lg:h-12 lg:w-12 saturate-[120%]"
              alt="html"
              src="https://cdn.worldvectorlogo.com/logos/html-1.svg"
            />
            <img
              className="h-10 w-12 lg:h-12 lg:w-12 saturate-[120%]"
              alt="css"
              src="https://cdn.worldvectorlogo.com/logos/css-3.svg"
            />
            <img
              className="h-10 w-12 lg:h-12 lg:w-12"
              alt="react"
              src="https://www.svgrepo.com/show/354259/react.svg"
            />
            <img
              className="h-10 w-12 lg:h-12 lg:w-12"
              alt="styled-components"
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/271/nail-polish_1f485.png"
            />
            <img
              className="h-10 w-12 lg:h-12 lg:w-12"
              alt="tailwind"
              src="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg"
            />
            <img
              className="h-10 w-12 lg:h-12 lg:w-12"
              alt="git"
              src="https://cdn.worldvectorlogo.com/logos/git-icon.svg"
            />
            <img
              className="h-10 w-12 lg:h-12 lg:w-12"
              alt="github"
              src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png"
            />
            <img
              className="h-10 w-12 lg:h-12 lg:w-12"
              alt="vercel"
              src="https://www.svgrepo.com/show/306921/vercel.svg"
            />
            <img
              className="h-10 w-12 lg:h-12 lg:w-12"
              alt="firebase"
              src="https://www.svgrepo.com/show/353735/firebase.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
