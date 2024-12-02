export default function minMax(rows) {
let maxRedCount = 0;
let maxRedRowIndex = -1;

rows.forEach((row, index) => {
  const redBtns = row.querySelectorAll(".bg-red");
  const redCount = redBtns.length;

  if (redCount > maxRedCount) {
    maxRedCount = redCount;
    maxRedRowIndex = index;
  }
 });


 return {index:maxRedRowIndex, count: maxRedCount}
  }
  function checkYellow(rows) {
    const cells = document.querySelectorAll(".ab")
    let rowIndex
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

    for (let col = 0; col < 8; col++) {
      const currentCombination = [];
      const currentCombination2 = []
      for (let rowIdx = 0; rowIdx < 7; rowIdx++) {
        const row = rows[rowIdx];
        const cell = row.querySelectorAll('.ab')[col];
          if (cell) {
            currentCombination.push(cell.className.includes('bg-yellow') ? true : null);
            currentCombination2.push(cell.className.includes('bg-red') || cell.className.includes('bg-yellow') ? cell : null);
          } 
          for (let i = 0; i <= currentCombination.length - 4; i++) {
            let fourCells = currentCombination.slice(i, i + 4);
            let changeFourCells = currentCombination2.slice(i, i + 3);
            
            if (changeFourCells.every((cell) => cell !== null)) {
              rowIndex = changeFourCells[2].parentNode.parentNode.nextElementSibling.querySelectorAll(".zero")[0]
               
            }
          }
      }
    } 

    return rowIndex
  }
  
  
  
  
    
export {checkYellow}
 