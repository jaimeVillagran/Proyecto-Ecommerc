const laptops = [
	{
		Id: "101",
		name: 'Notebook Acer Aspire 1 A114-33 silver 14", Intel Celeron N4500 12GB de RAM 128GB SSD, Intel UHD Graphics (Jasper Lake 16 EU) 1368x768px Windows 11 Home SL',
		price: 20,
		img: "101.webp",
	},
	{
		Id: "102",
		name: "Apple Macbook Air (13 pulgadas, 2020, Chip M1, 512 GB de SSD, 8 GB de RAM) - Gris espacial",
		price: 70,
		img: "102.webp",
	},
	{
		Id: "103",
		name: "Notebook gamer Acer Aspire Nitro 5 AN515-57 negra 15.6 pulg Intel Core i5 11400H, 16 GB de RAM, 1 TB HDD, 128 GB SSD NVIDIA GeForce GTX 1650 144Hz 1920x1080 Windows 11 Home SL",
		price: 30,
		img: "103.webp",
	},
	{
		Id: "104",
		name: "Notebook Lenovo IdeaPad 14IIL05 platinum gray 14 pulg, Intel Core i5 1035G1 8GB de RAM 512GB SSD, Intel UHD Graphics G1 1920x1080px Windows 10 Home",
		price: 400,
		img: "104.webp",
	},
	{
		Id: "105",
		name: " Apple MacBook Pro (13 pulg, 2020, Chip M1, 256 GB de SSD, 8 GB de RAM) - Gris espacial",
		price: 900,
		img: "105.webp",
	},
	{
		Id: "106",
		name: "Notebook Huawei MateBook D15 gris 15.6 pulgadas, Intel Core i5 1135G7 16GB de RAM 512GB SSD, Intel Iris Xe Graphics G7 80EUs 1920x1080px Windows 10 Home ",
		price: 1200,
		img: "106.webp",
	},
	{
		Id: "107",
		name: "Apple Macbook Air (13 pulgadas, 2020, Chip M1, 256 GB de SSD, 8 GB de RAM) - Oro",
		price: 1200,
		img: "107.webp",
	},
	{
		Id: "108",
		name: "Apple Macbook Pro 13 Chip M2 256gb",
		price: 1200,
		img: "108.webp",
	},
	{
		Id: "109",
		name: "Notebook Acer Aspire Nitro 5 A515-54 silver 15.6 pulagadas, Intel Core i3 10110U 12GB de RAM 1TB HDD 128GB SSD, Intel UHD Graphics 620 1366x768px Windows 11 Home",
		price: 1200,
		img: "109.webp",
	},
	{
		Id: "110",
		name: "Notebook Lenovo IdeaPad D330-10IGL mineral gray táctil 10.1 pulgadas, Intel Celeron N4020 4GB de RAM 64GB SSD, Intel UHD Graphics 600 1280x800px Windows 10 Home",
		price: 1200,
		img: "108.webp",
	},
];

const accesorios = [
	{
		Id: "201",
		name: "Puntero Laser Presentador Power Point Ergonometrico Usb",
		price: 6850,
		descripcion:
			"Marca: Tgshop Condición del ítem: Nuevo, Modelo: AMP16AP, Puntero Laser, Presentador Power Point Ergonometrico Usb Condición nuevo Modelo AMP16AP",
		img: "201.webp",
	},
	{
		Id: "202",
		name: "Mouse de juego Razer Orochi V2 negro",
		price: 67900,
		descripcion:
			"Puede conectarse a cualquier dispositivo a través de Bluetooth, Orientación de la mano: diestro, Posee rueda de desplazamiento, Con sensor óptico, Resolución de 18000ppp, Creado para llevar a todas partes, Control inteligente y navegación fácil,",
		img: "202.webp",
	},
	{
		Id: "203",
		name: "Funda para Notebook con Soporte",
		price: 24900,
		Descripcion:
			"Una funda con soporte para Notebook, de variados colores y tamaños especial para tu computador, Funda ergonómica con soporte y seguridad para un computador, Con esta exclusiva línea de Fundas para Notebook, compatibles con Macbook y otras marcas, encontrarás la mezcla perfecta entre proteger tu computador y tener acceso a una estación de trabajo y cómoda en todo lugar, Fabricadas en Cuerpo Pu, un Eco Cuero de material vegano resistente y agradable al tacto.",
		img: "203.webp",
	},
	{
		Id: "204",
		name: "Candado Seguridad Llave Notebook Proyector Computador",
		price: 2520,
		Descripcion:
			"Protege tus equipos computacionales y electronicos con este candado con llaves DETALLES PRODUCTO: Extension cable 1mts Incluye 2 llaves.",
		img: "204.webp",
	},
	{
		Id: "205",
		name: " Teclado Alambrico Tecmaster , Accesorio De Alta Calidad.",
		price: 9900,
		Descripcion:
			"Teclado Alambrico TECMASTER, accesorio de Alta Calidad, compatible con Mac - Windows - Coneccion USB, dimensiones 431.26 mm x 123.91 mm x 28.51mm, Peso 452 g, Vida útil por tecla: 5 millones de pulsaciones, Requisito de energía: +50 BDC, 50 mA nominal.",
		img: "205.webp",
	},
	{
		Id: "206",
		name: "Monitor gamer Samsung Odyssey G3 F27G35T led 27 pulg negro 100V/240V",
		price: 329990,
		Descripcion:
			"Pantalla led de 27 pulg Tiene una resolución de 1920px-1080px, Relación de aspecto de 16:9, Panel VA, Su brillo es de 250cd/m², Tipos de conexión: DisplayPort 1.2, HDMI 2.0, D-Sub., Es giratorio y reclinable., Comodidad visual en todo momento., Samsung está fielmente comprometida en brindar productos de calidad y que contribuyan a crear un mejor futuro para las personas. Como empresa líder en la industria tecnológica uno de sus objetivos principales es desarrollar avanzadas e innovadoras soluciones. Es por ello que con este monitor tendrás y disfrutarás de una gran experiencia visual en todo momento, Un monitor a la medida Con tu pantalla LED no solo ahorrarás energía, ya que su consumo es bajo, sino que podrás ver colores nítidos y definidos en tus películas o series favoritas, Una experiencia visual de calidad Este monitor de 27 pulg te proporcionará comodidad para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 1920 x 1080 te permitirá disfrutar de momentos únicos gracias a una imagen de alta fidelidad. Su tiempo de respuesta de un milisegundo lo hace ideal para gamers y cinéfilos porque es capaz de mostrar imágenes en movimiento sin halos o bordes borrosos",
		img: "206.webp",
	},
	{
		Id: "207",
		name: "Mouse trackball Logitech Ergo M575 negro",
		price: 43790,
		Descripcion:
			"Logitech diseña productos y experiencias que ocupan un lugar cotidiano en la vida de las personas, poniendo foco en la innovación y la calidad. Su objetivo es crear momentos verdaderamente únicos y significativos para sus usuarios. Los mouses Logitech se adaptan a la forma de tu mano para proporcionarte horas de comodidad. Sin necesidad de mover el brazo para deslizar el cursor, tu mano se fatigará menos. Son ideales para cualquier espacio de trabajo y quienes tienen la mesa llena de diversos objetos Adaptado a tus movimientos: Su diseño eficaz hace de este un mouse cómodo, durable y funcional, ideal para trabajos especializados que requieren mucha precisión y atención al detalle, la funcionalidad al alcance de tu mano El sistema de detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible que en los sistemas tradicionales. Plug And Play Solo debes colocar el receptor en un puerto USB de la computadora y ya puedes empezar a usarlo. No hace falta emparejar el mouse ni descargar software para utilizarlo. Conexión en cuestión de segundos Gracias a su tecnología Bluetooth tendrás la libertad para crear cuando quieras, donde quieras, en la computadora que elijas, con toda comodidad. Apto para fácil traslado: Navega rápidamente por documentos y páginas web gracias su diseño ultra delgado, ergonómico, liviano y conveniente para llevar a donde quieras o viajar.",
		img: "207.webp",
	},
	{
		Id: "208",
		name: "Accesorio De Ordenador Para Portátil Con Cable Dpi 6 Zelotes",
		price: 20345,
		Descripcion:
			"Especificación Marca: ZELOTES, Modelo: T-30, Número de botones: 6, Sistema de seguimiento: óptico, Modo de conexión: USB con cable, DPI: 800-1200-2400-3200DPI, Vida útil del botón: 3 millones de veces, Vida útil del rodillo: 1,2 millones de veces, Longitud del cable: 1,8 m Tensión de trabajo/corriente: 5V/100 mA Sistema soportado: Windows 2000/ME/XP (64 bits) /Vista/Win7/Win8/Win10/Mac OS X (sobre V10.4) Tamaño del artículo: 13,4 x 9,6 x 8,3 cm. .78 * 3.27in Peso del artículo: Aprox. 120 g/4.23",
		img: "208.webp",
	},
	{
		Id: "209",
		name: "Lámpara Led Usb Flexible Notebook Trabajo Casa Home Office",
		Descripcion:
			"Disponible en color negro y blanco, Excelente Lámpara flexible led usb con gran diseño ideal para tu pc, notebook velador de sobremesa etc., Clip de acero, con goma para no rallar el mueble, sujetable en cualquier esquina. También puede quedar de pie sin utilizar el clip, 24 led de alta potencia, Incluye enchufe para conectar a la corriente directamente, Medida: 35 cm alto",
		price: 6990,
		img: "209.webp",
	},
	{
		Id: "210",
		name: "Mesa Laptop Soporte Ventilador Notebook Macbook Fan Coolers",
		Descripcion:
			"Muy versátil: este soporte de escritorio ajustable para portátil no solo se puede utilizar como un soporte para portátil, sino que también funciona como un escritorio de pie, soporte para tablet, escritorio de regazo que se puede utilizar en la cama o sofá. Solo tienes que ajustar las piernas a varias posiciones para satisfacer tus necesidades.",
		price: 10990,
		img: "210.webp",
	},
];

const propsSections = [
	{
		title: "Laptops",
		products: laptops,
		target: "laptops",
	},
	{
		title: "Accesorios",
		products: accesorios,
		target: "accesorios",
	},
];

export { propsSections };
