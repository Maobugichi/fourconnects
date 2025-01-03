import { useState} from "react"
import Header from "./Header"
import PlayerCpu from "./PlayerCpu"
import Modal from "./Modal"

const MainPage = () => {
const [show,setShow] = useState({
  isShow: false,
  head: "Paused"
})
const [isRestart, setRestart] = useState(false)
  return(
    <section className="w-full h-auto md:min-h-[100vh] bg-purple overflow-hidden font-custom-font">
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
      
      <PlayerCpu
        show={show}
        setShow={setShow}
        isRestart={isRestart}
        setRestart={setRestart}
        />  
    </section>
  )
}

export default MainPage