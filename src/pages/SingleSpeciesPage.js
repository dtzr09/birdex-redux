import React, { useState } from "react";
import { useHistory } from "react-router";
import Members from "../components/Members/Members";
import Nav from "../components/Navbar/Nav";
import {
  Button,
  Modal,
  Input,
  Form,
  TextArea,
  Image,
  Dropdown,
} from "semantic-ui-react";

import {
  SingleSpeciesContainer,
  SingleSpeciesWrapper,
  SingleSpeciesContent,
  SingleSpeciesName,
  SingleSpeciesImage,
  SingleSpeciesDescription,
  SingleSpeciesPageWrapper,
  DeleteButton,
} from "./SingleSpeciesPageStyle";
import { useDispatch, useSelector } from "react-redux";
import { deleteSpecies, updateSpecies } from "../feature/SpeciesSlice";
import { addBird } from "../feature/BirdsSlice";

function SingleSpeciesPage({ match }) {
  const dispatch = useDispatch();
  const history = useHistory();

  // Pulling state from store
  const species = useSelector((state) => state.species);
  const birds = useSelector((state) => state.birds);

  // Retrieving name from URL params
  const currentspecies = match.params.name;

  let i;
  let currentspecies_desc,
    currentspecies_id,
    currentspecies_img,
    currentspecies_name;

  // Matching the name on URL with name in the store
  for (i = 0; i < species.length; i++) {
    if (species[i].name === currentspecies) {
      currentspecies_id = species[i].id;
      currentspecies_desc = species[i].description;
      currentspecies_img = species[i].img;
      currentspecies_name = species[i].name;
    }
  }

  const [open, setOpen] = useState(false);

  // Delete species
  const handleDeleteClick = () => {
    dispatch(deleteSpecies({ name: currentspecies_name }));
    history.push("/birdex-redux");
  };

  // Updating species
  const [Description, setNewDescription] = useState("");
  const [Img, setNewImg] = useState("");

  const updatedSpecies = {
    id: currentspecies_id,
    name: currentspecies_name,
    description: Description,
    img: Img,
  };
  const HandleUpdate = () => {
    if (Description === "") {
      setNewDescription(currentspecies_desc);
    } else if (Img === "") {
      setNewImg(currentspecies_img);
    } else {
      dispatch(updateSpecies(updatedSpecies));
      history.go(0);
    }
  };

  // //If description is null or img is null, set it to the previous value
  // const HandleUpdate = async() => {
  //   if (Description === "" ){
  //     setNewDescription(family.speciesdesc)
  //   } else if (Img === "") {
  //     setNewImg(family.speciesimg)
  //   } else {
  //     onSubmitUpdate()
  //     history.push(`/species/${family.speciesname}`)
  //   }
  // }

  // //FOR ADDING NEW BIRD TO THE CURRENT SPECIES
  // const ts = new Date();
  // const currentDate = ts.toLocaleDateString("en-US") + ' ' + ts.toLocaleTimeString("en-US")

  const [weightInput, setWeight] = useState(0);
  const [openBird, setOpenBird] = useState(false);
  const [BirdNameInput, setBirdName] = useState("");
  const [BirdImageInput, setBirdImage] = useState("");
  const [BirdSexInput, setSex] = useState("");

  //For the input field for weight
  const options = [
    { key: "integer", text: "integer", value: "integer" },
    { key: "decimals", text: "decimals", value: "decimals" },
  ];

  let j, k;
  let birdList = [];
  for (k = 0; k < birds.length; k++) {
    if (birds[k].species === currentspecies_name) {
      birdList.push(birds[k].name);
    }
  }

  const CheckValid = () => {
    for (j = 0; j < birdList.length; j++) {
      if (
        birdList[j] === BirdNameInput ||
        BirdNameInput === "" ||
        BirdImageInput === "" ||
        weightInput === 0 ||
        BirdSexInput.toUpperCase() !== ("M" || "F")
      ) {
        setBirdName("");
        setBirdImage("");
        setSex("");
        setWeight(0);
        return false;
      } else {
        return true;
      }
    }
  };

  const HandleBird = () => {
    dispatch(
      addBird({
        id: Math.random(),
        speciesId: currentspecies_id,
        name: BirdNameInput,
        sex: BirdSexInput.toUpperCase(),
        species: currentspecies_name,
        img: BirdImageInput,
        weight: weightInput,
      })
    );
    setOpenBird(!openBird);
    history.go(0);
  };

  const HandleAddBird = () => {
    CheckValid()
      ? HandleBird()
      : alert(
          "ERROR: Either bird name already exists, there are blank input fields or weight input is invalid."
        );
  };

  return (
    <SingleSpeciesPageWrapper>
      <Nav />
      <DeleteButton onClick={handleDeleteClick}>Delete Species</DeleteButton>
      <SingleSpeciesContainer key={currentspecies_id}>
        <SingleSpeciesWrapper>
          <SingleSpeciesImage src={currentspecies_img} />
          <SingleSpeciesContent>
            <SingleSpeciesName>{currentspecies_name}</SingleSpeciesName>
            <SingleSpeciesDescription>
              {currentspecies_desc}
            </SingleSpeciesDescription>
          </SingleSpeciesContent>
        </SingleSpeciesWrapper>
        <button
          className="AddBirdButton"
          onClick={() => setOpenBird(!openBird)}
        >
          Add New Bird
        </button>

        {currentspecies_id !== null &&
        currentspecies_name !== null &&
        currentspecies_img !== null ? (
          <Members id={currentspecies_id} />
        ) : null}
      </SingleSpeciesContainer>

      {/* MODAL TO UPDATE SPECIES*/}
      <Modal
        size={"large"}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Button
            className="update--showmodal--button"
            style={{
              position: "absolute",
              right: 0,
              margin: "130px 100px 130px 130px",
              cursor: "pointer",
              zIndex: 999,
            }}
          >
            Update Species
          </Button>
        }
      >
        <Modal.Header>Update Species</Modal.Header>
        <Modal.Content image>
          <Image size="large" src={Img} wrapped />
          <Modal.Description
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <Form>
              <TextArea
                placeholder="Enter description"
                defaultValue={currentspecies_desc || Description}
                onChange={(e) => setNewDescription(e.target.value)}
                style={{ marginBottom: "30px", height: "150px", width: "100%" }}
              />
            </Form>
            <Input
              placeholder="Enter Image Address"
              defaultValue={currentspecies_img || Img}
              onChange={(e) => setNewImg(e.target.value)}
            />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            content="Update"
            labelPosition="right"
            icon="checkmark"
            onClick={HandleUpdate}
            positive
          />
        </Modal.Actions>
      </Modal>

      {/* Modal TO ADD NEW BIRD*/}
      <Modal
        onClose={() => setOpenBird(false)}
        onOpen={() => setOpenBird(true)}
        open={openBird}
      >
        <Modal.Header>Add New Bird</Modal.Header>
        <Modal.Content image>
          <Image size="large" src={BirdImageInput} wrapped />
          <Modal.Description
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px",
              width: "100%",
              maxWidth: "350px",
              marginLeft: "20px",
            }}
          >
            <Input
              placeholder="Name"
              type="text"
              value={BirdNameInput}
              onChange={(e) => setBirdName(e.target.value)}
              style={{ marginBottom: "20px" }}
            />

            <Input
              placeholder="Sex"
              type="text"
              value={BirdSexInput}
              onChange={(e) => setSex(e.target.value)}
              style={{ marginBottom: "20px" }}
            />

            <Input
              placeholder="Image Address"
              type="text"
              value={BirdImageInput}
              onChange={(e) => setBirdImage(e.target.value)}
            />

            <Input
              type="number"
              label={<Dropdown defaultValue="int" options={options} />}
              labelPosition="right"
              placeholder="Enter weight"
              value={weightInput}
              onChange={(e) => setWeight(e.target.value)}
              style={{ marginTop: "20px" }}
            />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            content="Add"
            labelPosition="right"
            icon="checkmark"
            onClick={HandleAddBird}
            positive
          />
        </Modal.Actions>
      </Modal>
    </SingleSpeciesPageWrapper>
  );
}

export default SingleSpeciesPage;
