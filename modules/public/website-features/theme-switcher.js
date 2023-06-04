"use strict";

import { javascript_features } from "../../private/javascript-features.js";
import { validate_javascript_features_are_supported } from "../../private/validate-support-for-javascript-functions.js";

export function theme_switcher() {
    validate_javascript_features_are_supported(javascript_features.query_selector, javascript_features.query_selector_all);

    const header_tag = document.querySelector("header");

    const image_tag = document.createElement("button");
    image_tag.textContent = "Light theme";
    image_tag.setAttribute("id", "theme-toggle");
    image_tag.setAttribute("class", "theme-toggle");

    image_tag.addEventListener("click", (_) => {
        const html_tag = document.querySelector("html");

        const current_theme = html_tag.dataset.theme;

        const theme_toggle_button = document.querySelector("#theme-toggle");

        if (current_theme === "dark") {
            html_tag.dataset.theme = "light";
            theme_toggle_button.textContent = "Dark theme";
        } else {
            html_tag.dataset.theme = "dark";
            theme_toggle_button.textContent = "Light theme";
        }
    });

    header_tag.appendChild(image_tag);
}
