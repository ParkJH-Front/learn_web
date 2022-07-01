const worldList = [
"Paris.",
"New Zealand.",
"Maui.",
"London.",
"San Francisco."
]
const target = document.querySelector(".world_name")


// Array 지정할 숫자를 하나씩 늘림.
function nextNum(number) {
  if(number < 4) {
    number = number +1
    return number
  } else {
    number = 0
    return number
  }
}

// 글자를 하나씩 타이핑함.
function typing(nameArr) {
  target.classList.add("cursor")
  if(0<nameArr.length) {
    target.textContent += nameArr.shift()
  }
}

// 글자를 하나씩 지움.
function remove() {
  const reName = target.innerText
  const reNameArr = reName.split("")
  if(0<reNameArr.length) {
    reNameArr.pop()
    target.textContent = reNameArr.join("")
  } else {
    check()
  }
}

//타이핑 실행 조건
function check(worldName) {
  if(0<worldName.length) {
    typing(worldName)
  } else {
    remove(worldName)
  }
}

let number = 0

setInterval(function() {
  const worldName = worldList[number]
  const selectName = worldName.split("")
  check(selectName)
}, 200)