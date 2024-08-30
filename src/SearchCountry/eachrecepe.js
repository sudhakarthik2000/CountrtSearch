import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import Recepe from './recepie';

const Eachrecepe = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    const fetchRecipeDetail = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
            setRecipe(response.data);
            console.log(response.data)
        } catch (error) {
            console.error("Something went wrong", error);
        }
    };

    useEffect(() => {
        fetchRecipeDetail();
    }, [id]);

    if (!recipe) return <div>Loading...</div>;

    return (
        <div style={{ padding: "20px" }}>
            <h1>{recipe.name}</h1>
            <img src={recipe.image} alt={recipe.name} style={{ width: "100%", maxWidth: "600px" }} />
            <NavLink to={`/Recepe/${Recepe.id}`}><p>{recipe.description}</p></NavLink>
           
        </div>
    );
};

export default Eachrecepe;