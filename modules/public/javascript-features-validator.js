"use strict";

export function run_feature_if_supported(feature_name, feature_function) {
    try {
        feature_function();
    } catch (err) {
        console.log(err);
        
        console.log(feature_name + " is disabled because: " + err);
    }
}
