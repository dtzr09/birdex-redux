import React, { useState } from "react";
import { useHistory } from "react-router";
import Nav from "../components/Navbar/Nav";
import * as d3 from "d3";
import {
  SingleBirdPageWrapper,
  SingleBirdContainer,
  SingleBirdWrapper,
  SingleBirdContent,
  SingleBirdName,
  SingleBirdSpecies,
  SingleBirdWeight,
  SingleBirdSex,
  ImageWrapper,
  SingleBirdImage,
  Backbutton,
  ViewEntries,
  DeleteBird,
  AnalysisContainer,
  VisualContainer,
  StatsContainer,
  StatsWrapper,
  Statsdetail,
  ChartContainer,
  ChartChangeH1Bar,
  ChartChangeH1Line,
} from "./SingleBirdStyle";
import BarChart from "../components/Charts/BarChart";
import LineChart from "../components/Charts/LineChart";
import { useDispatch, useSelector } from "react-redux";
import { deletebird } from "../feature/BirdsSlice";

function SingleBird({ match }) {
  const birds = useSelector((state) => state.birds);
  const history = useHistory();
  const dispatch = useDispatch();

  let i;
  let currentbird_img,
    currentbird_name,
    currentbird_id,
    currentbird_weights,
    currentbird_sex,
    currentbird_species,
    currentbird_speciesid;

  for (i = 0; i < birds.length; i++) {
    if (
      birds[i].name === match.params.name &&
      birds[i].id == match.params.birdsid
    ) {
      currentbird_img = birds[i].img;
      currentbird_name = birds[i].name;
      currentbird_id = birds[i].id;
      currentbird_weights = birds[i].weights;
      currentbird_sex = birds[i].sex;
      currentbird_species = birds[i].species;
      currentbird_speciesid = birds[i].species_id;
    }
  }

  // DELETING BIRD (FROM BIRDSDATA AND ENTRIES)
  const deleteBird = () => {
    dispatch(
      deletebird({
        id: currentbird_id,
      })
    );
    history.push(`/species/${currentbird_species}`);
  };

  // calculating the weights stats
  const weights = Object.values(
    currentbird_weights.map((weights) => weights.weight)
  );

  const stats = {
    avg_weight: parseFloat(d3.mean(weights)).toFixed(2),
    min_weights: d3.min(weights),
    max_weights: d3.max(weights),
    median_weights: d3.median(weights),
    weights_dev: parseFloat(d3.deviation(weights)).toFixed(2),
  };

  // For the bar and line chart
  const [LineActive, setLineActive] = useState(false);
  const bardetails = [];
  let j;
  for (j = 0; j < currentbird_weights.length; j++) {
    bardetails.push({
      created_at: currentbird_weights[j].created_at,
      weight: currentbird_weights[j].weight,
    });
  }

  return (
    <SingleBirdPageWrapper>
      <Nav />
      <DeleteBird onClick={deleteBird}> Delete Bird </DeleteBird>
      <SingleBirdContainer key={currentbird_id}>
        <SingleBirdWrapper>
          <ImageWrapper>
            <SingleBirdImage src={currentbird_img} />
          </ImageWrapper>
          <SingleBirdContent>
            <SingleBirdName>{currentbird_name}</SingleBirdName>
            <SingleBirdSpecies>
              Species: {currentbird_species}
            </SingleBirdSpecies>
            <SingleBirdSex>Sex: {currentbird_sex}</SingleBirdSex>
            <SingleBirdWeight>
              {/* Will be using calculated average weight */}
              Average Weight: {stats.avg_weight}g
            </SingleBirdWeight>
          </SingleBirdContent>
        </SingleBirdWrapper>

        <AnalysisContainer>
          <StatsContainer>
            <StatsWrapper>
              <Statsdetail>Average Weight: {stats.avg_weight}g</Statsdetail>
              <Statsdetail>Minimum Weight: {stats.min_weights}g</Statsdetail>
              <Statsdetail>Maximum Weight: {stats.max_weights}g</Statsdetail>
              <Statsdetail>Median Weight: {stats.median_weights}g</Statsdetail>
              <Statsdetail>Weight Deviation: {stats.weights_dev}g</Statsdetail>
            </StatsWrapper>
          </StatsContainer>

          <VisualContainer>
            <ChartContainer>
              {LineActive ? (
                <LineChart data={bardetails} />
              ) : (
                <BarChart data={bardetails} />
              )}
            </ChartContainer>

            {LineActive ? (
              <ChartChangeH1Bar LineActive onClick={() => setLineActive(false)}>
                Bar Chart
              </ChartChangeH1Bar>
            ) : (
              <ChartChangeH1Line LineActive onClick={() => setLineActive(true)}>
                Line Chart
              </ChartChangeH1Line>
            )}
          </VisualContainer>
        </AnalysisContainer>
      </SingleBirdContainer>

      <Backbutton onClick={() => history.goBack()}> Back </Backbutton>
      <ViewEntries
        to={`/birds/${currentbird_name}/${currentbird_id}/${currentbird_species}/entries`}
      >
        View Entries
      </ViewEntries>
    </SingleBirdPageWrapper>
  );
}

export default SingleBird;
