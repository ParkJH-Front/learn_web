const navBtn = document.querySelectorAll(".navBtn")

console.log(navBtn)

function navBtnHandler(list) {
  console.log("hi")
  console.log(list.dir)
}

navBtn.forEach((element) => {
  element.addEventListener("mouseover", navBtnHandler)
})




