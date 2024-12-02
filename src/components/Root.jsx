import { useState ,useContext } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/logo.svg"
import cpu from "../assets/player-vs-cpu.svg"
import player from "../assets/player-vs-player.svg"
import { motion } from "motion/react"
import { spring } from "motion"
import { GameContext } from "./MyProvider"
import Card from "./Card"

const HomePage = () => {
    return (
     <section className="bg-purple h-auto min-h-[100vh] grid place-items-center w-full">
       <Card
        logo={logo}
        player={player}
        cpu={cpu}
       />
     </section>
    )
}


const Button = ({bg,value,imgSrc,h ,onClick}) => {
    return(
        <motion.button 
         onClick={onClick}
         whileHover={{scale:0.9}}
         transition={{type:spring, bounce:0.25}}
         className={`${bg} ${h} h-full uppercase font-bold flex items-center pl-3 justify-between pr-5 w-full   border-2 rounded-[15px] border-black  shadow-b shadow-black-sh hover:shadow-purple-sh transition-shadow duration-700 ease-out`}>{value} {imgSrc ? <img className="w-[40px]" src={imgSrc}/>: null}</motion.button>
    )
}

export default HomePage
export {Button}