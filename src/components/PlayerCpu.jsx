import board from "../assets/board-layer-white-large.svg"
import redSmily from "../assets/player-one.svg"
import redCounter from "../assets/turn-background-red.svg"
import yellowCounter from "../assets/turn-background-yellow.svg"
import yellowSmiley from "../assets/player-two.svg"
import { useState , useEffect, useRef, useReducer} from "react"
import { motion , AnimatePresence } from "motion/react"
import { spring } from "motion"
import checkDiagonal, {winningRowRed, winningRowYellow} from "../Context"
import minMax, {checkYellow} from "./action"



const PlayerCpu = ({show,setShow , isRestart,setRestart}) => {
    const numbers = Array.from({length:42}, (_,i) => i + 1)
    const [isAnimate,setAnimate] = useState({ani:false,id:"",openModal:null})
    const motionRef = useRef()
    const [timer,setTimer] = useState(30)
    const [compMove, setCompMove] = useState(true)
    const [imgSrc, setImgSrc] = useState({img:redCounter,text:"your turn"})
    const [ise,setIse] = useState(true)
    const [playerWon,setPlayerWon] = useState({user:false,computer:false})
    const [bg,setBg] = useState("bg-dark-purple")
    const [hasUpdated,setHasUpdated] = useState(false)
    const [scoreBoard,setScoreBoard] = useState(() => {
    const storedScore = localStorage.getItem("scoreBoard");
    return storedScore ? JSON.parse(storedScore) : {
    user:0,
    comp:0}
  })
    const [clickedRows, setClickedRows] = useState([]);
    const [currentRow, setRows] = useState()
    const [defaultWin,setDefaultWin] = useState(false)
  
    useEffect(() => {
      const hidden = document.querySelectorAll(".zero");
      const randomBtn = Math.floor(Math.random() * hidden.length);
      if (playerWon.user || playerWon.computer || defaultWin) {
          hidden.forEach(item => {
            item.disabled = true
          })
        } else {
          const timeoutId = setTimeout(() => {
            if (isAnimate.ani && hidden[randomBtn]) {  
                hidden.forEach(item => {
                    item.disabled = false
                })
              const rows = document.querySelectorAll(".row")
              
              if (minMax(rows).count >= 2 && clickedRows !== rows[minMax(rows).index]) {
                  rows[minMax(rows).index].querySelectorAll(".zero")[0].click()
                  setClickedRows(rows[minMax(rows).index])
                  setAnimate({ani:false})
              } else if (checkYellow(rows) && clickedRows !== checkYellow(rows)) {
                  checkYellow(rows).click()
                  setClickedRows(checkYellow(rows))
                  setAnimate({ani:false})
              } else {
                  hidden[randomBtn].click()
                  setAnimate({ani:false})
                  setClickedRows("")
              }     
            }
    
          }, 3000); 
          const timeoutId2 = setTimeout(() => {
            setAnimate(prev => {
              return {
                ...prev,
                openModal:false
              }
            })
          },4000) 
          return () => { 
            clearTimeout(timeoutId2)
            clearTimeout(timeoutId);
          }
        }

    
    },[isAnimate,playerWon,defaultWin,currentRow])


    useEffect(() => {
      const rows = document.querySelectorAll('.row')
      const winningComb = Array(4).fill(true)
      winningRowRed(rows,winningComb,setPlayerWon,isRestart,setRestart,playerWon)
      checkDiagonal(rows,setPlayerWon,isRestart,setRestart)
      winningRowYellow(rows,winningComb,setPlayerWon,isRestart)
    },[compMove])

    useEffect(() => {
      localStorage.setItem("scoreBoard",JSON.stringify(scoreBoard))
    },[scoreBoard])

    useEffect(() => {   
      if (playerWon.user && !hasUpdated) {
         setScoreBoard(prev => {
          return {
            ...prev,
            user:prev.user + 1
          }
         })
         const hidden = document.querySelectorAll(".zero")
         hidden.forEach(item => {
           item.disabled = true
         })
         setBg("bg-red")
         setHasUpdated(true)
      } else if (playerWon.computer && !hasUpdated || defaultWin && !hasUpdated) {
        setScoreBoard(prev => {
          return {
            ...prev,
            comp:prev.comp + 1
          }
         })
        setBg("bg-yellow")
        setHasUpdated(true)
        const hidden = document.querySelectorAll(".zero")
        hidden.forEach(item => {
          item.disabled = true
        })
      }
    },[playerWon,hasUpdated,scoreBoard,defaultWin])


    useEffect(() => {
      const ab = document.querySelectorAll(".ab")
      if (isRestart) {
        ab.forEach(item => {
          item.classList.add("hidden")
          item.classList.remove("bg-yellow","bg-red")
          item.innerText = ""
        })
        setImgSrc({img:redCounter , text:"your turn"})
        setTimer(30)
        setBg("bg-dark-purple")
        setDefaultWin(false)
        setPlayerWon({user:false,computer:false})
        const hidden = document.querySelectorAll(".zero")
        hidden.forEach(item => {
          item.disabled = false
        })
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
            setDefaultWin(true)
         }
        if (!compMove) {
          setImgSrc({img:yellowCounter , text: "cpu turn"})
        } else {
          setImgSrc({img:redCounter , text:"your turn"})
        } 
       return () => clearInterval(intervalId)
      }
      
    }, [timer,compMove,isAnimate])
    const fRow = numbers.slice(0,6).map((number,index) =>  {return(
      <motion.div  className=" h-[15%] relative ">
        <Button  ise={ise} setIse={setIse}  id={index} isAnimate={isAnimate} setAnimate={setAnimate}/>
        <BtnDrop setTimer={setTimer} setCompMove={setCompMove} ise={ise} setIse={setIse} key={number} id={index} isAnimate={isAnimate} setAnimate={setAnimate} setRestart={setRestart}/>
      </motion.div>
      )}
    )
    const sRow = numbers.slice(6,12).map((number) =>  {return(
      <motion.div  className=" h-[15%] relative ">
        <Button  ise={ise} setIse={setIse}  id={number} isAnimate={isAnimate} setAnimate={setAnimate}/>
        <BtnDrop setTimer={setTimer} setCompMove={setCompMove} ise={ise} setIse={setIse} key={number} id={number} isAnimate={isAnimate} setAnimate={setAnimate} setRestart={setRestart}/>
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
                you
              </p>
              <span className="md:text-3xl text-2xl font-bold">{scoreBoard.user}</span>
              </div>
            </motion.div>
            <motion.div 
             initial={{scale:0}}
             whileInView={{scale:1}}
             transition={{duration:.5}}
             className=" md:w-[70%] container rounded-[30px] shadow-b shadow-black-sh bg-white md:h-[510px] lg:h-[460px] xl:h-[460px] h-[410px]  border-2 border-black flex justify-between p-3 pb-9">
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
                  Cpu
                </p>

                <span className="text-2xl pb-2 md:text-3xl font-bold">{scoreBoard.comp}</span>
                </div>
            </motion.div>
          </div>
        
          <AnimatePresence>
          <div className={`w-full h-auto md:min-h-[220px] min-h-[200px] relative top-4 rounded-t-[70px] ${bg}`}>
            {playerWon.user || playerWon.computer || defaultWin ?  
          
                <motion.div 
                  exit={{scale:0, opacity:0}}
                  initial={{scale:0}}
                  whileInView={{scale:1}}
                  transition={{duration:.5}}
                  className="bg-white md:w-[18%] w-1/2 mx-auto rounded-2xl h-[150px] border-2 border-black shadow-b shadow-black-sh grid place-items-center absolute top-[-40px] left-[24%] md:left-[41%]">
                  <div className="grid place-items-center w-full ">
                    <span className="uppercase text-sm">{playerWon.user ? 'You' : 'computer'}</span>
                    <p className="text-[40px] font-bold uppercase">Win</p>
                    <button 
                      onClick={() => {
                        setRestart(true)
                        setHasUpdated(false)
                        setDefaultWin(false)
                        setPlayerWon({user:false,computer:false})
                        setBg("bg-dark-purple")
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
         transition={{type:spring, duration:.3}}
         className={`ab  hidden absolute h-[98%] w-full cell font-bold shadow-innerMild border-2 border-black  cursor-pointer rounded-full text-3xl text-white`}></motion.div>
    )
}

const BtnDrop = ({id,setAnimate,setTimer,setCompMove,setRestart}) => {
    const isComputerClick = (e) => {
      if (e.clientX === 0 && e.clientY === 0 ) {
          return true;
        }
        return false;
    };
    function handleAnimate(e) {
       setRestart(false)
       let isComp = isComputerClick(e)
       setCompMove(isComp)
       setTimer(30)
       setAnimate({
        ani:true,
        id:e.target.id,
        openModal:true
       })
        const ele = e.target.parentNode.parentNode.querySelectorAll('.relative')
        document.querySelectorAll(".zero").forEach(item => {
          item.disabled = true
        })

        if ( isComp ) {
          document.querySelectorAll(".zero").forEach(item => {
             item.disabled = false
           })
         }
        let targetElement = ele[ele.length - 1];
        while (targetElement && !targetElement.querySelector(".hidden")) {
          targetElement = targetElement.previousElementSibling;
        }
        if (targetElement) {
          isComp ? targetElement.querySelector(".absolute").classList.add("bg-yellow", "grid","place-items-center") :  targetElement.querySelector(".absolute").classList.add("bg-red","grid","place-items-center")
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
export default PlayerCpu