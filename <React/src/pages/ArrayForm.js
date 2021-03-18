import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const renderLinguagens = ({ fields, meta: { error, submitFailed } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>
        Add Paradigma
      </button>
      {submitFailed && error && <span>{error}</span>}
    </li>
    {fields.map((linguagens, index) => (
      <li key={index}>
        <button type="button" onClick={() => fields.remove(index)}>
          Remover Paradigma
        </button>
        <h4>Paradigma #{index + 1}</h4>
        <Field
          name={`${linguagens}.paradigmas`}
          type="text"
          component={renderField}
          label="Paradigmas"
        ></Field>
      </li>
    ))}
  </ul>
);

const ArrayForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <FieldArray name="linguagens" component={renderLinguagens} />
      <div>
        <button type="submit" disabled={submitting}>
          Enviar
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Limpar tudo
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "ArrayForm",
})(ArrayForm);
