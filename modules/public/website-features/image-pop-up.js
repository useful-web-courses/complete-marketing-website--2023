"use strict";

import { javascript_features } from "../../private/javascript-features.js";
import { validate_javascript_features_are_supported } from "../../private/validate-support-for-javascript-functions.js";

export function image_pop_up() {
  validate_javascript_features_are_supported(javascript_features.querySelector, javascript_features.querySelectorAll);

  const projects = document.querySelector(".section--projects");

  if (projects === null) {
    return;
  }

  const projectImages = projects.querySelectorAll("img");

  if (projects === null) {
    return;
  }

  projectImages.forEach(image => {
    image.style.cursor = "zoom-in";

    image.addEventListener("click", image => {
      const divTag = document.createElement("div");
      divTag.classList.add("container--image-pop-up");
      divTag.style.cursor = "zoom-out";

      divTag.addEventListener("click", _ => {
        const popUpContainer = document.querySelector(
          ".container--image-pop-up"
        );
        popUpContainer.remove();
      });

      const imageTag = document.createElement("img");

      imageTag.src = image.target.src.replace("--thumbnail", "");

      divTag.appendChild(imageTag);

      const bodyTag = document.querySelector("body");
      bodyTag.appendChild(divTag);
    });
  });
}