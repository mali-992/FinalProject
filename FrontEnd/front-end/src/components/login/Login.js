import { Formik, Form, Field, ErrorMessage } from "formik";
import {Link } from "react-router-dom";
export default function Login(props) {
    const login=(values)=>{

    }
    return (<>
        <div className="container">
            <div className="row justify-content-lg-center">
                <div className="col col-lg-6">
                    <h1>Login</h1>
                    <Formik
                        initialValues={{ userName: "", password: "" }}
                        onSubmit={login}
                        // validationSchema={loginSchema}
                    >
                        <Form>
                            <div className="form-group">
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="email"
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
                            <button type="submit" className="btn btn-primary">
                                login
                            </button>
                        </Form>
                    </Formik>
                    {/* <ErrorAlert
                       // isFail={authFaild}
                        content={"Incorrect username or password"}
                    /> */}
                    <Link to="/signup">sign up</Link>
                </div>
            </div>
        </div>
    </>)
}