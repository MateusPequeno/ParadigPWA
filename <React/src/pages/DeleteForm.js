import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import "../App.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import api from "../api";
import { submitDeleteAction } from "./actions/deleteAction";

const DeleteFormFunc = (props) => {
  const { handleSubmit } = props;
  const submit = (data, submitDeleteAction) => {
    submitDeleteAction(data);
  };
  return (
    <center>
      <form
        onSubmit={handleSubmit((fields) => submit(fields, submitDeleteAction))}
      >
        {" "}
        <label>Id: </label>
        <Field type="numeric" component="input" name="_id"></Field>
        <div class="btn-enviar">
          <br></br>
          <Button center label="Deletar" type="Submit" />
        </div>
      </form>
    </center>
  );
};

const DeleteForm = reduxForm({
  form: "formDelete",
})(DeleteFormFunc);

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, { submitDeleteAction })(DeleteForm);
