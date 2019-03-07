import { registerApplication, start } from "single-spa";

registerApplication(
  // Name of our single-spa application
  "apollo",
  // loadingFunction
  () => import("./src/apollo/apollo.app.js"),
  // activityFunction
  location =>
    location.pathname === "" ||
    location.pathname === "/" ||
    location.pathname.startsWith("/home")
);

registerApplication(
  "navBar",
  () => import("./src/navBar/navBar.app.js").then(module => module.navBar),
  () => true
);

start();
