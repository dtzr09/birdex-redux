import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Container, Image } from "semantic-ui-react";
import "./MembersStyle.css";

function Members(params) {
  const birds = useSelector((state) => state.birds);

  //MUST INCLUDE RETURN IF NOT NTH WILL BE SHOWN
  const data = birds.map((bird) => {
    if (bird.species_id == params.id) {
      return (
        <Card
          className="Card--birdStyle"
          key={bird.id}
          as={Link}
          to={`/birds/${bird.name}/${bird.id}`}
        >
          <div className="img--wrapper">
            <Image className="bird__img" src={bird.img} />
          </div>
          <Card.Content>
            <Card.Header style={{ color: "white" }}>{bird.name}</Card.Header>
          </Card.Content>
        </Card>
      );
    }
  });

  return (
    <div className="members__wrapper">
      <h2 className="container__title">Members</h2>
      <Container className="birdStyleContainer">{data}</Container>
    </div>
  );
}

export default Members;
