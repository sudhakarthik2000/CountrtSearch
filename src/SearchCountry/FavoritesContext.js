import React, { createContext, useState } from 'react';

const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (recipe) => {
        if (!favorites.some(fav => fav.id === recipe.id)) {
            setFavorites([...favorites, recipe]);
        }
    };

    const removeFromFavorites = (id) => {
        setFavorites(favorites.filter(recipe => recipe.id !== id));
    };

    const toggleFavorite = (recipe) => {
        if (favorites.some(fav => fav.id === recipe.id)) {
            removeFromFavorites(recipe.id);
        } else {
            addToFavorites(recipe);
        }
    };

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export { FavoritesContext, FavoritesProvider };