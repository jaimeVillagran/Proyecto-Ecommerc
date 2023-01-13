// Import needed component
import { cards } from "./cards.js";

const ContProduct = ({ title, products, target }) => {
	return `
    <section id="${target}" class="section">
        <h1 class="cont__Title">${title}</h1>
        <h2 class="cont__Subtitle">Productos</h2>
        
        <div class="product">
            ${products.map((element) => cards(element)).join("")}
        </div>
    </section>
    `;
};

export { ContProduct };
