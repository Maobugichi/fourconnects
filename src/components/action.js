export default function minMax(rows) {
  let toClick
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
  for (let i = 0; i <= cellClasses2.length - 3; i++) {
    let currentCombination = cellClasses.slice(i, i + 4);
    let currentCombination2 = cellClasses2.slice(i, i + 3);
  
    if (currentCombination2.every(item => item !== undefined)) {
      if (!currentCombination2[0].parentNode.previousElementSibling.childNodes[1].className.includes("bg-red") && !currentCombination2[0].parentNode.previousElementSibling.childNodes[1].className.includes("bg-yellow"))
         toClick = currentCombination2[0].parentNode.previousElementSibling.childNodes[1]
    } 
  }

  return toClick
}

 function minMax2(rows) {
   
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
              let fourCells = currentCombination.slice(i, i + 4);
              let changeFourCells = currentCombination2.slice(i, i + 3);
             
              if (changeFourCells.every(item => item !== null)) {
                console.log(changeFourCells)
                if (changeFourCells[2].parentNode.parentNode.nextElementSibling || changeFourCells[2].parentNode.parentNode.previousElementSibling) {
                    changeFourCells[2].parentNode.parentNode.querySelectorAll(".relative").forEach((item,index) => {
                      if (item.childNodes[0] ==  changeFourCells[2]) {
                        if (item.parentNode.nextElementSibling) {
                          if (!item.parentNode.nextElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-red") && !item.parentNode.nextElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-yellow")) {
                              toClick = item.parentNode.nextElementSibling.querySelectorAll(".relative")[index].childNodes[1]
                          } else if (item.parentNode.previousElementSibling) {
                            //console.log(item.parentNode)
                            if (!item.parentNode.previousElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-red") && !item.parentNode.previousElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-yellow")) {
                              //console.log(item.parentNode.previousElementSibling.querySelectorAll(".relative")[index])
                                toClick = item.parentNode.previousElementSibling.querySelectorAll(".relative")[index].childNodes[1]
                              //changeFourCells = []
                            } else if (changeFourCells[0].parentNode.parentNode.nextElementSibling || changeFourCells[0].parentNode.parentNode.previousElementSibling) {
                              console.log("hello world 2")
                              changeFourCells[0].parentNode.parentNode.querySelectorAll(".relative").forEach((item,index) => {  
                              if (item.childNodes[0] ==  changeFourCells[0]) {
                                if (item.parentNode.nextElementSibling) {
                                  
                                  if (!item.parentNode.nextElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-red") && !item.parentNode.nextElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-yellow")) {
                                    toClick = item.parentNode.nextElementSibling.querySelectorAll(".relative")[index].childNodes[1]
                                   //changeFourCells = []
                                  }  else if (item.parentNode.previousElementSibling) {
                                    if (!item.parentNode.previousElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-red") && !item.parentNode.previousElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-yellow"))  {
                                      console.log(item.parentNode.nextElementSibling)
                                       //console.log(item.parentNode.nextElementSibling.querySelectorAll(".relative")[index])
                                           toClick = item.parentNode.previousElementSibling.querySelectorAll(".relative")[index].childNodes[1]
                                           //changeFourCells = []
                                       } 
                                   }
                                }
                              
                              }
                          })
                          }    
                          } 
                        } else if (item.parentNode.previousElementSibling) {
                          //console.log(item.parentNode.previousElementSibling)
                          if (!item.parentNode.previousElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-red") && !item.parentNode.previousElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-yellow")) {
                            toClick = item.parentNode.previousElementSibling.querySelectorAll(".relative")[index].childNodes[1]
                          }  else if (changeFourCells[0].parentNode.parentNode.nextElementSibling || changeFourCells[0].parentNode.parentNode.previousElementSibling) {
                            console.log("hello world 2")
                            changeFourCells[0].parentNode.parentNode.querySelectorAll(".relative").forEach((item,index) => {  
                            if (item.childNodes[0] ==  changeFourCells[0]) {
                              if (item.parentNode.nextElementSibling) {
                                
                                if (!item.parentNode.nextElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-red") && !item.parentNode.nextElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-yellow")) {
                                  toClick = item.parentNode.nextElementSibling.querySelectorAll(".relative")[index].childNodes[1]
                                 //changeFourCells = []
                                }  else if (item.parentNode.previousElementSibling) {
                                  if (!item.parentNode.previousElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-red") && !item.parentNode.previousElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-yellow"))  {
                                    console.log(item.parentNode.nextElementSibling)
                                     //console.log(item.parentNode.nextElementSibling.querySelectorAll(".relative")[index])
                                         toClick = item.parentNode.previousElementSibling.querySelectorAll(".relative")[index].childNodes[1]
                                         //changeFourCells = []
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

   console.log(toClick)
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
              let fourCells = currentCombination.slice(i, i + 4);
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
                         console.log(changeFourCells[0].parentNode.parentNode.previousElementSibling)
                         changeFourCells[0].parentNode.parentNode.querySelectorAll(".relative").forEach((item,index) => {
                       if (item.childNodes[0] ==  changeFourCells[0]) {
                        if (item.parentNode.nextElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-red") || item.parentNode.nextElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-yellow")) {
                          if (!item.parentNode.previousElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-red") && !item.parentNode.previousElementSibling.querySelectorAll(".relative")[index].childNodes[0].className.includes("bg-yellow") ) { 
                            toClick = item.parentNode.previousElementSibling.querySelectorAll(".relative")[index].childNodes[1]
                            //changeFourCells = []
                          }
                        } else  {
                             toClick = item.parentNode.nextElementSibling.querySelectorAll(".relative")[index].childNodes[1]
                             //changeFourCells = []
                         } 
                       }
                       })
                     }                   /*if (!changeFourCells[2].parentNode.parentNode.nextElementSibling.querySelectorAll(".relative")[5].childNodes[0].className.includes("bg-red") && !changeFourCells[2].parentNode.parentNode.nextElementSibling.querySelectorAll(".relative")[index + 5].childNodes[0].className.includes("bg-yellow")) {
                        console.log(!changeFourCells[2].parentNode.parentNode.nextElementSibling.querySelectorAll(".relative")[5].childNodes[0].className.includes("bg-red"))
                         toClick = changeFourCells[2].parentNode.parentNode.nextElementSibling.querySelectorAll(".relative")[5].childNodes[1]
                    }  else {
                        console.log(!changeFourCells[2].parentNode.parentNode.nextElementSibling.querySelectorAll(".relative")[4].childNodes[0].className.includes("bg-yellow"))
                    }*/
              } 
            }
        }

      } 
  })

   
   return toClick
  }
  
  
  
  
    
export {checkYellow , checkRed , minMax2}
 