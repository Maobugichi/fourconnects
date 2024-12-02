import { Link, useNavigate } from "react-router-dom"
import { motion, spring } from "motion/react"
import { Button } from "./Root"
import { useEffect, useState, useContext } from "react"
import GameContext from "./MyProvider"

export default function Card({logo,cpu,player,bg,show,setShow,reset,quit}) {
  const [isCpu, setCpu] = useState(null)
  const navigate = useNavigate();
  const toNextPage = (e) => {
  setShow(prev => {
    return  {
      ...prev, 
      isShow: !prev.isShow
    }})
  }

 

    useEffect(() => {
     
      
    },[isCpu,navigate])
  
 
       return (
        <div className={`${bg ? bg : null} border-2 rounded-[30px] border-black lg:w-[29%] md:w-[70%] w-[80%] shadow-b shadow-black-sh h-auto min-h-[500px] lg:min-h-[430px] grid place-items-center`}>
         <div className={` flex items-center flex-col h-[330px] w-[85%]  justify-between`}>
           {logo ? <img  className="w-[45px]" src={logo}  alt="logo" />: <h2 className="text-4xl uppercase text-white font-bold">{show.head}</h2>}
            <div className="h-[70%] w-full flex flex-col justify-between">
              <Link 
              to="/fourconnects/mainpage/1"
              className="h-[26%]">
              <Button
                 bg={show && show.isShow ? "bg-white" : "bg-red"}
                 h="h-[26%]"
                 value={show && show.isShow ? "continue game" : "PLAY vs cpu"}
                 imgSrc={show && show.isShow ? null : cpu}
                 onClick={toNextPage}
                />
               
              </Link>

              <Link 
               to="/fourconnects/sec/1"
               className="block h-[26%]">
                <Button
                    onClick={reset }
                    value={show && show.isShow ? "Restart" : "PLAY vs player"}
                    imgSrc={player}
                    bg={show && show.isShow ? "bg-white" : "bg-yellow"}
                      />
              </Link>
                <Link
                 className="block h-[26%]"
                 to="/fourconnects/gamerules/1"
                >
                  <Button
                    onClick={quit}
                    h="h-[26%]"
                    value={show && show.isShow ? "quit game" :"game rules"}
                    bg={show && show.isShow ? "bg-red": "bg-[white]"}
                    />
            
                </Link>
                
            </div>
            
         </div>
        </div>
    )
}