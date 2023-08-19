import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const schema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.number().typeError('Must be a number').required('Required'),
  });

export const ContactForm = ({addNewContact}) => {
    return (
        <Formik
          initialValues={{
            name: '',
            number: '',
          }}
          validationSchema={schema}
          onSubmit={(values, actions) => {
            const newContact = { ...values, id: nanoid() };
            addNewContact(newContact);
            actions.resetForm();
            actions.setSubmitting(false);
          }}
        >
          {() => (
            <Form>
              <label>Name</label>
              <Field id="name" type="text" name="name" />
              <label>Number</label>
              <Field id="number" type="text" name="number" />
              <button type="submit">Add contact</button>
            </Form>
          )}
        </Formik>
    )
}