
export default function checkDiagonal(rows,setPlayerWon,isRestart,setRestart) {
  let won = false 
  for (let row = 0; row < 7; row++) {
    for (let col = 0; col < 6; col++) {
      if (col + 3 < 6 && row + 3 < 7) {
         let diagonalCells = [
          rows[row].children[col],
          rows[row + 1].children[col + 1],
          rows[row + 2].children[col + 2],
          rows[row + 3].children[col + 3],
        ];

        if (isRestart) {
          diagonalCells = []
         }

        if (diagonalCells.every((cell) => cell.childNodes[0].classList.contains('bg-red')) ) {
          diagonalCells.forEach(item => {
            item.childNodes[0].innerText = "0" 
          })
          setPlayerWon({
            user:true,
            computer:false
          })
        } else if (diagonalCells.every((cell) => cell.childNodes[0].classList.contains('bg-yellow'))) {
          diagonalCells.forEach(item => {
            item.childNodes[0].innerText = "0" 
          })
          setPlayerWon({
            user:false,
            computer:true
          })
        }
      }

      if (col - 3 >= 0 && row + 3 < 7) {
          let diagonalCells = [
          rows[row].children[col],
          rows[row + 1].children[col - 1],
          rows[row + 2].children[col - 2],
          rows[row + 3].children[col - 3],
        ];

        if (isRestart) {
          diagonalCells = []
         }
        if (diagonalCells.every((cell) => cell.childNodes[0].classList.contains('bg-red')) ) {
          setPlayerWon({
            user:true,
            computer:false
          })
         
          diagonalCells.forEach(item => {
            item.childNodes[0].innerText = "0"
          })

          
        } else if ( diagonalCells.every((cell) => cell.childNodes[0].classList.contains('bg-yellow'))) {
          setPlayerWon({
            user:false,
            computer:true
          })
         
          diagonalCells.forEach(item => {
            item.childNodes[0].innerText = "0"
          })
        }
      }

    }}

     
}

export function winningRowRed(rows,winningComb,setPlayerWon,isRestart,setRestart,playerWon) {
  rows.forEach(row => {
      let won = false 
      const cells = document.querySelectorAll(".ab")
      const cellClasses = Array.from(cells).map( cell => {
        if (cell.className.includes("bg-red")) {
            return true
        } 
      })
      const cellClasses2 = Array.from(cells).map( cell => {
        if (cell.className.includes("bg-red")) {
            return cell
        } 
      })
      for (let i = 0; i <= cellClasses.length - 4; i++) {
        let currentCombination = cellClasses.slice(i, i + 4);
        let currentCombination2 = cellClasses2.slice(i, i + 4);
        if (isRestart) {
        currentCombination = []
        currentCombination2 = []
        }
        if (JSON.stringify(currentCombination) == JSON.stringify(winningComb)) {
            won = true
            currentCombination2.forEach(item => {
            item.innerText = "0"
            
          })
        }
      }

      for (let col = 0; col < 8; col++) {
        let currentCombination = [];
        let currentCombination2 = []
        for (let rowIdx = 0; rowIdx < 7; rowIdx++) {
          const row = rows[rowIdx];
          let cell;
          isRestart ? cell = null : cell = row.querySelectorAll('.ab')[col]
            if (cell) {
              currentCombination.push(cell.className.includes('bg-red') ? true : null);
              currentCombination2.push(cell.className.includes('bg-red') ? cell : null);
            } 
            for (let i = 0; i <= currentCombination.length - 4; i++) {
              let fourCells = currentCombination.slice(i, i + 4);
              let changeFourCells = currentCombination2.slice(i, i + 4);

                if (fourCells.every((cell) => cell === true)) {
                    
                    won = true
                    changeFourCells.forEach(item => {
                    item.innerText = "0" 
                    })
                }
            }
        }

      } 

      won ?  setPlayerWon({
        user:true,
        computer:false
      }) : null

  })
}

  export function winningRowYellow(rows,winningComb,setPlayerWon,isRestart) {
    rows.forEach(row => {
        const cells = document.querySelectorAll(".ab")
        const cellClasses = Array.from(cells).map(cell => {
          if (cell.className.includes("bg-yellow")) {
            return true
          }
        })

        const cellClasses2 = Array.from(cells).map( cell => {
          if (cell.className.includes("bg-yellow")) {
              return cell
          } 
        })

        for (let i = 0; i <= cellClasses.length - 4; i++) {
          let currentCombination = cellClasses.slice(i, i + 4);
          let currentCombination2 = cellClasses2.slice(i, i + 4);
        
          if (JSON.stringify(currentCombination) == JSON.stringify(winningComb)) {
              setPlayerWon({
                user:false,
                computer:true
              })
              currentCombination2.forEach(item => {
                item.innerText = "0"
              })
          }
        }

        for (let col = 0; col < 8; col++) {
          const currentCombination = [];
          const currentCombination2 = []
          for (let rowIdx = 0; rowIdx < 7; rowIdx++) {
            const row = rows[rowIdx];
            const cell = row.querySelectorAll('.ab')[col];
              if (cell) {
                currentCombination.push(cell.className.includes('bg-yellow') ? true : null);
                currentCombination2.push(cell.className.includes('bg-yellow') ? cell : null);
              } 
              for (let i = 0; i <= currentCombination.length - 4; i++) {
                let fourCells = currentCombination.slice(i, i + 4);
                let changeFourCells = currentCombination2.slice(i, i + 4);
              
              
                if (fourCells.every((cell) => cell === true)) {
                    setPlayerWon({
                      user:false,
                      computer:true
                    })
                    changeFourCells.forEach(item => {
                    item.innerText = "0"
                    })  
                }
              }
          }
        } 
    })
  }