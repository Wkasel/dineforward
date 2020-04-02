/* eslint-disable no-console */
import React from 'react';
import { Formik, Form } from 'formik';
import Grid from '@material-ui/core/Grid';
import { TextField } from 'formik-material-ui';

import FieldGroup from './FieldGroup';
import Button from '@material-ui/core/Button';
import stubForm from './addRestaurant.json';

const FormElements = props => {
  const { errors, form } = props;
  return form.fieldgroups.map(group => {
    return (
      <FieldGroup
        key={`group-${group}`}
        groupname={group}
        fields={form.fields.filter(field => field.group === group)}
        error={errors}
      />
    );
  });
};

const ComplexFormBuilder = props => {
  const { formAction, values, schema } = props;
  let { incomingValues } = props;
  const [form, setForm] = React.useState(schema);
  const [formFields, setFormFields] = React.useState(form);
  const [vals, setVals] = React.useState(incomingValues);

  if (!incomingValues || incomingValues === null) {
    incomingValues = Object.assign({}, ...schema.fields.map(m => ({ [m.name]: '' })));
  }

  return (
    <Grid container>
      <Grid item xs={8}>
        <Formik
          initialValues={incomingValues}
          onSubmit={formAction}
          enableReinitialize
          >
          {({ handleSubmit, isSubmitting }) => (
            <Form>
              <FormElements form={form} />
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                disabled={isSubmitting ? true : false}
              >
                Submit
              </Button>
              <Button
                type="reset"
                variant="outlined"
                color="secondary"
                disabled={isSubmitting ? true : false}
              >
                Reset
              </Button>
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
};

export default ComplexFormBuilder;
