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
import { submitAlterarParadAction } from "./actions/alterarParadAction";

const AlterarParadFormFunc = (props) => {
  const { handleSubmit } = props;
  const submit = (data, submitAlterarParadAction) => {
    submitAlterarParadAction(data);
  };
  return (
    <center>
      <form
        onSubmit={handleSubmit((fields) => submit(fields, submitAlterarParadAction))}
      >
        <label>Id: </label>
        <Field type="numeric" component="input" name="_id"></Field>
        <label>Nome do Paradigma: </label>
        <Field type="text" component="input" name="nomeParad"></Field>
        <label>Caracteristica: </label>
        <Field type="text" component="input" name="caracteristica"></Field>
        <br></br>
        <div class="btn-enviar">
          <Button center label="Alterar" type="Submit" />
        </div>
      </form>
    </center>
  );
};

const AlterarParadForm = reduxForm({
  form: "formLing",
})(AlterarParadFormFunc);

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, { submitAlterarParadAction })(AlterarParadForm);
