const drop = document.querySelector(".drop")
const dropdown = document.querySelector(".dropdown")
const menu = document.querySelectorAll(".main_menu li")

function dropdownIn() {
  dropdown.classList.remove("hidden")
}

function dropdownOut() {
  dropdown.classList.add("hidden")
}

drop.addEventListener("mouseover", dropdownIn)
drop.addEventListener("mouseout", dropdownOut)