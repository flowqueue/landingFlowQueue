import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./i18n";

// Full motion is the visual default. Users can pause it from the navbar.
document.documentElement.dataset.motion =
  localStorage.getItem("flowqueue_motion") === "reduced" ? "reduced" : "full";

createApp(App).use(i18n).mount("#app");
