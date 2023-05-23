import './styles/main.css';

interface CardData {
    id: number;
    name: string;
    price: number;
    imageURL: string;
}

const fetchData = async () => {
    let data: CardData[];
    try {
        const response = await import('./data.json');
        data = response.default;
        return data;
    }
    catch (error) {
        console.log("Error loading the data:", error);
        return [];
    }

}

const createCardsContainer = () => {
    const cardsContainer = document.getElementById("cards-container");

    fetchData().then(data => {
        let numberOfCards = data.length;
        try {
            for (let i = 0; i < numberOfCards; i++) {
                const card = createCard(data[i]);
                cardsContainer.appendChild(card);
            }
            // Create a variable "total" to set the number of columns in the grid
            cardsContainer.style.setProperty('--total', numberOfCards.toString());
        }
        catch {
            console.log('There was an error creating the cards');
        }
    })
        .catch(error => {
            console.log("There was an error creating the cards-container component: ", error);
            throw error;
        })
}

const createCard = (data: CardData) => {
    const card = document.createElement('div');
    card.className = 'card';

    const cardImage = document.createElement('img');
    cardImage.className = 'card-image';
    cardImage.src = data.imageURL;
    cardImage.alt = data.name;
    card.appendChild(cardImage);

    const cardName = document.createElement('h3');
    cardName.className = 'card-name';
    cardName.textContent = data.name;
    card.appendChild(cardName);

    const cardPrice = document.createElement('h4');
    cardPrice.className = 'card-price';
    cardPrice.textContent = '€ ' + data.price.toString();
    card.appendChild(cardPrice);

    const cardButton = document.createElement('button');
    cardButton.className = 'card-button';
    cardButton.textContent = 'Add to cart'
    card.appendChild(cardButton);

    return card;
}

createCardsContainer();
