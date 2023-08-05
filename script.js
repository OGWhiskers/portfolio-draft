"use strict";

// ADD TARGET BLANK

const aLinks = document.querySelectorAll(".btn");

const addTarget = () =>
  aLinks.forEach((item) => item.setAttribute("target", "_blank"));
addTarget();
