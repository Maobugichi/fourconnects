import { useState} from "react"
import Header from "./Header"
import Modal from "./Modal"
import UservUser from "./UservUser"
const Sec = () => {
const [show,setShow] = useState({
  isShow: false,
  head: "Paused"
  })

const [isRestart, setRestart] = useState(false)
  return(
    <section className="h-auto md:min-h-[100vh] bg-purple overflow-hidden w-full font-custom-font">
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
      <UservUser
        show={show}
        setShow={setShow}
        isRestart={isRestart}
        setRestart={setRestart}
        />  
    </section>
  )
}

export default Sec