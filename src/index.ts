import createCardsContainer from './createCardsContainer';
import fetchData from './fetchData';
import './styles/main.css';

fetchData()
    .then(data => createCardsContainer(data))
    .catch(error => console.log('Error fetching and creating the component: ', error));