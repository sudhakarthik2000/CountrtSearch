import React, { useContext } from 'react';
import { FavoritesContext } from './FavoritesContext';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import CountryNavbar from "./Navbar";
import "./receipe.css"; 


const Favorites = () => {
    const {  favorites, toggleFavorite } = useContext(FavoritesContext);

    return (
        <div style={{ backgroundImage: 'url("https://wallpapers.com/images/hd/tellers-restaurant-and-bar-in-kansas-x9x099doibiomoqc.jpg")', height: "100vh", backgroundSize: "cover" }}>
            <CountryNavbar /> 
            <br /><br />
            {favorites.length > 0 ? (
                <center>
                    <div className='main' style={{display:"flex",flexDirection:"row",flexWrap:"wrap",rowGap:"30px"}}>
                        {favorites.map((each) =>
                            <Card key={each.id} style={{ width: '17rem', border: "none" }} className='card'>
                                <Card.Img variant="top" src={each.image}  style={{ borderRadius: "8px" ,width:"300px"}} />
                                <NavLink to={`/recipe/${each.id}`}>
                                    <Card.Title style={{ paddingTop: "15px" }}>
                                        <button style={{ backgroundColor: "rgb(23, 59, 69)", width: "200px", border: "none", height: "40px" }}>{each.name}</button>
                                    </Card.Title>
                                </NavLink>
                                <p><strong>Rating:</strong> {each.rating} <i className="fas fa-star"></i></p>
                                <button onClick={() => toggleFavorite(each)} style={{ backgroundColor: "red", color: "white", border: "none", borderRadius: "5px", padding: "5px 10px" }}>
                                    Remove from Favorites
                                </button>
                            </Card>
                        )}
                    </div>
                </center>
            ) : (
                <div style={{ color: "white", textAlign: "center", paddingTop: "50px" }}>
                    <h2>No favorite recipes yet!</h2>
                </div>
            )}
        </div>
    );
};

export default Favorites;
