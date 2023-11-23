let open_burger = document.getElementById("open_burger");
let close_burger = document.getElementById("close_burger");
let burgermenu = document.querySelector(".burgermenu");
let IsOpen = false;
if (IsOpen == false) {
  {
    burgermenu.style.display = "none";
  }
}
open_burger.onclick = () => {
  burgermenu.style.display = "flex";
};
close_burger.onclick = () => {
  burgermenu.style.display = "none";
};
