let con = document.querySelector(".container")
let light = document.querySelector("#light")
let dark = document.querySelector("#dark")
let black = document.querySelector("#black")



light.onclick = () => {
    con.classList.add("light");
    con.classList.remove("dark");
    con.classList.remove("black");
}

dark.onclick = () => {
    con.classList.add("dark")
    con.classList.remove("light")
    con.classList.remove("black")
}
black.onclick = () => {
    con.classList.add("black")
    con.classList.remove("light")
    con.classList.remove("dark")
}