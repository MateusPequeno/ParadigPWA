import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import "../App.css";
import React from "react";
import { Button } from "primereact/button";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { submitDeleteParadAction } from "./actions/deleteParadAction";

const DeleteParadFormFunc = (props) => {
  const { handleSubmit } = props;
  const submit = (data, submitDeleteParadAction) => {
    submitDeleteParadAction(data);
  };
  return (
    <center>
      <form onSubmit={handleSubmit((fields) =>
          submit(fields, submitDeleteParadAction))}>
        {" "}
        <label>Id: </label>
        <Field type="numeric" component="input" name="_id"></Field>
        <div class="btn-enviar">
          <Button center label="Deletar" type="Submit" />
        </div>
      </form>
    </center>
  );
};
const DeleteParadForm = reduxForm({
  form: "formDelete",
})(DeleteParadFormFunc);

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, { submitDeleteParadAction })( DeleteParadForm);
