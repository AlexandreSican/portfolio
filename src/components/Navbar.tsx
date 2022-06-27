export const Navbar = () =>{
  return (
    <div className="w-full h-[5.626rem] bg-gray-800 text-gray-100">
      <div className="w-[37.5rem] h-full flex max:justify-center gap-8 max:gap-16 items-center justify-start px-6 max:px-0">
        <a href="#" className="hover:text-gray-600 transition-colors">HOME</a>
        <a href="#" className="hover:text-gray-600 transition-colors">ABOUT</a>
        <a href="#" className="hover:text-gray-600 transition-colors">PORTFOLIO</a>
        <a href="#" className="hover:text-gray-600 transition-colors">CONTACT</a>
      </div>
    </div>
  )
}