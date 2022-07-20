const navBtn = document.querySelectorAll(".navBtn")

function navBtnOn() {
  this.style.color = "#F5CB0A"
}

function navBtnOut() {
  this.style.color = "#00000080"
}

navBtn.forEach((element) => {
  element.addEventListener("mouseover", navBtnOn)
  element.addEventListener("mouseout", navBtnOut)
})




