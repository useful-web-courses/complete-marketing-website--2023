"use strict";

export function validate_javascript_features_are_supported(...function_names) {
    let unsupported_functions = null;

    function_names.forEach((function_name) => {
        if (typeof document[function_name] !== "function") {
            unsupported_functions += function_name;
        }
    });

    console.log(unsupported_functions);

    if (typeof unsupported_functions === "string") {
        console.log("-----");
        throw unsupported_functions;
    }
}
