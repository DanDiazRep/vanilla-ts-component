import { CardData } from './types';

const fetchData = async () => {
    let data: CardData[];
    try {
        const response = await import('./static/data.json');
        data = response.default;
        return data;
    }
    catch (error) {
        console.log("Error loading the data:", error);
        return [];
    }

}

export default fetchData;