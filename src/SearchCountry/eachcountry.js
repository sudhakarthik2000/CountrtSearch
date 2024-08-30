import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Card, Container, Row, Col } from 'react-bootstrap';
import './eachcountry.css';

const EachCountryData = () => {
  const { countryname } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetchCountryDetails();
  }, []);

  const fetchCountryDetails = async () => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${countryname}`);
      setCountry(response.data[0]);
    } catch (error) {
      console.error("Country Details", error);
    }
  };

  if (!country) return <div>Loading Please Wait...</div>;

  const containerStyle = {
    minHeight: '100vh',
    backgroundImage: "url('https://cdn.wallpapersafari.com/47/19/ItDEyO.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    padding: "50px 0",
  };

  return (
    <div style={containerStyle}>
      <Container className="country-container">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="country-card">
              <Card.Img
                variant="top"
                src={country.flags.png}
                alt={`Flag of ${country.name.official}`}
                className="country-flag"
              />
              <Card.Body>
                <Card.Title className="country-name">{country.name.official}</Card.Title>
                <Card.Text className="country-detail">
                  <strong>Capital:</strong> {country.capital}
                </Card.Text>
                <Card.Text className="country-detail">
                  <strong>Region:</strong> {country.region}
                </Card.Text>
                <Card.Text className="country-detail">
                  <strong>Population:</strong> {country.population.toLocaleString()}
                </Card.Text>
                <Card.Text className="country-detail">
                  <strong>Sub Region:</strong> {country.subregion}
                </Card.Text>
                <Card.Text className="country-detail">
                  <strong>Continent:</strong> {country.continents.join(', ')}
                </Card.Text>
                <Card.Text className="country-detail">
                  <strong>Total Area:</strong> {country.area}
                </Card.Text>
                <Card.Text className="country-detail">
                  <strong>Time Zone:</strong> {country.timezones}
                </Card.Text>
                <Card.Text className="country-detail">
                  <strong>Start Of Week:</strong> {country.startOfWeek}
                </Card.Text>
               

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EachCountryData;
