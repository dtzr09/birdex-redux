import React, { useState } from "react";
import { HeroWrapper, BackgroundOverlay, HeroContainer } from "./HeroStyles";
import SearchBar from "./SearchBar/SearchBar";
import SpeciesSearch from "./SpeciesSearch/SpeciesSearch";
import SpeciesContainer from "./SpeciesContainer/SpeciesContainer";
import { useSelector } from "react-redux";

function Hero() {
  const species = useSelector((state) => state.species);

  // Getting value from input search bar
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e);
  };

  //filtering the state to display search result
  const results = species.filter((data) => {
    if (value === "" && value.length > 3) {
      return data;
    } else {
      if (data.name.toLowerCase().includes(value.toLowerCase())) {
        return data;
      }
    }
  });

  return (
    <HeroContainer>
      <HeroWrapper>
        <BackgroundOverlay>
          <SearchBar
            value={value}
            handleChange={(e) => handleChange(e.target.value)}
          />
          {!value ? <SpeciesContainer /> : <SpeciesSearch results={results} />}
        </BackgroundOverlay>
      </HeroWrapper>
    </HeroContainer>
  );
}

export default Hero;
