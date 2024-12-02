import { useState,useContext, useEffect } from "react"
import { GameContext } from "./MyProvider"
import Header from "./Header"
import PlayerCpu from "./PlayerCpu"
import Modal from "./Modal"
import { useLocation } from "react-router-dom"
import UservUser from "./UservUser"
const MainPage = () => {
const [show,setShow] = useState({
  isShow: false,
  head: "Paused"
  })

const location = useLocation()
const {isCpu} = location.state
const checkCpu = isCpu === "true"
console.log(checkCpu)
const [isRestart, setRestart] = useState(false)
  return(
    <section className="h-auto md:min-h-[100vh] bg-purple overflow-x-hidden font-custom-font">
      <Modal
       show={show}
       setShow={setShow}
       setRestart={setRestart}
      />
      <Header
       setShow={setShow}
       show={show}
       setRestart={setRestart}
      />
      
     {checkCpu ?
      <PlayerCpu
        show={show}
        setShow={setShow}
        isRestart={isRestart}
        setRestart={setRestart}
        />  :
       <UservUser
        show={show}
        setShow={setShow}
        isRestart={isRestart}
        setRestart={setRestart}
        /> }
    </section>
  )
}

export default MainPage