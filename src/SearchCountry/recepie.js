import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./receipe.css"; // Import the CSS file for styling
import CountryNavbar from "./Navbar";
import { FavoritesContext } from "./FavoritesContext";

const Recepe = () => {
  const{favorites,toggleFavorite}=useContext(FavoritesContext)
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [page, setPage] = useState(1);
  const recipesPerPage = 4;


  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/recipes");
      setRecipes(response.data.recipes);
    } catch (error) {
      console.error("Failed to fetch recipes", error);
    }
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  const displayPage = (pageNum) => {
    if (pageNum > 0 && pageNum <= Math.ceil(filteredRecipes.length / recipesPerPage)) {
      setPage(pageNum);
    }
  };



  
  const RecipeDetails = ({ recipe }) => (
    <div className="recipe-details-card">
      <div className="card-body">
        <h2 className="card-title">{recipe.name}</h2>
        <div className="card-text">
          <strong>Ingredients:</strong>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="card-text">
          <strong>Instructions:</strong>
          <ul>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  const paginatedRecipes = filteredRecipes.slice(
    (page - 1) * recipesPerPage,
    page * recipesPerPage
  );

  return (



    <div    className="recepe-background">
        <CountryNavbar />
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for recipes..."
          value={search}
          onChange={searchHandler}
          className="search-input"
        />
      </div>

      

      <div className="card-container">
        {paginatedRecipes.map((eachRecipe) => (
          <Card style={{ width: '18rem' }} className="recipe-card" key={eachRecipe.id}>
            <Card.Img variant="top" src={eachRecipe.image} alt={`Image of ${eachRecipe.name}`} />
            <Card.Body>
              <Card.Title>{eachRecipe.name}</Card.Title>
              <button
                onClick={() => setSelectedRecipe(eachRecipe)}
                className="btn btn-primary"
              >
                See More
              </button>
              <button onClick={() => toggleFavorite(eachRecipe)} style={{ backgroundColor: "green", color: "white", border: "none", borderRadius: "5px", padding: "5px 10px" }}>
                      {favorites.some(fav => fav.id === eachRecipe.id) ? "Remove from Favorites" : "Add to Favorites"}
                     </button>
            </Card.Body>
          </Card>
        ))}
      </div>

      {selectedRecipe && <RecipeDetails recipe={selectedRecipe} />}

      <div  style={{color:"white",display:"flex",gap:20,}}   
      
      className="pagination">
        <span
          className={page === 1 ? "disabled" : ""}
          onClick={() => displayPage(page - 1)}
        >
          ◀️
        </span>
        {[...Array(Math.ceil(filteredRecipes.length / recipesPerPage))].map((_, i) => (
          <span
            onClick={() => displayPage(i + 1)}
            key={i}
            className={page === i + 1 ? "page__selected" : ""}
          >
            {i + 1}
          </span>
        ))}
        <span
          onClick={() => displayPage(page + 1)}
          className={page === Math.ceil(filteredRecipes.length / recipesPerPage) ? "disabled" : ""}
        >
          ▶️
        </span>
      </div>
    </div>
  );
};

export default Recepe;
