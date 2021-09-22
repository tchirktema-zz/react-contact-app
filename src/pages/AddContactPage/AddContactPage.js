import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useFormik } from "formik";


const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "Firstname is required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Lastname is required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.phone) {
    errors.phone = "Phone is required";
  } else if (!/[0-9]{0,14}$/i.test(values.phone)) {
    errors.phone = "Invalid phone ";
  }

  return errors;
};

const AddContactPage = (props) => {
  const [isSubmited, setIsSubmited] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
    },
    validate,
    onSubmit: (values) => {
      if (props.createContact) {
        props.createContact(values);
        isSubmitedForm();
        formik.resetForm()
      }
    },
    resetForm : () => {},
  });

  const isSubmitedForm = () => {
    setIsSubmited(true);
  }
  return (
    <div>
      <Link to="/" className="close-create-contact" />
      <form onSubmit={formik.handleSubmit} className="create-contact-form">
        <div className="create-contact-details">
          {isSubmited ? <div className="alert success">
            <span className="closebtn">&times;</span>
            <strong>Success!</strong> A contact successfully added
          </div> : null}
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="error-message">{formik.errors.firstName}</div>
          ) : null}
          <input
            id="firstName"
            name="firstName"
            placeholder="Firstname"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />

          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="error-message">{formik.errors.lastName}</div>
          ) : null}

          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Lastname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />

          {formik.touched.phone && formik.errors.phone ? (
            <div className="error-message">{formik.errors.phone}</div>
          ) : null}

          <input
            id="phone"
            name="phone"
            placeholder="Phone"
            type="tel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />

          <button type="submit">Add contact</button>
        </div>
      </form>
    </div>
  );

}
export default AddContactPage 