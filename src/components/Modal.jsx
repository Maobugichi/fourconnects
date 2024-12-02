import Card from "./Card";
import { AnimatePresence, motion, usePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
export default function Modal({show,setShow,setRestart}) {
   const navigate = useNavigate()
    function reset() {
        setRestart(true)
        setShow(prev => {
            return  {
              ...prev, 
              isShow: !prev.isShow
            }})
        setTimeout(() => {
          setRestart(false)
        },2000)
    }

    function quit(e) {
      if (e.target.innerText == "QUIT GAME") {
        navigate("/")
      }
    }

    return (
    <AnimatePresence>
       {show.isShow ?
        <motion.div className="font-custom-font fixed w-full grid place-items-center bg-red z-50 h-auto min-h-[100vh]" 
        style={{backgroundColor: 'rgba(0,0,0,0.5)'}}
        exit={{scale:0, opacity:0}}
        initial={{scale:0}}
        whileInView={{scale:1}}
        transition={{duration:.5}}
        >
        <Card
         key="bg-purple"
         bg="bg-purple"
         exit={{scale:0}}
         show={show}
         setShow={setShow}
         reset={reset}
         width="w-full"
         quit={quit}
        />
        </motion.div> : null }
    </AnimatePresence>
     
      
)
}