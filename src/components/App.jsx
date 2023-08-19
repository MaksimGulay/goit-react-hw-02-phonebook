// import { Formik, Field, Form } from 'formik';
// import * as Yup from 'yup';
// import { nanoid } from 'nanoid';

// const schema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
// });

// const addNewContact = newContact => {
//   this.setState(prewState => {
//     return {
//       contacts: [...prewState.contacts, newContact],
//     };
//   });
//   console.log(newContact);
// };

// export const App = () => {
//   return (
//     <div>
//       <Formik
//         initialValues={{
//           contacts: [],
//           name: '',
//         }}
//         validationSchema={schema}
//         onSubmit={(values, actions) => {
//           addNewContact({ ...values, id: nanoid() });
//           actions.resetForm();
//         }}
//       >
//         <Form>
//           <h1>Phonebook</h1>
//           <label> Name</label>
//           <Field id="Name" type="tekst" name="name" />
//           <button type="submit">Add contact</button>
//         </Form>
//       </Formik>
//       <div>
//         <h2>Contacts</h2>
//         <ul></ul>
//       </div>
//     </div>
//   );
// };

import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addNewContact = newContact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
    console.log(newContact);
  };

  render() {
    return (
      <div>
        <Formik
          initialValues={{
            name: '',
          }}
          validationSchema={schema}
          onSubmit={(values, actions) => {
            const newContact = { ...values, id: nanoid() };
            this.addNewContact(newContact);
            actions.resetForm();
          }}
        >
          {() => (
            <Form>
              <h1>Phonebook</h1>
              <label>Name</label>
              <Field id="name" type="text" name="name" />
              <button type="submit">Add contact</button>
            </Form>
          )}
        </Formik>
        <div>
          <h2>Contacts</h2>
          <ul>
            {this.state.contacts.map(contact => (
              <li key={contact.id}>{contact.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
