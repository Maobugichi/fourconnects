import check from "../assets/icon-check.svg"
import {Link} from "react-router-dom"


export default function GameRules() {
    return(
    <section className="bg-purple h-auto min-h-[100vh] grid place-items-center">
        <div className="border-2  rounded-[30px]  border-black lg:w-[29%] md:w-[70%] w-[80%] shadow-b shadow-black-sh h-auto min-h-[500px] lg:min-h-[430px]  bg-white  p-7 relative">
            <div className="h-[90%] grid gap-10 place-items-center">
                <h2 className="text-3xl uppercase font-bold">Rules</h2>
                <div className="flex flex-col bg-white h-[90%] gap-5 justify-center">
                    <div className=" font-bold grid gap-2">
                        <h3 className="text-[purple] uppercase">Objective</h3>
                        <p className="text-[12px]">Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).</p>
                    </div>

                    <div className="grid gap-3">
                        <h3 className="uppercase text-[purple] font-bold">How to play</h3>
                        <ol className="text-[12px] font-bold list-decimal grid gap-2">
                            <li>Red goes first in the first game.</li>
                            <li>Players must alternate turns, and only one disc can be dropped in each turn.</li>
                            <li>The game ends when there is a 4-in-a-row or a stalemate.</li>
                            <li>The loser of the previous game goes first on the next game.</li>
                        </ol>
                    </div>
                </div>
            </div>
            <Link to="/">
              <img className="absolute bottom-[-40px] left-[40%] w-[50px]" src={check} alt="check icon" />
            </Link>
          
        </div>
    </section>
    )
    
}