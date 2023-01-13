//Import hash router
import { router } from "./router/index.js";

const principalFunction = () => {
	location.hash = "home";
	router(location.hash);
};

window.addEventListener("DOMContentLoaded", principalFunction());
window.addEventListener("hashchange", () => router(location.hash));
