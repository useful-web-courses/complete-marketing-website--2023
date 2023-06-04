"use strict";

export function run_feature_if_supported(featureName, featureFunction) {
  try {
    featureFunction();
  } catch (err) {
    console.log(featureName + " is disabled because: " + err);
  }
}