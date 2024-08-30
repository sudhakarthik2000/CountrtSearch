
import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CountryNavbar from "./Navbar";
import { NavLink } from "react-router-dom";
import "./Countrysearch.css"; 

const Searchcountry = () => {
  const [CountryDetails, SetCountryDetails] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      SetCountryDetails(response.data);
      console.log(response.data);
    } catch (err) {
      console.log("Something Went Wrong");
    }
  };

  const inputHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const FilterData = CountryDetails.filter(user =>
    user.name.official.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="container-background">
      <CountryNavbar />
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter Country Name...."
          value={searchValue}
          onChange={inputHandler}
          className="search-input"
        />
      </div>

      <div className="card-container">
        {FilterData.map((each) => (
          <Card style={{ width: '18rem' }} className="country-card" key={each.name.official}>
            <Card.Img variant="top" src={each.flags.png} alt={`Flag of ${each.name.official}`} />
            <Card.Body>
              <Card.Title>{each.name.official}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item><strong>Capital:</strong> {each.capital}</ListGroup.Item>
              <ListGroup.Item><strong>Region:</strong> {each.region}</ListGroup.Item>
              <ListGroup.Item><strong>Population:</strong> {each.population.toLocaleString()}</ListGroup.Item>
              <ListGroup.Item><strong>Continents:</strong> {each.continents.join(', ')}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <NavLink to={`/Country/${each.name.official}`} className="btn btn-primary">
                Know More
              </NavLink>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Searchcountry;

