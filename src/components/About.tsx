import { useState } from "react"
import { Icons } from "./svgs/Icons"

export const About = () => {

  const [width, setWidth] = useState('')
  window.addEventListener('resize', () => {
    const widthScreen = window.screen.width.toString()
    setWidth(widthScreen)
  })
  
  return (
    <div className="w-full h-full min-h-[100vh] bg-gray-900 relative">
      <h1 className="uppercase flex flex-1 justify-center pt-32 text-[3rem] text-gray-100">about</h1>
      <div className="block max:flex">
        <div className="w-[100%] max:w-[50vw] flex items-center justify-center mt-28">
          <img
            className="rounded-full"
            src="https://github.com/AlexandreSican.png"
            alt="Photo of Alexandre Sicchieri"
          />
        </div>
        <div className="w-[100vw] max:w-[40vw] flex flex-col  justify-start  items-center mt-24">
          <div className="w-[60%] max:w-full flex items-center justify-center flex-col">
            <h1 className="text-gray-100 text-[3rem]"><span className="text-blue-400">Hello</span>, Welcome to my Portfolio</h1>
            <p className="text-gray-100 text-[2.25rem]">My name is
              <span className="text-blue-400"> Alexandre Sicchieri Cancian</span>
              , i'm 27 years old and i'm specializing in <span className="text-blue-400">front web development</span>
              , currently studying <span className="text-blue-400">React</span> and its libraries.</p>
          </div>
           {parseInt(width) >= 1500 ? (
            <div className="mt-20 mb-20">
            <Icons width={"600px"} />
          </div>
           ):(
            <div className="mt-20 mb-20">
            <Icons width={"350px"} />
          </div>
           )}
        </div>
      </div>
      

    </div>
  )
}