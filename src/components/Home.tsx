import { Isometric } from "./svgs/Isometric"

export const Home = () => {
  return (
    <div className="flex relative w-full h-full min-h-[850px] max-h-[850px] bg-black justify-center items-center">
      <div className=" flex flex-col max:w-[50vw] w-[100vw] justify-center items-center max:items-start">
        <div className="text-justify w-[80%] max:w-[40%] leading-relaxed">
          <h1 className="text-gray-200 lg:text-2xl text-4xl text-bold max:text-3xl">Web Developer <span className="text-blue-400">in learning</span>.</h1>
          <p className="text-gray-200 text-lg max:text-3xl">Here, you'll find projects made to make<span className="text-blue-400"> knoledge tangible</span>, and <span className="text-blue-400">commercial projects</span></p>
        </div>
        <div className="max:absolute max:bottom-0 max:right-32 max:block hidden">
          <Isometric />
        </div>
      </div>

    </div>
  )
}