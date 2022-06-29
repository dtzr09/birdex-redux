import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button, TextArea, Image, Modal, Input, Form } from "semantic-ui-react";
import { addSpecies } from "../../feature/SpeciesSlice";
import {
  NavContainer,
  NavTitle,
  AddSpeciesButton,
  PlusIcon,
} from "./NavStyles";

function Nav() {
  const species = useSelector((state) => state.species);
  const dispatch = useDispatch();

  let url = window.location.pathname;

  //ADD NEW SPECIES
  const [open, setOpen] = useState(false);
  const [Nameinput, setName] = useState("");
  const [Descriptioninput, setDescription] = useState("");
  const [imageinput, setImage] = useState("");

  let i = 0;
  const CheckExist = () => {
    for (i; i < species.length; i++) {
      if (species[i].name === Nameinput) {
        setName("");
        setDescription("");
        setImage("");
        return false;
      } else {
        return true;
      }
    }
  };

  const NewSpecies = () => {
    dispatch(
      addSpecies({
        name: Nameinput,
        description: Descriptioninput,
        img: imageinput,
      })
    );
  };

  const AddSpecies = () => {
    CheckExist() ? NewSpecies() : alert("Species Name Already Exists!");
    setOpen(!open);
  };

  return (
    <div>
      <NavContainer>
        <NavTitle to="/birdex-redux"> BirdDex </NavTitle>
        {url === "/birdex-redux" ? (
          <>
            <AddSpeciesButton onClick={() => setOpen(!open)}>
              Add new species
            </AddSpeciesButton>
            <PlusIcon onClick={() => setOpen(!open)}>+</PlusIcon>
          </>
        ) : null}
      </NavContainer>

      {/* Modal TO ADD NEW SPECIES*/}
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>Add New Species</Modal.Header>
        <Modal.Content image>
          <Image size="large" src={imageinput} wrapped />
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
              value={Nameinput}
              onChange={(e) => setName(e.target.value)}
              style={{ marginBottom: "20px" }}
            />

            <Form>
              <TextArea
                placeholder="Description"
                value={Descriptioninput}
                onChange={(e) => setDescription(e.target.value)}
                style={{ marginBottom: "20px", height: "200px" }}
              />
            </Form>

            <Input
              placeholder="Image Address"
              type="text"
              value={imageinput}
              onChange={(e) => setImage(e.target.value)}
            />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            content="Add"
            labelPosition="right"
            icon="checkmark"
            onClick={AddSpecies}
            positive
          />
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default Nav;
