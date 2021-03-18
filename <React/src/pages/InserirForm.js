import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import "../App.css";
import React, { Component } from "react";
import { Button } from "primereact/button";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { submitInserirAction } from "./actions/inserirAction";
import ArrayForm from "./ArrayForm";

const InserirFormFunc = (props) => {
  const { handleSubmit } = props;
  const submit = (data, submitInserirAction) => {
    submitInserirAction(data);
  };
  return (
    <form
      onSubmit={handleSubmit((fields) => submit(fields, submitInserirAction))}
    >
      <label>Nome: </label>
      <Field type="text" component="input" name="nome"></Field>
      <label>Caracteristica: </label>
      <Field type="text" component="input" name="caracteristica"></Field>
      <label>Paradigmas: </label>
      <Field type="text" component="input" name="paradigmas"></Field>
      <ArrayForm></ArrayForm>
      <br></br>
      <div class="btn-enviar">
        <Button center label="Inserir" type="Submit" />
      </div>
    </form>
  );
};

const InserirForm = reduxForm({
  form: "formLing",
})(InserirFormFunc);

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, { submitInserirAction })(InserirForm);
