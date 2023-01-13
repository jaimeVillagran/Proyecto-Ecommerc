// Components import

import { ContProduct } from "../components/products.js";

// Nodes import
import { root } from "../nodes.js";

// Import data products
import { propsSections } from "../utils/data.js";

// This templates or complete interface load each component for a view depending the route
const Home = () => {
	// Function componentn invoques

	const sections = propsSections.map((element) => ContProduct(element));

	// Principal component who save the components
	const template = [...sections];

	root.innerHTML = template.join("");
};

export { Home };
