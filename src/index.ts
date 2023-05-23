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

fetchData().then(data => { console.log(data) });