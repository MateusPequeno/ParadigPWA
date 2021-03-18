import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import "../App.css";
import React, { Component } from "react";
import { Button } from "primereact/button";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { submitInserirParadAction } from "./actions/inserirParadAction.js";

const InserirParadFunc = (props) => {
  const { handleSubmit } = props;
  const submit = (data, submitInserirParadAction) => {
    submitInserirParadAction(data);
  };
  return (
    <center>
      <br></br>
      <br></br>
      <form
        onSubmit={handleSubmit((fields) =>
          submit(fields, submitInserirParadAction)
        )}
      >
        <label>Nome do Paradigma: </label>
        <Field type="text" component="input" name="nomeParad"></Field>
        <label>Caracteristica: </label>
        <Field type="text" component="input" name="caracteristica"></Field>
        <br></br>
        <div class="btn-enviar">
          <Button center label="Inserir" type="Submit" />
        </div>
      </form>
    </center>
  );
};

const InserirParadForm = reduxForm({
  form: "formLing",
})(InserirParadFunc);

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, { submitInserirParadAction })(
  InserirParadForm
);
