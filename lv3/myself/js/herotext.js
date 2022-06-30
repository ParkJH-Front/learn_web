const worldList = [
"Paris.",
"New Zealand.",
"Maui.",
"London.",
"San Francisco."
]
const target = document.querySelector(".world_name")
let num = 0
let worldName = worldList[num]
let selectWorldName = worldName.split("")

function typing(typingArr){
  if(0<typingArr.length) {
    num = num+1
    target.textContent += typingArr.shift()
    console.log(typingArr)
    console.log(num)
    setInterval(function more(){
      typing(selectWorldName)
    }, 200)
  }
}

function retyping(typingArr) {
  typing(selectWorldName)
}

setInterval(retyping, 100)
console.log(num)