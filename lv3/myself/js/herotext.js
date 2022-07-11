const worldList = [
  "Paris.",
  "New Zealand.",
  "Maui.",
  "London.",
  "San Francisco."
]
const target = document.querySelector(".world_name")
let num = 0

// 기존의 Array를 새로운 Array로 변경 (array.map 사용을 위한 함수)
function createArr(oldArr) {
  return oldArr
}

// writh() 실행 시 관련 이미지가 표시됨.
function heroImg() {

}

// 전달받은 Array를 한글자씩 출력함.
function writh(selectName) {
  heroImg()
  const rowArray = selectName.map(createArr)
  const typing = setInterval(function aa() {
    if (0 < selectName.length) {
      target.textContent += selectName.shift()
    } else {
      clearInterval(typing)
      setTimeout(function cc() {
        remove(rowArray)
      }, 2000)
    }
  }, 200)
}

// 전달받은 Array를 한글자씩 지움
function remove(selectName) {
  const removing = setInterval(function bb() {
    if (0 < selectName.length) {
      selectName.pop()
      target.textContent = selectName.join("")
    } else {
      clearInterval(removing)
      nameSelect()
    }
  }, 200)
}

//worldList 순차적으로 선택하여 다룸
function nameSelect() {
  target.classList.add("cursor")
  if (num < worldList.length) {
    console.log(num)
    const selectName = worldList[num].split("")
    writh(selectName)
    num = num + 1
  } else {
    num = 0
    nameSelect()
  }
}

nameSelect()