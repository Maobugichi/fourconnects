import logo from "../assets/logo.svg"
import { useEffect } from "react"


const Header = ({setRestart,setShow}) => {
   function reset() {
    setRestart(true)
    setTimeout(() => {
      setRestart(false)
    },100)
   }

    return(
    <nav className="flex lg:w-[44%] w-[90%] mx-auto justify-between items-center h-[100px]">
      <button 
      onClick={
        () => {
        setShow(prev => {
        return  {
          ...prev, 
          isShow: !prev.isShow
        }
      })}}
      className="bg-dark-purple text-white uppercase text-[12px] font-semibold w-[65px] rounded-2xl h-[36px] hover:bg-red transition-all duration-500">
        Menu
      </button>

       <img className="h-[45px]" src={logo} alt="logo" />
        <button
         onClick={reset}
         className="bg-dark-purple text-white uppercase text-[12px] font-semibold w-[80px] rounded-2xl h-[36px] hover:bg-red transition-all duration-500">
            Restart
        </button>
    </nav>
    )
}

export default Header