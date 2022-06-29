import React from "react";
import { Card, Container, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./SpeciesContainerStyle.css";
import { useSelector } from "react-redux";

function SpeciesContainer() {
  // pulling state from redux
  const species = useSelector((state) => state.species);

  const data = species.map((family) => {
    return (
      <Card
        className="CardStyle"
        key={family.id}
        as={Link}
        to={`/species/${family.name}`}
      >
        <div className="image--wrapper">
          <Image className="CardStyle__img" src={family.img} />
        </div>
        <Card.Content className="CardStyle--content">
          <Card.Header>{family.name}</Card.Header>
        </Card.Content>
      </Card>
    );
  });

  return (
    <div className="TotalContainer">
      <Container className="card--container">{data}</Container>
    </div>
  );
}

export default SpeciesContainer;
