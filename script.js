"use strict";

const header = document.querySelector(".head-container");

window.onscroll = () => sticky();

let stickyVariable = header.offsetTop;

let sticky = () => {
  window.pageYOffset > stickyVariable
    ? header.classList.add("sticky")
    : header.classList.remove("sticky");
};
