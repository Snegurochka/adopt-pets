import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../../components/Layout/Layout';
import { selectFavoritesAnimals } from '../../store/selectors/favorites';

const FavoritesPage: React.FC = () => {
    const animals = useSelector(selectFavoritesAnimals);
    return (
        <Layout typeContent="page" header="Favorites">
            {animals.map((animal) => (<div key={animal.id}>
                {animal.name}
            </div>))}
        </Layout>

    )
}

export default FavoritesPage