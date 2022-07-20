const worldList = [
  "Paris.",
  "New Zealand.",
  "Maui.",
  "London.",
  "San Francisco."
  ]
  const target = document.getElementById(".world_name")
  let num = worldList.length
  
  // 기존의 Array를 새로운 Array로 변경 (array.map 사용을 위한 함수)
  function createArr(oldArr) {
    return oldArr
  }

  // 전달받은 Array를 한글자씩 출력함.
  function wriht(selectName) {
    const rowArray = selectName.map(createArr)
    const typing = setInterval(function aa(){
      if(0<selectName.length) {
        target.textContent += selectName.shift()
      } else {
        clearInterval(typing)
        remove(rowArray)
        console.log(rowArray)
      }
    }, 100)
  }
  
  // 전달받은 Array를 한글자씩 지움
  function remove(selectName) {
    console.log(selectName)
    const removing = setInterval(function bb() {
      if(0<selectName.length) {
        selectName.pop()
        target.textContent = selectName.join("")
      } else {
        clearInterval(removing)
        nameSelect()
      }
    }, 100)
  }
  
  //worldList 순차적으로 선택하여 다룸
  function nameSelect() {
    if (num < 5) {
      const selectName = worldList[num].split("") 
      wriht(selectName)
  
      num = num + 1
      
    } else {
      num = 0
      nameSelect()
    }
  }
  
  nameSelect()