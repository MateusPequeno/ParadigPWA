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
import { submitAlterarAction } from "./actions/alterarAction";

const AlterarFormFunc = (props) => {
  const { handleSubmit } = props;
  const submit = (data, submitAlterarAction) => {
    submitAlterarAction(data);
  };
  return (
    <center>
      <form
        onSubmit={handleSubmit((fields) => submit(fields, submitAlterarAction))}
      >
        <label>Id: </label>
        <Field type="numeric" component="input" name="_id"></Field>
        <label>Nome: </label>
        <Field type="text" component="input" name="nome"></Field>
        <label>Caracteristica: </label>
        <Field type="text" component="input" name="caracteristica"></Field>
        <label>Paradigmas: </label>
        <Field type="text" component="input" name="paradigmas"></Field>
        <br></br>
        <div class="btn-enviar">
          <Button center label="Alterar" type="Submit" />
        </div>
      </form>
    </center>
  );
};

const AlterarForm = reduxForm({
  form: "formLing",
})(AlterarFormFunc);

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, { submitAlterarAction })(AlterarForm);
