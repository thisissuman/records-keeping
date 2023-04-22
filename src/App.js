import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Stack from "@mui/material/Stack";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [form, setForm] = useState([]);

  function getName(element) {
    setName(element.target.value);
  }

  function getEmail(element) {
    setEmail(element.target.value);
  }

  const onsubmitChangeHandeler = (e) => {
    setForm([
      ...form,
      {
        name: name,
        email: email,
      },
    ]);

    setName("");
    setEmail("");
  };

  const onClickRemoveHandeler = (index) => {
    let arr = form;
    arr.splice(index,1)
    setForm([...arr])
  };
  const Fields = form.map((element, index) => {
    return (
      <div key={index} className="data_1">  
        <h4>{element.name}</h4>
        <h4>{element.email}</h4>
        <Button variant="contained" color="error" onClick={() => onClickRemoveHandeler(index)}>
          <AddCircleIcon>
            <h4>Remove</h4>
          </AddCircleIcon>
        </Button>
      </div>
    );
  });

  return (
    <div className="App">
      <Header></Header>
      <div className="input">
        <Stack spacing={2} direction="row">
          <TextField
            value={name}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onInput={getName}
          />
          <TextField
            value={email}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onInput={getEmail}
          />

          <Button
            variant="contained"
            color="success"
            onClick={onsubmitChangeHandeler}
          >
            <AddCircleIcon></AddCircleIcon>
          </Button>
        </Stack>
      </div>
      <div className="data">
        <div className="data_1">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {Fields}
      </div>
    </div>
  );
}

export default App;
