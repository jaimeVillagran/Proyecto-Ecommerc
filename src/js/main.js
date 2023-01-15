//Import hash router
import { router } from "./router/index.js";

import { products } from "./js/utils/products.js";
import { Catalogo } from "./componentCatalogo.js";
import { Carro } from "./componentCarro.js";

const d = document;

const title = d.getElementById("title");
const elContenedor = d.getElementById("contenedor");
const elCargando = d.getElementById("cargando");
const elPaginacion = d.getElementById("paginacion");
const btnCarrito = d.getElementById("btn_carrito");
const asideCarro = d.getElementById("carro_aside");

const carro = new Carro();
const catalogo = new Catalogo();

let v_offset = 0;
const cant = 20;

const principalFunction = () => {
	location.hash = "home";
	router(location.hash);
};

window.addEventListener("DOMContentLoaded", principalFunction());
window.addEventListener("hashchange", () => router(location.hash));
