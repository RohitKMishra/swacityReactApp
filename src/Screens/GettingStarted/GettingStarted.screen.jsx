import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import {
  Step,
  FormControl,
  Paper,
  Container,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";
import styled from "styled-components";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Add Country", "Add State", "Add District", "Add City"];
}

const countries = [
  "Algeria",
  "Belgium",
  "Cuba",
  "Canada",
  "Denmark",
  "France",
  "India",
  "Japan",
  "Malasiya",
  "USA",
];

export default function GettingStarted() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [state, setState] = useState({
    countryName: "",
    cityName: "",
    stateName: "",
    districtName: "",
    personalDetails: "",
  });

  const [country, setCountry] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (e) => setCountry(e.target.value);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = (attr) => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const onChange = (e) => {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;
    setState((state) => ({
      ...state,
      [name]: value,
    }));
  };
  console.log(activeStep);
  return (
    <Container>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Paper elevation={3} style={{ width: "50vw", padding: "20px" }}>
          {activeStep === 0 ? (
            <FormControl
              className={classes.root}
              noValidate
              autoComplete="off"
              fullWidth
            >
              <InputLabel id="select-country">Country</InputLabel>
              <Select
                open={open}
                value={country}
                onClose={handleClose}
                onOpen={handleOpen}
                onChange={handleChange}
                id="select-country"
              >
                {countries.map((country) => (
                  <MenuItem key={country} value={country}>
                    {country}
                  </MenuItem>
                ))}
              </Select>

              {/* <TextField
                id='standard-basic'
                label='Country name'
                name='countryName'
                onChange={onChange}
              /> */}
            </FormControl>
          ) : null}

          {activeStep === 1 ? (
            <FormControl
              className={classes.root}
              noValidate
              autoComplete="off"
              fullWidth
            >
              <TextField
                id="standard-basic"
                label="State name"
                name="stateName"
                onChange={onChange}
              />
            </FormControl>
          ) : null}
          {activeStep === 2 ? (
            <FormControl
              className={classes.root}
              noValidate
              autoComplete="off"
              fullWidth
            >
              <TextField
                id="standard-basic"
                label="State name"
                name="stateName"
                onChange={onChange}
              />
            </FormControl>
          ) : null}

          {activeStep === 3 ? (
            <FormControl
              className={classes.root}
              noValidate
              autoComplete="off"
              fullWidth
            >
              <TextField
                id="standard-basic"
                label="District name"
                name="districtName"
                onChange={onChange}
              />
            </FormControl>
          ) : null}

          <ControllerWrapper>
            {activeStep === steps.length - 1 ? (
              <>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                <Button onClick={handleReset} className={classes.button}>
                  <Link to="/">Finish</Link>
                </Button>
              </>
            ) : (
              <>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </>
            )}
          </ControllerWrapper>
        </Paper>
      </div>
    </Container>
  );
}

const ControllerWrapper = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
`;
const FormInputWrapper = styled.div``;
