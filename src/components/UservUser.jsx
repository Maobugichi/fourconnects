import redSmily from "../assets/player-one.svg"
import redCounter from "../assets/turn-background-red.svg"
import yellowCounter from "../assets/turn-background-yellow.svg"
import yellowSmiley from "../assets/player-two.svg"
import { useState , useEffect, useRef} from "react"
import { motion, AnimatePresence } from "motion/react"
import { spring } from "motion"
import checkDiagonal, {winningRowRed, winningRowYellow} from "../Context"

const UservUser = ({show,setShow , isRestart,setRestart}) => {
    const numbers = Array.from({length:42}, (_,i) => i + 1)
    const [isAnimate,setAnimate] = useState({ani:false,id:"",openModal:null})
    const [bg,setBg] = useState("bg-dark-purple")
    const [timer,setTimer] = useState(30)
    const [compMove, setCompMove] = useState(true)
    const [imgSrc, setImgSrc] = useState({img:redCounter,text:"your turn"})
    const [ise,setIse] = useState(true)
    const [playerWon,setPlayerWon] = useState({user:false,computer:false})
    const [defaultWin,setDefaultWin] = useState({user:false,comp:false})
    const [hasUpdated,setHasUpdated] = useState(false)
    const [scoreBoard2,setScoreBoard2] = useState(() => {
    const storedScore2 = localStorage.getItem("scoreBoard2");
    return storedScore2 ? JSON.parse(storedScore2) : {
    user:0,
    comp:0}})
    useEffect(() => {
      const rows = document.querySelectorAll('.row')
      const winningComb = Array(4).fill(true)
      winningRowRed(rows,winningComb,setPlayerWon,isRestart,setRestart,playerWon)
      checkDiagonal(rows,setPlayerWon,isRestart,setRestart)
      winningRowYellow(rows,winningComb,setPlayerWon,isRestart)
    },[compMove])


    useEffect(() => {
      localStorage.setItem("scoreBoard2",JSON.stringify(scoreBoard2))
    },[scoreBoard2])

    useEffect(() => {   
      if (playerWon.user && !hasUpdated || defaultWin.user && !hasUpdated) {
         setScoreBoard2(prev => {
          return {
            ...prev,
            user:prev.user + 1
          }
         })
         setBg("bg-red")
         setHasUpdated(true)
         const hidden = document.querySelectorAll(".zero");
         hidden.forEach(item => item.disabled = true)
      } else if (playerWon.computer && !hasUpdated || defaultWin.comp && !hasUpdated) {
        setScoreBoard2(prev => {
          return {
            ...prev,
            comp:prev.comp + 1
          }
         })
        setBg("bg-yellow")
        setHasUpdated(true)
        const hidden = document.querySelectorAll(".zero")
        hidden.forEach(item => item.disabled = true)
      }
    },[playerWon,hasUpdated,scoreBoard2,defaultWin])


    useEffect(() => {
      const ab = document.querySelectorAll(".ab")
      if (isRestart) {
        ab.forEach(item => {
          item.classList.add("hidden")
          item.classList.remove("bg-yellow","bg-red")
          item.innerText = ""
        })
        setImgSrc({img:redCounter , text:"player1 turn"})
        setTimer(30)
        setHasUpdated(false)
        setDefaultWin({user:false,comp:false})
        setPlayerWon({user:false,computer:false})
        setBg("bg-dark-purple")
      }  
    },[isRestart])

    useEffect(() => {
      if (show.isShow) {
        setTimer(prev => prev)
      } else {
        const intervalId =  setTimeout(() => {
          setTimer(timer !== 0  ?  timer - 1 : 30)
        },1000)
  
        if (compMove && timer == 0) {
          setDefaultWin({
            user:false,
            comp:true
          })
        } else if (!compMove && timer == 0) {
          setDefaultWin({
            user:true,
            comp:false
          })
        }
        if (compMove) {
          setImgSrc({img:redCounter , text: "player 1 turn"})
        } else {
          setImgSrc({img:yellowCounter , text:"player 2 turn"})
        } 
       return () => clearInterval(intervalId)
      }
      
    }, [timer,compMove,isAnimate,show])

    const fRow = numbers.slice(0,6).map((number,index) =>  {
      return(
      <motion.div  className=" h-[15%] relative ">
        <Button  ise={ise} setIse={setIse}  id={index} isAnimate={isAnimate} setAnimate={setAnimate}/>
        <BtnDrop setTimer={setTimer} compMove={compMove} setCompMove={setCompMove} ise={ise} setIse={setIse} key={number} id={index} isAnimate={isAnimate} setAnimate={setAnimate} setRestart={setRestart}/>
      </motion.div>
      )}
    )
    const sRow = numbers.slice(6,12).map((number) =>  {
      return(
      <motion.div  className=" h-[15%] relative ">
        <Button  ise={ise} setIse={setIse}  id={number} isAnimate={isAnimate} setAnimate={setAnimate}/>
        <BtnDrop setTimer={setTimer} compMove={compMove} setCompMove={setCompMove} ise={ise} setIse={setIse} key={number} id={number} isAnimate={isAnimate} setAnimate={setAnimate} setRestart={setRestart}/>
      </motion.div>
     
      )}
    )
    return(
      <>
        <section className=" flex flex-col relative w-full  h-auto md:min-h-[100vh] min-h-[115vh]  justify-center">
          <div className="md:w-[90%]  lg:w-[70%] xl:w-[55%] w-full mx-auto flex gap-4 items-center justify-center">
            <motion.div
              initial={{scale:0}}
              whileInView={{scale:1}}
              transition={{duration:.5}}
              className="md:relative md:left-[-20px] absolute top-0 left-10  md:h-[130px] h-[70px] bg-white w-[35%] md:w-[100px] border-2 rounded-[15px] border-black shadow-b shadow-black-sh grid place-items-center ">
              <img className="absolute md:top-[-20px] left-[-15px] md:left-8 h-10 " src={redSmily} alt="red smiley" />
              <div className="h-[60%] w-[90%] text-center">
              <p className="uppercase md:text-md text-sm font-bold">
                player 1
              </p>
              <span className="md:text-3xl text-2xl font-bold">{scoreBoard2.user}</span>
              </div>
            </motion.div>
            <motion.div 
              initial={{scale:0}}
              whileInView={{scale:1}}
              transition={{duration:.5}}
              className=" md:w-[70%] container rounded-[30px] shadow-b shadow-black-sh bg-white md:h-[460px] h-[400px]  border-2 border-black flex justify-between p-3 pb-9">
                <div className="row flex  flex-col  h-full w-[12%]  gap-4 ">
                  {fRow}
                </div>

                <div className="row flex  flex-col  h-full w-[12%] gap-4  ">
                  {sRow}
                </div>

                <div className="row flex flex-col  h-full  gap-4  w-[12%]">
                  {sRow}
                </div>

                <div className="row flex flex-col  h-full  gap-4  w-[12%]">
                  {sRow}
                </div>

                <div className="row flex flex-col  h-full  gap-4  w-[12%]">
                  {sRow}
                </div>

                <div className="row flex flex-col  h-full  gap-4  w-[12%]">
                  {sRow}
                </div>

                <div className="row flex flex-col  h-full  gap-4  w-[12%]">
                  {sRow}
                </div>
            </motion.div>
            <motion.div
              initial={{scale:0}}
              whileInView={{scale:1}}
              transition={{duration:.5}}
              className="md:relative md:right-[-20px] md:h-[130px] h-[70px] absolute top-0 right-10 bg-white w-[35%] md:w-[100px] border-2 rounded-[15px] border-black shadow-b shadow-black-sh grid place-items-center ">
                <img className="absolute md:top-[-20px] right-[-15px] md:left-7 h-10 " src={yellowSmiley} alt="red smiley" />
                <div className="h-[60%] w-[90%] text-center">
                <p className="uppercase lg:text-md text-sm font-bold">
                  player 2
                </p>
                <span className="text-2xl pb-2 md:text-3xl font-bold">{scoreBoard2.comp}</span>
                </div>
              
            </motion.div>
          </div>
        
          <AnimatePresence>
            <div className={`w-full h-auto md:min-h-[220px] min-h-[200px] relative top-4 rounded-t-[70px] ${bg}`}>
              {playerWon.user || playerWon.computer || defaultWin.user || defaultWin.comp ?  
                  <motion.div 
                    exit={{scale:0, opacity:0}}
                    initial={{scale:0}}
                    whileInView={{scale:1}}
                    transition={{duration:.5}}
                    className="bg-white md:w-[18%] w-1/2 mx-auto rounded-2xl h-[150px] border-2 border-black shadow-b shadow-black-sh grid place-items-center absolute top-[-40px] left-[24%] md:left-[41%]">
                    <div className="grid place-items-center w-full ">
                      <span className="uppercase text-sm">{playerWon.user ? 'player 1' : 'player 2'}</span>
                      <p className="text-[40px] font-bold uppercase">Win</p>
                      <button 
                        onClick={() => {
                          setRestart(true)
                          setTimeout(() => {
                            setRestart(false)
                            const hidden = document.querySelectorAll(".zero")
                            hidden.forEach(item => item.disabled = false)
                          },100)
                          }}
                          className="bg-dark-purple text-white uppercase text-[12px] font-semibold md:w-[40%] w-1/2 rounded-2xl h-[36px] hover:bg-red transition-all duration-500">
                        play again
                      </button>
                    </div>
                  </motion.div>
                  :
                  <motion.div 
                    exit={{scale:0, opacity:0}}
                    initial={{scale:0}}
                    whileInView={{scale:1}}
                    transition={{duration:.5}}
                    className=" w-1/2 mx-auto grid place-items-center relative h-auto min-h-[150px]">
                    <motion.img className="absolute top-[-50px]  w-[150px] " src={imgSrc.img} alt="red counter" />
                    <div className=" absolute top-[-20px] grid place-items-center gap-3">
                    <p className="text-[10px] uppercase ">{imgSrc.text}</p>
                    <span className="text-4xl font-bold" >{timer}s</span>
                    </div>
                
                  </motion.div>
            
              }
            </div>
          </AnimatePresence>
        </section>
        </>
    )
}

const Button = () => {
    const [inView,setView] = useState(0)
    return (
        <motion.div
         initial={{y:-150}}
         whileInView={{y: inView }}
         transition={{type:spring, duration:.2,bounce:0.7,stiffness:200}}
         className={`ab  hidden absolute h-[98%] w-full cell  shadow-innerMild border-2 border-black  cursor-pointer rounded-full text-3xl text-white`}></motion.div>
    )
}

const BtnDrop = ({id,setAnimate,setTimer,compMove, setCompMove}) => {
    function handleAnimate(e) {
       setTimer(30)
       setCompMove(prev => !prev)
        const ele = e.target.parentNode.parentNode.querySelectorAll('.relative')
        let targetElement = ele[ele.length - 1];
        while (targetElement && !targetElement.querySelector(".hidden")) {
          targetElement = targetElement.previousElementSibling;
        }
        if (targetElement) {
          compMove ? targetElement.querySelector(".absolute").classList.add("bg-red", "grid","place-items-center") : targetElement.querySelector(".absolute").classList.add("bg-yellow","grid","place-items-center")
          targetElement.querySelector(".hidden").classList.remove("hidden");
        }
      }
    return (
        <motion.button 
         onClick={handleAnimate} 
         id={id}
         data-last-click={Date.now()}
         className=" zero h-full w-full border-2 border-black shadow-inner   bg-purple cursor-pointer rounded-full"></motion.button>
    )
}

export default UservUser
