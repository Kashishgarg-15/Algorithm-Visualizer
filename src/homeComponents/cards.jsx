import React, { useState, useEffect } from 'react';
import ImgMediaCard2 from "./card2";
import "./style.css";
import TextField from '@mui/material/TextField';
import { getDetails } from "./cardDetails";

const Cards = () => {
  const [cards, setCards] = useState([]);       // equivalent to state.cards in class
  const [filter, setFilter] = useState("");     // equivalent to state.filter

  useEffect(() => {
    const fetchedCards = getDetails();          // simulate data fetching
    setCards(fetchedCards);                     // update state after fetching
  }, []);                                        // [] means this effect runs once on mount (like componentDidMount)

  const handleFilterChange = (event) => {
    setFilter(event.target.value);              // update filter state based on input
  };

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(filter.toLowerCase()) ||
    card.description.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div className="d-flex justify-content-end Cards">
        <TextField
          id="search"
          label="Search"
          placeholder="Search cards..."
          color="secondary"
          variant="standard"
          value={filter}
          onChange={handleFilterChange}
        />
      </div>
      <div className="d-flex flex-wrap justify-content-center Cards p-lg-5">
        {filteredCards.map(card => (
          <ImgMediaCard2 key={card.id} card={card} />
        ))}
      </div>
    </>
  );
};

export default Cards;
