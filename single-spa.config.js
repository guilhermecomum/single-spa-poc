import { registerApplication, start } from "single-spa";

// registerApplication(
//   // Name of our single-spa application
//   "auth",
//   // loadingFunction
//   () => import("./src/auth/auth.app.js"),
//   // activityFunction
//   location =>
//     location.pathname === "/auth" || location.pathname.startsWith("/auth")
// );

registerApplication(
  // Name of our single-spa application
  "home-aside",
  // loadingFunction
  () => import("./src/home-aside/home-aside.app.js"),
  // activityFunction
  location => location.pathname === "/" || location.pathname.startsWith("/home")
);

registerApplication(
  // Name of our single-spa application
  "home",
  // loadingFunction
  () => import("./src/home/home.app.js"),
  // activityFunction
  location => location.pathname === "/" || location.pathname.startsWith("/home")
);

registerApplication(
  // Name of our single-spa application
  "about",
  // loadingFunction
  () => import("./src/about/about.app.js"),
  // activityFunction
  location => location.pathname === "/about"
);

registerApplication(
  // Name of our single-spa application
  "trends",
  // loadingFunction
  () => import("./src/trends/trends.app.js"),
  // activityFunction
  location => location.pathname === "/" || location.pathname.startsWith("/home")
);

registerApplication(
  // Name of our single-spa application
  "profile",
  // loadingFunction
  () => import("./src/profile/profile.app.js"),
  // activityFunction
  location => location.pathname === "/" || location.pathname.startsWith("/home")
);

registerApplication(
  "navBar",
  () => import("./src/navBar/navBar.app.js").then(module => module.navBar),
  () => true
);

start();
