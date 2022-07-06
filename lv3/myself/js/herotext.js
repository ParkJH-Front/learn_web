const worldList = [
"Paris.",
"New Zealand.",
"Maui.",
"London.",
"San Francisco."
]
const target = document.querySelector(".world_name")
let num = worldList.length

function typing(selectName) {
  for(let i = selectName.length; 0 < i;) {
    console.log(selectName)
    target.innerText += selectName.shift()
   }
}


function nameSelect() {
  if (num < 5) {
    const selectName = worldList[num].split("") 
    typing(selectName)

    num = num + 1
    
  } else {
    num = 0
    nameSelect()
  }
}

nameSelect()