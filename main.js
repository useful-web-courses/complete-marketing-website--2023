"use strict";

import { run_feature_if_supported } from "./modules/public/javascript-features-validator.js";

import { theme_switcher } from "./modules/public/website-features/theme-switcher.js";
import { image_pop_up } from "./modules/public/website-features/image-pop-up.js";
import { scroll_reveal } from "./modules/public/website-features/scroll-reveal.js";

run_feature_if_supported("Theme switcher", theme_switcher);
run_feature_if_supported("Image pop up", image_pop_up);
run_feature_if_supported("Scroll reveal", scroll_reveal);
