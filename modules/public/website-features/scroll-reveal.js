"use strict";

import { javascript_features } from "../../private/javascript-features.js";
import { validate_javascript_features_are_supported } from "../../private/validate-support-for-javascript-functions.js";

export function scroll_reveal() {
    validate_javascript_features_are_supported(javascript_features.querySelector, javascript_features.querySelectorAll);

    const elementsArray = document.querySelectorAll(".component--project-card");
    elementsArray.forEach((element) => {
        element.classList.add("offset");
        element.transform = "translateX(-24px)";
    });

    window.addEventListener("scroll", (fadeIn) => {
        let elementsArray = document.querySelectorAll(".component--project-card");

        for (var i = 0; i < elementsArray.length; i++) {
            var elem = elementsArray[i];
            var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
            
            if (distInView < 0) {
                elem.classList.remove("offset");
            } else {
                elem.classList.add("offset");
            }
        }
    });
}