import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import {
  FormikForm,
  FormContainer,
  Label,
  Input,
  SubmitButton,
  ErrorText,
  StyledErrorMessage,
} from './contactForm-style';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Invalid phone number format')
    .required('Required'),
});

export const ContactForm = ({ addNewContact }) => {
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
        <FormContainer>
          <FormikForm>
            <Label>Name</Label>
            <Input id="name" type="text" name="name" placeholder="Остап" />
            <ErrorText>
              <StyledErrorMessage name="name" />
            </ErrorText>
            <Label>Number</Label>
            <Input
              id="number"
              type="text"
              name="number"
              placeholder="123-45-67"
            />
            <ErrorText>
              <StyledErrorMessage name="number" />
            </ErrorText>
            <SubmitButton type="submit">Add contact</SubmitButton>
          </FormikForm>
        </FormContainer>
      )}
    </Formik>
  );
};
