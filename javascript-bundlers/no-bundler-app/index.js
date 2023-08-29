import { doSomethingNice } from "./my-utils.js";
import { reloadThePage } from "./navigation.js";

document
  .getElementById("reload-page-btn")
  .addEventListener("click", reloadThePage);

document
  .getElementById("say-sth-nice-btn")
  .addEventListener("click", doSomethingNice);
