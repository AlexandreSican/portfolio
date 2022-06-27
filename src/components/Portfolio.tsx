import { LinesPort } from "./svgs/LinesPort"

export const Portfolio = () => {
  return (
    <div className="w-full h-[full] max:min-h-[100vh] bg-no-repeat flex flex-col bg-auto bg-gray-300 bg-center items-center pt-[2.5rem] max:pt-[4.525rem] ultra:bg-none ultra:pt-32">
      <h1 className="uppercase justify-center items-center text-[3rem] ">portfolio</h1>
      <div className="flex justify-center mt-44">
      <div className="grid  grid-cols-1 grid-rows-3 max:grid-cols-3 max:grid-rows-1 w-full gap-24 mb-4">
        <div className="drop-shadow-xl rounded-3xl flex flex-col w-[22.8125rem] h-[34.1875rem] bg-[#0A0A0A]">
          <a href="https://alexandresican.github.io/compra-pizza/" target="_blank"><img src="https://github.com/AlexandreSican/portfolio/blob/main/src/assets/pizza.png?raw=true" alt="" /></a>
          <div className="justify-left flex flex-col items-left opacity-100">
            <h1 className="text-white text-3xl p-4">Pizzeria</h1>
            <p className="text-white text-xl p-2">Project created to make my knowledge in JavaScript, HTML and CSS tangiblet</p>
          </div>
        </div>
        <div className="drop-shadow-xl rounded-3xl flex flex-col w-[22.8125rem] h-[34.1875rem] bg-[#0A0A0A]">
         <a href="https://alexandresican.github.io/projeto-bateria/" target="_blank"> <img src="https://github.com/AlexandreSican/portfolio/blob/main/src/assets/batery.png?raw=true" alt="" /></a>
          <div className="justify-left flex flex-col items-left opacity-100">
            <h1 className="text-white text-3xl p-4">Drums</h1>
            <p className="text-white text-xl p-2">Project created to make my knowledge in JavaScript, HTML and CSS tangible</p>
          </div>
        </div>
        <div className="drop-shadow-xl rounded-3xl flex flex-col w-[22.8125rem] h-[34.1875rem] bg-[#0A0A0A]">
         <a href="https://alexandresican.github.io/climatempo/" target="_blank"> <img src="https://github.com/AlexandreSican/portfolio/blob/main/src/assets/weather.png?raw=true" alt="" /></a>
          <div className="justify-left flex flex-col items-left opacity-100">
            <h1 className="text-white text-3xl p-4 ">Weather</h1>
            <p className="text-white text-xl p-2">Project created to make my knowledge in JavaScript, HTML and CSS tangible</p>
          </div>
        </div>



      </div>
      </div>
    </div>
  )
}