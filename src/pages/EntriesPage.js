import React, { useEffect, useState } from "react";
import Nav from "../components/Navbar/Nav";
import { Icon, Button, Modal, Input, Dropdown } from "semantic-ui-react";
import "./EntriesPageStyles.css";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addWeights } from "../feature/EntriesSlice";

function EntriesPage({ match }) {
  const allEntries = useSelector((state) => state.birds);
  const [currentEntries, setcurrentEntries] = useState();
  const dispatch = useDispatch();

  const ts = new Date();
  const history = useHistory();

  useEffect(() => {
    const getBirdEntries = () => {
      allEntries.map((bird) => {
        if (
          bird.name === match.params.birdName &&
          bird.species === match.params.species_name
        ) {
          setcurrentEntries(bird.weights);
        }
      });
    };

    getBirdEntries();
  }, []);

  //State of modal that adds new entry
  const [open, setOpen] = useState(false);
  const [weightInput, setWeight] = useState(0);
  const currentDate =
    ts.toLocaleDateString("en-US") + " " + ts.toLocaleTimeString("en-US");

  //State of modal that updates entry
  const [open2, setOpen2] = useState(false);
  const [newWeight, setnewWeight] = useState("");

  //Function to add new entries
  const newEntries = async () => {
    if (weightInput <= 0) {
      alert("Incorrect Weight Value!");
      setWeight(0);
    } else {
      dispatch(
        addWeights({
          weight: weightInput,
          species_name: match.params.species_name,
          name: match.params.birdName,
        })
      );
      console.log(currentEntries);
      // history.go(0);
    }
  };

  const sendEntry = () => {
    setOpen(false);
    newEntries();
  };

  // DISPLAYING ALL ENTRIES JSX

  //For the input field for weight
  const options = [
    { key: "integer", text: "integer", value: "integer" },
    { key: "decimals", text: "decimals", value: "decimals" },
  ];

  const table = () => {
    return (
      <div className="TableContainer">
        <div className="HeaderContainer">
          <div>
            <p>TimeStamp</p>
          </div>
          <div>
            <p>Weight</p>
          </div>
          <div>
            <p>Edit</p>
          </div>
          <div>
            <p>Delete</p>
          </div>
        </div>
        <div className="allEntriesContainer">
          {currentEntries?.map((details, index) => {
            return (
              <div className="EntryContainer" key={details.index}>
                <div>
                  <p>{details.created_at}</p>
                </div>
                <div>
                  <p>{details.weight}g</p>
                </div>
                <div>
                  <Icon
                    className="edit-button"
                    name="edit"
                    size="large"
                    color="green"
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <div>
                  <Icon
                    className="delete-button"
                    name="delete"
                    size="large"
                    color="red"
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="EntriesContainer">
      <Nav />
      <div className="EntriesWrapper">
        <div>{table()}</div>
      </div>

      {/* Modal To Add New Entry*/}
      <Modal
        size={"tiny"}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button className="showmodal--button">Add New Entry</Button>}
      >
        <Modal.Header>Add New Entry</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Input
              label={<Dropdown defaultValue="int" options={options} />}
              labelPosition="right"
              placeholder="Enter weight"
              value={weightInput}
              onChange={(e) => setWeight(e.target.value)}
            />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            content="Add"
            labelPosition="right"
            icon="checkmark"
            onClick={sendEntry}
            positive
          />
        </Modal.Actions>
      </Modal>

      {/* Modal To Update Entry */}
      <Modal
        size={"tiny"}
        onClose={() => setOpen2(false)}
        onOpen={() => setOpen2(true)}
        open={open2}
      >
        <Modal.Header> Edit Entry</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Input
              label={<Dropdown defaultValue="int" options={options} />}
              labelPosition="right"
              placeholder="Enter weight"
              value={newWeight}
              onChange={(e) => setnewWeight(e.target.value)}
            />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            content="Add"
            labelPosition="right"
            icon="checkmark"
            positive
          />
        </Modal.Actions>
      </Modal>

      <Button
        onClick={() => history.goBack()}
        content="Back"
        icon="left arrow"
        labelPosition="left"
      />
    </div>
  );
}

export default EntriesPage;
