import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
export default function Signup() {
    const signupvalidationSchema = Yup.object().shape({
        firstName: Yup.string().required("This field is require"),
        lastName:Yup.string().required("This field is require"),
        email: Yup.string().required("This field is require").email("invalid email"),
        password: Yup.string()
          .required("This field is require")
          .min(6, "minimum length is 6"),
        houseNumber:Yup.number().required("this field is require").min(1,"Invalid house number")
      });
    return (
        <>
            <div className="container">
                <div className="row justify-content-lg-center">
                    <div className="col col-lg-6">
                    <h1>Signup</h1>
                        <Formik
                            initialValues={{ firstName: '',lastName:'', password: '', gender: '' }}
                        //  onSubmit={login}
                        validationSchema={signupvalidationSchema}
                        >
                            <Form>
                                <div className="form-group">
                                    <Field
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="firstName"
                                        component="div"
                                        className="alert alert-danger"
                                    />
                                </div>

                                <div className="form-group">
                                    <Field
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="lastName"
                                        component="div"
                                        className="alert alert-danger"
                                    />
                                </div>
                                <div className="form-group">
                                    <Field
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="alert alert-danger"
                                    />
                                </div>
                                <div className="form-group">
                                    <Field
                                        type="text"
                                        name="phone"
                                        placeholder="Phone"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="Phone"
                                        component="div"
                                        className="alert alert-danger"
                                    />
                                </div>

                                <div className="form-group">
                                    <Field
                                        type="password"
                                        name="password"
                                        placeholder="password"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="password"
                                        component="div"
                                        className="alert alert-danger"
                                    />
                                </div>
                                <div className="form-group">
                                    <Field
                                        type="number"
                                        name="houseNumber"
                                        placeholder="House Number"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="houseNumber"
                                        component="div"
                                        className="alert alert-danger"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>
                                        <Field
                                            type="radio"
                                            name="gender"
                                            value="man"
                                        />
                                        גבר
                                    </label>
                                    <label>
                                        <Field
                                            type="radio"
                                            name="gender"
                                            value="woman"
                                        />
                                        אשה</label>
                                </div>
                            </Form>
                        </Formik>
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
