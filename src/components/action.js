export default function minMax(rows) {
  let toClick
  const cells = document.querySelectorAll(".ab")
  const cellClasses2 = Array.from(cells).map( cell => {
    if (cell.className.includes("bg-red")) {
        return cell
    } 
  })
  for (let i = 0; i <= cellClasses2.length - 3; i++) {
    let currentCombination2 = cellClasses2.slice(i, i + 3);
    if (currentCombination2.every(item => item !== undefined)) {
      if (currentCombination2[0].parentNode.previousElementSibling) {
         if(!currentCombination2[0].parentNode.previousElementSibling.childNodes[0].className.includes("bg-red") && !currentCombination2[0].parentNode.previousElementSibling.childNodes[0].className.includes("bg-yellow")) {
            toClick = currentCombination2[0].parentNode.previousElementSibling.childNodes[1]
         }
      }
    } 
  }
  return toClick
}

 function minMax2(rows) {
  let toClick
  const cells = document.querySelectorAll(".ab")
  const cellClasses2 = Array.from(cells).map( cell => {
    if (cell.className.includes("bg-yellow")) {
        return cell
    } 
  })
  for (let i = 0; i <= cellClasses2.length - 3; i++) {
    let currentCombination2 = cellClasses2.slice(i, i + 3);
    if (currentCombination2.every(item => item !== undefined)) {
      if (currentCombination2[0].parentNode.previousElementSibling) {
         if(!currentCombination2[0].parentNode.previousElementSibling.childNodes[0].className.includes("bg-red") && !currentCombination2[0].parentNode.previousElementSibling.childNodes[0].className.includes("bg-yellow")) {
            toClick = currentCombination2[0].parentNode.previousElementSibling.childNodes[1]
         }
      }
    } 
  }
  return toClick   
} 

  function checkYellow(rows) {
    let toClick;
    rows.forEach(rowIn => {
      for (let col = 0; col < 8; col++) {
        let currentCombination = [];
        let currentCombination2 = []
        for (let rowIdx = 0; rowIdx < 7; rowIdx++) {
            const row = rows[rowIdx];
            let cell =  row.querySelectorAll('.ab')[col]
            if (cell) {
              currentCombination.push(cell.className.includes('bg-red') ? true : null);
              currentCombination2.push(cell.className.includes('bg-red') ? cell : null);
            } 
            for (let i = 0; i <= currentCombination.length - 3; i++) {
              let changeFourCells = currentCombination2.slice(i, i + 3);
              if (changeFourCells.every(item => item !== null)) {
                if (changeFourCells[2].parentNode.parentNode.nextElementSibling || changeFourCells[2].parentNode.parentNode.previousElementSibling) {
                    changeFourCells[2].parentNode.parentNode.querySelectorAll(".relative").forEach((item,index) => {
                        if (item.childNodes[0] ==  changeFourCells[2]) {
                          if (item.parentNode.nextElementSibling) {
                              if (!item.parentNode.nextElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-red") && !item.parentNode.nextElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-yellow")) {
                                  toClick = item.parentNode.nextElementSibling.querySelectorAll(".relative")[index].childNodes[1]
                              } else if (item.parentNode.previousElementSibling) {
                                  if (!item.parentNode.previousElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-red") && !item.parentNode.previousElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-yellow")) {
                                      toClick = item.parentNode.previousElementSibling.querySelectorAll(".relative")[index].childNodes[1]
                                  } else if (changeFourCells[0].parentNode.parentNode.nextElementSibling || changeFourCells[0].parentNode.parentNode.previousElementSibling) {
                                        changeFourCells[0].parentNode.parentNode.querySelectorAll(".relative").forEach((item,index) => {  
                                          if (item.childNodes[0] ==  changeFourCells[0]) {
                                            if (item.parentNode.nextElementSibling) {
                                              if (!item.parentNode.nextElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-red") && !item.parentNode.nextElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-yellow")) {
                                                toClick = item.parentNode.nextElementSibling.querySelectorAll(".relative")[index].childNodes[1]
                                              }  else if (item.parentNode.previousElementSibling) {
                                                    if (!item.parentNode.previousElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-red") && !item.parentNode.previousElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-yellow"))  {
                                                          toClick = item.parentNode.previousElementSibling.querySelectorAll(".relative")[index].childNodes[1]
                                                    } 
                                                }
                                            }
                                          
                                          }
                                        })
                                    }    
                                } 
                          } else if (item.parentNode.previousElementSibling) {
                              if (!item.parentNode.previousElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-red") && !item.parentNode.previousElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-yellow")) {
                                  toClick = item.parentNode.previousElementSibling.querySelectorAll(".relative")[index].childNodes[1]
                              }  else if (changeFourCells[0].parentNode.parentNode.nextElementSibling || changeFourCells[0].parentNode.parentNode.previousElementSibling) {
                                  changeFourCells[0].parentNode.parentNode.querySelectorAll(".relative").forEach((item,index) => {  
                                      if (item.childNodes[0] ==  changeFourCells[0]) {
                                        if (item.parentNode.nextElementSibling) {
                                            if (!item.parentNode.nextElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-red") && !item.parentNode.nextElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-yellow")) {
                                                toClick = item.parentNode.nextElementSibling.querySelectorAll(".relative")[index].childNodes[1]
                                            }  else if (item.parentNode.previousElementSibling) {
                                                  if (!item.parentNode.previousElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-red") && !item.parentNode.previousElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-yellow"))  {
                                                        toClick = item.parentNode.previousElementSibling.querySelectorAll(".relative")[index].childNodes[1]
                                                  } 
                                              }
                                        }
                                      }
                                  })
                                }    
                          }
                        }
                    })
                } 
              } 
            }
        }
      } 
    })
   return toClick
  }

  function checkRed(rows) {
    let toClick;
    rows.forEach(rowIn => {
      for (let col = 0; col < 8; col++) {
        let currentCombination = [];
        let currentCombination2 = []
        for (let rowIdx = 0; rowIdx < 7; rowIdx++) {
            const row = rows[rowIdx];
            let cell =  row.querySelectorAll('.ab')[col]
            if (cell) {
              currentCombination.push(cell.className.includes('bg-yellow') ? true : null);
              currentCombination2.push(cell.className.includes('bg-yellow') ? cell : null);
            } 
            for (let i = 0; i <= currentCombination.length - 3; i++) {
              let changeFourCells = currentCombination2.slice(i, i + 3);
              if (changeFourCells.every(item => item !== null)) {
                  if (changeFourCells[2].parentNode.parentNode.nextElementSibling) {
                    changeFourCells[2].parentNode.parentNode.querySelectorAll(".relative").forEach((item,index) => {
                        if (item.childNodes[0] ==  changeFourCells[2]) {
                            if (item.parentNode.nextElementSibling) {
                              if (!item.parentNode.nextElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-red") && !item.parentNode.nextElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-yellow")) {
                                  toClick = item.parentNode.nextElementSibling.querySelectorAll(".relative")[index].childNodes[1]
                              } else if (item.parentNode.previousElementSibling) {
                                    if (!item.parentNode.previousElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-red") && !item.parentNode.previousElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-yellow")) {
                                      toClick = item.parentNode.previousElementSibling.querySelectorAll(".relative")[index].childNodes[1]
                                    }
                                } else if (changeFourCells[0].parentNode.parentNode.previousElementSibling) {
                                      changeFourCells[0].parentNode.parentNode.querySelectorAll(".relative").forEach((item,index) => {
                                          if (item.childNodes[0] ==  changeFourCells[0]) {
                                            if (item.parentNode.previousElementSibling) {
                                                if (!item.parentNode.previousElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-red") && !item.parentNode.previousElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-yellow") ) { 
                                                  toClick = item.parentNode.previousElementSibling.querySelectorAll(".relative")[index].childNodes[1]
                                                }
                                            }  else if (item.parentNode.nextElementSibling) {
                                                  if (!item.parentNode.nextElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-red") && !item.parentNode.nextElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-yellow") ) { 
                                                    toClick = item.parentNode.nextElementSibling.querySelectorAll(".relative")[index].childNodes[1]
                                                  }
                                              }
                                          }
                                      })
                                  }
                            } 
                        }
                    })
                  } else if (changeFourCells[0].parentNode.parentNode.previousElementSibling) {
                      changeFourCells[0].parentNode.parentNode.querySelectorAll(".relative").forEach((item,index) => {
                          if (item.childNodes[0] ==  changeFourCells[0]) {
                              if (item.parentNode.nextElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-red") || item.parentNode.nextElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-yellow")) {
                                  if (!item.parentNode.previousElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-red") && !item.parentNode.previousElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-yellow") ) { 
                                      toClick = item.parentNode.previousElementSibling.querySelectorAll(".relative")[index].childNodes[1]
                                  }
                              } else {
                                  toClick = item.parentNode.nextElementSibling.querySelectorAll(".relative")[index].childNodes[1]
                              } 
                          }
                      })
                  }                   
              } 
            }
        }
      } 
    })
   return toClick
  }
  
export {checkYellow , checkRed , minMax2}
 