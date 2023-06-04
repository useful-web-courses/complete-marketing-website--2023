"use strict";

export function scroll_reveal() {
  validate_javascript_functions(features.querySelector, features.querySelectorAll);

  const elementsArray = document.querySelectorAll(".component--project-card");
  elementsArray.forEach((element) => {
    element.classList.add("offset");
    element.transform = "translateX(-24px)";
  });

  window.addEventListener("scroll", (fadeIn) => {
    let elementsArray = document.querySelectorAll(".component--project-card");

    for (var i = 0; i < elementsArray.length; i++) {
      var elem = elementsArray[i];
      var distInView =
        elem.getBoundingClientRect().top - window.innerHeight + 20;
      if (distInView < 0) {
        elem.classList.remove("offset");
      } else {
        elem.classList.add("offset");
      }
    }
  });
}