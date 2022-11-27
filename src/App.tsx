import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/material/styles";
import { Grid, Container, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Textfield from "./components/FormsUI/Textfield";
import Select from "./components/select/Select";
import country from "./data/country.json";
import DateTimePicker from "./components/FormsUI/DateTimePicker";
import "./App.css";

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  country: "",
  arrivealDate: "",
  departureDate: "",
  message: "",
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().required("Required").email("Invalid Email."),
  phone: Yup.number()
    .integer()
    .typeError("Please enter a valid phone number")
    .required("Required"),
  addressLine1: Yup.string().required("Required"),
  addressLine2: Yup.string(),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  arrivealDate: Yup.date().required("Required."),
  departureDate: Yup.date().required("Required."),
  message: Yup.string(),
});

const App = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className="formWrapper">
            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE,
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography>Your Detailas</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="firstName" label="First Name"></Textfield>
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="lastName" label="Last Name"></Textfield>
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield name="email" label="Email"></Textfield>
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield name="phone" label="Phone"></Textfield>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>Address</Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="addressLine1"
                      label="Address Line 1"
                    ></Textfield>
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="addressLine2"
                      label="Address Line 2"
                    ></Textfield>
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="city" label="City"></Textfield>
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="state" label="State"></Textfield>
                  </Grid>

                  <Grid item xs={12}>
                    <Select
                      name="country"
                      label="Country"
                      options={country}
                    ></Select>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>Booking information</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <DateTimePicker name="arrivealDate" label="Arrival Date" />
                  </Grid>

                  <Grid item xs={6}>
                    <DateTimePicker
                      name="departureDate"
                      label="Departure Date"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="message"
                      label="Message"
                      multiline={true}
                      rows={4}
                    />
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default App;
