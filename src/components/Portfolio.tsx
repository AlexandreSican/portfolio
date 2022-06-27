import { LinesPort } from "./svgs/LinesPort"

export const Portfolio = () => {
  return (
    <div className="w-full h-[auto] max:h-[100vh] bg-lines bg-no-repeat flex flex-col bg-auto bg-gray-300 bg-center items-center pt-[4.6875rem]">
      <h1 className="uppercase justify-center items-center text-[3rem]">portfolio</h1>
      <div className="flex justify-center mt-44">
      <div className="grid  grid-cols-1 grid-rows-3 max:grid-cols-3 max:grid-rows-1 w-full gap-24">
        <div className="drop-shadow-xl rounded-3xl flex flex-col w-[22.8125rem] h-[34.1875rem] bg-[#0A0A0A]">
          <img src="./src/assets/pizza.png" alt="" />
          <div className="justify-left flex flex-col items-left opacity-100">
            <h1 className="text-white text-3xl p-4">Pizzaria</h1>
            <p className="text-white text-xl p-2">Projeto realizado pra tangibilizar meus conhecimentos</p>
          </div>
        </div>
        <div className="drop-shadow-xl rounded-3xl flex flex-col w-[22.8125rem] h-[34.1875rem] bg-[#0A0A0A]">
          <img src="./src/assets/batery.png" alt="" />
          <div className="justify-left flex flex-col items-left opacity-100">
            <h1 className="text-white text-3xl p-4">Bateria</h1>
            <p className="text-white text-xl p-2">Projeto realizado pra tangibilizar meus conhecimentos</p>
          </div>
        </div>
        <div className="drop-shadow-xl rounded-3xl flex flex-col w-[22.8125rem] h-[34.1875rem] bg-[#0A0A0A]">
          <img src="./src/assets/weather.png" alt="" />
          <div className="justify-left flex flex-col items-left opacity-100">
            <h1 className="text-white text-3xl p-4 ">Clima Tempo</h1>
            <p className="text-white text-xl p-2">Projeto realizado pra tangibilizar meus conhecimentos</p>
          </div>
        </div>



      </div>
      </div>
    </div>
  )
}