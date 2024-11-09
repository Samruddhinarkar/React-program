import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function BasicFormic() {
  const formik = useFormik({
    initialValues: {
      username: "",
      name: "",
      email: "",
    },

    validationSchema: Yup.object({
      username: Yup.string()
        .max(10, "username must be less than and equal to 10 characters")
        .required("this field  required"),
      name: Yup.string()
        .max(10, "username must be less than and equal to 10 characters")
        .required("this field  required"),
      email: Yup.string().email("Incorrect email").required("this.required"),
      status: Yup.string()
        .max(10, "username must be less than and equal to 10 characters")
        .required("this field  required"),
    }),

    onSubmit: (values) => {
      console.log("form Sumbmitted", values);
    },
  });
  console.log(formik.errors);

  return (
    <div>
      <h1>
        Example heading
        <Badge bg="secondary btn" as={Button}>
          New
        </Badge>
      </h1>
      <div className="card col-md-10 ">
        <form onSubmit={formik.handleSubmit}>
          <div className="col-md-10  my-3">
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="username"
              onChange={formik.handleChange}
              value={formik.values.username}
              onBlur={formik.handleBlur}
            />
            {formik.touched.username && formik.errors.username && (
              <span style={{ color: "red" }}>{formik.errors.username} </span>
            )}
          </div>
          <div className="col-md-10 my-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
             {formik.touched.username && formik.errors.username && (
            //   <p style={{ color: "red" }}>{formik.errors.username}</p>
              <span style={{ color: "red" }}>{formik.errors.username} </span>
            )}
          </div>

          <div className="col-md-10 my-3">
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
             {formik.touched.email && formik.errors.email && (
            //   <p style={{ color: "red" }}>{formik.errors.username}</p>
              <span style={{ color: "red" }}>{formik.errors.username} </span>
            )}
          </div>
          <div className="col-md-10 ">
            <span>Your Status</span>
            <input
              type="radio"
              className="form-check-input"
              onBlur={formik.handleBlur}
              name="status"
              onChange={formik.handleChange}
              value="Male"
            />
            <label htmlFor="">Male</label>

            <input
              type="radio"
              className="form-check-input"
              name="status"
              onChange={formik.handleChange}
              value="Female"
            />
            <label htmlFor="">Female</label>
            {formik.touched.username && formik.errors.username && (
            //   <p style={{ color: "red" }}>{formik.errors.username}</p>
              <span style={{ color: "red" }}>{formik.errors.status} </span>
            )}
          </div>
          <div className="col-md-12 my-3">
            <select
              name="code"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-select"
            >
              <option value="">select code</option>
              <option> HTML</option>
              <option> CSS</option>
              <option> JS</option>
            </select>
            {formik.touched.username && formik.errors.username && (
            //   <p style={{ color: "red" }}>{formik.errors.username}</p>
              <span style={{ color: "red" }}>{formik.errors.code} </span>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <br></br>
        </form>
      </div>
    </div>
  );
}

export default BasicFormic;
