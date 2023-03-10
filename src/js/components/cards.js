const cards = ({ Id, name, price, img }) => {
	return `
        <div class="card">
            <input name="prod_id" type="hidden" value="${Id}"/> 
            <figure class="contain-Img">
                <img id="test" src="./public/imageProducts/${img}" alt="" class="card__image"/>
            </figure>
            <div class="card__body">
                    <h2 class="card__title">${name}</h2>
                <div class="card__info">
                    <p class="card__price">$${price}</p>
                    <button class="card__button">
                        <img src="public/assets/iconShop.png" alt="Icono" class="icon"/>
                    </button>
                </div>
            </div>
        </div>
    `;
};

export { cards };

//*<div class="${Id}"></div>*/
