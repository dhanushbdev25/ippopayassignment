import React, { useState } from "react";
import "./App.css";
import { Grid, TextField, Button } from "@mui/material";

function App() {
  const [apiData, setApiData] = useState({
    userName: "",
    emailId: "",
    password: "",
    address: "",
  });
  //function to handle change in textfields
  const handleChangeData = (key: any, value: any) => {
    setApiData((prevState) => ({ ...prevState, [key]: value }));
  };
  //post function
  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    console.log(apiData);
    let result = await fetch("http://localhost:4000/register", {
      method: "post",
      body: JSON.stringify(apiData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result) {
      alert(`Data saved succesfully ${apiData}`);
      setApiData({
        userName: "",
        emailId: "",
        password: "",
        address: "",
      });
    } else {
      alert(`Failed to save data ${result}`);
    }
  };
  return (
    <div className="App-header">
      <Grid container justifyContent="center" alignItems="center">
        <Grid
          item
          xs={6}
          style={{
            border: "3px grey solid",
            borderRadius: "10px",
          }}
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
            style={{ margin: "2%" }}
          >
            <Grid item xs={6}>
              User Name:
            </Grid>
            <Grid item xs={6}>
              <TextField
                sx={{ input: { color: "white" } }}
                variant="outlined"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  handleChangeData("userName", event?.target.value);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              Email ID:
            </Grid>
            <Grid item xs={6}>
              <TextField
                sx={{ input: { color: "white" } }}
                variant="outlined"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  handleChangeData("emailId", event?.target.value);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              Password:
            </Grid>
            <Grid item xs={6}>
              <TextField
                sx={{ input: { color: "white" } }}
                variant="outlined"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  handleChangeData("password", event?.target.value);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              Address:
            </Grid>
            <Grid item xs={6}>
              <TextField
                sx={{ input: { color: "white" } }}
                variant="outlined"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  handleChangeData("address", event?.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <Button variant="contained" onClick={handleOnSubmit}>
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
